// components/ClientSearch.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { Search, User, Phone, Mail, MapPin, Plus, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { Client } from '@/lib/types/client';
import { useClient } from '@/lib/contexts/ClientContext';

interface ClientSearchProps {
  onClientSelect?: (client: Client) => void;
}

export default function ClientSearch({ onClientSelect }: ClientSearchProps) {
  const { selectedClient, setSelectedClient, searchClients } = useClient();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Client[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Buscar clientes cuando cambie la query
  useEffect(() => {
    const performSearch = async () => {
      if (searchQuery.trim().length < 2) {
        setSearchResults([]);
        setShowResults(false);
        return;
      }

      setIsSearching(true);
      try {
        const results = await searchClients(searchQuery);
        setSearchResults(results);
        setShowResults(true);
      } catch (error) {
        console.error('Error searching clients:', error);
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    };

    const timeoutId = setTimeout(performSearch, 300); // Debounce
    return () => clearTimeout(timeoutId);
  }, [searchQuery, searchClients]);

  const handleClientSelect = (client: Client) => {
    setSelectedClient(client);
    setShowResults(false);
    setSearchQuery(client.name);
    onClientSelect?.(client);
  };

  const handleClearSelection = () => {
    setSelectedClient(null);
    setSearchQuery('');
    setShowResults(false);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const formatPhone = (phone: string) => {
    return phone.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
  };

  return (
    <div className="bg-gray-800 bg-opacity-70 rounded-lg border-l-4 border-red-600 overflow-hidden transition-all duration-300">
      {/* Header colapsible */}
      <button
        onClick={toggleExpanded}
        className="w-full p-3 flex items-center justify-between hover:bg-gray-700 hover:bg-opacity-50 transition-colors"
      >
        <div className="flex items-center space-x-3">
          <User className="w-4 h-4 text-red-400" />
          <span className="text-sm font-medium text-red-400">
            {selectedClient ? selectedClient.name : 'Buscar Cliente'}
          </span>
          {selectedClient && (
            <Check className="w-3 h-3 text-green-400" />
          )}
        </div>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4 text-gray-400" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-400" />
        )}
      </button>

      {/* Contenido expandible */}
      <div className={`transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="p-4 pt-0">
          {/* Campo de búsqueda */}
          <div className="relative mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar cliente o escribir 'particular'..."
                className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
              />
              {isSearching && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-500"></div>
                </div>
              )}
            </div>

            {/* Resultados de búsqueda */}
            {showResults && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-gray-800 border border-gray-600 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto max-w-full">
                {searchResults.length > 0 ? (
                  searchResults.map((client) => (
                    <button
                      key={client.id}
                      onClick={() => handleClientSelect(client)}
                      className="w-full p-3 text-left hover:bg-gray-700 transition-colors border-b border-gray-700 last:border-b-0"
                    >
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <User className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-white truncate text-sm">{client.name}</div>
                          <div className="text-xs text-gray-400 truncate">{client.email}</div>
                          <div className="text-xs text-gray-500 truncate">{formatPhone(client.phone)}</div>
                        </div>
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="p-3 sm:p-4 text-center text-gray-400">
                    <User className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 opacity-50" />
                    <p className="text-xs sm:text-sm">No se encontraron clientes</p>
                    <p className="text-xs mt-1">Intenta con otro término de búsqueda</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Cliente seleccionado */}
          {selectedClient && (
            <div className="bg-gray-700 rounded-lg p-2 sm:p-3 border border-green-600">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-1 sm:space-x-2 min-w-0">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                  <span className="text-green-400 font-medium text-xs sm:text-sm truncate">Cliente Seleccionado</span>
                </div>
                <button
                  onClick={handleClearSelection}
                  className="text-gray-400 hover:text-white transition-colors text-sm flex-shrink-0"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <User className="w-3 h-3 text-red-400 flex-shrink-0" />
                  <span className="text-white font-medium text-xs sm:text-sm truncate">{selectedClient.name}</span>
                </div>
                
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Mail className="w-3 h-3 text-red-400 flex-shrink-0" />
                  <span className="text-gray-300 text-xs truncate">{selectedClient.email}</span>
                </div>
                
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Phone className="w-3 h-3 text-red-400 flex-shrink-0" />
                  <span className="text-gray-300 text-xs truncate">{formatPhone(selectedClient.phone)}</span>
                </div>
                
                {selectedClient.address && (
                  <div className="flex items-start space-x-1 sm:space-x-2">
                    <MapPin className="w-3 h-3 text-red-400 mt-0.5 flex-shrink-0" />
                    <div className="text-gray-300 text-xs min-w-0">
                      <div className="truncate">{selectedClient.address.street}</div>
                      <div className="truncate">{selectedClient.address.postalCode} {selectedClient.address.city}</div>
                    </div>
                  </div>
                )}
                
                <div className="pt-1 border-t border-gray-600">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span className="truncate">Pedidos: {selectedClient.totalOrders}</span>
                    <span className="truncate ml-2">Total: €{selectedClient.totalSpent.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Opción rápida de Cliente particular */}
          {!selectedClient && (
            <div className="mt-2 sm:mt-3 p-2 bg-gray-700 rounded-lg border border-dashed border-gray-600">
              <div className="flex items-center space-x-1 sm:space-x-2 text-gray-400 mb-1">
                <User className="w-3 h-3 flex-shrink-0" />
                <span className="text-xs">Cliente rápido</span>
              </div>
              <button 
                onClick={async () => {
                  try {
                    const results = await searchClients('particular');
                    const particularClient = results.find(client => client.id === 'client-particular');
                    if (particularClient) {
                      handleClientSelect(particularClient);
                    }
                  } catch (error) {
                    console.error('Error selecting particular client:', error);
                  }
                }}
                className="text-red-400 hover:text-red-300 text-xs transition-colors truncate"
              >
                Seleccionar Cliente particular
              </button>
            </div>
          )}

          {/* Botón para crear nuevo cliente */}
          {searchQuery.length >= 2 && searchResults.length === 0 && !isSearching && (
            <div className="mt-2 sm:mt-3 p-2 bg-gray-700 rounded-lg border border-dashed border-gray-600">
              <div className="flex items-center space-x-1 sm:space-x-2 text-gray-400 mb-1">
                <Plus className="w-3 h-3 flex-shrink-0" />
                <span className="text-xs">Cliente no encontrado</span>
              </div>
              <button className="text-red-400 hover:text-red-300 text-xs transition-colors truncate">
                Crear nuevo cliente "{searchQuery}"
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
