// components/budget/BudgetModal.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { X, FileText } from 'lucide-react';
import { useBudget } from '@/lib/contexts/BudgetContext';
import { BudgetItem } from './BudgetItem';
import { BudgetForm } from './BudgetForm';
import { BudgetSummary } from './BudgetSummary';
import { BudgetEmpty } from './BudgetEmpty';
import { ModalGestionClientes } from '@/components/clientes/ModalGestionClientes';
import { ModalNuevoCliente } from '@/components/clientes/ModalNuevoCliente';

export default function BudgetModal() {
  const { state, setBudgetOpen, removeItem, updateQuantity, setClientInfo, clearBudget, saveBudget, keepBudgetActive } = useBudget();
  const { isOpen, budget } = state;
  
  // Estados para modales de clientes
  const [isGestionClientesOpen, setIsGestionClientesOpen] = useState(false);
  const [isNuevoClienteOpen, setIsNuevoClienteOpen] = useState(false);

  // Cerrar modal con Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        keepBudgetActive();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevenir scroll del body cuando el modal está abierto
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, setBudgetOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      keepBudgetActive();
    }
  };

  const handleClientInfoChange = React.useCallback((clientName: string, licensePlate: string, orderNumber?: string, numeroCliente?: string) => {
    setClientInfo(clientName, licensePlate, orderNumber, numeroCliente);
  }, [setClientInfo]);

  // Handlers para modales de clientes
  const handleAbrirGestionClientes = () => {
    setIsGestionClientesOpen(true);
  };

  const handleAbrirNuevoCliente = () => {
    setIsNuevoClienteOpen(true);
  };

  const handleClienteSeleccionado = (cliente: any) => {
    // El cliente se manejará en BudgetForm
    setIsGestionClientesOpen(false);
  };

  const handleClienteCreado = (cliente: any) => {
    // El cliente se manejará en BudgetForm
    setIsNuevoClienteOpen(false);
  };

  const handleSaveBudget = () => {
    saveBudget();
    alert('Presupuesto guardado exitosamente');
    // El presupuesto se limpia automáticamente en saveBudget()
    // El modal se cerrará automáticamente porque el presupuesto ya no existe
  };

  const handleClearBudget = () => {
    clearBudget();
  };

  const handleNuevoPresupuesto = () => {
    clearBudget();
    // El modal se mantiene abierto para crear nuevo presupuesto
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div className="bg-gray-900 rounded-lg shadow-2xl w-full max-w-6xl max-h-[95vh] mx-1 sm:mx-4 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-2 sm:p-6 border-b border-gray-700">
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
            <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 flex-shrink-0" />
            <div className="min-w-0">
              <h2 className="text-base sm:text-xl font-semibold text-white truncate">
                Presupuesto {budget?.numeroPresupuesto && `- ${budget.numeroPresupuesto}`}
              </h2>
              {budget?.clientName && (
                <p className="text-xs sm:text-sm text-gray-400 truncate">
                  Cliente: {budget.clientName} • Matrícula: {budget.licensePlate}
                </p>
              )}
            </div>
          </div>
          
          <button
            onClick={keepBudgetActive}
            className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors flex-shrink-0"
            aria-label="Cerrar presupuesto"
          >
            <X className="w-3 h-3 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden flex flex-col lg:flex-row">
          {!budget ? (
            <div className="flex-1 flex items-center justify-center">
              <BudgetEmpty onClose={() => setBudgetOpen(false)} />
            </div>
          ) : (
            <>
              {/* Lista de items y formulario */}
              <div className="flex-1 overflow-y-auto p-2 sm:p-6">
                <div className="space-y-4 sm:space-y-6">
                  {/* Formulario de información del cliente */}
                  <BudgetForm 
                    budget={budget}
                    onClientInfoChange={handleClientInfoChange}
                    onAbrirGestionClientes={handleAbrirGestionClientes}
                    onAbrirNuevoCliente={handleAbrirNuevoCliente}
                  />

                  {/* Lista de productos */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Productos en el Presupuesto ({budget.items.length})
                    </h3>
                    
                    {budget.items.length === 0 ? (
                      <div className="bg-gray-800 rounded-lg p-6 text-center">
                        <div className="mb-4">
                          <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-2xl">📦</span>
                          </div>
                          <h4 className="text-lg font-semibold text-white mb-2">
                            No hay productos en el presupuesto
                          </h4>
                          <p className="text-gray-400 text-sm">
                            Agrega productos desde el catálogo usando el botón "Presupuesto" en cada producto
                          </p>
                        </div>
                        
                        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                          <p className="text-blue-300 text-sm">
                            💡 <strong>Tip:</strong> Los productos se agregan al presupuesto usando el botón "Presupuesto" 
                            en cada producto del catálogo. El presupuesto es independiente del carrito de compras.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3 sm:space-y-4">
                        {budget.items.map((item) => (
                          <BudgetItem 
                            key={item.id} 
                            item={item}
                            onUpdateQuantity={updateQuantity}
                            onRemove={removeItem}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Resumen */}
              <div className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-gray-700 p-3 sm:p-6 overflow-y-auto">
                <BudgetSummary 
                  budget={budget}
                  onSave={handleSaveBudget}
                  onClear={handleClearBudget}
                  onNuevoPresupuesto={handleNuevoPresupuesto}
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Modales de gestión de clientes */}
      <ModalGestionClientes
        isOpen={isGestionClientesOpen}
        onClose={() => setIsGestionClientesOpen(false)}
        onClienteSeleccionado={handleClienteSeleccionado}
        modoSeleccion={true}
      />

      <ModalNuevoCliente
        isOpen={isNuevoClienteOpen}
        onClose={() => setIsNuevoClienteOpen(false)}
        onClienteCreado={handleClienteCreado}
      />
    </div>
  );
}
