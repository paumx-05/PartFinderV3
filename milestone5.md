# Milestone 5: Sistema de Presupuestos Funcional

## Objetivo
Crear un apartado de presupuestos funcional donde poder añadir productos sin pasar por la cesta, con diferentes campos como nombre del cliente, matrícula y número de pedido.

## To-Do List

### 1. Análisis y Diseño
- [ ] **1.1** Analizar estructura existente del carrito y productos
- [ ] **1.2** Diseñar tipos TypeScript para presupuestos
- [ ] **1.3** Definir estructura de datos para presupuestos
- [ ] **1.4** Planificar flujo de usuario para creación de presupuestos

### 2. Tipos y Interfaces
- [ ] **2.1** Crear `lib/types/budget.ts` con interfaces:
  - [ ] `BudgetItem` (producto en presupuesto)
  - [ ] `Budget` (presupuesto completo)
  - [ ] `BudgetState` (estado del contexto)
  - [ ] `BudgetAction` (acciones del reducer)
  - [ ] `BudgetContextType` (tipo del contexto)

### 3. Contexto de Estado
- [ ] **3.1** Crear `lib/contexts/BudgetContext.tsx`:
  - [ ] Implementar reducer para manejo de estado
  - [ ] Funciones para agregar/remover productos
  - [ ] Funciones para gestionar información del cliente
  - [ ] Persistencia en localStorage
  - [ ] Provider del contexto

### 4. Componentes de Presupuesto
- [ ] **4.1** Crear `components/budget/BudgetModal.tsx`:
  - [ ] Modal principal para gestión de presupuestos
  - [ ] Formulario para datos del cliente
  - [ ] Lista de productos del presupuesto
  - [ ] Botones de acción (guardar, limpiar, cerrar)

- [ ] **4.2** Crear `components/budget/BudgetForm.tsx`:
  - [ ] Formulario para datos del cliente (nombre, matrícula, número de pedido)
  - [ ] Validación de campos
  - [ ] Campos obligatorios y opcionales

- [ ] **4.3** Crear `components/budget/BudgetItem.tsx`:
  - [ ] Componente para mostrar producto en presupuesto
  - [ ] Cantidad editable
  - [ ] Botón para eliminar producto
  - [ ] Precio total del item

- [ ] **4.4** Crear `components/budget/BudgetSummary.tsx`:
  - [ ] Resumen del presupuesto
  - [ ] Total de productos
  - [ ] Precio total
  - [ ] Información del cliente

- [ ] **4.5** Crear `components/budget/BudgetButton.tsx`:
  - [ ] Botón para abrir modal de presupuesto
  - [ ] Indicador de productos en presupuesto
  - [ ] Integración con PartCard

### 5. Integración con Componentes Existentes
- [ ] **5.1** Modificar `components/PartCard.tsx`:
  - [ ] Agregar botón "Añadir a Presupuesto"
  - [ ] Mantener botón "Añadir al Carrito" existente
  - [ ] Manejar ambos flujos independientemente

- [ ] **5.2** Modificar `components/Header.tsx`:
  - [ ] Agregar indicador de presupuesto
  - [ ] Botón para acceder a presupuestos
  - [ ] Contador de productos en presupuesto

### 6. Funcionalidades Específicas
- [ ] **6.1** Gestión de productos:
  - [ ] Añadir producto al presupuesto
  - [ ] Modificar cantidad de productos
  - [ ] Eliminar productos del presupuesto
  - [ ] Limpiar presupuesto completo

- [ ] **6.2** Gestión de información del cliente:
  - [ ] Campo nombre del cliente (obligatorio)
  - [ ] Campo matrícula del vehículo (obligatorio)
  - [ ] Campo número de pedido (opcional)
  - [ ] Validación de campos

- [ ] **6.3** Persistencia y estado:
  - [ ] Guardar presupuesto en localStorage
  - [ ] Cargar presupuesto al inicializar
  - [ ] Limpiar presupuesto
  - [ ] Manejo de errores

### 7. UI/UX
- [ ] **7.1** Diseño del modal:
  - [ ] Diseño responsive
  - [ ] Animaciones de entrada/salida
  - [ ] Estados de carga
  - [ ] Mensajes de confirmación

- [ ] **7.2** Formulario de cliente:
  - [ ] Campos bien etiquetados
  - [ ] Validación en tiempo real
  - [ ] Mensajes de error claros
  - [ ] Autocompletado si es posible

- [ ] **7.3** Lista de productos:
  - [ ] Diseño similar al carrito
  - [ ] Controles intuitivos para cantidad
  - [ ] Información clara del producto
  - [ ] Botones de acción accesibles

### 8. Testing y Validación
- [ ] **8.1** Probar funcionalidades básicas:
  - [ ] Añadir productos al presupuesto
  - [ ] Modificar cantidades
  - [ ] Eliminar productos
  - [ ] Guardar información del cliente

- [ ] **8.2** Probar persistencia:
  - [ ] Recargar página mantiene presupuesto
  - [ ] Limpiar presupuesto funciona correctamente
  - [ ] Manejo de errores de localStorage

- [ ] **8.3** Probar integración:
  - [ ] Presupuesto independiente del carrito
  - [ ] Ambos sistemas funcionan simultáneamente
  - [ ] UI consistente con diseño existente

### 9. Documentación
- [ ] **9.1** Documentar tipos TypeScript
- [ ] **9.2** Documentar funciones del contexto
- [ ] **9.3** Documentar componentes creados
- [ ] **9.4** Actualizar README si es necesario

### 10. Optimizaciones
- [ ] **10.1** Optimizar rendimiento:
  - [ ] Memoización de componentes
  - [ ] Optimización de re-renders
  - [ ] Lazy loading si es necesario

- [ ] **10.2** Mejoras de accesibilidad:
  - [ ] Navegación por teclado
  - [ ] Etiquetas ARIA
  - [ ] Contraste de colores
  - [ ] Lectores de pantalla

## Criterios de Aceptación

### Funcionalidades Principales
1. ✅ Usuario puede añadir productos al presupuesto sin afectar el carrito
2. ✅ Usuario puede especificar nombre del cliente, matrícula y número de pedido
3. ✅ Usuario puede modificar cantidades de productos en el presupuesto
4. ✅ Usuario puede eliminar productos del presupuesto
5. ✅ Presupuesto se mantiene al recargar la página
6. ✅ Presupuesto es independiente del carrito de compras

### Interfaz de Usuario
1. ✅ Modal intuitivo y fácil de usar
2. ✅ Formulario claro para datos del cliente
3. ✅ Lista de productos fácil de gestionar
4. ✅ Botones de acción bien posicionados
5. ✅ Diseño responsive y consistente

### Validación y Robustez
1. ✅ Campos obligatorios validados
2. ✅ Manejo de errores apropiado
3. ✅ Persistencia confiable
4. ✅ Estados de carga indicados

## Notas Técnicas

### Estructura de Datos Propuesta
```typescript
interface BudgetItem {
  id: string;
  part: Part;
  quantity: number;
  addedAt: number;
}

interface Budget {
  id: string;
  clientName: string;
  licensePlate: string;
  orderNumber?: string;
  items: BudgetItem[];
  totalItems: number;
  totalPrice: number;
  createdAt: number;
  updatedAt: number;
}
```

### Consideraciones de Implementación
- Usar patrón similar al CartContext para consistencia
- Mantener independencia total entre carrito y presupuesto
- Implementar validación robusta de formularios
- Asegurar persistencia confiable en localStorage
- Mantener diseño consistente con el resto de la aplicación

## Estimación de Tiempo
- **Análisis y Diseño**: 2 horas
- **Tipos y Contexto**: 3 horas
- **Componentes**: 6 horas
- **Integración**: 3 horas
- **Testing y Validación**: 2 horas
- **Documentación**: 1 hora

**Total estimado**: 17 horas

---

## ✅ MILESTONE 5 COMPLETADO - FASE 1

### Estado Actual (Completado):
- ✅ Sistema de presupuestos funcional
- ✅ Formulario de información del cliente
- ✅ Gestión de productos independiente del carrito
- ✅ Persistencia en localStorage
- ✅ UI responsive y accesible
- ✅ Corrección de bucles infinitos y optimización de rendimiento

---

## 🚀 MILESTONE 5 - FASE 2: Gestión Avanzada de Presupuestos

### Objetivo
Mejorar el sistema de presupuestos para permitir guardar múltiples presupuestos, crear nuevos presupuestos y gestionar una lista de presupuestos guardados.

### To-Do List - Fase 2

#### 1. Gestión de Múltiples Presupuestos
- [ ] **1.1** Modificar estructura de datos para soportar múltiples presupuestos
- [ ] **1.2** Crear sistema de IDs únicos para cada presupuesto
- [ ] **1.3** Implementar lista de presupuestos guardados
- [ ] **1.4** Crear función para generar números de presupuesto automáticos

#### 2. Base de Datos de Presupuestos
- [ ] **2.1** Crear `lib/types/presupuestos.ts` con tipos:
  - [ ] `PresupuestoGuardado` (presupuesto con ID único y fecha)
  - [ ] `ListaPresupuestos` (colección de presupuestos)
  - [ ] `EstadoPresupuestos` (estado global de presupuestos)

- [ ] **2.2** Modificar `lib/types/budget.ts`:
  - [ ] Agregar campo `numeroPresupuesto` automático
  - [ ] Agregar campo `fechaCreacion` y `fechaModificacion`
  - [ ] Agregar campo `estado` (borrador, guardado, enviado)

#### 3. Contexto de Presupuestos Guardados
- [ ] **3.1** Crear `lib/contexts/PresupuestosContext.tsx`:
  - [ ] Estado para lista de presupuestos guardados
  - [ ] Funciones para guardar nuevo presupuesto
  - [ ] Funciones para cargar presupuesto existente
  - [ ] Funciones para eliminar presupuesto
  - [ ] Funciones para duplicar presupuesto

#### 4. Componentes de Gestión de Presupuestos
- [ ] **4.1** Crear `components/presupuestos/ListaPresupuestos.tsx`:
  - [ ] Lista de presupuestos guardados
  - [ ] Información básica de cada presupuesto
  - [ ] Botones de acción (ver, editar, eliminar, duplicar)
  - [ ] Filtros por fecha, cliente, estado

- [ ] **4.2** Crear `components/presupuestos/PresupuestoCard.tsx`:
  - [ ] Tarjeta individual de presupuesto
  - [ ] Información resumida (cliente, fecha, total)
  - [ ] Estado visual del presupuesto
  - [ ] Acciones rápidas

- [ ] **4.3** Crear `components/presupuestos/ModalNuevoPresupuesto.tsx`:
  - [ ] Modal para crear nuevo presupuesto
  - [ ] Opción de partir de presupuesto existente
  - [ ] Formulario de información inicial
  - [ ] Validación de datos

- [ ] **4.4** Crear `components/presupuestos/ModalGestionPresupuestos.tsx`:
  - [ ] Modal principal de gestión
  - [ ] Lista de presupuestos
  - [ ] Botón "Nuevo Presupuesto"
  - [ ] Búsqueda y filtros

#### 5. Mejoras en BudgetModal Existente
- [ ] **5.1** Modificar `components/budget/BudgetModal.tsx`:
  - [ ] Agregar botón "Guardar como Nuevo Presupuesto"
  - [ ] Agregar botón "Crear Nuevo Presupuesto"
  - [ ] Mostrar número de presupuesto actual
  - [ ] Indicador de estado (borrador/guardado)

- [ ] **5.2** Modificar `components/budget/BudgetSummary.tsx`:
  - [ ] Mostrar número de presupuesto
  - [ ] Mostrar fecha de creación/modificación
  - [ ] Botón "Guardar Presupuesto" mejorado
  - [ ] Botón "Crear Nuevo" después de guardar

#### 6. Integración en Header y Navegación
- [ ] **6.1** Modificar `components/Header.tsx`:
  - [ ] Agregar botón "Presupuestos Guardados"
  - [ ] Dropdown con lista de presupuestos recientes
  - [ ] Contador de presupuestos guardados

- [ ] **6.2** Crear `components/presupuestos/PresupuestosDropdown.tsx`:
  - [ ] Dropdown con presupuestos recientes
  - [ ] Acceso rápido a presupuestos
  - [ ] Botón "Ver Todos los Presupuestos"

#### 7. Funcionalidades Avanzadas
- [ ] **7.1** Sistema de numeración automática:
  - [ ] Generar números secuenciales (P-2025-001, P-2025-002, etc.)
  - [ ] Prefijo configurable por año
  - [ ] Validación de números únicos

- [ ] **7.2** Gestión de estados:
  - [ ] Estado "Borrador" (trabajo en progreso)
  - [ ] Estado "Guardado" (presupuesto completo)
  - [ ] Estado "Enviado" (enviado al cliente)
  - [ ] Transiciones entre estados

- [ ] **7.3** Funciones de duplicación:
  - [ ] Duplicar presupuesto existente
  - [ ] Mantener productos pero limpiar cliente
  - [ ] Generar nuevo número automáticamente

#### 8. Persistencia Mejorada
- [ ] **8.1** Modificar localStorage:
  - [ ] Estructura para múltiples presupuestos
  - [ ] Backup automático
  - [ ] Limpieza de presupuestos antiguos

- [ ] **8.2** Sistema de respaldo:
  - [ ] Exportar presupuestos a JSON
  - [ ] Importar presupuestos desde archivo
  - [ ] Sincronización entre sesiones

#### 9. UI/UX Mejorada
- [ ] **9.1** Diseño de lista de presupuestos:
  - [ ] Vista de tarjetas responsive
  - [ ] Vista de tabla para desktop
  - [ ] Paginación para listas largas
  - [ ] Búsqueda en tiempo real

- [ ] **9.2** Indicadores visuales:
  - [ ] Estados con colores (borrador=amarillo, guardado=verde, enviado=azul)
  - [ ] Iconos de estado
  - [ ] Fechas relativas ("hace 2 horas", "ayer")

- [ ] **9.3** Animaciones y transiciones:
  - [ ] Transiciones suaves entre estados
  - [ ] Animaciones de carga
  - [ ] Feedback visual en acciones

#### 10. Testing y Validación
- [ ] **10.1** Probar funcionalidades básicas:
  - [ ] Crear nuevo presupuesto
  - [ ] Guardar presupuesto
  - [ ] Cargar presupuesto existente
  - [ ] Duplicar presupuesto
  - [ ] Eliminar presupuesto

- [ ] **10.2** Probar persistencia:
  - [ ] Múltiples presupuestos en localStorage
  - [ ] Recuperación después de recarga
  - [ ] Manejo de errores de almacenamiento

- [ ] **10.3** Probar integración:
  - [ ] Navegación entre presupuestos
  - [ ] Estados consistentes
  - [ ] UI responsive

### Criterios de Aceptación - Fase 2

#### Funcionalidades Principales
1. ✅ Usuario puede guardar múltiples presupuestos
2. ✅ Usuario puede crear nuevo presupuesto después de guardar
3. ✅ Usuario puede ver lista de presupuestos guardados
4. ✅ Usuario puede cargar presupuesto existente para editar
5. ✅ Usuario puede duplicar presupuesto existente
6. ✅ Sistema genera números de presupuesto automáticamente

#### Interfaz de Usuario
1. ✅ Lista de presupuestos clara y organizada
2. ✅ Acceso rápido desde header
3. ✅ Estados visuales claros
4. ✅ Navegación intuitiva entre presupuestos
5. ✅ Formularios de creación optimizados

#### Gestión de Datos
1. ✅ Persistencia confiable de múltiples presupuestos
2. ✅ Numeración automática sin duplicados
3. ✅ Estados de presupuesto bien definidos
4. ✅ Backup y recuperación de datos

### Notas Técnicas - Fase 2

#### Estructura de Datos Propuesta
```typescript
interface PresupuestoGuardado {
  id: string;
  numeroPresupuesto: string; // P-2024-001
  clientName: string;
  licensePlate: string;
  orderNumber?: string;
  items: BudgetItem[];
  totalItems: number;
  totalPrice: number;
  estado: 'borrador' | 'guardado' | 'enviado';
  fechaCreacion: number;
  fechaModificacion: number;
}

interface ListaPresupuestos {
  presupuestos: PresupuestoGuardado[];
  contador: number; // Para numeración automática
  ultimaModificacion: number;
}
```

#### Consideraciones de Implementación
- Mantener compatibilidad con presupuestos existentes
- Implementar migración gradual de datos
- Optimizar rendimiento para listas largas
- Asegurar consistencia de datos entre sesiones

### Estimación de Tiempo - Fase 2
- **Estructura de Datos**: 2 horas
- **Contexto de Presupuestos**: 3 horas
- **Componentes de Gestión**: 8 horas
- **Integración UI**: 3 horas
- **Funcionalidades Avanzadas**: 4 horas
- **Testing y Validación**: 3 horas
- **Documentación**: 1 hora

**Total estimado Fase 2**: 24 horas
**Total acumulado**: 41 horas

---

## 🏢 MILESTONE 5 - FASE 3: Sistema de Gestión de Clientes

### Objetivo
Implementar un sistema de gestión de clientes por número único, donde cada cliente tenga datos asociados como nombre, teléfono, correo, población y dirección. Permitir crear clientes nuevos y reutilizar clientes existentes en presupuestos.

### To-Do List - Fase 3

#### 1. Estructura de Datos de Clientes
- [ ] **1.1** Crear `lib/types/clients.ts` con tipos:
  - [ ] `Cliente` (datos completos del cliente)
  - [ ] `ClienteState` (estado del contexto de clientes)
  - [ ] `ClienteAction` (acciones del reducer)
  - [ ] `ClienteContextType` (tipo del contexto)

- [ ] **1.2** Definir estructura de cliente:
  - [ ] `numeroCliente` (0001, 0002, etc.)
  - [ ] `nombre` (Pau Maldonado Lopez)
  - [ ] `telefono` (6868045147)
  - [ ] `correo` (pablomaldonado422@gmail.com)
  - [ ] `poblacion` (Pineda de Mar)
  - [ ] `direccion` (Av/ Hispanitat 49 3-1)
  - [ ] `fechaCreacion` y `fechaModificacion`

#### 2. Contexto de Gestión de Clientes
- [ ] **2.1** Crear `lib/contexts/ClientesContext.tsx`:
  - [ ] Estado para lista de clientes
  - [ ] Funciones para crear nuevo cliente
  - [ ] Funciones para buscar cliente por número
  - [ ] Funciones para actualizar datos de cliente
  - [ ] Funciones para eliminar cliente
  - [ ] Generación automática de números de cliente

- [ ] **2.2** Implementar persistencia:
  - [ ] Guardar clientes en localStorage
  - [ ] Cargar clientes al inicializar
  - [ ] Backup automático de datos

#### 3. Componentes de Gestión de Clientes
- [ ] **3.1** Crear `components/clientes/ModalGestionClientes.tsx`:
  - [ ] Modal principal de gestión de clientes
  - [ ] Lista de clientes existentes
  - [ ] Búsqueda por número, nombre o teléfono
  - [ ] Botón "Nuevo Cliente"

- [ ] **3.2** Crear `components/clientes/ModalNuevoCliente.tsx`:
  - [ ] Modal para crear nuevo cliente
  - [ ] Formulario con todos los campos
  - [ ] Validación de datos
  - [ ] Generación automática de número

- [ ] **3.3** Crear `components/clientes/ClienteCard.tsx`:
  - [ ] Tarjeta individual de cliente
  - [ ] Información resumida
  - [ ] Botones de acción (editar, eliminar, seleccionar)

- [ ] **3.4** Crear `components/clientes/ClienteForm.tsx`:
  - [ ] Formulario reutilizable para crear/editar cliente
  - [ ] Validación en tiempo real
  - [ ] Campos obligatorios y opcionales

#### 4. Integración con Sistema de Presupuestos
- [ ] **4.1** Modificar `lib/types/budget.ts`:
  - [ ] Agregar campo `numeroCliente` al presupuesto
  - [ ] Mantener compatibilidad con datos existentes
  - [ ] Referencia a datos del cliente

- [ ] **4.2** Modificar `components/budget/BudgetForm.tsx`:
  - [ ] Campo de búsqueda de cliente por número
  - [ ] Botón "Buscar Cliente"
  - [ ] Botón "Nuevo Cliente"
  - [ ] Mostrar datos del cliente seleccionado
  - [ ] Permitir editar datos del cliente

- [ ] **4.3** Modificar `components/presupuestos/ModalNuevoPresupuesto.tsx`:
  - [ ] Integrar selección de cliente
  - [ ] Permitir crear cliente nuevo
  - [ ] Validar que el cliente existe

#### 5. Funcionalidades de Búsqueda y Selección
- [ ] **5.1** Sistema de búsqueda de clientes:
  - [ ] Búsqueda por número de cliente
  - [ ] Búsqueda por nombre
  - [ ] Búsqueda por teléfono
  - [ ] Búsqueda por correo
  - [ ] Autocompletado en formularios

- [ ] **5.2** Selección rápida de cliente:
  - [ ] Dropdown con clientes recientes
  - [ ] Lista de clientes frecuentes
  - [ ] Acceso rápido desde presupuestos

#### 6. Numeración Automática de Clientes
- [ ] **6.1** Sistema de numeración:
  - [ ] Generar números secuenciales (0001, 0002, etc.)
  - [ ] Formato de 4 dígitos con ceros a la izquierda
  - [ ] Validación de números únicos
  - [ ] Contador persistente en localStorage

- [ ] **6.2** Gestión de números:
  - [ ] No reutilizar números eliminados
  - [ ] Mantener secuencia continua
  - [ ] Backup del contador

#### 7. Validación y Validaciones
- [ ] **7.1** Validación de datos de cliente:
  - [ ] Nombre obligatorio (mínimo 2 palabras)
  - [ ] Teléfono obligatorio (formato español)
  - [ ] Correo opcional pero válido si se proporciona
  - [ ] Población obligatoria
  - [ ] Dirección obligatoria

- [ ] **7.2** Validación de unicidad:
  - [ ] No permitir números de cliente duplicados
  - [ ] Validar correos únicos si se proporcionan
  - [ ] Validar teléfonos únicos

#### 8. UI/UX Mejorada
- [ ] **8.1** Diseño de gestión de clientes:
  - [ ] Vista de tarjetas responsive
  - [ ] Vista de tabla para desktop
  - [ ] Búsqueda en tiempo real
  - [ ] Filtros por población, fecha, etc.

- [ ] **8.2** Formularios optimizados:
  - [ ] Campos bien organizados
  - [ ] Validación visual en tiempo real
  - [ ] Mensajes de error claros
  - [ ] Autoguardado de borradores

- [ ] **8.3** Indicadores visuales:
  - [ ] Estado de cliente activo/inactivo
  - [ ] Frecuencia de uso en presupuestos
  - [ ] Fecha de último uso

#### 9. Integración en Header y Navegación
- [ ] **9.1** Modificar `components/Header.tsx`:
  - [ ] Agregar botón "Clientes"
  - [ ] Dropdown con clientes recientes
  - [ ] Contador de clientes totales

- [ ] **9.2** Crear `components/clientes/ClientesDropdown.tsx`:
  - [ ] Dropdown con clientes recientes
  - [ ] Acceso rápido a gestión de clientes
  - [ ] Botón "Nuevo Cliente"

#### 10. Funcionalidades Avanzadas
- [ ] **10.1** Estadísticas de clientes:
  - [ ] Cliente más frecuente
  - [ ] Total de presupuestos por cliente
  - [ ] Valor total de presupuestos por cliente

- [ ] **10.2** Exportación de datos:
  - [ ] Exportar lista de clientes a CSV
  - [ ] Exportar datos de cliente específico
  - [ ] Backup completo de clientes

- [ ] **10.3** Importación de datos:
  - [ ] Importar clientes desde CSV
  - [ ] Validación de datos importados
  - [ ] Resolución de conflictos

#### 11. Testing y Validación
- [ ] **11.1** Probar funcionalidades básicas:
  - [ ] Crear nuevo cliente
  - [ ] Buscar cliente existente
  - [ ] Editar datos de cliente
  - [ ] Eliminar cliente
  - [ ] Seleccionar cliente en presupuesto

- [ ] **11.2** Probar integración:
  - [ ] Cliente seleccionado en presupuesto
  - [ ] Datos del cliente en presupuesto guardado
  - [ ] Navegación entre clientes y presupuestos

- [ ] **11.3** Probar persistencia:
  - [ ] Clientes guardados en localStorage
  - [ ] Recuperación después de recarga
  - [ ] Manejo de errores de almacenamiento

### Criterios de Aceptación - Fase 3

#### Funcionalidades Principales
1. ✅ Usuario puede crear nuevo cliente con número automático
2. ✅ Usuario puede buscar cliente por número, nombre o teléfono
3. ✅ Usuario puede seleccionar cliente existente en presupuesto
4. ✅ Usuario puede editar datos de cliente existente
5. ✅ Sistema genera números de cliente automáticamente (0001, 0002, etc.)
6. ✅ Datos del cliente se guardan en el presupuesto

#### Interfaz de Usuario
1. ✅ Gestión de clientes clara y organizada
2. ✅ Búsqueda rápida y eficiente
3. ✅ Formularios intuitivos y validados
4. ✅ Acceso rápido desde presupuestos
5. ✅ Navegación fluida entre clientes y presupuestos

#### Gestión de Datos
1. ✅ Persistencia confiable de clientes
2. ✅ Numeración automática sin duplicados
3. ✅ Validación robusta de datos
4. ✅ Integración completa con presupuestos

### Notas Técnicas - Fase 3

#### Estructura de Datos Propuesta
```typescript
interface Cliente {
  numeroCliente: string; // "0001", "0002", etc.
  nombre: string; // "Pau Maldonado Lopez"
  telefono: string; // "6868045147"
  correo?: string; // "pablomaldonado422@gmail.com"
  poblacion: string; // "Pineda de Mar"
  direccion: string; // "Av/ Hispanitat 49 3-1"
  fechaCreacion: number;
  fechaModificacion: number;
  activo: boolean;
}

interface ClienteState {
  clientes: Cliente[];
  contador: number; // Para numeración automática
  clienteActual: Cliente | null;
  isLoading: boolean;
  error: string | null;
}
```

#### Consideraciones de Implementación
- Mantener compatibilidad con presupuestos existentes
- Implementar migración gradual de datos de cliente
- Optimizar búsquedas para listas largas de clientes
- Asegurar consistencia entre clientes y presupuestos

### Estimación de Tiempo - Fase 3
- **Estructura de Datos**: 2 horas
- **Contexto de Clientes**: 4 horas
- **Componentes de Gestión**: 8 horas
- **Integración con Presupuestos**: 4 horas
- **Funcionalidades Avanzadas**: 3 horas
- **Testing y Validación**: 3 horas
- **Documentación**: 1 hora

**Total estimado Fase 3**: 25 horas
**Total acumulado**: 66 horas
