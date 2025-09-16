# Milestone 4: Carrito de Compras Funcional

## Objetivo
Implementar un carrito de compras completamente funcional que permita agregar piezas, ver el contenido del carrito, calcular totales, y gestionar las cantidades de productos.

---

## Análisis del Estado Actual

### ✅ Lo que ya existe:
- Botones "Añadir al carrito" en `PartCard` y `PartsList`
- Contador de items en el header (`cartItemsCount`)
- Estado local de carrito en `PartsSection` (`cartItems: Part[]`)
- Función `handleAddToCart` básica que agrega items al array

### ❌ Lo que falta:
- Página/modal del carrito para ver contenido
- Cálculo de totales
- Gestión de cantidades (aumentar/disminuir)
- Eliminar items del carrito
- Persistencia del carrito (localStorage)
- Estado global del carrito (Context API)
- Funcionalidad de checkout/proceso de compra

---

## 1) Arquitectura del Carrito

### 1.1 Context API para Estado Global
- [ ] Crear `lib/contexts/CartContext.tsx`
  - Estado global del carrito
  - Funciones: addItem, removeItem, updateQuantity, clearCart
  - Persistencia en localStorage
  - Cálculo automático de totales

### 1.2 Tipos de Datos
- [ ] Extender `lib/types/parts.ts`
  - `CartItem` interface con cantidad
  - `CartState` interface para el contexto
  - `CartAction` types para reducer

### 1.3 Provider del Contexto
- [ ] Crear `components/providers/CartProvider.tsx`
  - Wrapper para toda la aplicación
  - Manejo de localStorage
  - Lógica de negocio del carrito

---

## 2) Componentes del Carrito

### 2.1 Modal/Página del Carrito
- [ ] Crear `components/cart/CartModal.tsx`
  - Modal overlay con lista de items
  - Botones de cantidad (+/-)
  - Botón eliminar item
  - Resumen de totales
  - Botón "Proceder al pago"

### 2.2 Lista de Items del Carrito
- [ ] Crear `components/cart/CartItem.tsx`
  - Imagen, nombre, marca, precio
  - Controles de cantidad
  - Botón eliminar
  - Cálculo de subtotal por item

### 2.3 Resumen del Carrito
- [ ] Crear `components/cart/CartSummary.tsx`
  - Subtotal
  - Descuentos (si aplica)
  - Total final
  - Información de envío

### 2.4 Botón del Carrito Mejorado
- [ ] Actualizar `components/Header.tsx`
  - Integrar con CartContext
  - Mostrar cantidad real de items
  - Abrir modal del carrito al hacer clic

---

## 3) Funcionalidades del Carrito

### 3.1 Gestión de Items
- [ ] Agregar items al carrito
  - Verificar si ya existe (incrementar cantidad)
  - Validar stock disponible
  - Mostrar confirmación con toast

- [ ] Actualizar cantidades
  - Incrementar/decrementar
  - Validar stock máximo
  - Actualizar totales automáticamente

- [ ] Eliminar items
  - Eliminar item completo
  - Confirmación antes de eliminar
  - Actualizar contadores

### 3.2 Cálculos y Totales
- [ ] Cálculo de subtotal por item
- [ ] Cálculo de subtotal general
- [ ] Aplicación de descuentos (futuro)
- [ ] Cálculo de total final
- [ ] Formateo de precios (€)

### 3.3 Persistencia
- [ ] Guardar carrito en localStorage
- [ ] Recuperar carrito al cargar la página
- [ ] Sincronizar entre pestañas del navegador
- [ ] Limpiar carrito después del checkout

---

## 4) Integración con Componentes Existentes

### 4.1 Actualizar VehiclePageClient
- [ ] Integrar CartProvider
- [ ] Pasar estado del carrito a PartsSection
- [ ] Manejar navegación al carrito

### 4.2 Actualizar PartsSection
- [ ] Usar CartContext en lugar de estado local
- [ ] Integrar funciones del carrito
- [ ] Pasar cartItemsCount real

### 4.3 Actualizar PartCard y PartsList
- [ ] Integrar con CartContext
- [ ] Mostrar estado de stock
- [ ] Feedback visual al agregar items

### 4.4 Actualizar PartsToolbar
- [ ] Integrar con CartContext
- [ ] Mostrar cantidad real de items
- [ ] Abrir modal del carrito

---

## 5) UX/UI del Carrito

### 5.1 Modal del Carrito
- [ ] Diseño responsive (móvil/desktop)
- [ ] Animaciones de entrada/salida
- [ ] Overlay con blur
- [ ] Botón cerrar (X) y click fuera

### 5.2 Estados del Carrito
- [ ] Carrito vacío (mensaje + CTA)
- [ ] Carrito con items (lista completa)
- [ ] Loading states
- [ ] Estados de error

### 5.3 Feedback Visual
- [ ] Toast notifications para acciones
- [ ] Animaciones al agregar items
- [ ] Contador animado en header
- [ ] Estados hover/focus

### 5.4 Accesibilidad
- [ ] Navegación por teclado
- [ ] ARIA labels y roles
- [ ] Screen reader support
- [ ] Contraste y legibilidad

---

## 6) Funcionalidades Avanzadas (Opcionales)

### 6.1 Gestión de Stock
- [ ] Verificar stock disponible
- [ ] Mostrar "Solo X disponibles"
- [ ] Deshabilitar botones si sin stock
- [ ] Notificar cuando se agota stock

### 6.2 Descuentos y Promociones
- [ ] Códigos de descuento
- [ ] Descuentos por cantidad
- [ ] Promociones especiales
- [ ] Cálculo de ahorros

### 6.3 Wishlist/Favoritos
- [ ] Botón "Guardar para después"
- [ ] Lista de favoritos
- [ ] Mover de favoritos a carrito
- [ ] Persistencia de favoritos

---

## 7) Testing y Validación

### 7.1 Casos de Prueba
- [ ] Agregar item al carrito
- [ ] Actualizar cantidades
- [ ] Eliminar items
- [ ] Cálculo de totales
- [ ] Persistencia en localStorage
- [ ] Responsive design

### 7.2 Validaciones
- [ ] Stock disponible
- [ ] Cantidades válidas (> 0)
- [ ] Precios correctos
- [ ] Totales precisos

---

## 8) Estructura de Archivos

```
components/
├── cart/
│   ├── CartModal.tsx
│   ├── CartItem.tsx
│   ├── CartSummary.tsx
│   ├── CartEmpty.tsx
│   └── CartActions.tsx
├── providers/
│   └── CartProvider.tsx
└── ui/
    └── cart/ (componentes específicos del carrito)

lib/
├── contexts/
│   └── CartContext.tsx
├── hooks/
│   └── useCart.ts
└── types/
    └── cart.ts (extender parts.ts)
```

---

## 9) Criterios de Aceptación

### 9.1 Funcionalidad Básica
- [ ] Usuario puede agregar piezas al carrito
- [ ] Usuario puede ver el contenido del carrito
- [ ] Usuario puede modificar cantidades
- [ ] Usuario puede eliminar items
- [ ] Se calculan totales correctamente
- [ ] El carrito persiste entre sesiones

### 9.2 UX/UI
- [ ] Modal del carrito es responsive
- [ ] Animaciones suaves y profesionales
- [ ] Feedback visual claro para todas las acciones
- [ ] Navegación intuitiva
- [ ] Accesibilidad completa

### 9.3 Integración
- [ ] Carrito integrado en todas las páginas
- [ ] Contador actualizado en tiempo real
- [ ] Estado sincronizado entre componentes
- [ ] No hay conflictos con funcionalidad existente

---

## 10) Tareas Ordenadas (Checklist)

### Fase 1: Arquitectura Base
- [ ] Crear tipos de datos del carrito
- [ ] Implementar CartContext
- [ ] Crear CartProvider
- [ ] Integrar provider en la aplicación

### Fase 2: Componentes del Carrito
- [ ] Crear CartModal
- [ ] Crear CartItem
- [ ] Crear CartSummary
- [ ] Crear CartEmpty

### Fase 3: Funcionalidades
- [ ] Implementar agregar items
- [ ] Implementar actualizar cantidades
- [ ] Implementar eliminar items
- [ ] Implementar cálculo de totales

### Fase 4: Integración
- [ ] Actualizar Header con carrito real
- [ ] Actualizar PartsSection
- [ ] Actualizar PartCard y PartsList
- [ ] Actualizar PartsToolbar

### Fase 5: UX/UI
- [ ] Implementar animaciones
- [ ] Añadir toast notifications
- [ ] Mejorar responsive design
- [ ] Implementar accesibilidad

### Fase 6: Testing
- [ ] Probar todas las funcionalidades
- [ ] Validar cálculos
- [ ] Probar persistencia
- [ ] Validar responsive design

---

## 11) Consideraciones Técnicas

### 11.1 Performance
- [ ] Memoización de componentes pesados
- [ ] Optimización de re-renders
- [ ] Lazy loading del modal
- [ ] Debounce en actualizaciones

### 11.2 Estado
- [ ] Context API para estado global
- [ ] Reducer pattern para acciones complejas
- [ ] LocalStorage para persistencia
- [ ] Sincronización entre pestañas

### 11.3 Estilos
- [ ] Tailwind CSS para consistencia
- [ ] Animaciones con Framer Motion (opcional)
- [ ] Responsive design mobile-first
- [ ] Tema oscuro consistente

---

## 12) Próximos Pasos (Post-Milestone 4)

### 12.1 Checkout
- [ ] Página de checkout
- [ ] Formulario de envío
- [ ] Métodos de pago
- [ ] Confirmación de pedido

### 12.2 Gestión de Pedidos
- [ ] Historial de pedidos
- [ ] Estado de pedidos
- [ ] Tracking de envío
- [ ] Devoluciones

### 12.3 Backend Integration
- [ ] API de carrito
- [ ] API de checkout
- [ ] Base de datos de pedidos
- [ ] Sistema de pagos

---

## 13) Funcionalidad de Búsqueda de Clientes

### 13.1 Buscador de Clientes
- [ ] Crear componente `ClientSearch.tsx`
  - Campo de búsqueda por nombre, email o teléfono
  - Lista de resultados con información básica
  - Selección de cliente para asociar al pedido
  - Creación de nuevo cliente si no existe

### 13.2 Gestión de Clientes Mock
- [ ] Crear `lib/mocks/clients.ts`
  - Cliente demo: Pau Maldonado
  - Estructura de datos de cliente
  - Funciones CRUD mock para clientes
  - Validaciones de datos

### 13.3 Integración con Carrito
- [ ] Asociar cliente al carrito
  - Mostrar cliente seleccionado en resumen
  - Permitir cambiar cliente
  - Validar cliente antes del checkout
  - Historial de pedidos por cliente

### 13.4 UI/UX del Buscador
- [ ] Diseño responsive del buscador
- [ ] Autocompletado en búsqueda
- [ ] Estados de carga y error
- [ ] Confirmación de selección de cliente

---

## 14) Tareas Adicionales del Carrito

### 14.1 Búsqueda de Clientes
- [ ] Implementar buscador de clientes
- [ ] Crear datos mock de clientes
- [ ] Integrar con sistema de carrito
- [ ] Validar cliente antes del checkout

### 14.2 Gestión de Pedidos
- [ ] Asociar cliente al pedido
- [ ] Guardar historial de pedidos
- [ ] Mostrar pedidos anteriores del cliente
- [ ] Exportar información del pedido

---

## Notas de Implementación

- **Prioridad**: Implementar funcionalidad básica primero, luego mejorar UX/UI
- **Testing**: Probar en diferentes dispositivos y navegadores
- **Performance**: Monitorear re-renders y optimizar según necesidad
- **Accesibilidad**: Seguir WCAG 2.1 AA desde el inicio
- **Responsive**: Mobile-first approach para mejor experiencia móvil
- **Clientes**: Sistema mock de clientes para desarrollo inicial
