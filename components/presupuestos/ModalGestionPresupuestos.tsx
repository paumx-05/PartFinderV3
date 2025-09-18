// components/presupuestos/ModalGestionPresupuestos.tsx
'use client';
import React, { useState } from 'react';
import { X, FileText } from 'lucide-react';
import { usePresupuestos } from '@/lib/contexts/PresupuestosContext';
import { useBudget } from '@/lib/contexts/BudgetContext';
import { ListaPresupuestos } from './ListaPresupuestos';
import { PresupuestoGuardado } from '@/lib/types/presupuestos';

interface ModalGestionPresupuestosProps {
  isOpen: boolean;
  onClose: () => void;
  onAbrirNuevoPresupuesto?: () => void;
}

export function ModalGestionPresupuestos({ isOpen, onClose, onAbrirNuevoPresupuesto }: ModalGestionPresupuestosProps) {
  const { state: presupuestosState } = usePresupuestos();
  const { state: budgetState, setBudgetOpen, clearBudget } = useBudget();
  const [isLoading, setIsLoading] = useState(false);

  const handleNuevoPresupuesto = () => {
    // Cerrar modal de gestión
    onClose();
    // Abrir modal de nuevo presupuesto
    if (onAbrirNuevoPresupuesto) {
      onAbrirNuevoPresupuesto();
    } else {
      // Fallback: limpiar y abrir budget modal
      clearBudget();
      setBudgetOpen(true);
    }
  };

  const handleEditarPresupuesto = (presupuesto: PresupuestoGuardado) => {
    setIsLoading(true);
    
    // Aquí se cargaría el presupuesto en el BudgetContext
    // Por ahora, cerramos el modal y abrimos el budget modal
    onClose();
    setBudgetOpen(true);
    
    setIsLoading(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div className="bg-gray-900 rounded-lg shadow-2xl w-full max-w-7xl max-h-[90vh] mx-2 sm:mx-4 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-6 border-b border-gray-700">
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
            <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 flex-shrink-0" />
            <h2 className="text-lg sm:text-xl font-semibold text-white truncate">
              Gestión de Presupuestos
            </h2>
            <span className="text-sm text-gray-400">
              ({presupuestosState.lista.presupuestos.length} guardados)
            </span>
          </div>
          
          <button
            onClick={onClose}
            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors flex-shrink-0"
            aria-label="Cerrar gestión de presupuestos"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-6">
          <ListaPresupuestos
            onNuevoPresupuesto={handleNuevoPresupuesto}
            onEditarPresupuesto={handleEditarPresupuesto}
          />
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 p-3 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-400">
              {presupuestosState.lista.presupuestos.length === 0 
                ? 'No hay presupuestos guardados'
                : `${presupuestosState.lista.presupuestos.length} presupuestos guardados`
              }
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
              >
                Cerrar
              </button>
              
              <button
                onClick={handleNuevoPresupuesto}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
              >
                Nuevo Presupuesto
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
