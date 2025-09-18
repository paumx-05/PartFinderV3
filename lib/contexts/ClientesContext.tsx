'use client';

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Cliente, ClienteState, ClienteAction, ClienteContextType } from '@/lib/types/clients';

// Clave para localStorage
const CLIENTES_STORAGE_KEY = 'partfinder-clientes';

// Estado inicial
const initialState: ClienteState = {
  clientes: [],
  contador: 0,
  clienteActual: null,
  isLoading: false,
  error: null,
};

// Reducer para manejar el estado
const clientesReducer = (state: ClienteState, action: ClienteAction): ClienteState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    
    case 'LOAD_CLIENTES':
      return { ...state, clientes: action.payload };
    
    case 'ADD_CLIENTE':
      return {
        ...state,
        clientes: [...state.clientes, action.payload],
        contador: Math.max(state.contador, parseInt(action.payload.numeroCliente) + 1),
      };
    
    case 'UPDATE_CLIENTE':
      return {
        ...state,
        clientes: state.clientes.map(cliente =>
          cliente.numeroCliente === action.payload.numeroCliente ? action.payload : cliente
        ),
      };
    
    case 'DELETE_CLIENTE':
      return {
        ...state,
        clientes: state.clientes.filter(cliente => cliente.numeroCliente !== action.payload),
      };
    
    case 'SET_CLIENTE_ACTUAL':
      return { ...state, clienteActual: action.payload };
    
    case 'SET_CONTADOR':
      return { ...state, contador: action.payload };
    
    case 'CLEAR_CLIENTE_ACTUAL':
      return { ...state, clienteActual: null };
    
    default:
      return state;
  }
};

// Función para generar número de cliente automático
const generarNumeroClienteInterno = (contador: number): string => {
  return contador.toString().padStart(4, '0');
};

// Contexto
const ClientesContext = createContext<ClienteContextType | undefined>(undefined);

// Provider
export const ClientesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(clientesReducer, initialState);

  // Cargar clientes desde localStorage al inicializar
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedClientes = localStorage.getItem(CLIENTES_STORAGE_KEY);
        if (savedClientes) {
          const data = JSON.parse(savedClientes);
          dispatch({ type: 'LOAD_CLIENTES', payload: data.clientes || [] });
          dispatch({ type: 'SET_CONTADOR', payload: data.contador || 0 });
        }
      } catch (error) {
        console.error('Error loading clientes from localStorage:', error);
        dispatch({ type: 'SET_ERROR', payload: 'Error al cargar clientes' });
      }
    }
  }, []);

  // Guardar clientes en localStorage cuando cambie el estado
  useEffect(() => {
    if (typeof window !== 'undefined' && state.clientes.length > 0) {
      try {
        const data = {
          clientes: state.clientes,
          contador: state.contador,
          ultimaModificacion: Date.now(),
        };
        localStorage.setItem(CLIENTES_STORAGE_KEY, JSON.stringify(data));
      } catch (error) {
        console.error('Error saving clientes to localStorage:', error);
        dispatch({ type: 'SET_ERROR', payload: 'Error al guardar clientes' });
      }
    }
  }, [state.clientes, state.contador]);

  // Función para crear nuevo cliente
  const crearCliente = React.useCallback((
    clienteData: Omit<Cliente, 'numeroCliente' | 'fechaCreacion' | 'fechaModificacion' | 'activo'>
  ): Cliente => {
    const numeroCliente = generarNumeroClienteInterno(state.contador);
    const now = Date.now();
    
    const nuevoCliente: Cliente = {
      ...clienteData,
      numeroCliente,
      fechaCreacion: now,
      fechaModificacion: now,
      activo: true,
    };

    dispatch({ type: 'ADD_CLIENTE', payload: nuevoCliente });
    return nuevoCliente;
  }, [state.contador]);

  // Función para actualizar cliente
  const actualizarCliente = React.useCallback((numeroCliente: string, clienteData: Partial<Cliente>) => {
    const clienteExistente = state.clientes.find(c => c.numeroCliente === numeroCliente);
    if (clienteExistente) {
      const clienteActualizado: Cliente = {
        ...clienteExistente,
        ...clienteData,
        numeroCliente, // Mantener el número original
        fechaModificacion: Date.now(),
      };
      dispatch({ type: 'UPDATE_CLIENTE', payload: clienteActualizado });
    }
  }, [state.clientes]);

  // Función para eliminar cliente
  const eliminarCliente = React.useCallback((numeroCliente: string) => {
    dispatch({ type: 'DELETE_CLIENTE', payload: numeroCliente });
  }, []);

  // Función para buscar cliente por número
  const buscarCliente = React.useCallback((numeroCliente: string): Cliente | null => {
    return state.clientes.find(c => c.numeroCliente === numeroCliente) || null;
  }, [state.clientes]);

  // Función para buscar clientes por query
  const buscarClientes = React.useCallback((query: string): Cliente[] => {
    if (!query.trim()) return state.clientes;
    
    const queryLower = query.toLowerCase();
    return state.clientes.filter(cliente =>
      cliente.numeroCliente.includes(query) ||
      cliente.nombre.toLowerCase().includes(queryLower) ||
      cliente.telefono.includes(query) ||
      (cliente.correo && cliente.correo.toLowerCase().includes(queryLower)) ||
      cliente.poblacion.toLowerCase().includes(queryLower)
    );
  }, [state.clientes]);

  // Función para establecer cliente actual
  const setClienteActual = React.useCallback((cliente: Cliente | null) => {
    dispatch({ type: 'SET_CLIENTE_ACTUAL', payload: cliente });
  }, []);

  // Función para limpiar cliente actual
  const clearClienteActual = React.useCallback(() => {
    dispatch({ type: 'CLEAR_CLIENTE_ACTUAL' });
  }, []);

  // Función para generar número de cliente
  const generarNumeroCliente = React.useCallback((): string => {
    return generarNumeroClienteInterno(state.contador);
  }, [state.contador]);

  // Función para obtener clientes recientes
  const obtenerClientesRecientes = React.useCallback((limit: number = 5): Cliente[] => {
    return state.clientes
      .filter(c => c.activo)
      .sort((a, b) => b.fechaModificacion - a.fechaModificacion)
      .slice(0, limit);
  }, [state.clientes]);

  const value: ClienteContextType = {
    state,
    crearCliente,
    actualizarCliente,
    eliminarCliente,
    buscarCliente,
    buscarClientes,
    setClienteActual,
    clearClienteActual,
    generarNumeroCliente,
    obtenerClientesRecientes,
  };

  return (
    <ClientesContext.Provider value={value}>
      {children}
    </ClientesContext.Provider>
  );
};

// Hook para usar el contexto
export const useClientes = (): ClienteContextType => {
  const context = useContext(ClientesContext);
  if (context === undefined) {
    throw new Error('useClientes must be used within a ClientesProvider');
  }
  return context;
};
