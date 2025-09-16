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
  },
  {
    id: 'client-particular',
    name: 'Cliente particular',
    email: 'particular@email.com',
    phone: '+34 900 000 000',
    address: {
      street: 'Sin dirección específica',
      city: 'Varios',
      postalCode: '00000',
      country: 'España'
    },
    createdAt: Date.now() - 172800000, // 2 días atrás
    lastOrderAt: Date.now() - 7200000, // 2 horas atrás
    totalOrders: 1,
    totalSpent: 45.99
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
  
  // Filtrar clientes normales
  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchTerm) ||
    client.email.toLowerCase().includes(searchTerm) ||
    client.phone.includes(searchTerm)
  );
  
  // Si se busca "particular", agregar el cliente particular al inicio
  if (searchTerm.includes('particular') || searchTerm.includes('cliente particular')) {
    const particularClient = clients.find(client => client.id === 'client-particular');
    if (particularClient && !filteredClients.find(client => client.id === 'client-particular')) {
      return [particularClient, ...filteredClients];
    }
  }
  
  return filteredClients;
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
  // Limpiar localStorage para forzar reinicialización con el cliente particular
  const existingClients = localStorage.getItem(CLIENTS_KEY);
  if (!existingClients) {
    writeClients(defaultClients);
  } else {
    // Verificar si el cliente particular existe, si no, agregarlo
    try {
      const clients = JSON.parse(existingClients);
      const hasParticularClient = clients.some((client: Client) => client.id === 'client-particular');
      if (!hasParticularClient) {
        clients.push(defaultClients[1]); // Agregar el cliente particular
        writeClients(clients);
      }
    } catch (error) {
      // Si hay error parseando, reinicializar con clientes por defecto
      writeClients(defaultClients);
    }
  }
}
