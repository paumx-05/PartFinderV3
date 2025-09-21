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
    <div className="space-y-4">
      {/* Información compacta del cliente y productos */}
      <div className="bg-gray-800 rounded-lg p-3">
        <h3 className="text-sm font-semibold text-white mb-3 flex items-center">
          <FileText className="w-4 h-4 mr-2" />
          Resumen
        </h3>
        
        {/* Cliente y matrícula en una línea */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="flex items-center space-x-2">
            <User className="w-3 h-3 text-gray-400 flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-xs text-gray-400">Cliente</p>
              <p className="text-sm text-white font-medium truncate">
                {budget.clientName || 'Sin especificar'}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Car className="w-3 h-3 text-gray-400 flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-xs text-gray-400">Matrícula</p>
              <p className="text-sm text-white font-medium truncate">
                {budget.licensePlate || 'Sin especificar'}
              </p>
            </div>
          </div>
        </div>

        {/* Números de cliente y pedido (si existen) */}
        {(budget.numeroCliente || budget.orderNumber) && (
          <div className="grid grid-cols-2 gap-2 mb-3">
            {budget.numeroCliente && (
              <div className="flex items-center space-x-2">
                <Hash className="w-3 h-3 text-gray-400 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-gray-400">Cliente #</p>
                  <p className="text-sm text-white font-medium font-mono truncate">{budget.numeroCliente}</p>
                </div>
              </div>
            )}
            
            {budget.orderNumber && (
              <div className="flex items-center space-x-2">
                <Hash className="w-3 h-3 text-gray-400 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-gray-400">Pedido</p>
                  <p className="text-sm text-white font-medium truncate">{budget.orderNumber}</p>
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Resumen de productos compacto */}
        <div className="border-t border-gray-700 pt-2">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Package className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">{budget.totalItems} productos ({budget.items.length} únicos)</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-white">Total:</span>
            <span className="text-lg font-bold text-red-400 flex items-center">
              <Euro className="w-4 h-4 mr-1" />
              {budget.totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Botones de acción compactos */}
      <div className="space-y-2">
        <button
          onClick={handleSave}
          disabled={!isFormValid || !hasItems}
          className={`w-full py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
            isFormValid && hasItems
              ? 'bg-green-600 hover:bg-green-700 text-white'
              : 'bg-gray-600 text-gray-400 cursor-not-allowed'
          }`}
        >
          <Save className="w-3 h-3 inline mr-2" />
          Guardar Presupuesto
        </button>
        
        <div className="grid grid-cols-2 gap-2">
          {onNuevoPresupuesto && (
            <button
              onClick={onNuevoPresupuesto}
              className="py-2 px-3 rounded-lg text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white transition-colors"
            >
              <Plus className="w-3 h-3 inline mr-1" />
              Nuevo
            </button>
          )}
          
          <button
            onClick={handleClear}
            className="py-2 px-3 rounded-lg text-sm font-medium bg-red-600 hover:bg-red-700 text-white transition-colors"
          >
            Limpiar
          </button>
        </div>
      </div>

      {/* Estado del presupuesto compacto */}
      <div className="bg-gray-800 rounded-lg p-2">
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
            isFormValid && hasItems ? 'bg-green-400' : 
            hasItems ? 'bg-yellow-400' : 'bg-red-400'
          }`}></div>
          <span className="text-xs text-gray-300 leading-tight">
            {isFormValid && hasItems ? 'Listo para guardar' :
             hasItems ? 'Complete información del cliente' :
             'Agregue productos'}
          </span>
        </div>
      </div>
    </div>
  );
}
