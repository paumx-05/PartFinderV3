// lib/types/presupuestos.ts
import { BudgetItem } from './budget';

export interface PresupuestoGuardado {
  id: string;
  numeroPresupuesto: string; // P-2025-001
  clientName: string;
  licensePlate: string;
  orderNumber?: string;
  items: BudgetItem[];
  totalItems: number;
  totalPrice: number;
  estado: 'borrador' | 'guardado' | 'enviado';
  fechaCreacion: number;
  fechaModificacion: number;
}

export interface ListaPresupuestos {
  presupuestos: PresupuestoGuardado[];
  contador: number; // Para numeración automática
  ultimaModificacion: number;
}

export interface EstadoPresupuestos {
  lista: ListaPresupuestos;
  presupuestoActual: PresupuestoGuardado | null;
  isLoading: boolean;
  error: string | null;
}

export type PresupuestosAction =
  | { type: 'CARGAR_PRESUPUESTOS'; payload: ListaPresupuestos }
  | { type: 'AGREGAR_PRESUPUESTO'; payload: PresupuestoGuardado }
  | { type: 'ACTUALIZAR_PRESUPUESTO'; payload: PresupuestoGuardado }
  | { type: 'ELIMINAR_PRESUPUESTO'; payload: string }
  | { type: 'CARGAR_PRESUPUESTO'; payload: PresupuestoGuardado }
  | { type: 'LIMPIAR_PRESUPUESTO_ACTUAL' }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'DUPLICAR_PRESUPUESTO'; payload: { original: PresupuestoGuardado; nuevo: PresupuestoGuardado } };

export interface PresupuestosContextType {
  state: EstadoPresupuestos;
  guardarPresupuesto: (presupuesto: PresupuestoGuardado) => void;
  cargarPresupuesto: (id: string) => PresupuestoGuardado | null;
  eliminarPresupuesto: (id: string) => void;
  duplicarPresupuesto: (id: string) => void;
  generarNumeroPresupuesto: () => string;
  obtenerPresupuestosRecientes: (limite?: number) => PresupuestoGuardado[];
  buscarPresupuestos: (termino: string) => PresupuestoGuardado[];
  exportarPresupuestos: () => string;
  importarPresupuestos: (datos: string) => boolean;
}
