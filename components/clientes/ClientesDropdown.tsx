'use client';

import React, { useState } from 'react';
import { useClientes } from '@/lib/contexts/ClientesContext';
import { Cliente } from '@/lib/types/clients';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  ChevronDown, 
  Search, 
  Plus, 
  Clock,
  User
} from 'lucide-react';

interface ClientesDropdownProps {
  onAbrirGestion: () => void;
  onAbrirNuevoCliente: () => void;
  onClienteSeleccionado?: (cliente: Cliente) => void;
  modoSeleccion?: boolean;
}

export const ClientesDropdown: React.FC<ClientesDropdownProps> = ({
  onAbrirGestion,
  onAbrirNuevoCliente,
  onClienteSeleccionado,
  modoSeleccion = false,
}) => {
  const { obtenerClientesRecientes, state } = useClientes();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const clientesRecientes = obtenerClientesRecientes(5);

  const handleClienteClick = (cliente: Cliente) => {
    if (onClienteSeleccionado) {
      onClienteSeleccionado(cliente);
    }
    setIsOpen(false);
  };

  const handleAbrirGestion = () => {
    setIsOpen(false);
    onAbrirGestion();
  };

  const handleAbrirNuevoCliente = () => {
    setIsOpen(false);
    onAbrirNuevoCliente();
  };

  return (
    <div className="relative">
      {/* Botón principal */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center space-x-1 hover:text-red-200 transition-colors p-1"
      >
        <Users className="h-5 w-5" />
        <span className="hidden sm:inline">
          {modoSeleccion ? 'Seleccionar Cliente' : 'Clientes'}
        </span>
        <ChevronDown className="h-4 w-4" />
      </Button>

      {/* Dropdown */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown content */}
          <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 max-w-[calc(100vw-2rem)] bg-gray-800 rounded-lg shadow-lg border border-gray-700 z-20 scrollbar-dark">
            {/* Header */}
            <div className="p-4 border-b border-gray-600">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">
                  {modoSeleccion ? 'Seleccionar Cliente' : 'Clientes'}
                </h3>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    onClick={handleAbrirNuevoCliente}
                    className="h-8 px-3 bg-red-600 hover:bg-red-700 text-white"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Nuevo
                  </Button>
                </div>
              </div>
              
              {/* Búsqueda rápida */}
              <div className="mt-3 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Buscar cliente..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                />
              </div>
            </div>

            {/* Contenido */}
            <div className="max-h-60 sm:max-h-80 overflow-y-auto scrollbar-dark">
              {clientesRecientes.length === 0 ? (
                <div className="p-6 text-center">
                  <Users className="w-12 h-12 text-gray-400 mx-auto mb-3 opacity-50" />
                  <p className="text-gray-300 text-sm mb-4">
                    No hay clientes registrados
                  </p>
                  <Button
                    size="sm"
                    onClick={handleAbrirNuevoCliente}
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Crear Primer Cliente
                  </Button>
                </div>
              ) : (
                <div className="p-2">
                  {/* Clientes recientes */}
                  <div className="mb-3">
                    <div className="flex items-center gap-2 px-2 py-1 text-xs font-medium text-gray-400 uppercase tracking-wide">
                      <Clock className="w-3 h-3" />
                      Clientes Recientes
                    </div>
                  </div>
                  
                  {clientesRecientes.map((cliente) => (
                    <div
                      key={cliente.numeroCliente}
                      onClick={() => handleClienteClick(cliente)}
                      className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer transition-colors"
                    >
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium text-white truncate">
                            {cliente.nombre}
                          </p>
                          <span className="text-xs text-gray-400 font-mono">
                            #{cliente.numeroCliente}
                          </span>
                        </div>
                        <p className="text-xs text-gray-300 truncate">
                          {cliente.telefono} • {cliente.poblacion}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-600 bg-gray-800">
              <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={handleAbrirGestion}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Ver Todos
                </Button>
                <Button
                  size="sm"
                  onClick={handleAbrirNuevoCliente}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Nuevo Cliente
                </Button>
              </div>
              
            </div>
          </div>
        </>
      )}
    </div>
  );
};
