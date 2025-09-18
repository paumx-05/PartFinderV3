// components/presupuestos/ModalNuevoPresupuesto.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { X, User, Car, Hash, ArrowRight, Plus } from 'lucide-react';
import { useBudget } from '@/lib/contexts/BudgetContext';
import { usePresupuestos } from '@/lib/contexts/PresupuestosContext';
import { useClientes } from '@/lib/contexts/ClientesContext';

interface ModalNuevoPresupuestoProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalNuevoPresupuesto({ isOpen, onClose }: ModalNuevoPresupuestoProps) {
  const { initializeBudgetWithClient, setBudgetOpen } = useBudget();
  const { generarNumeroPresupuesto } = usePresupuestos();
  const { buscarCliente } = useClientes();
  
  const [paso, setPaso] = useState<'datos' | 'productos'>('datos');
  const [datosCliente, setDatosCliente] = useState({
    clientName: '',
    licensePlate: '',
    orderNumber: '',
    numeroCliente: '',
  });

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Auto-rellenar nombre cuando se ingresa un número de cliente existente
  useEffect(() => {
    if (datosCliente.numeroCliente.trim() !== '') {
      const clienteExistente = buscarCliente(datosCliente.numeroCliente.trim());
      if (clienteExistente && datosCliente.clientName === '') {
        setDatosCliente(prev => ({
          ...prev,
          clientName: clienteExistente.nombre
        }));
      }
    }
  }, [datosCliente.numeroCliente, buscarCliente]);

  const handleInputChange = (field: string, value: string) => {
    setDatosCliente(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const isDatosValidos = datosCliente.clientName.trim() !== '' && datosCliente.licensePlate.trim() !== '' && datosCliente.numeroCliente.trim() !== '';

  const handleContinuarAProductos = () => {
    if (!isDatosValidos) return;

    // Generar número de presupuesto
    const numeroPresupuesto = generarNumeroPresupuesto();
    
    // Crear nuevo presupuesto con datos del cliente
    initializeBudgetWithClient(
      datosCliente.clientName,
      datosCliente.licensePlate,
      datosCliente.orderNumber,
      numeroPresupuesto,
      datosCliente.numeroCliente
    );
    
    // Cerrar este modal
    onClose();
    
    // Abrir el budget modal después de un pequeño delay para asegurar que el presupuesto se guarde
    setTimeout(() => {
      setBudgetOpen(true);
    }, 100);
  };

  const handleCancelar = () => {
    setDatosCliente({
      clientName: '',
      licensePlate: '',
      orderNumber: '',
      numeroCliente: '',
    });
    setPaso('datos');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div className="bg-gray-900 rounded-lg shadow-2xl w-full max-w-2xl mx-2 sm:mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <Plus className="w-6 h-6 text-red-400" />
            <h2 className="text-xl font-semibold text-white">
              Crear Nuevo Presupuesto
            </h2>
          </div>
          
          <button
            onClick={handleCancelar}
            className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Paso 1: Datos del Cliente */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-600 rounded-full mb-4">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Información del Cliente
              </h3>
              <p className="text-gray-400 text-sm">
                Completa los datos del cliente para crear el presupuesto
              </p>
            </div>

            <div className="space-y-4">
              {/* Número de cliente - PRIMER CAMPO */}
              <div>
                <label htmlFor="numeroCliente" className="block text-sm font-medium text-gray-300 mb-2">
                  <Hash className="w-4 h-4 inline mr-2" />
                  Número de Cliente *
                </label>
                <input
                  id="numeroCliente"
                  type="text"
                  value={datosCliente.numeroCliente}
                  onChange={(e) => handleInputChange('numeroCliente', e.target.value)}
                  placeholder="Ej: 0001"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent font-mono"
                  required
                />
                {datosCliente.numeroCliente.trim() === '' && (
                  <p className="text-red-400 text-xs mt-1">Este campo es obligatorio</p>
                )}
                {datosCliente.numeroCliente.trim() !== '' && (
                  <p className="text-green-400 text-xs mt-1">
                    {buscarCliente(datosCliente.numeroCliente.trim()) 
                      ? '✓ Cliente encontrado - Nombre auto-rellenado' 
                      : '⚠ Cliente no encontrado - Ingrese datos manualmente'}
                  </p>
                )}
              </div>

              {/* Nombre del cliente */}
              <div>
                <label htmlFor="clientName" className="block text-sm font-medium text-gray-300 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Nombre del Cliente *
                </label>
                <input
                  id="clientName"
                  type="text"
                  value={datosCliente.clientName}
                  onChange={(e) => handleInputChange('clientName', e.target.value)}
                  placeholder="Se rellena automáticamente si el cliente existe"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
                {datosCliente.clientName.trim() === '' && (
                  <p className="text-red-400 text-xs mt-1">Este campo es obligatorio</p>
                )}
              </div>

              {/* Matrícula */}
              <div>
                <label htmlFor="licensePlate" className="block text-sm font-medium text-gray-300 mb-2">
                  <Car className="w-4 h-4 inline mr-2" />
                  Matrícula del Vehículo *
                </label>
                <input
                  id="licensePlate"
                  type="text"
                  value={datosCliente.licensePlate}
                  onChange={(e) => handleInputChange('licensePlate', e.target.value.toUpperCase())}
                  placeholder="Ej: 1234-ABC"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
                {datosCliente.licensePlate.trim() === '' && (
                  <p className="text-red-400 text-xs mt-1">Este campo es obligatorio</p>
                )}
              </div>

              {/* Número de pedido */}
              <div>
                <label htmlFor="orderNumber" className="block text-sm font-medium text-gray-300 mb-2">
                  <Hash className="w-4 h-4 inline mr-2" />
                  Número de Pedido (Opcional)
                </label>
                <input
                  id="orderNumber"
                  type="text"
                  value={datosCliente.orderNumber}
                  onChange={(e) => handleInputChange('orderNumber', e.target.value)}
                  placeholder="Ej: PED-2025-001"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Estado del formulario */}
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${isDatosValidos ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
                <span className="text-sm text-gray-300">
                  {isDatosValidos ? 'Datos completos - Listo para continuar' : 'Complete los campos obligatorios'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <button
              onClick={handleCancelar}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
            >
              Cancelar
            </button>
            
            <button
              onClick={handleContinuarAProductos}
              disabled={!isDatosValidos}
              className={`flex items-center space-x-2 px-6 py-2 rounded-lg font-medium transition-colors ${
                isDatosValidos
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              <span>Continuar a Productos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
