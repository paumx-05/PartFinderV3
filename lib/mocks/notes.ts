import { Note } from '@/lib/types/notes';

export const notesMock: Note[] = [
  {
    id: '1',
    cliente: 'Juan Pérez García',
    matricula: '1234ABC',
    contenido: 'Necesita pastillas de freno delanteras para Seat León 2018. Menciona que hacen ruido al frenar. Urgente para el fin de semana.',
    fechaCreacion: new Date('2025-01-20T09:30:00'),
    completada: false,
    prioridad: 'alta',
    telefono: '666123456'
  },
  {
    id: '2',
    cliente: 'María González López',
    matricula: '5678DEF',
    contenido: 'Consultar compatibilidad de filtro de aceite Mann W712/75 con motor 1.6 TDI. Cliente quiere confirmar antes de comprar.',
    fechaCreacion: new Date('2025-01-20T11:15:00'),
    completada: false,
    prioridad: 'media',
    telefono: '677234567'
  },
  {
    id: '3',
    cliente: 'Carlos Rodríguez Martín',
    matricula: '9999ZZZ',
    contenido: 'Solicitar amortiguador trasero BMW X3 2020. No disponible en stock. Cliente puede esperar hasta la semana que viene.',
    fechaCreacion: new Date('2025-01-19T16:45:00'),
    completada: true,
    prioridad: 'media',
    telefono: '688345678',
    fechaModificacion: new Date('2025-01-20T10:00:00')
  },
  {
    id: '4',
    cliente: 'Ana Fernández Ruiz',
    matricula: '4321GHI',
    contenido: 'Pide presupuesto para cambio completo de embrague Volkswagen Golf VII 1.4 TSI. Incluir volante bimasa si es necesario.',
    fechaCreacion: new Date('2025-01-20T14:20:00'),
    completada: false,
    prioridad: 'alta',
    telefono: '699456789'
  },
  {
    id: '5',
    cliente: 'Roberto Silva Hernández',
    matricula: '8765JKL',
    contenido: 'Busca alternativa más económica para discos de freno traseros Audi A4. Presupuesto ajustado.',
    fechaCreacion: new Date('2025-01-20T08:10:00'),
    completada: false,
    prioridad: 'baja',
    telefono: '610567890'
  },
  {
    id: '6',
    cliente: 'Laura Jiménez Castro',
    matricula: '2468MNO',
    contenido: 'Confirmar disponibilidad de kit de distribución Renault Clio IV 1.5 dCi. Cliente viene mañana a recoger.',
    fechaCreacion: new Date('2025-01-19T13:30:00'),
    completada: true,
    prioridad: 'alta',
    telefono: '621678901',
    fechaModificacion: new Date('2025-01-19T17:15:00')
  },
  {
    id: '7',
    cliente: 'Miguel Torres Vega',
    matricula: '1357PQR',
    contenido: 'Necesita sensor de temperatura del refrigerante para Ford Focus 2015. Motor 1.6 TDCi. Código de error P0117.',
    fechaCreacion: new Date('2025-01-20T12:45:00'),
    completada: false,
    prioridad: 'media',
    telefono: '632789012'
  },
  {
    id: '8',
    cliente: 'Carmen Morales Díaz',
    matricula: '9753STU',
    contenido: 'Consulta sobre garantía de bomba de agua cambiada hace 8 meses. Tiene pérdida de refrigerante.',
    fechaCreacion: new Date('2025-01-20T15:50:00'),
    completada: false,
    prioridad: 'alta',
    telefono: '643890123'
  },
  {
    id: '9',
    cliente: 'Francisco López Sánchez',
    matricula: '6420VWX',
    contenido: 'Pide catálogo de aceites para Mercedes Clase C W205. Quiere cambiar a aceite sintético de mayor calidad.',
    fechaCreacion: new Date('2025-01-18T10:20:00'),
    completada: true,
    prioridad: 'baja',
    telefono: '654901234',
    fechaModificacion: new Date('2025-01-19T09:30:00')
  },
  {
    id: '10',
    cliente: 'Elena Vargas Romero',
    matricula: '8642YZA',
    contenido: 'Urgente: Correa de distribución rota en Peugeot 308 1.6 HDI. Necesita kit completo con bomba de agua. Coche parado.',
    fechaCreacion: new Date('2025-01-20T16:30:00'),
    completada: false,
    prioridad: 'alta',
    telefono: '665012345'
  }
];

// Función para obtener notas mock con diferentes filtros
export const getNotasMock = () => notesMock;

export const getNotasPendientesMock = () => notesMock.filter(note => !note.completada);

export const getNotasCompletadasMock = () => notesMock.filter(note => note.completada);

export const getNotasPorPrioridadMock = (prioridad: 'baja' | 'media' | 'alta') => 
  notesMock.filter(note => note.prioridad === prioridad);

export const getNotasRecientesMock = (limit: number = 5) => 
  notesMock
    .sort((a, b) => new Date(b.fechaCreacion).getTime() - new Date(a.fechaCreacion).getTime())
    .slice(0, limit);

export const buscarNotasMock = (query: string) => {
  const queryLower = query.toLowerCase();
  return notesMock.filter(note => 
    note.cliente.toLowerCase().includes(queryLower) ||
    note.matricula.toLowerCase().includes(queryLower) ||
    note.contenido.toLowerCase().includes(queryLower)
  );
};
