// lib/types/budget.ts
import { Part } from './parts';

export interface BudgetItem {
  id: string;
  part: Part;
  quantity: number;
  addedAt: number; // timestamp
}

export interface Budget {
  id: string;
  numeroPresupuesto?: string; // P-2025-001
  numeroCliente?: string; // Referencia al cliente (0001, 0002, etc.)
  clientName: string;
  licensePlate: string;
  orderNumber?: string;
  items: BudgetItem[];
  totalItems: number;
  totalPrice: number;
  estado?: 'borrador' | 'guardado' | 'enviado';
  createdAt: number;
  updatedAt: number;
}

export interface BudgetState {
  budget: Budget | null;
  isOpen: boolean;
}

export type BudgetAction =
  | { type: 'ADD_ITEM'; payload: Part }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'SET_CLIENT_INFO'; payload: { clientName: string; licensePlate: string; orderNumber?: string; numeroCliente?: string } }
  | { type: 'CLEAR_BUDGET' }
  | { type: 'TOGGLE_BUDGET' }
  | { type: 'SET_BUDGET_OPEN'; payload: boolean }
  | { type: 'LOAD_BUDGET'; payload: Budget | null }
  | { type: 'INITIALIZE_BUDGET' }
  | { type: 'INITIALIZE_BUDGET_WITH_CLIENT'; payload: { clientName: string; licensePlate: string; orderNumber?: string; numeroPresupuesto?: string; numeroCliente?: string } };

export interface BudgetContextType {
  state: BudgetState;
  addItem: (part: Part) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  setClientInfo: (clientName: string, licensePlate: string, orderNumber?: string, numeroCliente?: string) => void;
  clearBudget: () => void;
  toggleBudget: () => void;
  setBudgetOpen: (isOpen: boolean) => void;
  saveBudget: () => void;
  initializeBudget: () => void;
  initializeBudgetWithClient: (clientName: string, licensePlate: string, orderNumber?: string, numeroPresupuesto?: string, numeroCliente?: string) => void;
  keepBudgetActive: () => void;
}
