'use client';

import React from 'react';
import { Check, Edit2, Trash2, Phone, Calendar, AlertCircle, Clock, StickyNote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { NotaCardProps } from '@/lib/types/notes';

export function NotaCard({ note, onToggleComplete, onEdit, onDelete }: NotaCardProps) {
  const getPriorityColor = (priority: 'baja' | 'media' | 'alta') => {
    switch (priority) {
      case 'alta': return 'border-l-red-500 bg-red-50/5';
      case 'media': return 'border-l-yellow-500 bg-yellow-50/5';
      case 'baja': return 'border-l-green-500 bg-green-50/5';
      default: return 'border-l-gray-500 bg-gray-50/5';
    }
  };

  const getPriorityIcon = (priority: 'baja' | 'media' | 'alta') => {
    switch (priority) {
      case 'alta': return <AlertCircle className="h-4 w-4 text-red-500" />;
      case 'media': return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'baja': return <StickyNote className="h-4 w-4 text-green-500" />;
      default: return <StickyNote className="h-4 w-4 text-gray-500" />;
    }
  };

  const getPriorityText = (priority: 'baja' | 'media' | 'alta') => {
    switch (priority) {
      case 'alta': return 'Alta';
      case 'media': return 'Media';
      case 'baja': return 'Baja';
      default: return 'Media';
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const truncateText = (text: string, maxLength: number = 150) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <Card className={`p-4 border-l-4 transition-all duration-200 hover:shadow-md bg-gray-800 border-gray-700 ${getPriorityColor(note.prioridad)} ${
      note.completada ? 'opacity-60' : ''
    }`}>
      <div className="space-y-3">
        {/* Header con cliente y matrícula */}
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2">
              <h3 className={`font-semibold text-lg ${note.completada ? 'line-through text-gray-400' : 'text-white'}`}>
                {note.cliente}
              </h3>
              {note.completada && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  <Check className="h-3 w-3 mr-1" />
                  Completada
                </span>
              )}
            </div>
            <div className="flex items-center space-x-4 mt-1">
              <span className={`text-sm font-mono ${note.completada ? 'text-gray-500' : 'text-gray-300'}`}>
                {note.matricula}
              </span>
              {note.telefono && (
                <div className="flex items-center space-x-1">
                  <Phone className="h-3 w-3 text-gray-400" />
                  <span className="text-sm text-gray-400">{note.telefono}</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex items-center space-x-1">
            {getPriorityIcon(note.prioridad)}
            <span className={`text-xs font-medium ${
              note.prioridad === 'alta' ? 'text-red-500' :
              note.prioridad === 'media' ? 'text-yellow-500' : 'text-green-500'
            }`}>
              {getPriorityText(note.prioridad)}
            </span>
          </div>
        </div>

        {/* Contenido */}
        <div className="space-y-2">
          <p className={`text-sm leading-relaxed ${note.completada ? 'text-gray-500' : 'text-gray-200'}`}>
            {truncateText(note.contenido)}
          </p>
        </div>

        {/* Footer con fecha y acciones */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-600">
          <div className="flex items-center space-x-1 text-xs text-gray-400">
            <Calendar className="h-3 w-3" />
            <span>
              Creada: {formatDate(note.fechaCreacion)}
            </span>
            {note.fechaModificacion && (
              <span className="ml-2">
                • Modificada: {formatDate(note.fechaModificacion)}
              </span>
            )}
          </div>
          
          <div className="flex items-center space-x-1">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onToggleComplete(note.id)}
              className={`h-8 w-8 p-0 hover:bg-gray-700 ${
                note.completada 
                  ? 'text-yellow-400 hover:text-yellow-300' 
                  : 'text-green-400 hover:text-green-300'
              }`}
              title={note.completada ? 'Marcar como pendiente' : 'Marcar como completada'}
            >
              <Check className="h-4 w-4" />
            </Button>
            
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onEdit(note)}
              className="h-8 w-8 p-0 text-blue-400 hover:text-blue-300 hover:bg-gray-700"
              title="Editar nota"
            >
              <Edit2 className="h-4 w-4" />
            </Button>
            
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onDelete(note.id)}
              className="h-8 w-8 p-0 text-red-400 hover:text-red-300 hover:bg-gray-700"
              title="Eliminar nota"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
