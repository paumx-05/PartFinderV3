'use client';

import React, { useState, useMemo } from 'react';
import { useClientes } from '@/lib/contexts/ClientesContext';
import { Cliente } from '@/lib/types/clients';
import { ClienteCard } from './ClienteCard';
import { ModalNuevoCliente } from './ModalNuevoCliente';
import { Modal } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  X, 
  Search, 
  Plus, 
  Users, 
  Filter,
  Edit,
  Trash2
} from 'lucide-react';

interface ModalGestionClientesProps {
  isOpen: boolean;
  onClose: () => void;
  onClienteSeleccionado?: (cliente: Cliente) => void;
  modoSeleccion?: boolean;
}

export const ModalGestionClientes: React.FC<ModalGestionClientesProps> = ({
  isOpen,
  onClose,
  onClienteSeleccionado,
  modoSeleccion = false,
}) => {
  const { state, buscarClientes, eliminarCliente } = useClientes();
  const [searchQuery, setSearchQuery] = useState('');
  const [isNuevoClienteOpen, setIsNuevoClienteOpen] = useState(false);
  const [clienteAEliminar, setClienteAEliminar] = useState<Cliente | null>(null);

  // Filtrar clientes basado en la búsqueda
  const clientesFiltrados = useMemo(() => {
    if (!searchQuery.trim()) {
      return state.clientes.sort((a, b) => b.fechaModificacion - a.fechaModificacion);
    }
    return buscarClientes(searchQuery);
  }, [searchQuery, state.clientes, buscarClientes]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleNuevoCliente = () => {
    setIsNuevoClienteOpen(true);
  };

  const handleClienteCreado = () => {
    setIsNuevoClienteOpen(false);
    // El cliente se agregará automáticamente al estado
  };

  const handleEditarCliente = (cliente: Cliente) => {
    // TODO: Implementar edición de cliente
    alert(`Editar cliente ${cliente.numeroCliente} - ${cliente.nombre}`);
  };

  const handleEliminarCliente = (cliente: Cliente) => {
    setClienteAEliminar(cliente);
  };

  const confirmarEliminacion = () => {
    if (clienteAEliminar) {
      eliminarCliente(clienteAEliminar.numeroCliente);
      setClienteAEliminar(null);
      alert(`Cliente ${clienteAEliminar.numeroCliente} eliminado exitosamente`);
    }
  };

  const handleSeleccionarCliente = (cliente: Cliente) => {
    if (onClienteSeleccionado) {
      onClienteSeleccionado(cliente);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[95vh] overflow-hidden mx-1 sm:mx-4">
          {/* Header */}
          <div className="flex items-center justify-between p-3 sm:p-6 border-b border-gray-200">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-base sm:text-xl font-semibold text-gray-900 truncate">
                  {modoSeleccion ? 'Seleccionar Cliente' : 'Gestión de Clientes'}
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 truncate">
                  {modoSeleccion 
                    ? 'Selecciona un cliente para el presupuesto'
                    : `Total de clientes: ${state.clientes.length}`
                  }
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-colors flex-shrink-0"
              aria-label="Cerrar modal"
            >
              <X className="w-3 h-3 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Barra de búsqueda y acciones */}
          <div className="p-3 sm:p-6 border-b border-gray-200 bg-gray-50">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Buscar cliente..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="pl-10 text-sm sm:text-base"
                />
              </div>
              <Button onClick={handleNuevoCliente} className="flex items-center justify-center gap-2 text-sm sm:text-base">
                <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Nuevo Cliente</span>
                <span className="sm:hidden">Nuevo</span>
              </Button>
            </div>
          </div>

          {/* Contenido */}
          <div className="p-3 sm:p-6 overflow-y-auto max-h-[65vh]">
            {clientesFiltrados.length === 0 ? (
              <div className="text-center py-12">
                <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {searchQuery ? 'No se encontraron clientes' : 'No hay clientes registrados'}
                </h3>
                <p className="text-gray-500 mb-6">
                  {searchQuery 
                    ? 'Intenta con otros términos de búsqueda'
                    : 'Crea tu primer cliente para comenzar'
                  }
                </p>
                {!searchQuery && (
                  <Button onClick={handleNuevoCliente} className="flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Crear Primer Cliente
                  </Button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {clientesFiltrados.map((cliente) => (
                  <ClienteCard
                    key={cliente.numeroCliente}
                    cliente={cliente}
                    onEdit={!modoSeleccion ? handleEditarCliente : undefined}
                    onDelete={!modoSeleccion ? handleEliminarCliente : undefined}
                    onSelect={modoSeleccion ? handleSeleccionarCliente : undefined}
                    showActions={!modoSeleccion}
                    showSelectButton={modoSeleccion}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div>
                Mostrando {clientesFiltrados.length} de {state.clientes.length} clientes
              </div>
              <div className="flex items-center gap-4">
                {modoSeleccion && (
                  <Button variant="outline" onClick={onClose}>
                    Cancelar Selección
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Modal de nuevo cliente */}
      <ModalNuevoCliente
        isOpen={isNuevoClienteOpen}
        onClose={() => setIsNuevoClienteOpen(false)}
        onClienteCreado={handleClienteCreado}
      />

      {/* Modal de confirmación de eliminación */}
      {clienteAEliminar && (
        <Modal isOpen={!!clienteAEliminar} onClose={() => setClienteAEliminar(null)}>
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <Trash2 className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Eliminar Cliente
                </h3>
                <p className="text-sm text-gray-500">
                  Esta acción no se puede deshacer
                </p>
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-700">
                ¿Estás seguro de que quieres eliminar al cliente{' '}
                <span className="font-semibold">{clienteAEliminar.nombre}</span>{' '}
                (Cliente #{clienteAEliminar.numeroCliente})?
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setClienteAEliminar(null)}
                className="flex-1"
              >
                Cancelar
              </Button>
              <Button
                onClick={confirmarEliminacion}
                className="flex-1 bg-red-600 hover:bg-red-700"
              >
                Eliminar
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
