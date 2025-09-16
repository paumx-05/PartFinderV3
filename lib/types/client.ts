// lib/types/client.ts
export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  address?: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  createdAt: number; // timestamp
  lastOrderAt?: number; // timestamp
  totalOrders: number;
  totalSpent: number;
}

export interface ClientSearchResult {
  clients: Client[];
  total: number;
}

export interface ClientSearchParams {
  query: string;
  limit?: number;
}

export interface ClientContextType {
  selectedClient: Client | null;
  setSelectedClient: (client: Client | null) => void;
  searchClients: (query: string) => Promise<Client[]>;
  createClient: (clientData: Omit<Client, 'id' | 'createdAt' | 'totalOrders' | 'totalSpent'>) => Promise<Client>;
}
