// Tipos para el sistema de gestión de clientes

export interface Cliente {
  numeroCliente: string; // "0001", "0002", etc.
  nombre: string; // "Pau Maldonado Lopez"
  telefono: string; // "6868045147"
  correo?: string; // "pablomaldonado422@gmail.com"
  poblacion: string; // "Pineda de Mar"
  direccion: string; // "Av/ Hispanitat 49 3-1"
  fechaCreacion: number;
  fechaModificacion: number;
  activo: boolean;
}

export interface ClienteState {
  clientes: Cliente[];
  contador: number; // Para numeración automática
  clienteActual: Cliente | null;
  isLoading: boolean;
  error: string | null;
}

export type ClienteAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'LOAD_CLIENTES'; payload: Cliente[] }
  | { type: 'ADD_CLIENTE'; payload: Cliente }
  | { type: 'UPDATE_CLIENTE'; payload: Cliente }
  | { type: 'DELETE_CLIENTE'; payload: string }
  | { type: 'SET_CLIENTE_ACTUAL'; payload: Cliente | null }
  | { type: 'SET_CONTADOR'; payload: number }
  | { type: 'CLEAR_CLIENTE_ACTUAL' };

export interface ClienteContextType {
  state: ClienteState;
  crearCliente: (clienteData: Omit<Cliente, 'numeroCliente' | 'fechaCreacion' | 'fechaModificacion' | 'activo'>) => Cliente;
  actualizarCliente: (numeroCliente: string, clienteData: Partial<Cliente>) => void;
  eliminarCliente: (numeroCliente: string) => void;
  buscarCliente: (numeroCliente: string) => Cliente | null;
  buscarClientes: (query: string) => Cliente[];
  setClienteActual: (cliente: Cliente | null) => void;
  clearClienteActual: () => void;
  generarNumeroCliente: () => string;
  obtenerClientesRecientes: (limit?: number) => Cliente[];
}

// Tipos para formularios
export interface ClienteFormData {
  nombre: string;
  telefono: string;
  correo: string;
  poblacion: string;
  direccion: string;
}

export interface ClienteSearchResult {
  cliente: Cliente;
  matchType: 'numero' | 'nombre' | 'telefono' | 'correo';
  matchValue: string;
}
