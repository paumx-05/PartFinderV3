'use client';

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { Note, NotesState, NotesContextType, CreateNoteData, UpdateNoteData, NotePriority } from '@/lib/types/notes';
import { notesMock } from '@/lib/mocks/notes';

// Acciones del reducer
type NotesAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_NOTES'; payload: Note[] }
  | { type: 'ADD_NOTE'; payload: Note }
  | { type: 'UPDATE_NOTE'; payload: { id: string; data: UpdateNoteData } }
  | { type: 'DELETE_NOTE'; payload: string }
  | { type: 'TOGGLE_COMPLETE'; payload: string };

// Estado inicial
const initialState: NotesState = {
  notes: [],
  isLoading: false,
  error: null,
};

// Reducer
function notesReducer(state: NotesState, action: NotesAction): NotesState {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    
    case 'SET_NOTES':
      return { ...state, notes: action.payload };
    
    case 'ADD_NOTE':
      return { ...state, notes: [action.payload, ...state.notes] };
    
    case 'UPDATE_NOTE':
      return {
        ...state,
        notes: state.notes.map(note =>
          note.id === action.payload.id
            ? { 
                ...note, 
                ...action.payload.data, 
                fechaModificacion: new Date() 
              }
            : note
        ),
      };
    
    case 'DELETE_NOTE':
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload),
      };
    
    case 'TOGGLE_COMPLETE':
      return {
        ...state,
        notes: state.notes.map(note =>
          note.id === action.payload
            ? { 
                ...note, 
                completada: !note.completada, 
                fechaModificacion: new Date() 
              }
            : note
        ),
      };
    
    default:
      return state;
  }
}

// Crear contexto
const NotesContext = createContext<NotesContextType | undefined>(undefined);

// Hook para usar el contexto
export function useNotes(): NotesContextType {
  const context = useContext(NotesContext);
  if (context === undefined) {
    throw new Error('useNotes debe ser usado dentro de un NotesProvider');
  }
  return context;
}

// Provider del contexto
interface NotesProviderProps {
  children: ReactNode;
}

export function NotesProvider({ children }: NotesProviderProps) {
  const [state, dispatch] = useReducer(notesReducer, initialState);

  // Cargar notas desde localStorage al inicializar
  useEffect(() => {
    try {
      const savedNotes = localStorage.getItem('partfinder-notes');
      if (savedNotes) {
        const parsedNotes = JSON.parse(savedNotes).map((note: any) => ({
          ...note,
          fechaCreacion: new Date(note.fechaCreacion),
          fechaModificacion: note.fechaModificacion ? new Date(note.fechaModificacion) : undefined,
        }));
        dispatch({ type: 'SET_NOTES', payload: parsedNotes });
      } else {
        // Si no hay notas guardadas, usar datos mock para desarrollo
        dispatch({ type: 'SET_NOTES', payload: notesMock });
      }
    } catch (error) {
      console.error('Error cargando notas:', error);
      dispatch({ type: 'SET_ERROR', payload: 'Error cargando las notas' });
      // Usar datos mock como fallback
      dispatch({ type: 'SET_NOTES', payload: notesMock });
    }
  }, []);

  // Guardar notas en localStorage cuando cambie el estado
  useEffect(() => {
    if (state.notes.length > 0) {
      try {
        localStorage.setItem('partfinder-notes', JSON.stringify(state.notes));
      } catch (error) {
        console.error('Error guardando notas:', error);
        dispatch({ type: 'SET_ERROR', payload: 'Error guardando las notas' });
      }
    }
  }, [state.notes]);

  // Funciones del contexto
  const createNote = (data: CreateNoteData) => {
    const newNote: Note = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      ...data,
      fechaCreacion: new Date(),
      completada: false,
    };
    dispatch({ type: 'ADD_NOTE', payload: newNote });
  };

  const updateNote = (id: string, data: UpdateNoteData) => {
    dispatch({ type: 'UPDATE_NOTE', payload: { id, data } });
  };

  const deleteNote = (id: string) => {
    dispatch({ type: 'DELETE_NOTE', payload: id });
  };

  const toggleNoteComplete = (id: string) => {
    dispatch({ type: 'TOGGLE_COMPLETE', payload: id });
  };

  const getPendingNotesCount = (): number => {
    return state.notes.filter(note => !note.completada).length;
  };

  const getRecentNotes = (limit: number = 5): Note[] => {
    return state.notes
      .filter(note => !note.completada)
      .sort((a, b) => new Date(b.fechaCreacion).getTime() - new Date(a.fechaCreacion).getTime())
      .slice(0, limit);
  };

  const searchNotes = (query: string): Note[] => {
    const queryLower = query.toLowerCase();
    return state.notes.filter(note =>
      note.cliente.toLowerCase().includes(queryLower) ||
      note.matricula.toLowerCase().includes(queryLower) ||
      note.contenido.toLowerCase().includes(queryLower)
    );
  };

  const filterNotesByPriority = (priority: NotePriority): Note[] => {
    return state.notes.filter(note => note.prioridad === priority);
  };

  const filterNotesByStatus = (completed: boolean): Note[] => {
    return state.notes.filter(note => note.completada === completed);
  };

  const contextValue: NotesContextType = {
    state,
    createNote,
    updateNote,
    deleteNote,
    toggleNoteComplete,
    getPendingNotesCount,
    getRecentNotes,
    searchNotes,
    filterNotesByPriority,
    filterNotesByStatus,
  };

  return (
    <NotesContext.Provider value={contextValue}>
      {children}
    </NotesContext.Provider>
  );
}
