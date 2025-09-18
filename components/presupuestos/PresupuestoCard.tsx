// components/presupuestos/PresupuestoCard.tsx
'use client';
import React from 'react';
import { FileText, User, Car, Calendar, Euro, MoreVertical, Edit, Trash2, Copy } from 'lucide-react';
import { PresupuestoGuardado } from '@/lib/types/presupuestos';

interface PresupuestoCardProps {
  presupuesto: PresupuestoGuardado;
  onEdit: (presupuesto: PresupuestoGuardado) => void;
  onDelete: (id: string) => void;
  onDuplicate: (id: string) => void;
}

export function PresupuestoCard({ presupuesto, onEdit, onDelete, onDuplicate }: PresupuestoCardProps) {
  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'borrador': return 'bg-yellow-600';
      case 'guardado': return 'bg-green-600';
      case 'enviado': return 'bg-blue-600';
      default: return 'bg-gray-600';
    }
  };

  const getEstadoTexto = (estado: string) => {
    switch (estado) {
      case 'borrador': return 'Borrador';
      case 'guardado': return 'Guardado';
      case 'enviado': return 'Enviado';
      default: return 'Desconocido';
    }
  };

  const formatFecha = (timestamp: number) => {
    const fecha = new Date(timestamp);
    return fecha.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleEdit = () => {
    onEdit(presupuesto);
  };

  const handleDelete = () => {
    if (confirm(`¿Estás seguro de que quieres eliminar el presupuesto ${presupuesto.numeroPresupuesto}?`)) {
      onDelete(presupuesto.id);
    }
  };

  const handleDuplicate = () => {
    onDuplicate(presupuesto.id);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-colors">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <FileText className="w-5 h-5 text-red-400" />
          <div>
            <h3 className="font-semibold text-white text-sm">
              {presupuesto.numeroPresupuesto}
            </h3>
            <span className={`inline-block px-2 py-1 text-xs rounded-full text-white ${getEstadoColor(presupuesto.estado)}`}>
              {getEstadoTexto(presupuesto.estado)}
            </span>
          </div>
        </div>
        
        <div className="relative">
          <button className="p-1 hover:bg-gray-700 rounded text-gray-400 hover:text-white transition-colors">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Información del cliente */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2 text-sm">
          <User className="w-4 h-4 text-gray-400" />
          <span className="text-gray-300 truncate">{presupuesto.clientName || 'Sin cliente'}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-sm">
          <Car className="w-4 h-4 text-gray-400" />
          <span className="text-gray-300">{presupuesto.licensePlate || 'Sin matrícula'}</span>
        </div>
        
        {presupuesto.orderNumber && (
          <div className="flex items-center space-x-2 text-sm">
            <FileText className="w-4 h-4 text-gray-400" />
            <span className="text-gray-300">{presupuesto.orderNumber}</span>
          </div>
        )}
      </div>

      {/* Resumen de productos */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-gray-400">
          {presupuesto.totalItems} productos
        </div>
        <div className="flex items-center space-x-1 text-lg font-semibold text-red-400">
          <Euro className="w-4 h-4" />
          <span>{presupuesto.totalPrice.toFixed(2)}</span>
        </div>
      </div>

      {/* Fecha */}
      <div className="flex items-center space-x-2 text-xs text-gray-500 mb-4">
        <Calendar className="w-3 h-3" />
        <span>Modificado: {formatFecha(presupuesto.fechaModificacion)}</span>
      </div>

      {/* Botones de acción */}
      <div className="flex items-center space-x-2">
        <button
          onClick={handleEdit}
          className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium transition-colors"
        >
          <Edit className="w-4 h-4" />
          <span>Editar</span>
        </button>
        
        <button
          onClick={handleDuplicate}
          className="flex items-center justify-center px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded text-sm font-medium transition-colors"
          title="Duplicar presupuesto"
        >
          <Copy className="w-4 h-4" />
        </button>
        
        <button
          onClick={handleDelete}
          className="flex items-center justify-center px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded text-sm font-medium transition-colors"
          title="Eliminar presupuesto"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
