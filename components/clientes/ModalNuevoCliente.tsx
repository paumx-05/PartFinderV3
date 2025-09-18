'use client';

import React, { useState } from 'react';
import { useClientes } from '@/lib/contexts/ClientesContext';
import { ClienteFormData } from '@/lib/types/clients';
import { ClienteForm } from './ClienteForm';
import { Modal } from '@/components/ui/modal';
import { X } from 'lucide-react';

interface ModalNuevoClienteProps {
  isOpen: boolean;
  onClose: () => void;
  onClienteCreado?: (cliente: any) => void;
}

export const ModalNuevoCliente: React.FC<ModalNuevoClienteProps> = ({
  isOpen,
  onClose,
  onClienteCreado,
}) => {
  const { crearCliente, state } = useClientes();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (clienteData: ClienteFormData) => {
    setIsLoading(true);
    try {
      const nuevoCliente = crearCliente(clienteData);
      
      // Mostrar mensaje de éxito
      alert(`Cliente creado exitosamente con número: ${nuevoCliente.numeroCliente}`);
      
      // Llamar callback si existe
      if (onClienteCreado) {
        onClienteCreado(nuevoCliente);
      }
      
      // Cerrar modal
      onClose();
    } catch (error) {
      console.error('Error creating cliente:', error);
      alert('Error al crear el cliente. Por favor, inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[95vh] overflow-y-auto mx-1 sm:mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-6 border-b border-gray-200">
          <div className="min-w-0 flex-1">
            <h2 className="text-base sm:text-xl font-semibold text-gray-900">
              Nuevo Cliente
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Complete los datos del cliente. Los campos marcados con * son obligatorios.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-colors flex-shrink-0"
            aria-label="Cerrar modal"
          >
            <X className="w-3 h-3 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-6">
          <ClienteForm
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            isLoading={isLoading}
            submitText="Crear Cliente"
            showCancel={true}
          />
        </div>

        {/* Footer con información adicional */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-lg">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>
              <span className="font-medium">Próximo número de cliente:</span>
              <span className="ml-2 font-mono bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {state.contador.toString().padStart(4, '0')}
              </span>
            </div>
            <div>
              Total de clientes: <span className="font-medium">{state.clientes.length}</span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
