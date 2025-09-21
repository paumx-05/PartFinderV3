'use client';

import React, { useState, useMemo } from 'react';
import { X, Search, Filter, Plus, StickyNote, CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNotes } from '@/lib/contexts/NotesContext';
import { ModalGestionNotasProps, NotePriority } from '@/lib/types/notes';
import { NotaCard } from './NotaCard';

export function ModalGestionNotas({ isOpen, onClose }: ModalGestionNotasProps) {
  const { state, deleteNote, toggleNoteComplete } = useNotes();
  const [searchQuery, setSearchQuery] = useState('');
  const [priorityFilter, setPriorityFilter] = useState<NotePriority | 'todas'>('todas');
  const [statusFilter, setStatusFilter] = useState<'todas' | 'pendientes' | 'completadas'>('todas');
  const [editingNote, setEditingNote] = useState<any>(null);

  // Filtrar y buscar notas
  const filteredNotes = useMemo(() => {
    let filtered = [...state.notes];

    // Filtro por búsqueda
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(note =>
        note.cliente.toLowerCase().includes(query) ||
        note.matricula.toLowerCase().includes(query) ||
        note.contenido.toLowerCase().includes(query)
      );
    }

    // Filtro por prioridad
    if (priorityFilter !== 'todas') {
      filtered = filtered.filter(note => note.prioridad === priorityFilter);
    }

    // Filtro por estado
    if (statusFilter === 'pendientes') {
      filtered = filtered.filter(note => !note.completada);
    } else if (statusFilter === 'completadas') {
      filtered = filtered.filter(note => note.completada);
    }

    // Ordenar por fecha de creación (más recientes primero)
    return filtered.sort((a, b) => 
      new Date(b.fechaCreacion).getTime() - new Date(a.fechaCreacion).getTime()
    );
  }, [state.notes, searchQuery, priorityFilter, statusFilter]);

  const pendingNotes = filteredNotes.filter(note => !note.completada);
  const completedNotes = filteredNotes.filter(note => note.completada);

  const handleDeleteNote = (id: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta nota?')) {
      deleteNote(id);
    }
  };

  const handleEditNote = (note: any) => {
    setEditingNote(note);
    // TODO: Implementar modal de edición
    console.log('Editar nota:', note);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setPriorityFilter('todas');
    setStatusFilter('todas');
  };

  const getTabCount = (status: 'todas' | 'pendientes' | 'completadas') => {
    switch (status) {
      case 'pendientes': return pendingNotes.length;
      case 'completadas': return completedNotes.length;
      case 'todas': return filteredNotes.length;
      default: return 0;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[calc(100vw-1rem)] max-w-4xl h-[90vh] sm:max-h-[80vh] bg-gray-800 border-gray-700 text-white overflow-hidden flex flex-col scrollbar-dark">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <StickyNote className="h-5 w-5 text-yellow-400" />
              <span>Gestión de Notas</span>
              <span className="text-sm text-gray-400">
                ({state.notes.length} total)
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0 hover:bg-gray-700"
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-3 sm:space-y-4 flex-1 overflow-hidden flex flex-col">
          {/* Controles de filtrado */}
          <div className="space-y-2 sm:space-y-3 flex-shrink-0">
            {/* Búsqueda */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Buscar por cliente, matrícula o contenido..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm"
              />
            </div>

            {/* Filtros */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2 sm:gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                <Label className="text-sm text-gray-300 flex-shrink-0">Prioridad:</Label>
                <Select value={priorityFilter} onValueChange={(value: NotePriority | 'todas') => setPriorityFilter(value)}>
                  <SelectTrigger className="w-full sm:w-32 bg-gray-700 border-gray-600 text-white text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="todas" className="text-white hover:bg-gray-700">Todas</SelectItem>
                    <SelectItem value="alta" className="text-white hover:bg-gray-700">Alta</SelectItem>
                    <SelectItem value="media" className="text-white hover:bg-gray-700">Media</SelectItem>
                    <SelectItem value="baja" className="text-white hover:bg-gray-700">Baja</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                <Label className="text-sm text-gray-300 flex-shrink-0">Estado:</Label>
                <Select value={statusFilter} onValueChange={(value: 'todas' | 'pendientes' | 'completadas') => setStatusFilter(value)}>
                  <SelectTrigger className="w-full sm:w-36 bg-gray-700 border-gray-600 text-white text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="todas" className="text-white hover:bg-gray-700">Todas</SelectItem>
                    <SelectItem value="pendientes" className="text-white hover:bg-gray-700">Pendientes</SelectItem>
                    <SelectItem value="completadas" className="text-white hover:bg-gray-700">Completadas</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {(searchQuery || priorityFilter !== 'todas' || statusFilter !== 'todas') && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearFilters}
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  <Filter className="h-4 w-4 mr-1" />
                  Limpiar filtros
                </Button>
              )}
            </div>
          </div>

          {/* Tabs para organizar por estado */}
          <Tabs value={statusFilter} onValueChange={(value) => setStatusFilter(value as any)} className="w-full flex-1 overflow-hidden flex flex-col">
            <TabsList className="grid w-full grid-cols-3 bg-gray-700 flex-shrink-0">
              <TabsTrigger 
                value="todas" 
                className="data-[state=active]:bg-gray-600 data-[state=active]:text-white"
              >
                <StickyNote className="h-4 w-4 mr-2" />
                Todas ({getTabCount('todas')})
              </TabsTrigger>
              <TabsTrigger 
                value="pendientes"
                className="data-[state=active]:bg-gray-600 data-[state=active]:text-white"
              >
                <Clock className="h-4 w-4 mr-2" />
                Pendientes ({getTabCount('pendientes')})
              </TabsTrigger>
              <TabsTrigger 
                value="completadas"
                className="data-[state=active]:bg-gray-600 data-[state=active]:text-white"
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                Completadas ({getTabCount('completadas')})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="todas" className="mt-2 sm:mt-4 flex-1 overflow-hidden">
              <NotesListContent 
                notes={filteredNotes}
                onToggleComplete={toggleNoteComplete}
                onEdit={handleEditNote}
                onDelete={handleDeleteNote}
              />
            </TabsContent>

            <TabsContent value="pendientes" className="mt-2 sm:mt-4 flex-1 overflow-hidden">
              <NotesListContent 
                notes={pendingNotes}
                onToggleComplete={toggleNoteComplete}
                onEdit={handleEditNote}
                onDelete={handleDeleteNote}
              />
            </TabsContent>

            <TabsContent value="completadas" className="mt-2 sm:mt-4 flex-1 overflow-hidden">
              <NotesListContent 
                notes={completedNotes}
                onToggleComplete={toggleNoteComplete}
                onEdit={handleEditNote}
                onDelete={handleDeleteNote}
              />
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Componente auxiliar para mostrar la lista de notas
function NotesListContent({ 
  notes, 
  onToggleComplete, 
  onEdit, 
  onDelete 
}: {
  notes: any[];
  onToggleComplete: (id: string) => void;
  onEdit: (note: any) => void;
  onDelete: (id: string) => void;
}) {
  if (notes.length === 0) {
    return (
      <div className="text-center py-12">
        <StickyNote className="h-16 w-16 text-gray-400 mx-auto mb-4 opacity-50" />
        <h3 className="text-lg font-medium text-gray-300 mb-2">No hay notas</h3>
        <p className="text-gray-400">No se encontraron notas con los filtros aplicados.</p>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto space-y-3 sm:space-y-4 pr-1 sm:pr-2 scrollbar-dark">
      {notes.map((note) => (
        <NotaCard
          key={note.id}
          note={note}
          onToggleComplete={onToggleComplete}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
