'use client';

import React, { useState, useEffect } from 'react';
import { X, Save, AlertCircle, Clock, StickyNote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useNotes } from '@/lib/contexts/NotesContext';
import { ModalNuevaNotaProps, NotePriority } from '@/lib/types/notes';

export function ModalNuevaNota({ isOpen, onClose }: ModalNuevaNotaProps) {
  const { createNote } = useNotes();
  
  const [formData, setFormData] = useState({
    cliente: '',
    matricula: '',
    telefono: '',
    contenido: '',
    prioridad: 'media' as NotePriority,
  });
  
  const [errors, setErrors] = useState({
    cliente: '',
    matricula: '',
    contenido: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Limpiar formulario al abrir
  useEffect(() => {
    if (isOpen) {
      setFormData({
        cliente: '',
        matricula: '',
        telefono: '',
        contenido: '',
        prioridad: 'media',
      });
      setErrors({ cliente: '', matricula: '', contenido: '' });
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const validateForm = () => {
    const newErrors = { cliente: '', matricula: '', contenido: '' };
    let isValid = true;

    if (!formData.cliente.trim()) {
      newErrors.cliente = 'El nombre del cliente es obligatorio';
      isValid = false;
    }

    if (!formData.matricula.trim()) {
      newErrors.matricula = 'La matrícula es obligatoria';
      isValid = false;
    } else {
      // Validación básica de matrícula española (opcional pero recomendada)
      const matriculaRegex = /^[0-9]{4}[A-Z]{3}$/;
      if (!matriculaRegex.test(formData.matricula.toUpperCase().replace(/\s/g, ''))) {
        // Solo mostrar advertencia, no bloquear
        console.warn('Formato de matrícula no estándar');
      }
    }

    if (!formData.contenido.trim()) {
      newErrors.contenido = 'El contenido de la nota es obligatorio';
      isValid = false;
    } else if (formData.contenido.trim().length < 10) {
      newErrors.contenido = 'El contenido debe tener al menos 10 caracteres';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      createNote({
        cliente: formData.cliente.trim(),
        matricula: formData.matricula.toUpperCase().trim(),
        contenido: formData.contenido.trim(),
        prioridad: formData.prioridad,
        telefono: formData.telefono.trim() || undefined,
      });

      onClose();
    } catch (error) {
      console.error('Error creando nota:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Limpiar error del campo al empezar a escribir
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const getPriorityIcon = (priority: NotePriority) => {
    switch (priority) {
      case 'alta': return <AlertCircle className="h-4 w-4" />;
      case 'media': return <Clock className="h-4 w-4" />;
      case 'baja': return <StickyNote className="h-4 w-4" />;
      default: return <StickyNote className="h-4 w-4" />;
    }
  };

  const getPriorityColor = (priority: NotePriority) => {
    switch (priority) {
      case 'alta': return 'text-red-500';
      case 'media': return 'text-yellow-500';
      case 'baja': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[calc(100vw-2rem)] max-w-md mx-auto bg-gray-800 border-gray-700 text-white max-h-[90vh] overflow-y-auto scrollbar-dark">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <StickyNote className="h-5 w-5 text-yellow-400" />
            <span>Nueva Nota Rápida</span>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          {/* Cliente */}
          <div className="space-y-2">
            <Label htmlFor="cliente" className="text-sm font-medium text-gray-200">
              Cliente *
            </Label>
            <Input
              id="cliente"
              type="text"
              placeholder="Nombre del cliente"
              value={formData.cliente}
              onChange={(e) => handleInputChange('cliente', e.target.value)}
              className={`bg-gray-700 border-gray-600 text-white placeholder-gray-400 ${
                errors.cliente ? 'border-red-500' : ''
              }`}
              autoFocus
            />
            {errors.cliente && (
              <p className="text-red-400 text-xs">{errors.cliente}</p>
            )}
          </div>

          {/* Matrícula */}
          <div className="space-y-2">
            <Label htmlFor="matricula" className="text-sm font-medium text-gray-200">
              Matrícula *
            </Label>
            <Input
              id="matricula"
              type="text"
              placeholder="1234ABC"
              value={formData.matricula}
              onChange={(e) => handleInputChange('matricula', e.target.value.toUpperCase())}
              className={`bg-gray-700 border-gray-600 text-white placeholder-gray-400 ${
                errors.matricula ? 'border-red-500' : ''
              }`}
              maxLength={7}
            />
            {errors.matricula && (
              <p className="text-red-400 text-xs">{errors.matricula}</p>
            )}
          </div>

          {/* Teléfono */}
          <div className="space-y-2">
            <Label htmlFor="telefono" className="text-sm font-medium text-gray-200">
              Teléfono (opcional)
            </Label>
            <Input
              id="telefono"
              type="tel"
              placeholder="666123456"
              value={formData.telefono}
              onChange={(e) => handleInputChange('telefono', e.target.value)}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
            />
          </div>

          {/* Prioridad */}
          <div className="space-y-2">
            <Label htmlFor="prioridad" className="text-sm font-medium text-gray-200">
              Prioridad
            </Label>
            <Select
              value={formData.prioridad}
              onValueChange={(value: NotePriority) => handleInputChange('prioridad', value)}
            >
              <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="baja" className="text-white hover:bg-gray-700">
                  <div className="flex items-center space-x-2">
                    <div className="text-green-500">
                      {getPriorityIcon('baja')}
                    </div>
                    <span>Baja</span>
                  </div>
                </SelectItem>
                <SelectItem value="media" className="text-white hover:bg-gray-700">
                  <div className="flex items-center space-x-2">
                    <div className="text-yellow-500">
                      {getPriorityIcon('media')}
                    </div>
                    <span>Media</span>
                  </div>
                </SelectItem>
                <SelectItem value="alta" className="text-white hover:bg-gray-700">
                  <div className="flex items-center space-x-2">
                    <div className="text-red-500">
                      {getPriorityIcon('alta')}
                    </div>
                    <span>Alta</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Contenido */}
          <div className="space-y-2">
            <Label htmlFor="contenido" className="text-sm font-medium text-gray-200">
              Contenido de la nota *
            </Label>
            <Textarea
              id="contenido"
              placeholder="Describe qué necesita el cliente, detalles del recambio, observaciones..."
              value={formData.contenido}
              onChange={(e) => handleInputChange('contenido', e.target.value)}
              className={`bg-gray-700 border-gray-600 text-white placeholder-gray-400 min-h-[80px] ${
                errors.contenido ? 'border-red-500' : ''
              }`}
              rows={3}
            />
            {errors.contenido && (
              <p className="text-red-400 text-xs">{errors.contenido}</p>
            )}
            <p className="text-xs text-gray-400">
              {formData.contenido.length}/500 caracteres
            </p>
          </div>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2 pt-3 sm:pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
              className="border-gray-600 text-gray-300 hover:bg-gray-700 w-full sm:w-auto order-2 sm:order-1"
            >
              <X className="h-4 w-4 mr-2" />
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto order-1 sm:order-2"
            >
              <Save className="h-4 w-4 mr-2" />
              {isSubmitting ? 'Guardando...' : 'Guardar Nota'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
