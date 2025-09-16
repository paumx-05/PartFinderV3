// lib/mocks/clients.ts
import { Client } from '@/lib/types/client';

const CLIENTS_KEY = 'partfinder_clients';

// Cliente demo por defecto
const defaultClients: Client[] = [
  {
    id: 'client-1',
    name: 'Pau Maldonado',
    email: 'pau.maldonado@email.com',
    phone: '+34 666 123 456',
    address: {
      street: 'Calle Mayor 123',
      city: 'Madrid',
      postalCode: '28001',
      country: 'España'
    },
    createdAt: Date.now() - 86400000, // 1 día atrás
    lastOrderAt: Date.now() - 3600000, // 1 hora atrás
    totalOrders: 3,
    totalSpent: 156.75
  }
];

// Función para generar ID único
function generateId(): string {
  return `client-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// Función para simular latencia de red
function delay(ms = 300): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Leer clientes desde localStorage
function readClients(): Client[] {
  if (typeof window === 'undefined') return defaultClients;
  
  try {
    const saved = localStorage.getItem(CLIENTS_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (error) {
    console.error('Error reading clients from localStorage:', error);
  }
  
  // Si no hay clientes guardados, inicializar con los por defecto
  writeClients(defaultClients);
  return defaultClients;
}

// Guardar clientes en localStorage
function writeClients(clients: Client[]): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(CLIENTS_KEY, JSON.stringify(clients));
  } catch (error) {
    console.error('Error saving clients to localStorage:', error);
  }
}

// Buscar clientes por query
export async function searchClients(query: string): Promise<Client[]> {
  await delay();
  
  if (!query.trim()) {
    return [];
  }
  
  const clients = readClients();
  const searchTerm = query.toLowerCase().trim();
  
  return clients.filter(client => 
    client.name.toLowerCase().includes(searchTerm) ||
    client.email.toLowerCase().includes(searchTerm) ||
    client.phone.includes(searchTerm)
  );
}

// Obtener cliente por ID
export async function getClientById(id: string): Promise<Client | null> {
  await delay();
  
  const clients = readClients();
  return clients.find(client => client.id === id) || null;
}

// Crear nuevo cliente
export async function createClient(clientData: Omit<Client, 'id' | 'createdAt' | 'totalOrders' | 'totalSpent'>): Promise<Client> {
  await delay();
  
  const clients = readClients();
  
  // Verificar si ya existe un cliente con el mismo email
  const existingClient = clients.find(client => client.email === clientData.email);
  if (existingClient) {
    throw new Error('Ya existe un cliente con este email');
  }
  
  const newClient: Client = {
    ...clientData,
    id: generateId(),
    createdAt: Date.now(),
    totalOrders: 0,
    totalSpent: 0
  };
  
  clients.push(newClient);
  writeClients(clients);
  
  return newClient;
}

// Actualizar cliente
export async function updateClient(id: string, updates: Partial<Client>): Promise<Client> {
  await delay();
  
  const clients = readClients();
  const clientIndex = clients.findIndex(client => client.id === id);
  
  if (clientIndex === -1) {
    throw new Error('Cliente no encontrado');
  }
  
  clients[clientIndex] = { ...clients[clientIndex], ...updates };
  writeClients(clients);
  
  return clients[clientIndex];
}

// Eliminar cliente
export async function deleteClient(id: string): Promise<void> {
  await delay();
  
  const clients = readClients();
  const filteredClients = clients.filter(client => client.id !== id);
  
  if (filteredClients.length === clients.length) {
    throw new Error('Cliente no encontrado');
  }
  
  writeClients(filteredClients);
}

// Obtener todos los clientes
export async function getAllClients(): Promise<Client[]> {
  await delay();
  return readClients();
}

// Inicializar clientes por defecto si no existen
if (typeof window !== 'undefined') {
  readClients();
}
