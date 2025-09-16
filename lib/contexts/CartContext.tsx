// lib/contexts/CartContext.tsx
'use client';
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { CartState, CartAction, CartContextType, CartItem } from '@/lib/types/cart';
import { useCartToast } from '@/hooks/use-cart-toast';

const CART_STORAGE_KEY = 'partfinder_cart';

// Estado inicial
const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
  isOpen: false,
};

// Reducer para manejar las acciones del carrito
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.part.id === action.payload.id);
      
      if (existingItem) {
        // Si el item ya existe, incrementar cantidad
        const updatedItems = state.items.map(item =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return calculateTotals({ ...state, items: updatedItems });
      } else {
        // Si es un nuevo item, agregarlo
        const newItem: CartItem = {
          id: `${action.payload.id}_${Date.now()}`,
          part: action.payload,
          quantity: 1,
          addedAt: Date.now(),
        };
        const updatedItems = [...state.items, newItem];
        return calculateTotals({ ...state, items: updatedItems });
      }
    }

    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      return calculateTotals({ ...state, items: updatedItems });
    }

    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      
      if (quantity <= 0) {
        // Si la cantidad es 0 o menor, eliminar el item
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: id });
      }
      
      const updatedItems = state.items.map(item =>
        item.id === id ? { ...item, quantity } : item
      );
      return calculateTotals({ ...state, items: updatedItems });
    }

    case 'CLEAR_CART':
      return { ...initialState, isOpen: state.isOpen };

    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };

    case 'SET_CART_OPEN':
      return { ...state, isOpen: action.payload };

    case 'LOAD_CART':
      return calculateTotals({ ...state, items: action.payload });

    default:
      return state;
  }
}

// Función para calcular totales
function calculateTotals(state: CartState): CartState {
  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = state.items.reduce((sum, item) => sum + (item.part.price * item.quantity), 0);
  
  return {
    ...state,
    totalItems,
    totalPrice,
  };
}

// Crear el contexto
const CartContext = createContext<CartContextType | undefined>(undefined);

// Hook personalizado para usar el contexto
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

// Provider del contexto
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { showAddToCartToast, showRemoveFromCartToast, showClearCartToast, showQuantityUpdateToast } = useCartToast();

  // Cargar carrito desde localStorage al inicializar
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedCart = localStorage.getItem(CART_STORAGE_KEY);
        if (savedCart) {
          const cartItems: CartItem[] = JSON.parse(savedCart);
          dispatch({ type: 'LOAD_CART', payload: cartItems });
        }
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    if (typeof window !== 'undefined' && state.items.length > 0) {
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items));
      } catch (error) {
        console.error('Error saving cart to localStorage:', error);
      }
    } else if (typeof window !== 'undefined' && state.items.length === 0) {
      // Limpiar localStorage si el carrito está vacío
      localStorage.removeItem(CART_STORAGE_KEY);
    }
  }, [state.items]);

  // Funciones del contexto
  const addItem = (part: any) => {
    dispatch({ type: 'ADD_ITEM', payload: part });
    showAddToCartToast(part.name);
  };

  const removeItem = (id: string) => {
    const item = state.items.find(item => item.id === id);
    dispatch({ type: 'REMOVE_ITEM', payload: id });
    if (item) {
      showRemoveFromCartToast(item.part.name);
    }
  };

  const updateQuantity = (id: string, quantity: number) => {
    const item = state.items.find(item => item.id === id);
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    if (item && quantity > 0) {
      showQuantityUpdateToast(item.part.name, quantity);
    }
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    showClearCartToast();
  };

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  const setCartOpen = (isOpen: boolean) => {
    dispatch({ type: 'SET_CART_OPEN', payload: isOpen });
  };

  const value: CartContextType = {
    state,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    toggleCart,
    setCartOpen,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
