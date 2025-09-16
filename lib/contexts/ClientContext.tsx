// lib/contexts/ClientContext.tsx
'use client';
import React, { createContext, useContext, useState } from 'react';
import { Client, ClientContextType } from '@/lib/types/client';
import { searchClients, createClient } from '@/lib/mocks/clients';

const ClientContext = createContext<ClientContextType | undefined>(undefined);

export function useClient() {
  const context = useContext(ClientContext);
  if (context === undefined) {
    throw new Error('useClient must be used within a ClientProvider');
  }
  return context;
}

export function ClientProvider({ children }: { children: React.ReactNode }) {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const handleSearchClients = async (query: string): Promise<Client[]> => {
    try {
      return await searchClients(query);
    } catch (error) {
      console.error('Error searching clients:', error);
      return [];
    }
  };

  const handleCreateClient = async (clientData: Omit<Client, 'id' | 'createdAt' | 'totalOrders' | 'totalSpent'>): Promise<Client> => {
    try {
      const newClient = await createClient(clientData);
      return newClient;
    } catch (error) {
      console.error('Error creating client:', error);
      throw error;
    }
  };

  const value: ClientContextType = {
    selectedClient,
    setSelectedClient,
    searchClients: handleSearchClients,
    createClient: handleCreateClient,
  };

  return (
    <ClientContext.Provider value={value}>
      {children}
    </ClientContext.Provider>
  );
}
