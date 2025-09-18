// lib/contexts/PresupuestosContext.tsx
'use client';
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { EstadoPresupuestos, PresupuestosAction, PresupuestosContextType, PresupuestoGuardado, ListaPresupuestos } from '@/lib/types/presupuestos';

const PRESUPUESTOS_STORAGE_KEY = 'partfinder_presupuestos';

// Estado inicial
const initialState: EstadoPresupuestos = {
  lista: {
    presupuestos: [],
    contador: 0,
    ultimaModificacion: Date.now(),
  },
  presupuestoActual: null,
  isLoading: false,
  error: null,
};

// Función para generar número de presupuesto automático
function generarNumeroPresupuestoInterno(contador: number): string {
  const año = new Date().getFullYear();
  const numero = String(contador + 1).padStart(3, '0');
  return `P-${año}-${numero}`;
}

// Función para convertir Budget a PresupuestoGuardado
function convertirBudgetAPresupuestoGuardado(budget: any, numeroPresupuesto: string): PresupuestoGuardado {
  return {
    id: budget.id,
    numeroPresupuesto,
    clientName: budget.clientName,
    licensePlate: budget.licensePlate,
    orderNumber: budget.orderNumber,
    items: budget.items,
    totalItems: budget.totalItems,
    totalPrice: budget.totalPrice,
    estado: 'guardado',
    fechaCreacion: budget.createdAt,
    fechaModificacion: Date.now(),
  };
}

// Reducer para manejar las acciones de presupuestos
function presupuestosReducer(state: EstadoPresupuestos, action: PresupuestosAction): EstadoPresupuestos {
  switch (action.type) {
    case 'CARGAR_PRESUPUESTOS': {
      return {
        ...state,
        lista: action.payload,
        isLoading: false,
        error: null,
      };
    }

    case 'AGREGAR_PRESUPUESTO': {
      const nuevoPresupuesto = action.payload;
      const presupuestosActualizados = [...state.lista.presupuestos, nuevoPresupuesto];
      
      return {
        ...state,
        lista: {
          presupuestos: presupuestosActualizados,
          contador: state.lista.contador + 1,
          ultimaModificacion: Date.now(),
        },
        presupuestoActual: nuevoPresupuesto,
        isLoading: false,
        error: null,
      };
    }

    case 'ACTUALIZAR_PRESUPUESTO': {
      const presupuestoActualizado = action.payload;
      const presupuestosActualizados = state.lista.presupuestos.map(p =>
        p.id === presupuestoActualizado.id ? presupuestoActualizado : p
      );
      
      return {
        ...state,
        lista: {
          ...state.lista,
          presupuestos: presupuestosActualizados,
          ultimaModificacion: Date.now(),
        },
        presupuestoActual: presupuestoActualizado,
        isLoading: false,
        error: null,
      };
    }

    case 'ELIMINAR_PRESUPUESTO': {
      const presupuestosActualizados = state.lista.presupuestos.filter(p => p.id !== action.payload);
      
      return {
        ...state,
        lista: {
          ...state.lista,
          presupuestos: presupuestosActualizados,
          ultimaModificacion: Date.now(),
        },
        presupuestoActual: state.presupuestoActual?.id === action.payload ? null : state.presupuestoActual,
        isLoading: false,
        error: null,
      };
    }

    case 'CARGAR_PRESUPUESTO': {
      return {
        ...state,
        presupuestoActual: action.payload,
        isLoading: false,
        error: null,
      };
    }

    case 'LIMPIAR_PRESUPUESTO_ACTUAL': {
      return {
        ...state,
        presupuestoActual: null,
        error: null,
      };
    }

    case 'DUPLICAR_PRESUPUESTO': {
      const { original, nuevo } = action.payload;
      const presupuestosActualizados = [...state.lista.presupuestos, nuevo];
      
      return {
        ...state,
        lista: {
          presupuestos: presupuestosActualizados,
          contador: state.lista.contador + 1,
          ultimaModificacion: Date.now(),
        },
        presupuestoActual: nuevo,
        isLoading: false,
        error: null,
      };
    }

    case 'SET_LOADING': {
      return {
        ...state,
        isLoading: action.payload,
      };
    }

    case 'SET_ERROR': {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }

    default:
      return state;
  }
}

// Crear el contexto
const PresupuestosContext = createContext<PresupuestosContextType | undefined>(undefined);

// Hook personalizado para usar el contexto
export function usePresupuestos() {
  const context = useContext(PresupuestosContext);
  if (context === undefined) {
    throw new Error('usePresupuestos must be used within a PresupuestosProvider');
  }
  return context;
}

// Provider del contexto
export function PresupuestosProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(presupuestosReducer, initialState);

  // Cargar presupuestos desde localStorage al inicializar
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedPresupuestos = localStorage.getItem(PRESUPUESTOS_STORAGE_KEY);
        if (savedPresupuestos) {
          const lista: ListaPresupuestos = JSON.parse(savedPresupuestos);
          dispatch({ type: 'CARGAR_PRESUPUESTOS', payload: lista });
        }
      } catch (error) {
        console.error('Error loading presupuestos from localStorage:', error);
        dispatch({ type: 'SET_ERROR', payload: 'Error al cargar presupuestos guardados' });
      }
    }
  }, []);

  // Guardar presupuestos en localStorage cuando cambien
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(PRESUPUESTOS_STORAGE_KEY, JSON.stringify(state.lista));
      } catch (error) {
        console.error('Error saving presupuestos to localStorage:', error);
        dispatch({ type: 'SET_ERROR', payload: 'Error al guardar presupuestos' });
      }
    }
  }, [state.lista]);

  // Funciones del contexto
  const guardarPresupuesto = React.useCallback((presupuesto: PresupuestoGuardado) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    // Verificar si ya existe
    const existe = state.lista.presupuestos.find(p => p.id === presupuesto.id);
    
    if (existe) {
      dispatch({ type: 'ACTUALIZAR_PRESUPUESTO', payload: presupuesto });
    } else {
      dispatch({ type: 'AGREGAR_PRESUPUESTO', payload: presupuesto });
    }
  }, [state.lista.presupuestos]);

  const cargarPresupuesto = React.useCallback((id: string): PresupuestoGuardado | null => {
    const presupuesto = state.lista.presupuestos.find(p => p.id === id);
    if (presupuesto) {
      dispatch({ type: 'CARGAR_PRESUPUESTO', payload: presupuesto });
      return presupuesto;
    }
    return null;
  }, [state.lista.presupuestos]);

  const eliminarPresupuesto = React.useCallback((id: string) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'ELIMINAR_PRESUPUESTO', payload: id });
  }, []);

  const duplicarPresupuesto = React.useCallback((id: string) => {
    const original = state.lista.presupuestos.find(p => p.id === id);
    if (!original) return;

    const numeroNuevo = generarNumeroPresupuesto();
    const nuevo: PresupuestoGuardado = {
      ...original,
      id: `presupuesto_${Date.now()}`,
      numeroPresupuesto: numeroNuevo,
      clientName: '', // Limpiar datos del cliente
      licensePlate: '',
      orderNumber: '',
      estado: 'borrador',
      fechaCreacion: Date.now(),
      fechaModificacion: Date.now(),
    };

    dispatch({ type: 'DUPLICAR_PRESUPUESTO', payload: { original, nuevo } });
  }, [state.lista.presupuestos, state.lista.contador]);

  const generarNumeroPresupuesto = React.useCallback((): string => {
    return generarNumeroPresupuestoInterno(state.lista.contador);
  }, [state.lista.contador]);

  const obtenerPresupuestosRecientes = React.useCallback((limite: number = 5): PresupuestoGuardado[] => {
    return state.lista.presupuestos
      .sort((a, b) => b.fechaModificacion - a.fechaModificacion)
      .slice(0, limite);
  }, [state.lista.presupuestos]);

  const buscarPresupuestos = React.useCallback((termino: string): PresupuestoGuardado[] => {
    if (!termino.trim()) return state.lista.presupuestos;
    
    const terminoLower = termino.toLowerCase();
    return state.lista.presupuestos.filter(p =>
      p.clientName.toLowerCase().includes(terminoLower) ||
      p.licensePlate.toLowerCase().includes(terminoLower) ||
      p.numeroPresupuesto.toLowerCase().includes(terminoLower) ||
      (p.orderNumber && p.orderNumber.toLowerCase().includes(terminoLower))
    );
  }, [state.lista.presupuestos]);

  const exportarPresupuestos = React.useCallback((): string => {
    return JSON.stringify(state.lista, null, 2);
  }, [state.lista]);

  const importarPresupuestos = React.useCallback((datos: string): boolean => {
    try {
      const lista: ListaPresupuestos = JSON.parse(datos);
      dispatch({ type: 'CARGAR_PRESUPUESTOS', payload: lista });
      return true;
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Error al importar presupuestos' });
      return false;
    }
  }, []);

  const value: PresupuestosContextType = {
    state,
    guardarPresupuesto,
    cargarPresupuesto,
    eliminarPresupuesto,
    duplicarPresupuesto,
    generarNumeroPresupuesto,
    obtenerPresupuestosRecientes,
    buscarPresupuestos,
    exportarPresupuestos,
    importarPresupuestos,
  };

  return (
    <PresupuestosContext.Provider value={value}>
      {children}
    </PresupuestosContext.Provider>
  );
}
