// components/budget/BudgetSummary.tsx
'use client';
import React from 'react';
import { FileText, User, Car, Hash, Package, Euro, Save, Plus } from 'lucide-react';
import { Budget } from '@/lib/types/budget';
import { usePresupuestos } from '@/lib/contexts/PresupuestosContext';

interface BudgetSummaryProps {
  budget: Budget;
  onSave: () => void;
  onClear: () => void;
  onNuevoPresupuesto?: () => void;
}

export function BudgetSummary({ budget, onSave, onClear, onNuevoPresupuesto }: BudgetSummaryProps) {
  const { guardarPresupuesto, generarNumeroPresupuesto } = usePresupuestos();
  const isFormValid = budget.clientName.trim() !== '' && budget.licensePlate.trim() !== '' && budget.numeroCliente?.trim() !== '';
  const hasItems = budget.items.length > 0;

  const handleSave = () => {
    if (isFormValid && hasItems) {
      // Generar número de presupuesto si no existe
      const numeroPresupuesto = budget.numeroPresupuesto || generarNumeroPresupuesto();
      
      // Convertir Budget a PresupuestoGuardado
      const presupuestoGuardado = {
        id: budget.id,
        numeroPresupuesto,
        clientName: budget.clientName,
        licensePlate: budget.licensePlate,
        orderNumber: budget.orderNumber,
        items: budget.items,
        totalItems: budget.totalItems,
        totalPrice: budget.totalPrice,
        estado: 'guardado' as const,
        fechaCreacion: budget.createdAt,
        fechaModificacion: Date.now(),
      };
      
      // Guardar en el contexto de presupuestos
      guardarPresupuesto(presupuestoGuardado);
      
      // Llamar callback original
      onSave();
    }
  };

  const handleClear = () => {
    if (confirm('¿Estás seguro de que quieres limpiar el presupuesto?')) {
      onClear();
    }
  };

  return (
    <div className="space-y-6">
      {/* Información del cliente */}
      <div className="bg-gray-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
          <FileText className="w-5 h-5 mr-2" />
          Resumen del Presupuesto
        </h3>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <User className="w-4 h-4 text-gray-400" />
            <div>
              <p className="text-xs text-gray-400">Cliente</p>
              <p className="text-white font-medium">
                {budget.clientName || 'Sin especificar'}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Car className="w-4 h-4 text-gray-400" />
            <div>
              <p className="text-xs text-gray-400">Matrícula</p>
              <p className="text-white font-medium">
                {budget.licensePlate || 'Sin especificar'}
              </p>
            </div>
          </div>
          
          {budget.numeroCliente && (
            <div className="flex items-center space-x-3">
              <Hash className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-xs text-gray-400">Cliente #</p>
                <p className="text-white font-medium font-mono">{budget.numeroCliente}</p>
              </div>
            </div>
          )}
          
          {budget.orderNumber && (
            <div className="flex items-center space-x-3">
              <Hash className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-xs text-gray-400">Pedido</p>
                <p className="text-white font-medium">{budget.orderNumber}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Resumen de productos */}
      <div className="bg-gray-800 rounded-lg p-4">
        <div className="flex items-center space-x-3 mb-4">
          <Package className="w-5 h-5 text-gray-400" />
          <h3 className="text-lg font-semibold text-white">Productos</h3>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Total productos:</span>
            <span className="text-white font-medium">{budget.totalItems}</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Artículos únicos:</span>
            <span className="text-white font-medium">{budget.items.length}</span>
          </div>
          
          <div className="border-t border-gray-700 pt-2 mt-3">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-white">Total:</span>
              <span className="text-xl font-bold text-red-400 flex items-center">
                <Euro className="w-5 h-5 mr-1" />
                {budget.totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="space-y-3">
        <button
          onClick={handleSave}
          disabled={!isFormValid || !hasItems}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
            isFormValid && hasItems
              ? 'bg-green-600 hover:bg-green-700 text-white'
              : 'bg-gray-600 text-gray-400 cursor-not-allowed'
          }`}
        >
          <Save className="w-4 h-4 inline mr-2" />
          Guardar Presupuesto
        </button>
        
        {onNuevoPresupuesto && (
          <button
            onClick={onNuevoPresupuesto}
            className="w-full py-2 px-4 rounded-lg font-medium bg-blue-600 hover:bg-blue-700 text-white transition-colors"
          >
            <Plus className="w-4 h-4 inline mr-2" />
            Crear Nuevo Presupuesto
          </button>
        )}
        
        <button
          onClick={handleClear}
          className="w-full py-2 px-4 rounded-lg font-medium bg-red-600 hover:bg-red-700 text-white transition-colors"
        >
          Limpiar Presupuesto
        </button>
      </div>

      {/* Estado del presupuesto */}
      <div className="bg-gray-800 rounded-lg p-3">
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${
            isFormValid && hasItems ? 'bg-green-400' : 
            hasItems ? 'bg-yellow-400' : 'bg-red-400'
          }`}></div>
          <span className="text-sm text-gray-300">
            {isFormValid && hasItems ? 'Presupuesto listo para guardar' :
             hasItems ? 'Complete la información del cliente (incluyendo número de cliente)' :
             'Agregue productos al presupuesto'}
          </span>
        </div>
      </div>
    </div>
  );
}
