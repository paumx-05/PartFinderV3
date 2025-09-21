export type NotePriority = 'baja' | 'media' | 'alta';

export interface Note {
  id: string;
  cliente: string;
  matricula: string;
  contenido: string;
  fechaCreacion: Date;
  fechaModificacion?: Date;
  completada: boolean;
  prioridad: NotePriority;
  telefono?: string;
}

export interface CreateNoteData {
  cliente: string;
  matricula: string;
  contenido: string;
  prioridad: NotePriority;
  telefono?: string;
}

export interface UpdateNoteData {
  cliente?: string;
  matricula?: string;
  contenido?: string;
  prioridad?: NotePriority;
  telefono?: string;
  completada?: boolean;
}

export interface NotesState {
  notes: Note[];
  isLoading: boolean;
  error: string | null;
}

export interface NotesContextType {
  state: NotesState;
  createNote: (data: CreateNoteData) => void;
  updateNote: (id: string, data: UpdateNoteData) => void;
  deleteNote: (id: string) => void;
  toggleNoteComplete: (id: string) => void;
  getPendingNotesCount: () => number;
  getRecentNotes: (limit?: number) => Note[];
  searchNotes: (query: string) => Note[];
  filterNotesByPriority: (priority: NotePriority) => Note[];
  filterNotesByStatus: (completed: boolean) => Note[];
}

// Props para componentes
export interface NotesDropdownProps {
  onAbrirNuevaNota: () => void;
  onAbrirGestionNotas: () => void;
}

export interface ModalNuevaNotaProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ModalGestionNotasProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface NotaCardProps {
  note: Note;
  onToggleComplete: (id: string) => void;
  onEdit: (note: Note) => void;
  onDelete: (id: string) => void;
}
