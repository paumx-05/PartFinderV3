// components/presupuestos/ListaPresupuestos.tsx
'use client';
import React, { useState, useMemo } from 'react';
import { Search, Plus, Filter, FileText, Calendar, User } from 'lucide-react';
import { usePresupuestos } from '@/lib/contexts/PresupuestosContext';
import { PresupuestoCard } from './PresupuestoCard';
import { PresupuestoGuardado } from '@/lib/types/presupuestos';

interface ListaPresupuestosProps {
  onNuevoPresupuesto: () => void;
  onEditarPresupuesto: (presupuesto: PresupuestoGuardado) => void;
}

export function ListaPresupuestos({ onNuevoPresupuesto, onEditarPresupuesto }: ListaPresupuestosProps) {
  const { state, eliminarPresupuesto, duplicarPresupuesto, buscarPresupuestos } = usePresupuestos();
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [filtroEstado, setFiltroEstado] = useState<string>('todos');
  const [ordenarPor, setOrdenarPor] = useState<'fecha' | 'cliente' | 'total'>('fecha');

  // Filtrar y ordenar presupuestos
  const presupuestosFiltrados = useMemo(() => {
    let presupuestos = terminoBusqueda 
      ? buscarPresupuestos(terminoBusqueda)
      : state.lista.presupuestos;

    // Filtrar por estado
    if (filtroEstado !== 'todos') {
      presupuestos = presupuestos.filter(p => p.estado === filtroEstado);
    }

    // Ordenar
    presupuestos.sort((a, b) => {
      switch (ordenarPor) {
        case 'fecha':
          return b.fechaModificacion - a.fechaModificacion;
        case 'cliente':
          return a.clientName.localeCompare(b.clientName);
        case 'total':
          return b.totalPrice - a.totalPrice;
        default:
          return 0;
      }
    });

    return presupuestos;
  }, [state.lista.presupuestos, terminoBusqueda, filtroEstado, ordenarPor, buscarPresupuestos]);

  const handleEliminar = (id: string) => {
    eliminarPresupuesto(id);
  };

  const handleDuplicar = (id: string) => {
    duplicarPresupuesto(id);
  };

  const handleEditar = (presupuesto: PresupuestoGuardado) => {
    onEditarPresupuesto(presupuesto);
  };

  const limpiarFiltros = () => {
    setTerminoBusqueda('');
    setFiltroEstado('todos');
    setOrdenarPor('fecha');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <FileText className="w-6 h-6 text-red-400" />
          <h2 className="text-xl font-semibold text-white">
            Presupuestos Guardados ({presupuestosFiltrados.length})
          </h2>
        </div>
        
        <button
          onClick={onNuevoPresupuesto}
          className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Nuevo Presupuesto</span>
        </button>
      </div>

      {/* Filtros y búsqueda */}
      <div className="bg-gray-800 rounded-lg p-4 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Búsqueda */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por cliente, matrícula o número..."
                value={terminoBusqueda}
                onChange={(e) => setTerminoBusqueda(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Filtro por estado */}
          <div className="sm:w-48">
            <select
              value={filtroEstado}
              onChange={(e) => setFiltroEstado(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="todos">Todos los estados</option>
              <option value="borrador">Borrador</option>
              <option value="guardado">Guardado</option>
              <option value="enviado">Enviado</option>
            </select>
          </div>

          {/* Ordenar por */}
          <div className="sm:w-48">
            <select
              value={ordenarPor}
              onChange={(e) => setOrdenarPor(e.target.value as 'fecha' | 'cliente' | 'total')}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="fecha">Ordenar por fecha</option>
              <option value="cliente">Ordenar por cliente</option>
              <option value="total">Ordenar por total</option>
            </select>
          </div>
        </div>

        {/* Botón limpiar filtros */}
        {(terminoBusqueda || filtroEstado !== 'todos' || ordenarPor !== 'fecha') && (
          <button
            onClick={limpiarFiltros}
            className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <Filter className="w-4 h-4" />
            <span>Limpiar filtros</span>
          </button>
        )}
      </div>

      {/* Lista de presupuestos */}
      {presupuestosFiltrados.length === 0 ? (
        <div className="text-center py-12">
          <FileText className="w-16 h-16 text-gray-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">
            {terminoBusqueda || filtroEstado !== 'todos' ? 'No se encontraron presupuestos' : 'No hay presupuestos guardados'}
          </h3>
          <p className="text-gray-400 mb-6">
            {terminoBusqueda || filtroEstado !== 'todos' 
              ? 'Intenta ajustar los filtros de búsqueda'
              : 'Crea tu primer presupuesto para comenzar'
            }
          </p>
          {!terminoBusqueda && filtroEstado === 'todos' && (
            <button
              onClick={onNuevoPresupuesto}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
            >
              Crear Primer Presupuesto
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {presupuestosFiltrados.map((presupuesto) => (
            <PresupuestoCard
              key={presupuesto.id}
              presupuesto={presupuesto}
              onEdit={handleEditar}
              onDelete={handleEliminar}
              onDuplicate={handleDuplicar}
            />
          ))}
        </div>
      )}

      {/* Estadísticas */}
      {state.lista.presupuestos.length > 0 && (
        <div className="bg-gray-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-3">Estadísticas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-red-400">{state.lista.presupuestos.length}</div>
              <div className="text-sm text-gray-400">Total Presupuestos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">
                {state.lista.presupuestos.filter(p => p.estado === 'guardado').length}
              </div>
              <div className="text-sm text-gray-400">Guardados</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">
                {state.lista.presupuestos.filter(p => p.estado === 'enviado').length}
              </div>
              <div className="text-sm text-gray-400">Enviados</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">
                {state.lista.presupuestos.filter(p => p.estado === 'borrador').length}
              </div>
              <div className="text-sm text-gray-400">Borradores</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
