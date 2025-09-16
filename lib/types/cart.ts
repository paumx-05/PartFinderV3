// lib/types/cart.ts
import { Part } from './parts';

export interface CartItem {
  id: string;
  part: Part;
  quantity: number;
  addedAt: number; // timestamp
}

export interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  isOpen: boolean;
}

export type CartAction =
  | { type: 'ADD_ITEM'; payload: Part }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' }
  | { type: 'SET_CART_OPEN'; payload: boolean }
  | { type: 'LOAD_CART'; payload: CartItem[] };

export interface CartContextType {
  state: CartState;
  addItem: (part: Part) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setCartOpen: (isOpen: boolean) => void;
}
