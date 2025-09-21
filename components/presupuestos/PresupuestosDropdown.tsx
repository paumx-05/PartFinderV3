// components/presupuestos/PresupuestosDropdown.tsx
'use client';
import React, { useState, useRef, useEffect } from 'react';
import { FileText, ChevronDown, Clock, Plus } from 'lucide-react';
import { usePresupuestos } from '@/lib/contexts/PresupuestosContext';
import { useBudget } from '@/lib/contexts/BudgetContext';
import { useAuth } from '@/hooks/use-auth';

interface PresupuestosDropdownProps {
  onAbrirGestion: () => void;
  onAbrirNuevoPresupuesto?: () => void;
}

export function PresupuestosDropdown({ onAbrirGestion, onAbrirNuevoPresupuesto }: PresupuestosDropdownProps) {
  const { obtenerPresupuestosRecientes } = usePresupuestos();
  const { state: budgetState, setBudgetOpen } = useBudget();
  const { isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const presupuestosRecientes = isAuthenticated ? obtenerPresupuestosRecientes(5) : [];
  const presupuestosCount = presupuestosRecientes.length;

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const formatFecha = (timestamp: number) => {
    const fecha = new Date(timestamp);
    const ahora = new Date();
    const diffMs = ahora.getTime() - fecha.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMins < 60) {
      return `hace ${diffMins} min`;
    } else if (diffHours < 24) {
      return `hace ${diffHours}h`;
    } else if (diffDays < 7) {
      return `hace ${diffDays}d`;
    } else {
      return fecha.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit' });
    }
  };

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'borrador': return 'bg-yellow-500';
      case 'guardado': return 'bg-green-500';
      case 'enviado': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Botón principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center space-x-1 hover:text-red-200 transition-colors p-1"
        aria-label="Presupuestos"
      >
        <FileText className={`h-5 w-5 ${budgetState.budget && isAuthenticated ? 'text-green-400' : ''}`} />
        
        {/* Indicador de presupuesto activo */}
        {budgetState.budget && isAuthenticated && (
          <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold animate-pulse">
            ●
          </span>
        )}
        
        {/* Contador de presupuestos guardados */}
        {!budgetState.budget && presupuestosCount > 0 && isAuthenticated && (
          <span className="absolute -top-1 -right-1 bg-white text-red-600 text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
            {presupuestosCount}
          </span>
        )}
        
        <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50">
          {/* Header */}
          <div className="p-3 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-white text-sm">Presupuestos Recientes</h3>
              <button
                onClick={onAbrirGestion}
                className="text-xs text-red-400 hover:text-red-300 transition-colors"
              >
                Ver todos
              </button>
            </div>
          </div>

          {/* Presupuesto activo */}
          {budgetState.budget && isAuthenticated && (
            <div className="p-3 border-b border-gray-700 bg-green-900/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-300">Presupuesto Activo</span>
                </div>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setBudgetOpen(true);
                  }}
                  className="text-xs text-green-400 hover:text-green-300 transition-colors"
                >
                  Continuar
                </button>
              </div>
              <div className="mt-2 text-xs text-gray-400">
                <div>Cliente: {budgetState.budget.clientName}</div>
                <div>Matrícula: {budgetState.budget.licensePlate}</div>
                <div>Productos: {budgetState.budget.items.length}</div>
              </div>
            </div>
          )}

          {/* Lista de presupuestos */}
          <div className="max-h-64 overflow-y-auto">
            {presupuestosRecientes.length === 0 ? (
              <div className="p-4 text-center">
                <FileText className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                <p className="text-sm text-gray-400 mb-3">No hay presupuestos guardados</p>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onAbrirGestion();
                  }}
                  className="text-xs text-red-400 hover:text-red-300 transition-colors"
                >
                  Crear primer presupuesto
                </button>
              </div>
            ) : (
              <div className="p-2">
                {presupuestosRecientes.map((presupuesto) => (
                  <div
                    key={presupuesto.id}
                    className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded cursor-pointer transition-colors"
                    onClick={() => {
                      setIsOpen(false);
                      // Aquí se cargaría el presupuesto
                    }}
                  >
                    {/* Estado */}
                    <div className={`w-2 h-2 rounded-full ${getEstadoColor(presupuesto.estado)}`}></div>
                    
                    {/* Información */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-white truncate">
                          {presupuesto.numeroPresupuesto}
                        </span>
                        <span className="text-xs text-gray-400">
                          €{presupuesto.totalPrice.toFixed(0)}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-gray-400">
                        <span className="truncate">{presupuesto.clientName || 'Sin cliente'}</span>
                        <span>•</span>
                        <span>{formatFecha(presupuesto.fechaModificacion)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-3 border-t border-gray-700">
            <button
              onClick={() => {
                setIsOpen(false);
                if (onAbrirNuevoPresupuesto) {
                  onAbrirNuevoPresupuesto();
                } else {
                  onAbrirGestion();
                }
              }}
              className="w-full flex items-center justify-center space-x-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded text-sm font-medium transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Nuevo Presupuesto</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
