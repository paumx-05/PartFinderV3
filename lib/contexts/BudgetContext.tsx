// lib/contexts/BudgetContext.tsx
'use client';
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { BudgetState, BudgetAction, BudgetContextType, BudgetItem, Budget } from '@/lib/types/budget';

const BUDGET_STORAGE_KEY = 'partfinder_budget';

// Estado inicial
const initialState: BudgetState = {
  budget: null,
  isOpen: false,
};

// Función para crear un nuevo presupuesto
function createNewBudget(): Budget {
  return {
    id: `budget_${Date.now()}`,
    clientName: '',
    licensePlate: '',
    orderNumber: '',
    items: [],
    totalItems: 0,
    totalPrice: 0,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
}

// Función para calcular totales
function calculateTotals(budget: Budget): Budget {
  const totalItems = budget.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = budget.items.reduce((sum, item) => sum + (item.part.price * item.quantity), 0);
  
  return {
    ...budget,
    totalItems,
    totalPrice,
    updatedAt: Date.now(),
  };
}

// Reducer para manejar las acciones del presupuesto
function budgetReducer(state: BudgetState, action: BudgetAction): BudgetState {
  switch (action.type) {
    case 'ADD_ITEM': {
      let budget = state.budget || createNewBudget();
      
      const existingItem = budget.items.find(item => item.part.id === action.payload.id);
      
      if (existingItem) {
        // Si el item ya existe, incrementar cantidad
        const updatedItems = budget.items.map(item =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        budget = { ...budget, items: updatedItems };
      } else {
        // Si es un nuevo item, agregarlo
        const newItem: BudgetItem = {
          id: `${action.payload.id}_${Date.now()}`,
          part: action.payload,
          quantity: 1,
          addedAt: Date.now(),
        };
        budget = { ...budget, items: [...budget.items, newItem] };
      }
      
      return {
        ...state,
        budget: calculateTotals(budget),
      };
    }

    case 'REMOVE_ITEM': {
      if (!state.budget) return state;
      
      const updatedItems = state.budget.items.filter(item => item.id !== action.payload);
      const budget = { ...state.budget, items: updatedItems };
      
      return {
        ...state,
        budget: calculateTotals(budget),
      };
    }

    case 'UPDATE_QUANTITY': {
      if (!state.budget) return state;
      
      const { id, quantity } = action.payload;
      
      if (quantity <= 0) {
        // Si la cantidad es 0 o menor, eliminar el item
        return budgetReducer(state, { type: 'REMOVE_ITEM', payload: id });
      }
      
      const updatedItems = state.budget.items.map(item =>
        item.id === id ? { ...item, quantity } : item
      );
      const budget = { ...state.budget, items: updatedItems };
      
      return {
        ...state,
        budget: calculateTotals(budget),
      };
    }

    case 'SET_CLIENT_INFO': {
      const budget = state.budget || createNewBudget();
      const updatedBudget = {
        ...budget,
        clientName: action.payload.clientName,
        licensePlate: action.payload.licensePlate,
        orderNumber: action.payload.orderNumber || '',
        numeroCliente: action.payload.numeroCliente,
        updatedAt: Date.now(),
      };
      
      return {
        ...state,
        budget: updatedBudget,
      };
    }

    case 'CLEAR_BUDGET':
      return { ...state, budget: null };

    case 'TOGGLE_BUDGET':
      return { ...state, isOpen: !state.isOpen };

    case 'SET_BUDGET_OPEN':
      return { ...state, isOpen: action.payload };

    case 'LOAD_BUDGET':
      return { ...state, budget: action.payload };

    case 'INITIALIZE_BUDGET':
      return { ...state, budget: state.budget || createNewBudget() };

    case 'INITIALIZE_BUDGET_WITH_CLIENT': {
      const { clientName, licensePlate, orderNumber, numeroPresupuesto, numeroCliente } = action.payload;
      const newBudget = createNewBudget();
      newBudget.clientName = clientName;
      newBudget.licensePlate = licensePlate;
      newBudget.orderNumber = orderNumber || '';
      newBudget.numeroPresupuesto = numeroPresupuesto;
      newBudget.numeroCliente = numeroCliente;
      newBudget.estado = 'borrador';
      return { ...state, budget: newBudget };
    }

    default:
      return state;
  }
}

// Crear el contexto
const BudgetContext = createContext<BudgetContextType | undefined>(undefined);

// Hook personalizado para usar el contexto
export function useBudget() {
  const context = useContext(BudgetContext);
  if (context === undefined) {
    throw new Error('useBudget must be used within a BudgetProvider');
  }
  return context;
}

// Provider del contexto
export function BudgetProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  // Cargar presupuesto desde localStorage al inicializar (solo si no hay presupuesto actual)
  useEffect(() => {
    if (typeof window !== 'undefined' && !state.budget) {
      try {
        const savedBudget = localStorage.getItem(BUDGET_STORAGE_KEY);
        if (savedBudget) {
          const budget: Budget = JSON.parse(savedBudget);
          dispatch({ type: 'LOAD_BUDGET', payload: budget });
        }
      } catch (error) {
        console.error('Error loading budget from localStorage:', error);
      }
    }
  }, []);

  // Guardar presupuesto en localStorage cuando cambie
  useEffect(() => {
    if (typeof window !== 'undefined' && state.budget) {
      try {
        localStorage.setItem(BUDGET_STORAGE_KEY, JSON.stringify(state.budget));
      } catch (error) {
        console.error('Error saving budget to localStorage:', error);
      }
    } else if (typeof window !== 'undefined' && !state.budget) {
      // Limpiar localStorage si no hay presupuesto
      localStorage.removeItem(BUDGET_STORAGE_KEY);
    }
  }, [state.budget]);

  // Funciones del contexto
  const addItem = React.useCallback((part: any) => {
    dispatch({ type: 'ADD_ITEM', payload: part });
  }, []);

  const removeItem = React.useCallback((id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  }, []);

  const updateQuantity = React.useCallback((id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  }, []);

  const setClientInfo = React.useCallback((clientName: string, licensePlate: string, orderNumber?: string, numeroCliente?: string) => {
    dispatch({ type: 'SET_CLIENT_INFO', payload: { clientName, licensePlate, orderNumber, numeroCliente } });
  }, []);

  const clearBudget = React.useCallback(() => {
    dispatch({ type: 'CLEAR_BUDGET' });
  }, []);

  const toggleBudget = React.useCallback(() => {
    dispatch({ type: 'TOGGLE_BUDGET' });
  }, []);

  const setBudgetOpen = React.useCallback((isOpen: boolean) => {
    dispatch({ type: 'SET_BUDGET_OPEN', payload: isOpen });
  }, []);

  // Función para mantener el presupuesto activo sin cerrarlo
  const keepBudgetActive = React.useCallback(() => {
    // Solo cierra el modal, pero mantiene el presupuesto activo
    dispatch({ type: 'SET_BUDGET_OPEN', payload: false });
  }, []);

  const saveBudget = React.useCallback(() => {
    if (state.budget) {
      // Aquí se podría implementar la lógica para guardar en una base de datos
      console.log('Saving budget:', state.budget);
      
      // Limpiar el presupuesto después de guardarlo
      dispatch({ type: 'CLEAR_BUDGET' });
    }
  }, [state.budget]);

  const initializeBudget = React.useCallback(() => {
    dispatch({ type: 'INITIALIZE_BUDGET' });
  }, []);

  const initializeBudgetWithClient = React.useCallback((clientName: string, licensePlate: string, orderNumber?: string, numeroPresupuesto?: string, numeroCliente?: string) => {
    dispatch({ type: 'INITIALIZE_BUDGET_WITH_CLIENT', payload: { clientName, licensePlate, orderNumber, numeroPresupuesto, numeroCliente } });
  }, []);

  const value: BudgetContextType = {
    state,
    addItem,
    removeItem,
    updateQuantity,
    setClientInfo,
    clearBudget,
    toggleBudget,
    setBudgetOpen,
    saveBudget,
    initializeBudget,
    initializeBudgetWithClient,
    keepBudgetActive,
  };

  return (
    <BudgetContext.Provider value={value}>
      {children}
    </BudgetContext.Provider>
  );
}
