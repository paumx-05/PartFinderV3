'use client';

import React, { useState, useEffect } from 'react';
import { Cliente, ClienteFormData } from '@/lib/types/clients';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ClienteFormProps {
  cliente?: Cliente | null;
  onSubmit: (clienteData: ClienteFormData) => void;
  onCancel?: () => void;
  isLoading?: boolean;
  submitText?: string;
  showCancel?: boolean;
}

export const ClienteForm: React.FC<ClienteFormProps> = ({
  cliente,
  onSubmit,
  onCancel,
  isLoading = false,
  submitText = 'Guardar Cliente',
  showCancel = true,
}) => {
  const [formData, setFormData] = useState<ClienteFormData>({
    nombre: '',
    telefono: '',
    correo: '',
    poblacion: '',
    direccion: '',
  });

  const [errors, setErrors] = useState<Partial<ClienteFormData>>({});

  // Cargar datos del cliente si se proporciona
  useEffect(() => {
    if (cliente) {
      setFormData({
        nombre: cliente.nombre,
        telefono: cliente.telefono,
        correo: cliente.correo || '',
        poblacion: cliente.poblacion,
        direccion: cliente.direccion,
      });
    }
  }, [cliente]);

  // Validación de campos
  const validateField = (field: keyof ClienteFormData, value: string): string => {
    switch (field) {
      case 'nombre':
        if (!value.trim()) return 'El nombre es obligatorio';
        if (value.trim().split(' ').length < 2) return 'El nombre debe tener al menos 2 palabras';
        return '';
      
      case 'telefono':
        if (!value.trim()) return 'El teléfono es obligatorio';
        if (!/^[0-9]{9}$/.test(value.replace(/\s/g, ''))) return 'El teléfono debe tener 9 dígitos';
        return '';
      
      case 'correo':
        if (value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'El correo electrónico no es válido';
        }
        return '';
      
      case 'poblacion':
        if (!value.trim()) return 'La población es obligatoria';
        return '';
      
      case 'direccion':
        if (!value.trim()) return 'La dirección es obligatoria';
        return '';
      
      default:
        return '';
    }
  };

  // Manejar cambios en los campos
  const handleFieldChange = (field: keyof ClienteFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Validar campo en tiempo real
    const error = validateField(field, value);
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  // Validar todo el formulario
  const validateForm = (): boolean => {
    const newErrors: Partial<ClienteFormData> = {};
    let isValid = true;

    (Object.keys(formData) as Array<keyof ClienteFormData>).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  // Manejar envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="p-3 sm:p-6">
        <CardTitle className="text-base sm:text-xl font-semibold">
          {cliente ? 'Editar Cliente' : 'Nuevo Cliente'}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 sm:p-6">
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          {/* Nombre */}
          <div className="space-y-2">
            <Label htmlFor="nombre">Nombre Completo *</Label>
            <Input
              id="nombre"
              type="text"
              value={formData.nombre}
              onChange={(e) => handleFieldChange('nombre', e.target.value)}
              placeholder="Ej: Pau Maldonado Lopez"
              className={errors.nombre ? 'border-red-500' : ''}
            />
            {errors.nombre && (
              <p className="text-sm text-red-500">{errors.nombre}</p>
            )}
          </div>

          {/* Teléfono */}
          <div className="space-y-2">
            <Label htmlFor="telefono">Teléfono *</Label>
            <Input
              id="telefono"
              type="tel"
              value={formData.telefono}
              onChange={(e) => handleFieldChange('telefono', e.target.value)}
              placeholder="Ej: 6868045147"
              className={errors.telefono ? 'border-red-500' : ''}
            />
            {errors.telefono && (
              <p className="text-sm text-red-500">{errors.telefono}</p>
            )}
          </div>

          {/* Correo */}
          <div className="space-y-2">
            <Label htmlFor="correo">Correo Electrónico</Label>
            <Input
              id="correo"
              type="email"
              value={formData.correo}
              onChange={(e) => handleFieldChange('correo', e.target.value)}
              placeholder="Ej: pablomaldonado422@gmail.com"
              className={errors.correo ? 'border-red-500' : ''}
            />
            {errors.correo && (
              <p className="text-sm text-red-500">{errors.correo}</p>
            )}
          </div>

          {/* Población */}
          <div className="space-y-2">
            <Label htmlFor="poblacion">Población *</Label>
            <Input
              id="poblacion"
              type="text"
              value={formData.poblacion}
              onChange={(e) => handleFieldChange('poblacion', e.target.value)}
              placeholder="Ej: Pineda de Mar"
              className={errors.poblacion ? 'border-red-500' : ''}
            />
            {errors.poblacion && (
              <p className="text-sm text-red-500">{errors.poblacion}</p>
            )}
          </div>

          {/* Dirección */}
          <div className="space-y-2">
            <Label htmlFor="direccion">Dirección *</Label>
            <Input
              id="direccion"
              type="text"
              value={formData.direccion}
              onChange={(e) => handleFieldChange('direccion', e.target.value)}
              placeholder="Ej: Av/ Hispanitat 49 3-1"
              className={errors.direccion ? 'border-red-500' : ''}
            />
            {errors.direccion && (
              <p className="text-sm text-red-500">{errors.direccion}</p>
            )}
          </div>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4">
            <Button
              type="submit"
              disabled={isLoading}
              className="flex-1 text-sm sm:text-base"
            >
              {isLoading ? 'Guardando...' : submitText}
            </Button>
            
            {showCancel && onCancel && (
              <Button
                type="button"
                variant="outline"
                onClick={onCancel}
                disabled={isLoading}
                className="text-sm sm:text-base"
              >
                Cancelar
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
