# Milestone 3: Implementación de secciones de recambios por categorías

## Tareas y argumentación

### 1. Estructura base y layout principal
1. **Crear componente `PartsSection` como contenedor principal de las secciones de recambios**
   - Argumento: Encapsula toda la lógica de categorías de recambios y facilita su reutilización y mantenimiento.

2. **Implementar layout de dos columnas: sidebar de categorías (280px) y área de contenido principal**
   - Argumento: Replica la estructura visual del ejemplo HTML y proporciona navegación clara entre categorías.

3. **Aplicar gradientes de fondo consistentes con el patrón actual (gray-800 a gray-900)**
   - Argumento: Mantiene la coherencia visual con el header existente y el diseño general de la aplicación.

### 2. Sidebar de categorías de recambios
4. **Crear componente `CategoriesSidebar` con lista de las 9 categorías principales**
   - Argumento: Centraliza la navegación entre categorías y facilita la adición de nuevas categorías en el futuro.

5. **Implementar estilos hover y estado activo para cada categoría (border-left rojo, fondo semitransparente)**
   - Argumento: Proporciona feedback visual claro al usuario sobre la categoría seleccionada y mejora la experiencia de navegación.

6. **Añadir iconos representativos para cada categoría usando iconos de Lucide React**
   - Argumento: Mejora la identificación visual de cada categoría y hace la interfaz más intuitiva.

7. **Implementar estado de categoría activa con gestión de estado React**
   - Argumento: Permite el cambio dinámico de categorías sin recargar la página y mantiene el estado de navegación.

### 3. Área de contenido principal
8. **Crear componente `PartsContentArea` con toolbar superior (título de categoría y controles de vista)**
   - Argumento: Proporciona contexto visual de la categoría actual y controles para personalizar la visualización.

9. **Implementar toggle entre vista de grid y lista con iconos de cambio de estado**
   - Argumento: Permite al usuario elegir su formato preferido de visualización de productos.

10. **Añadir barra de búsqueda específica para recambios dentro de cada categoría**
    - Argumento: Facilita la búsqueda de productos específicos sin cambiar de categoría.

### 4. Componentes de categorías individuales
11. **Crear componente `MaintenanceSection` para "Mantenimientos básicos"**
    - Argumento: Agrupa recambios relacionados con mantenimiento general del vehículo (aceites, filtros básicos, etc.).

12. **Crear componente `BrakingSystemSection` para "Sistema de frenado"**
    - Argumento: Especializa la visualización de pastillas, discos, líquido de frenos y componentes relacionados.

13. **Crear componente `SteeringSection` para "Dirección"**
    - Argumento: Agrupa recambios del sistema de dirección (amortiguadores, rótulas, etc.).

14. **Crear componente `TransmissionSection` para "Transmisión"**
    - Argumento: Organiza componentes de la caja de cambios y sistema de transmisión.

15. **Crear componente `FiltersSection` para "Filtros"**
    - Argumento: Centraliza todos los tipos de filtros (aceite, aire, combustible, habitáculo).

16. **Crear componente `CoolingSection` para "Refrigeración"**
    - Argumento: Agrupa componentes del sistema de refrigeración (radiador, termostato, etc.).

17. **Crear componente `ExhaustSystemSection` para "Sistema de escape"**
    - Argumento: Organiza componentes del escape y sistema de emisiones.

18. **Crear componente `BeltTransmissionSection` para "Transmisión por correas"**
    - Argumento: Especializa la visualización de correas de distribución, accesorios y tensores.

19. **Crear componente `AxleTransmissionSection` para "Transmisión por ejes"**
    - Argumento: Agrupa componentes de ejes, diferenciales y transmisión final.

### 5. Sistema de productos y tarjetas
20. **Crear interfaz `Part` con propiedades: id, name, brand, price, image, description, compatibility**
    - Argumento: Define la estructura de datos consistente para todos los productos del catálogo.

21. **Implementar componente `PartCard` reutilizable con diseño responsive**
    - Argumento: Estandariza la presentación de productos y facilita el mantenimiento del diseño.

22. **Añadir funcionalidad de "Añadir al carrito" en cada tarjeta de producto**
    - Argumento: Integra la funcionalidad de compra directamente en la visualización de productos.

23. **Implementar grid responsive para las tarjetas de productos (1-4 columnas según tamaño de pantalla)**
    - Argumento: Optimiza la visualización en diferentes dispositivos y tamaños de pantalla.

### 6. Datos mock y contenido inicial
24. **Crear archivo `lib/mocks/parts.ts` con datos mock para cada categoría**
    - Argumento: Permite desarrollar y probar la funcionalidad sin depender de una API real.

25. **Implementar 5-8 productos mock por categoría con información realista**
    - Argumento: Proporciona contenido suficiente para probar la funcionalidad y el diseño.

26. **Añadir imágenes placeholder para productos usando servicios como Unsplash o Placeholder.com**
    - Argumento: Mejora la presentación visual y permite probar el comportamiento con imágenes reales.

### 7. Integración con la página de vehículo
27. **Integrar `PartsSection` debajo de `VehicleInfo` en la página de vehículo**
    - Argumento: Mantiene la información del vehículo visible mientras se navega por los recambios.

28. **Implementar scroll suave entre secciones y categorías**
    - Argumento: Mejora la experiencia de navegación y hace la interfaz más fluida.

29. **Añadir indicador de carga mientras se cargan los productos de cada categoría**
    - Argumento: Proporciona feedback visual durante las operaciones asíncronas.

### 8. Responsive design y accesibilidad
30. **Implementar diseño responsive para móviles con sidebar colapsable**
    - Argumento: Asegura una experiencia óptima en todos los dispositivos.

31. **Añadir navegación por teclado para todas las interacciones**
    - Argumento: Mejora la accesibilidad y permite el uso sin mouse.

32. **Implementar estados de focus y hover accesibles con contraste adecuado**
    - Argumento: Cumple con estándares de accesibilidad web y mejora la usabilidad.

### 9. Testing y validación
33. **Probar navegación entre todas las categorías y verificar que el contenido se actualiza correctamente**
    - Argumento: Asegura que la funcionalidad principal funciona sin errores.

34. **Validar que el toggle entre vista grid/lista funciona correctamente en todas las categorías**
    - Argumento: Confirma que la funcionalidad de cambio de vista es consistente.

35. **Probar la funcionalidad de búsqueda dentro de cada categoría**
    - Argumento: Verifica que el filtrado de productos funciona correctamente.

36. **Validar el diseño responsive en diferentes tamaños de pantalla (móvil, tablet, desktop)**
    - Argumento: Asegura que la interfaz se adapta correctamente a todos los dispositivos.

### 10. Documentación y preparación para siguientes fases
37. **Documentar la estructura de componentes creada y sus responsabilidades**
    - Argumento: Facilita el mantenimiento futuro y la colaboración en el desarrollo.

38. **Preparar la base para integración futura con API real de productos**
    - Argumento: Establece la arquitectura necesaria para la transición de datos mock a datos reales.

39. **Crear guía de estilos para mantener consistencia en futuras categorías**
    - Argumento: Asegura que las nuevas categorías sigan el mismo patrón de diseño establecido.

## Categorías de recambios a implementar

- **Mantenimientos básicos**: Aceites, filtros básicos, bujías, correas de accesorios
- **Sistema de frenado**: Pastillas, discos, líquido de frenos, latiguillos
- **Dirección**: Amortiguadores, rótulas, terminales, bieletas
- **Transmisión**: Embrague, discos, bombín, cojinete
- **Filtros**: Filtro de aceite, aire, combustible, habitáculo
- **Refrigeración**: Radiador, termostato, bomba de agua, manguitos
- **Sistema de escape**: Tubo de escape, silenciador, catalizador
- **Transmisión por correas**: Correa de distribución, accesorios, tensores
- **Transmisión por ejes**: Palieres, juntas homocinéticas, guardapolvos

## Patrón de colores a seguir

- **Fondo principal**: Gradiente de `gray-800` a `gray-900`
- **Acentos**: `red-600` para elementos activos y destacados
- **Texto principal**: `text-gray-200` para contraste óptimo
- **Bordes activos**: `border-red-600` con `border-l-4`
- **Fondos semitransparentes**: `bg-gray-800 bg-opacity-70`
- **Hover states**: Transiciones suaves con `hover:` variants

## Subsecciones por categoría

### 11. Implementación de subsecciones para "Mantenimientos básicos"

40. **Crear interfaz `SubCategory` para definir estructura de subsecciones**
    - Argumento: Establece la estructura de datos consistente para las subcategorías dentro de cada categoría principal.

41. **Implementar componente `SubCategoriesNavigation` con navegación horizontal/vertical**
    - Argumento: Permite navegación fluida entre subsecciones manteniendo el contexto de la categoría principal.

42. **Crear componente `MaintenanceSubsections` específico para mantenimientos básicos**
    - Argumento: Encapsula la lógica específica de las 9 subsecciones de mantenimientos básicos.

43. **Implementar subsección "Aceites" con productos específicos (motor, transmisión, diferencial)**
    - Argumento: Agrupa todos los tipos de aceites necesarios para el mantenimiento del vehículo.

44. **Implementar subsección "Filtros" con filtros básicos (aceite, aire, combustible, habitáculo)**
    - Argumento: Centraliza los filtros esenciales para el funcionamiento del motor y sistemas auxiliares.

45. **Implementar subsección "Sistema de Frenos" con componentes básicos (pastillas, discos, líquido)**
    - Argumento: Incluye los elementos más comunes de mantenimiento del sistema de frenado.

46. **Implementar subsección "Sistema de Refrigeración" con componentes básicos (líquido, termostato)**
    - Argumento: Agrupa los elementos esenciales para el mantenimiento del sistema de refrigeración.

47. **Implementar subsección "Correa Poli V" con correas de accesorios y distribución**
    - Argumento: Especializa la visualización de correas de transmisión de accesorios.

48. **Implementar subsección "Rótulas de Dirección" con rótulas y terminales de dirección**
    - Argumento: Agrupa componentes específicos del sistema de dirección para mantenimiento.

49. **Implementar subsección "Rótulas de Suspensión" con rótulas y bieletas de suspensión**
    - Argumento: Especializa componentes de suspensión para mantenimiento preventivo.

50. **Implementar subsección "Batería" con baterías y componentes eléctricos básicos**
    - Argumento: Centraliza productos relacionados con el sistema eléctrico del vehículo.

51. **Implementar subsección "Limpia Parabrisas" con escobillas y líquido limpiaparabrisas**
    - Argumento: Agrupa productos de mantenimiento para la visibilidad y seguridad.

52. **Crear datos mock específicos para cada subsección de mantenimientos básicos**
    - Argumento: Proporciona contenido realista para probar la funcionalidad de subsecciones.

53. **Implementar navegación por pestañas o tabs para las subsecciones**
    - Argumento: Permite cambio rápido entre subsecciones manteniendo el contexto de la categoría principal.

54. **Añadir contador de productos por subsección en la navegación**
    - Argumento: Proporciona información visual sobre la cantidad de productos disponibles en cada subsección.

55. **Implementar filtrado cruzado entre subsecciones y búsqueda general**
    - Argumento: Permite búsqueda global que incluya todas las subsecciones o filtrado específico por subsección.

56. **Crear componente `SubsectionHeader` con breadcrumbs de navegación**
    - Argumento: Mejora la orientación del usuario mostrando la ruta de navegación actual.

57. **Implementar estado de subsección activa con indicadores visuales**
    - Argumento: Proporciona feedback claro sobre la subsección seleccionada actualmente.

58. **Añadir iconos específicos para cada subsección de mantenimientos básicos**
    - Argumento: Mejora la identificación visual rápida de cada tipo de mantenimiento.

59. **Implementar vista responsive para subsecciones en dispositivos móviles**
    - Argumento: Asegura una experiencia óptima de navegación por subsecciones en todos los dispositivos.

60. **Crear sistema de etiquetas para productos que pertenecen a múltiples subsecciones**
    - Argumento: Permite que un producto aparezca en varias subsecciones relacionadas cuando sea apropiado.

### Subsecciones de "Mantenimientos básicos" a implementar:

- **Aceites**: Aceite de motor, transmisión, diferencial, hidráulico
- **Filtros**: Filtro de aceite, aire, combustible, habitáculo
- **Sistema de Frenos**: Pastillas, discos, líquido de frenos, latiguillos
- **Sistema de Refrigeración**: Líquido refrigerante, termostato, manguitos
- **Correa Poli V**: Correa de accesorios, distribución, tensores
- **Rótulas de Dirección**: Rótulas, terminales, bieletas de dirección
- **Rótulas de Suspensión**: Rótulas, bieletas, amortiguadores
- **Batería**: Baterías, bornes, cables, alternadores
- **Limpia Parabrisas**: Escobillas, líquido, bombas, manguitos

## Subsecciones dentro de subsecciones (Nivel 3)

### 12. Implementación de subsecciones de nivel 3 para "Aceites"

61. **Crear interfaz `SubSubCategory` para definir estructura de subsecciones de nivel 3**
    - Argumento: Establece la estructura de datos para las subcategorías más específicas dentro de cada subsección principal.

62. **Implementar componente `SubSubCategoriesNavigation` con navegación de nivel 3**
    - Argumento: Permite navegación fluida entre las subsecciones más específicas manteniendo el contexto de la subsección principal.

63. **Crear componente `OilsSubSubsections` específico para la subsección de aceites**
    - Argumento: Encapsula la lógica específica de las 4 subsecciones de aceites (motor, transmisión, diferencial, dirección).

64. **Implementar subsección "Aceite Motor" con productos específicos (5W-30, 10W-40, sintético, mineral)**
    - Argumento: Agrupa todos los tipos de aceites específicos para el motor del vehículo con diferentes viscosidades y composiciones.

65. **Implementar subsección "Aceite Transmisión" con aceites para caja de cambios (75W-90, 80W-90)**
    - Argumento: Especializa la visualización de aceites específicos para el sistema de transmisión y caja de cambios.

66. **Implementar subsección "Aceite Diferencial" con aceites para diferenciales (80W-90, 85W-140)**
    - Argumento: Agrupa aceites específicos para el mantenimiento del sistema diferencial del vehículo.

67. **Implementar subsección "Aceite Dirección" con aceites hidráulicos para dirección asistida**
    - Argumento: Centraliza aceites específicos para el sistema de dirección hidráulica y asistida.

68. **Crear datos mock específicos para cada subsección de aceites con productos realistas**
    - Argumento: Proporciona contenido detallado para probar la funcionalidad de navegación de nivel 3.

69. **Implementar navegación por pestañas de nivel 3 con indicadores de profundidad**
    - Argumento: Permite cambio rápido entre subsecciones específicas mostrando la jerarquía de navegación.

70. **Añadir contador de productos por subsección de nivel 3 en la navegación**
    - Argumento: Proporciona información visual sobre la cantidad de productos disponibles en cada subsección específica.

71. **Implementar breadcrumbs de nivel 3: Inicio > Categoría > Subsección > SubSubsección**
    - Argumento: Mejora la orientación del usuario mostrando la ruta completa de navegación hasta el nivel más específico.

72. **Crear componente `SubSubsectionHeader` con información específica de nivel 3**
    - Argumento: Muestra información detallada de la subsección específica con estadísticas y contexto.

73. **Implementar filtrado cruzado entre subsecciones de nivel 3 y búsqueda global**
    - Argumento: Permite búsqueda que incluya todas las subsecciones de nivel 3 o filtrado específico por subsección.

74. **Añadir iconos específicos para cada subsección de aceites de nivel 3**
    - Argumento: Mejora la identificación visual rápida de cada tipo específico de aceite.

75. **Implementar vista responsive para subsecciones de nivel 3 en dispositivos móviles**
    - Argumento: Asegura una experiencia óptima de navegación por subsecciones específicas en todos los dispositivos.

76. **Crear sistema de etiquetas para productos que pertenecen a múltiples subsecciones de nivel 3**
    - Argumento: Permite que un producto aparezca en varias subsecciones específicas relacionadas cuando sea apropiado.

77. **Implementar indicadores de compatibilidad específicos por subsección de nivel 3**
    - Argumento: Muestra información de compatibilidad más específica para cada tipo de aceite.

78. **Añadir filtros específicos por viscosidad, tipo (sintético/mineral) y aplicación**
    - Argumento: Permite filtrado avanzado basado en características técnicas específicas de los aceites.

79. **Implementar comparador de productos dentro de cada subsección de nivel 3**
    - Argumento: Permite comparar productos específicos de la misma subsección para facilitar la decisión de compra.

### Subsecciones de nivel 3 para "Aceites" a implementar:

- **Aceite Motor**: 5W-30, 10W-40, 15W-40, sintético, mineral, semi-sintético
- **Aceite Transmisión**: 75W-90, 80W-90, 75W-80, para caja de cambios manual y automática
- **Aceite Diferencial**: 80W-90, 85W-140, 75W-90, para diferenciales delanteros y traseros
- **Aceite Dirección**: ATF, aceite hidráulico, para dirección asistida

---

## Subsecciones de nivel 3 para "Filtros" (Tareas 80-98)

### 80. **Crear datos mock para subsubcategorías de Filtros**
    - Argumento: Generar datos de prueba para las 4 subsubcategorías de filtros con productos específicos.
    - Archivo: `lib/mocks/filtersSubSubsections.ts`
    - Contenido: 4 subsubcategorías con 4-5 productos cada una

### 81. **Implementar subsubcategorías de Filtro de Aceite**
    - Argumento: Crear productos específicos para filtros de aceite con diferentes marcas y especificaciones.
    - Productos: Filtros de aceite sintético, mineral, semi-sintético, diferentes tamaños
    - Marcas: Bosch, Mann-Filter, Mahle, Fram

### 82. **Implementar subsubcategorías de Filtro de Aire**
    - Argumento: Crear productos específicos para filtros de aire con diferentes tipos y compatibilidades.
    - Productos: Filtros de aire estándar, deportivos, con carbón activo, lavables
    - Especificaciones: Flujo de aire, eficiencia de filtración, durabilidad

### 83. **Implementar subsubcategorías de Filtro de Combustible**
    - Argumento: Crear productos específicos para filtros de combustible con diferentes tecnologías.
    - Productos: Filtros de combustible estándar, de alta presión, con válvula de retorno
    - Tecnologías: Filtrado fino, separación de agua, resistencia a presión

### 84. **Implementar subsubcategorías de Filtro de Habitáculo**
    - Argumento: Crear productos específicos para filtros de habitáculo con diferentes funcionalidades.
    - Productos: Filtros de habitáculo estándar, con carbón activo, antialérgicos, antibacterianos
    - Funcionalidades: Filtrado de polen, olores, bacterias, partículas finas

### 85. **Crear componente FiltrosSubSubsections reutilizable**
    - Argumento: Reutilizar la estructura de OilsSubSubsections para crear un componente genérico para filtros.
    - Archivo: `components/FiltrosSubSubsections.tsx`
    - Reutilización: Adaptar OilsSubSubsections para filtros con filtros específicos

### 86. **Implementar filtros específicos para Filtros**
    - Argumento: Crear filtros específicos para productos de filtros (tipo, marca, compatibilidad).
    - Archivo: `components/FiltrosFilters.tsx`
    - Filtros: Por tipo de filtro, marca, compatibilidad de vehículo, precio

### 87. **Integrar subsubcategorías de Filtros en MaintenanceSubsections**
    - Argumento: Agregar navegación y lógica para mostrar subsubcategorías de filtros.
    - Modificación: `components/MaintenanceSubsections.tsx`
    - Funcionalidad: Navegación similar a aceites pero para filtros

### 88. **Implementar navegación de subsubcategorías de Filtros**
    - Argumento: Crear botones de navegación para cada tipo de filtro con contadores de productos.
    - Diseño: Reutilizar el diseño de botones de aceites
    - Responsive: Adaptar para móvil y desktop

### 89. **Crear datos mock para productos de filtros**
    - Argumento: Generar 4-5 productos por cada subsubcategoría de filtros con datos realistas.
    - Especificaciones: Marca, modelo, compatibilidad, precio, descripción técnica
    - Imágenes: URLs de imágenes representativas de filtros

### 90. **Implementar filtrado por tipo de filtro**
    - Argumento: Permitir filtrar productos por el tipo específico de filtro seleccionado.
    - Lógica: Similar a la implementada para aceites
    - Estado: Manejar activeFilterType en MaintenanceSubsections

### 91. **Crear iconos específicos para cada tipo de filtro**
    - Argumento: Asignar iconos representativos para cada subsubcategoría de filtros.
    - Iconos: Filter (aceite), Wind (aire), Fuel (combustible), Shield (habitáculo)
    - Implementación: Usar iconos de Lucide React

### 92. **Implementar vista responsive para subsubcategorías de Filtros**
    - Argumento: Adaptar la interfaz para dispositivos móviles y tablets.
    - Móvil: Lista vertical de tipos de filtros
    - Desktop: Botones horizontales con contadores

### 93. **Integrar contadores de productos en navegación de Filtros**
    - Argumento: Mostrar la cantidad de productos disponibles en cada tipo de filtro.
    - Visualización: Badges con números en cada botón de tipo
    - Actualización: Dinámica según filtros aplicados

### 94. **Implementar búsqueda específica para productos de filtros**
    - Argumento: Permitir buscar productos de filtros por nombre, marca, modelo o especificaciones.
    - Campos: Nombre, marca, descripción, compatibilidad
    - Filtrado: En tiempo real con debounce

### 95. **Crear breadcrumbs para navegación de Filtros**
    - Argumento: Implementar navegación jerárquica clara para subsubcategorías de filtros.
    - Estructura: Mantenimientos > Filtros > [Tipo de Filtro]
    - Componente: Reutilizar SubSubsectionHeader

### 96. **Implementar estado de carga para subsubcategorías de Filtros**
    - Argumento: Mostrar indicadores de carga mientras se cargan los productos de filtros.
    - UX: Skeleton loaders para productos y navegación
    - Performance: Lazy loading de componentes

### 97. **Crear tests para funcionalidad de Filtros**
    - Argumento: Verificar que la navegación y filtrado de subsubcategorías de filtros funcione correctamente.
    - Cobertura: Navegación, filtrado, búsqueda, responsive
    - Archivo: `__tests__/FiltrosSubSubsections.test.tsx`

### 98. **Documentar implementación de subsubcategorías de Filtros**
    - Argumento: Documentar la estructura y uso de las subsubcategorías de filtros.
    - Archivo: `docs/filtros-subsubcategorias.md`
    - Contenido: Estructura de datos, componentes, navegación

### Subsecciones de nivel 3 para "Filtros" a implementar:

- **Filtro de Aceite**: Filtros para aceite sintético, mineral, semi-sintético, diferentes marcas y tamaños
- **Filtro de Aire**: Filtros de aire estándar, deportivos, con carbón activo, lavables
- **Filtro de Combustible**: Filtros de combustible estándar, de alta presión, con válvula de retorno
- **Filtro de Habitáculo**: Filtros de habitáculo estándar, con carbón activo, antialérgicos, antibacterianos

---

## Subsecciones de nivel 3 para "Sistema de Frenos" (Tareas 99-117)

### 99. **Crear datos mock para subsubcategorías de Sistema de Frenos**
    - Argumento: Generar datos de prueba para las 2 subsubcategorías de frenos con productos específicos.
    - Archivo: `lib/mocks/brakesSubSubsections.ts`
    - Contenido: 2 subsubcategorías con 4-6 productos cada una

### 100. **Implementar subsubcategorías de Freno de Disco**
    - Argumento: Crear productos específicos para frenos de disco con diferentes materiales y especificaciones.
    - Productos: Pastillas de freno de disco, discos de freno, sensores de desgaste
    - Marcas: Brembo, Ferodo, Bosch, TRW, ATE
    - Especificaciones: Material de pastillas (cerámica, orgánica, semi-metálica), diámetro de discos, grosor

### 101. **Implementar subsubcategorías de Freno de Tambor**
    - Argumento: Crear productos específicos para frenos de tambor con diferentes tipos y compatibilidades.
    - Productos: Zapatas de freno, tambores de freno, bombines, kits de reparación
    - Marcas: Bendix, Ferodo, TRW, ATE, Valeo
    - Especificaciones: Diámetro de tambor, tipo de zapatas, material de fricción

### 102. **Crear componente BrakesSubSubsections reutilizable**
    - Argumento: Reutilizar la estructura de OilsSubSubsections para crear un componente genérico para frenos.
    - Archivo: `components/BrakesSubSubsections.tsx`
    - Reutilización: Adaptar OilsSubSubsections para frenos con filtros específicos

### 103. **Implementar filtros específicos para Sistema de Frenos**
    - Argumento: Crear filtros específicos para productos de frenos (tipo, marca, compatibilidad, material).
    - Archivo: `components/BrakesFilters.tsx`
    - Filtros: Por tipo de freno, marca, compatibilidad de vehículo, material, precio

### 104. **Integrar subsubcategorías de Sistema de Frenos en MaintenanceSubsections**
    - Argumento: Agregar navegación y lógica para mostrar subsubcategorías de frenos.
    - Modificación: `components/MaintenanceSubsections.tsx`
    - Funcionalidad: Navegación similar a aceites y filtros pero para frenos

### 105. **Implementar navegación de subsubcategorías de Sistema de Frenos**
    - Argumento: Crear botones de navegación para cada tipo de freno con contadores de productos.
    - Diseño: Reutilizar el diseño de botones de aceites y filtros
    - Responsive: Adaptar para móvil y desktop

### 106. **Crear datos mock para productos de sistema de frenos**
    - Argumento: Generar 4-6 productos por cada subsubcategoría de frenos con datos realistas.
    - Especificaciones: Marca, modelo, compatibilidad, material, precio, descripción técnica
    - Imágenes: URLs de imágenes representativas de frenos y componentes

### 107. **Implementar filtrado por tipo de freno**
    - Argumento: Permitir filtrar productos por el tipo específico de freno seleccionado (disco o tambor).
    - Lógica: Similar a la implementada para aceites y filtros
    - Estado: Manejar activeBrakeType en MaintenanceSubsections

### 108. **Crear iconos específicos para cada tipo de freno**
    - Argumento: Asignar iconos representativos para cada subsubcategoría de frenos.
    - Iconos: Disc (freno de disco), Circle (freno de tambor)
    - Implementación: Usar iconos de Lucide React

### 109. **Implementar vista responsive para subsubcategorías de Sistema de Frenos**
    - Argumento: Adaptar la interfaz para dispositivos móviles y tablets.
    - Móvil: Lista vertical de tipos de frenos
    - Desktop: Botones horizontales con contadores

### 110. **Integrar contadores de productos en navegación de Sistema de Frenos**
    - Argumento: Mostrar la cantidad de productos disponibles en cada tipo de freno.
    - Visualización: Badges con números en cada botón de tipo
    - Actualización: Dinámica según filtros aplicados

### 111. **Implementar búsqueda específica para productos de frenos**
    - Argumento: Permitir buscar productos de frenos por nombre, marca, modelo, material o especificaciones.
    - Campos: Nombre, marca, descripción, compatibilidad, material
    - Filtrado: En tiempo real con debounce

### 112. **Crear breadcrumbs para navegación de Sistema de Frenos**
    - Argumento: Implementar navegación jerárquica clara para subsubcategorías de frenos.
    - Estructura: Mantenimientos > Sistema de Frenos > [Tipo de Freno]
    - Componente: Reutilizar SubSubsectionHeader

### 113. **Implementar estado de carga para subsubcategorías de Sistema de Frenos**
    - Argumento: Mostrar indicadores de carga mientras se cargan los productos de frenos.
    - UX: Skeleton loaders para productos y navegación
    - Performance: Lazy loading de componentes

### 114. **Crear tests para funcionalidad de Sistema de Frenos**
    - Argumento: Verificar que la navegación y filtrado de subsubcategorías de frenos funcione correctamente.
    - Cobertura: Navegación, filtrado, búsqueda, responsive
    - Archivo: `__tests__/BrakesSubSubsections.test.tsx`

### 115. **Implementar filtros avanzados para frenos por material y especificaciones**
    - Argumento: Permitir filtrado avanzado por material de pastillas, diámetro de discos, tipo de vehículo.
    - Filtros: Material (cerámica, orgánica, semi-metálica), diámetro, compatibilidad
    - UX: Filtros desplegables con opciones específicas

### 116. **Crear comparador de productos para frenos**
    - Argumento: Permitir comparar productos de frenos por especificaciones técnicas y precio.
    - Funcionalidad: Selección múltiple, tabla comparativa, recomendaciones
    - Componente: Reutilizar lógica de comparación existente

### 117. **Documentar implementación de subsubcategorías de Sistema de Frenos**
    - Argumento: Documentar la estructura y uso de las subsubcategorías de frenos.
    - Archivo: `docs/brakes-subsubcategorias.md`
    - Contenido: Estructura de datos, componentes, navegación

### Subsecciones de nivel 3 para "Sistema de Frenos" a implementar:

- **Freno de Disco**: Pastillas de freno de disco, discos de freno, sensores de desgaste
- **Freno de Tambor**: Zapatas de freno, tambores de freno, bombines, kits de reparación

---

## Subsecciones de nivel 3 para "Sistema de Encendido" (Tareas 118-136)

### 118. **Crear datos mock para subsubcategorías de Sistema de Encendido**
    - Argumento: Generar datos de prueba para las 2 subsubcategorías de encendido con productos específicos.
    - Archivo: `lib/mocks/ignitionSubSubsections.ts`
    - Contenido: 2 subsubcategorías (Batería y Bujías) con 4-6 productos cada una

### 119. **Implementar subsubcategorías de Batería**
    - Argumento: Crear productos específicos para baterías con diferentes tecnologías y capacidades.
    - Productos: Baterías de 12V, EFB, AGM, diferentes capacidades (60Ah, 70Ah)
    - Marcas: Varta, Bosch, Exide, Odyssey
    - Especificaciones: Tecnología (plomo-ácido, EFB, AGM), capacidad, voltaje

### 120. **Implementar subsubcategorías de Bujías**
    - Argumento: Crear productos específicos para bujías con diferentes tipos y aplicaciones.
    - Productos: Bujías de encendido, precalentamiento, bobinas de encendido
    - Marcas: NGK, Bosch, Beru, Valeo
    - Especificaciones: Material (cobre, iridio, platino), tipo (encendido, precalentamiento)

### 121. **Crear componente IgnitionSubSubsections reutilizable**
    - Argumento: Reutilizar la estructura de BrakesSubSubsections para crear un componente genérico para encendido.
    - Archivo: `components/IgnitionSubSubsections.tsx`
    - Reutilización: Adaptar BrakesSubSubsections para encendido con filtros específicos

### 122. **Implementar filtros específicos para Sistema de Encendido**
    - Argumento: Crear filtros específicos para productos de encendido (tipo, marca, tecnología).
    - Archivo: `components/IgnitionFilters.tsx`
    - Filtros: Por tipo (batería/bujías), marca, tecnología, voltaje

### 123. **Integrar subsubcategorías de Sistema de Encendido en MaintenanceSubsections**
    - Argumento: Agregar navegación y lógica para mostrar subsubcategorías de encendido.
    - Modificación: `components/MaintenanceSubsections.tsx`
    - Funcionalidad: Navegación similar a frenos pero para encendido

### 124. **Implementar navegación de subsubcategorías de Sistema de Encendido**
    - Argumento: Crear botones de navegación para cada tipo de encendido con contadores de productos.
    - Diseño: Reutilizar el diseño de botones de frenos
    - Responsive: Adaptar para móvil y desktop

### 125. **Crear datos mock para productos de sistema de encendido**
    - Argumento: Generar 4-6 productos por cada subsubcategoría de encendido con datos realistas.
    - Especificaciones: Marca, modelo, compatibilidad, tecnología, precio, descripción técnica
    - Imágenes: URLs de imágenes representativas de encendido y componentes

### 126. **Implementar filtrado por tipo de encendido**
    - Argumento: Permitir filtrar productos por el tipo específico de encendido seleccionado (batería o bujías).
    - Lógica: Similar a la implementada para frenos
    - Estado: Manejar activeIgnitionType en MaintenanceSubsections

### 127. **Crear iconos específicos para cada tipo de encendido**
    - Argumento: Asignar iconos representativos para cada subsubcategoría de encendido.
    - Iconos: Battery (batería), Zap (bujías)
    - Implementación: Usar iconos de Lucide React

### 128. **Implementar vista responsive para subsubcategorías de Sistema de Encendido**
    - Argumento: Adaptar la interfaz para dispositivos móviles y tablets.
    - Móvil: Lista vertical de tipos de encendido
    - Desktop: Botones horizontales con contadores

### 129. **Integrar contadores de productos en navegación de Sistema de Encendido**
    - Argumento: Mostrar la cantidad de productos disponibles en cada tipo de encendido.
    - Visualización: Badges con números en cada botón de tipo
    - Actualización: Dinámica según filtros aplicados

### 130. **Implementar búsqueda específica para productos de encendido**
    - Argumento: Permitir buscar productos de encendido por nombre, marca, modelo, tecnología o especificaciones.
    - Campos: Nombre, marca, descripción, compatibilidad, tecnología
    - Filtrado: En tiempo real con debounce

### 131. **Crear breadcrumbs para navegación de Sistema de Encendido**
    - Argumento: Implementar navegación jerárquica clara para subsubcategorías de encendido.
    - Estructura: Mantenimientos > Sistema de Encendido > [Tipo de Encendido]
    - Componente: Reutilizar SubSubsectionHeader

### 132. **Implementar estado de carga para subsubcategorías de Sistema de Encendido**
    - Argumento: Mostrar indicadores de carga mientras se cargan los productos de encendido.
    - UX: Skeleton loaders para productos y navegación
    - Performance: Lazy loading de componentes

### 133. **Crear tests para funcionalidad de Sistema de Encendido**
    - Argumento: Verificar que la navegación y filtrado de subsubcategorías de encendido funcione correctamente.
    - Cobertura: Navegación, filtrado, búsqueda, responsive
    - Archivo: `__tests__/IgnitionSubSubsections.test.tsx`

### 134. **Implementar filtros avanzados para encendido por tecnología y especificaciones**
    - Argumento: Permitir filtrado avanzado por tecnología de batería, material de bujías, voltaje.
    - Filtros: Tecnología (EFB, AGM), material (iridio, platino), voltaje
    - UX: Filtros desplegables con opciones específicas

### 135. **Crear comparador de productos para encendido**
    - Argumento: Permitir comparar productos de encendido por especificaciones técnicas y precio.
    - Funcionalidad: Selección múltiple, tabla comparativa, recomendaciones
    - Componente: Reutilizar lógica de comparación existente

### 136. **Documentar implementación de subsubcategorías de Sistema de Encendido**
    - Argumento: Documentar la estructura y uso de las subsubcategorías de encendido.
    - Archivo: `docs/ignition-subsubcategorias.md`
    - Contenido: Estructura de datos, componentes, navegación

### Subsecciones de nivel 3 para "Sistema de Encendido" a implementar:

- **Batería**: Baterías de 12V, EFB, AGM, diferentes capacidades (60Ah, 70Ah)
- **Bujías**: Bujías de encendido, precalentamiento, bobinas de encendido

---

## Subsecciones de nivel 4 para "Bujías" (Tareas 137-155)

### 137. **Crear datos mock para subsubcategorías de Bujías**
    - Argumento: Generar datos de prueba para las 2 subsubcategorías específicas de bujías.
    - Archivo: `lib/mocks/sparkPlugSubSubsections.ts`
    - Contenido: 2 subsubcategorías (Encendido y Precalentamiento) con 4 productos cada una

### 138. **Implementar subsubcategorías de Bujías de Encendido**
    - Argumento: Crear productos específicos para bujías de encendido con diferentes materiales.
    - Productos: Bujías de cobre, iridio, platino, electrodo doble
    - Marcas: NGK, Bosch
    - Especificaciones: Material (cobre, iridio, platino), tipo de electrodo, durabilidad

### 139. **Implementar subsubcategorías de Bujías de Precalentamiento**
    - Argumento: Crear productos específicos para bujías de precalentamiento diésel.
    - Productos: Bujías de precalentamiento, sistemas rápidos, alta resistencia
    - Marcas: Beru, Bosch, NGK, Valeo
    - Especificaciones: Tiempo de precalentamiento, resistencia, compatibilidad diésel

### 140. **Crear componente SparkPlugSubSubsections reutilizable**
    - Argumento: Reutilizar la estructura de IgnitionSubSubsections para crear un componente específico para bujías.
    - Archivo: `components/SparkPlugSubSubsections.tsx`
    - Reutilización: Adaptar IgnitionSubSubsections para bujías con filtros específicos

### 141. **Implementar filtros específicos para Bujías**
    - Argumento: Crear filtros específicos para productos de bujías (material, tipo, compatibilidad).
    - Archivo: `components/SparkPlugFilters.tsx`
    - Filtros: Por material (cobre, iridio, platino), tipo (encendido/precalentamiento), marca

### 142. **Integrar subsubcategorías de Bujías en IgnitionSubSubsections**
    - Argumento: Agregar navegación de nivel 4 para bujías dentro de la subcategoría de bujías.
    - Modificación: `components/IgnitionSubSubsections.tsx`
    - Funcionalidad: Navegación de nivel 4 para bujías específicas

### 143. **Implementar navegación de subsubcategorías de Bujías**
    - Argumento: Crear botones de navegación para cada tipo específico de bujía con contadores.
    - Diseño: Reutilizar el diseño de botones de encendido
    - Responsive: Adaptar para móvil y desktop

### 144. **Crear datos mock para productos específicos de bujías**
    - Argumento: Generar 4 productos por cada subsubcategoría específica de bujías con datos realistas.
    - Especificaciones: Marca, modelo, compatibilidad, material, precio, descripción técnica
    - Imágenes: URLs de imágenes representativas de bujías específicas

### 145. **Implementar filtrado por tipo específico de bujía**
    - Argumento: Permitir filtrar productos por el tipo específico de bujía seleccionado (encendido o precalentamiento).
    - Lógica: Similar a la implementada para encendido pero más específica
    - Estado: Manejar activeSparkPlugType en IgnitionSubsections

### 146. **Crear iconos específicos para cada tipo de bujía**
    - Argumento: Asignar iconos representativos para cada subsubcategoría específica de bujías.
    - Iconos: Zap (encendido), Thermometer (precalentamiento)
    - Implementación: Usar iconos de Lucide React

### 147. **Implementar vista responsive para subsubcategorías de Bujías**
    - Argumento: Adaptar la interfaz para dispositivos móviles y tablets.
    - Móvil: Lista vertical de tipos específicos de bujías
    - Desktop: Botones horizontales con contadores

### 148. **Integrar contadores de productos en navegación de Bujías**
    - Argumento: Mostrar la cantidad de productos disponibles en cada tipo específico de bujía.
    - Visualización: Badges con números en cada botón de tipo
    - Actualización: Dinámica según filtros aplicados

### 149. **Implementar búsqueda específica para productos de bujías**
    - Argumento: Permitir buscar productos de bujías por nombre, marca, modelo, material o especificaciones.
    - Campos: Nombre, marca, descripción, compatibilidad, material
    - Filtrado: En tiempo real con debounce

### 150. **Crear breadcrumbs para navegación de Bujías**
    - Argumento: Implementar navegación jerárquica clara para subsubcategorías específicas de bujías.
    - Estructura: Mantenimientos > Sistema de Encendido > Bujías > [Tipo Específico]
    - Componente: Reutilizar SubSubsectionHeader

### 151. **Implementar estado de carga para subsubcategorías de Bujías**
    - Argumento: Mostrar indicadores de carga mientras se cargan los productos específicos de bujías.
    - UX: Skeleton loaders para productos y navegación
    - Performance: Lazy loading de componentes

### 152. **Crear tests para funcionalidad de Bujías**
    - Argumento: Verificar que la navegación y filtrado de subsubcategorías específicas de bujías funcione correctamente.
    - Cobertura: Navegación, filtrado, búsqueda, responsive
    - Archivo: `__tests__/SparkPlugSubSubsections.test.tsx`

### 153. **Implementar filtros avanzados para bujías por material y aplicación**
    - Argumento: Permitir filtrado avanzado por material de bujía, tipo de motor, durabilidad.
    - Filtros: Material (cobre, iridio, platino), motor (gasolina/diésel), durabilidad
    - UX: Filtros desplegables con opciones específicas

### 154. **Crear comparador de productos para bujías**
    - Argumento: Permitir comparar productos específicos de bujías por especificaciones técnicas y precio.
    - Funcionalidad: Selección múltiple, tabla comparativa, recomendaciones
    - Componente: Reutilizar lógica de comparación existente

### 155. **Documentar implementación de subsubcategorías de Bujías**
    - Argumento: Documentar la estructura y uso de las subsubcategorías específicas de bujías.
    - Archivo: `docs/sparkplug-subsubcategorias.md`
    - Contenido: Estructura de datos, componentes, navegación

### Subsecciones de nivel 4 para "Bujías" a implementar:

- **Bujías de Encendido**: Bujías de encendido para motores gasolina, diferentes materiales (cobre, iridio, platino)
- **Bujías de Precalentamiento**: Bujías de precalentamiento para motores diésel, diferentes tecnologías

## TODO: Rótulas de Suspensión - Subsecciones de nivel 3

### 156. **Renombrar sección "Dirección" a "Rótulas de Suspensión"** ✅ COMPLETADO
    - Argumento: Cambiar el nombre de la sección para reflejar mejor el contenido específico de rótulas y componentes de suspensión.
    - Archivo: `lib/mocks/maintenanceSubsections.ts`
    - Cambio: Actualizar nombre, icono y descripción de la sección

### 157. **Crear subsección "Rótula Dirección"** ✅ COMPLETADO
    - Argumento: Separar específicamente las rótulas del sistema de dirección de otros tipos de rótulas.
    - Productos: Rótulas superiores, inferiores, izquierda, derecha para sistema de dirección
    - Archivo: `lib/mocks/suspensionSubSubsections.ts`

### 158. **Crear subsección "Rótula Axial"** ✅ COMPLETADO
    - Argumento: Agrupar las rótulas del eje axial y sistema de transmisión de movimiento.
    - Productos: Rótulas axiales, rótulas de transmisión, rótulas de cardán
    - Archivo: `lib/mocks/suspensionSubSubsections.ts`

### 159. **Crear subsección "Fuelle"** ✅ COMPLETADO
    - Argumento: Separar los fuelles de protección de rótulas como componente independiente.
    - Productos: Fuelles de rótula, protectores de grasa, kits de reparación
    - Archivo: `lib/mocks/suspensionSubSubsections.ts`

### 160. **Crear archivo de datos mock para rótulas de suspensión** ✅ COMPLETADO
    - Argumento: Generar datos realistas para las tres subsecciones de rótulas.
    - Archivo: `lib/mocks/suspensionSubSubsections.ts`
    - Estructura: Arrays separados para cada tipo de rótula con productos específicos

### 161. **Crear componente SuspensionSubSubsections** ✅ COMPLETADO
    - Argumento: Componente reutilizable para navegación entre subsecciones de rótulas.
    - Archivo: `components/SuspensionSubSubsections.tsx`
    - Funcionalidad: Navegación, filtrado, contadores de productos

### 162. **Crear filtros específicos para rótulas** ✅ COMPLETADO
    - Argumento: Filtros especializados para productos de rótulas por tipo, material, compatibilidad.
    - Archivo: `components/SuspensionFilters.tsx`
    - Filtros: Tipo de rótula, material, compatibilidad de vehículo, precio

### 163. **Integrar SuspensionSubSubsections en MaintenanceSubsections** ✅ COMPLETADO
    - Argumento: Conectar la nueva estructura de rótulas con el componente principal de mantenimiento.
    - Archivo: `components/MaintenanceSubsections.tsx`
    - Cambios: Importar componente, agregar estado, lógica de filtrado

### 164. **Actualizar maintenanceSubsections.ts con nueva estructura** ✅ COMPLETADO
    - Argumento: Integrar las subsecciones de rótulas en la estructura principal de mantenimiento.
    - Archivo: `lib/mocks/maintenanceSubsections.ts`
    - Cambios: Combinar productos de rótulas, actualizar sección de dirección

### 165. **Implementar navegación entre subsecciones de rótulas** ✅ COMPLETADO
    - Argumento: Permitir cambio fluido entre los tres tipos de rótulas desde la interfaz.
    - Componente: `SuspensionSubSubsections.tsx`
    - UX: Botones de navegación con contadores de productos

### 166. **Agregar iconos específicos para cada subsección de rótulas** ✅ COMPLETADO
    - Argumento: Iconos distintivos para cada tipo de rótula (dirección, axial, fuelle).
    - Iconos: Settings (dirección), RotateCcw (axial), Shield (fuelle)
    - Implementación: En SuspensionSubSubsections.tsx

### 167. **Crear breadcrumbs para navegación de rótulas** ✅ COMPLETADO
    - Argumento: Mostrar ruta de navegación: Mantenimientos > Rótulas > [Tipo específico].
    - Componente: Integrado en SuspensionSubSubsections.tsx
    - Estilo: Consistente con breadcrumbs existentes

### 168. **Implementar búsqueda específica por subsección de rótulas** ✅ COMPLETADO
    - Argumento: Permitir búsqueda filtrada dentro de cada tipo específico de rótula.
    - Funcionalidad: Filtrado por subsección activa, búsqueda por marca/modelo
    - Lógica: En SuspensionSubSubsections.tsx

### 169. **Agregar contadores dinámicos de productos por subsección** ✅ COMPLETADO
    - Argumento: Mostrar número de productos disponibles en cada subsección de rótulas.
    - Implementación: Cálculo dinámico basado en productos filtrados
    - UX: Números actualizados en tiempo real

### 170. **Implementar vista responsive para subsecciones de rótulas** ✅ COMPLETADO
    - Argumento: Adaptar la navegación de rótulas para dispositivos móviles.
    - Componente: SuspensionSubSubsections.tsx
    - Responsive: Navegación en pestañas móviles, layout adaptativo

### 171. **Crear tests para SuspensionSubSubsections**
    - Argumento: Verificar que la navegación y filtrado de subsecciones de rótulas funcione correctamente.
    - Cobertura: Navegación, filtrado, búsqueda, responsive
    - Archivo: `__tests__/SuspensionSubSubsections.test.tsx`

### 172. **Implementar filtros avanzados para rótulas por aplicación**
    - Argumento: Permitir filtrado avanzado por tipo de vehículo, material, compatibilidad.
    - Filtros: Tipo de vehículo, material, compatibilidad específica, rango de precio
    - UX: Filtros desplegables con opciones específicas de rótulas

### 173. **Crear comparador de productos para rótulas**
    - Argumento: Permitir comparar productos específicos de rótulas por especificaciones técnicas y precio.
    - Funcionalidad: Selección múltiple, tabla comparativa, recomendaciones
    - Componente: Reutilizar lógica de comparación existente

### 174. **Documentar implementación de subsecciones de Rótulas**
    - Argumento: Documentar la estructura y uso de las subsecciones específicas de rótulas.
    - Archivo: `docs/rotulas-subsecciones.md`
    - Contenido: Estructura de datos, componentes, navegación

### Subsecciones de nivel 3 para "Rótulas de Suspensión" a implementar:

- **Rótula Dirección**: Rótulas superiores e inferiores del sistema de dirección, izquierda y derecha
- **Rótula Axial**: Rótulas del eje axial, rótulas de transmisión, rótulas de cardán
- **Fuelle**: Fuelles de protección de rótulas, protectores de grasa, kits de reparación

## TODO: Dirección y Accesorios - Subsecciones de nivel 3

### 175. **Implementar subsecciones para "Dirección y Accesorios"**
    - Argumento: Crear 3 subsecciones específicas dentro de "Dirección y Accesorios" para organizar mejor los productos.
    - Subsecciones: Rótula Dirección, Rótula Axial, Fuelle
    - Archivo: `lib/mocks/suspensionSubSubsections.ts` (ya implementado)

### 176. **Verificar funcionalidad de navegación entre subsecciones**
    - Argumento: Asegurar que la navegación entre las 3 subsecciones funcione correctamente.
    - Componente: `SuspensionSubSubsections.tsx` (ya implementado)
    - Funcionalidad: Navegación, filtrado, contadores de productos

### 177. **Validar filtros específicos por subsección**
    - Argumento: Verificar que los filtros funcionen correctamente para cada tipo de rótula.
    - Componente: `SuspensionFilters.tsx` (ya implementado)
    - Filtros: Tipo de rótula, material, compatibilidad

### 178. **Confirmar integración completa en MaintenanceSubsections**
    - Argumento: Verificar que "Dirección y Accesorios" esté completamente integrado.
    - Archivo: `components/MaintenanceSubsections.tsx` (ya implementado)
    - Estado: activeSuspensionType, lógica de filtrado, renderizado condicional

### 179. **Documentar estructura final de Dirección y Accesorios**
    - Argumento: Documentar la estructura completa implementada para referencia futura.
    - Estructura: 3 subsecciones con navegación y filtros específicos
    - Estado: ✅ COMPLETADO - Todas las funcionalidades implementadas

### Subsecciones de nivel 3 para "Dirección y Accesorios" implementadas:

- **Rótula Dirección** ✅: Rótulas superiores e inferiores del sistema de dirección (6 productos)
- **Rótula Axial** ✅: Rótulas del eje axial, transmisión y cardán (6 productos)  
- **Fuelle** ✅: Fuelles de protección y kits de reparación (6 productos)

### 180. **Crear archivo steeringSubSubsections.ts con datos mock para 2 subsecciones** ✅ COMPLETADO
    - Argumento: Implementar datos mock para las subsecciones de "Suspensión y Accesorios".
    - Subsecciones: "Rótulas de Suspensión" y "Bieletas de Suspensión"
    - Estado: ✅ COMPLETADO - Archivo creado con datos realistas

### 181. **Crear componente SteeringSubSubsections.tsx para navegación** ✅ COMPLETADO
    - Argumento: Componente reutilizable para navegación entre subsecciones de steering.
    - Funcionalidades: Navegación, búsqueda, filtros, vista grid/lista
    - Estado: ✅ COMPLETADO - Componente implementado

### 182. **Crear filtros específicos SteeringFilters.tsx** ✅ COMPLETADO
    - Argumento: Filtros específicos para productos de steering (tipo, material).
    - Filtros: Tipo de componente y material
    - Estado: ✅ COMPLETADO - Filtros implementados

### 183. **Integrar SteeringSubSubsections en MaintenanceSubsections.tsx** ✅ COMPLETADO
    - Argumento: Integrar la navegación de subsecciones de steering en el componente principal.
    - Integración: Renderizado condicional y navegación
    - Estado: ✅ COMPLETADO - Integración completa

### 184. **Actualizar milestone3.md con nuevas tareas** ✅ COMPLETADO
    - Argumento: Documentar la estructura completa implementada para referencia futura.
    - Estructura: 2 subsecciones con navegación y filtros específicos
    - Estado: ✅ COMPLETADO - Documentación actualizada

### Subsecciones de nivel 3 para "Suspensión y Accesorios" implementadas:

- **Rótulas de Suspensión** ✅: Rótulas superiores e inferiores del sistema de suspensión, izquierda y derecha (6 productos)
- **Bieletas de Suspensión** ✅: Bieletas de suspensión, estabilizadoras, barras de torsión y amortiguadores (6 productos)

### 185. **Crear archivo beltSubSubsections.ts con datos mock para 2 subsecciones** ✅ COMPLETADO
    - Argumento: Implementar datos mock para las subsecciones de "Correa Poli V".
    - Subsecciones: "Correa" y "Tensor"
    - Estado: ✅ COMPLETADO - Archivo creado con datos realistas

### 186. **Crear componente BeltSubSubsections.tsx para navegación** ✅ COMPLETADO
    - Argumento: Componente reutilizable para navegación entre subsecciones de belt.
    - Funcionalidades: Navegación, búsqueda, filtros, vista grid/lista
    - Estado: ✅ COMPLETADO - Componente implementado

### 187. **Crear filtros específicos BeltFilters.tsx** ✅ COMPLETADO
    - Argumento: Filtros específicos para productos de belt (tipo, marca).
    - Filtros: Tipo de producto y marca
    - Estado: ✅ COMPLETADO - Filtros implementados

### 188. **Integrar BeltSubSubsections en MaintenanceSubsections.tsx** ✅ COMPLETADO
    - Argumento: Integrar la navegación de subsecciones de belt en el componente principal.
    - Integración: Renderizado condicional y navegación
    - Estado: ✅ COMPLETADO - Integración completa

### 189. **Actualizar milestone3.md con nuevas tareas** ✅ COMPLETADO
    - Argumento: Documentar la estructura completa implementada para referencia futura.
    - Estructura: 2 subsecciones con navegación y filtros específicos
    - Estado: ✅ COMPLETADO - Documentación actualizada

### Subsecciones de nivel 3 para "Correa Poli V" implementadas:

- **Correa** ✅: Correas de distribución, accesorios, aire acondicionado y alternador (6 productos)
- **Tensor** ✅: Tensores automáticos, rodillos tensores y kits de tensores (6 productos)

### 190. **Crear archivo wipersSubSubsections.ts con datos mock para 2 subsecciones** ✅ COMPLETADO
    - Argumento: Implementar datos mock para las subsecciones de "Limpia Parabrisas".
    - Subsecciones: "Agua Limpiaparabrisas" y "Escobillas"
    - Estado: ✅ COMPLETADO - Archivo creado con datos realistas

### 191. **Crear componente WipersSubSubsections.tsx para navegación** ✅ COMPLETADO
    - Argumento: Componente reutilizable para navegación entre subsecciones de wipers.
    - Funcionalidades: Navegación, búsqueda, filtros, vista grid/lista
    - Estado: ✅ COMPLETADO - Componente implementado

### 192. **Crear filtros específicos WipersFilters.tsx** ✅ COMPLETADO
    - Argumento: Filtros específicos para productos de wipers (tipo, marca).
    - Filtros: Tipo de producto y marca
    - Estado: ✅ COMPLETADO - Filtros implementados

### 193. **Integrar WipersSubSubsections en MaintenanceSubsections.tsx** ✅ COMPLETADO
    - Argumento: Integrar la navegación de subsecciones de wipers en el componente principal.
    - Integración: Renderizado condicional y navegación
    - Estado: ✅ COMPLETADO - Integración completa

### 194. **Actualizar milestone3.md con nuevas tareas** ✅ COMPLETADO
    - Argumento: Documentar la estructura completa implementada para referencia futura.
    - Estructura: 2 subsecciones con navegación y filtros específicos
    - Estado: ✅ COMPLETADO - Documentación actualizada

### Subsecciones de nivel 3 para "Limpia Parabrisas" implementadas:

- **Agua Limpiaparabrisas** ✅: Líquidos limpiaparabrisas, concentrados, anticongelantes y orgánicos (6 productos)
- **Escobillas** ✅: Escobillas delanteras, traseras, kits completos y recambios (6 productos)

### 195. **Crear archivo mainFiltersSubsections.ts con datos mock para 4 subsecciones** ✅ COMPLETADO
    - Argumento: Implementar datos mock para las subsecciones de la sección principal "Filtros".
    - Subsecciones: "Filtro de Aceite", "Filtro de Aire", "Filtro de Combustible", "Filtro de Habitáculo"
    - Estado: ✅ COMPLETADO - Archivo creado reutilizando estructura de filtros de mantenimiento

### 196. **Crear componente MainFiltersSubsections.tsx reutilizando estructura** ✅ COMPLETADO
    - Argumento: Componente reutilizable para navegación entre subsecciones de la sección principal de Filtros.
    - Funcionalidades: Navegación, búsqueda, filtros, vista grid/lista
    - Estado: ✅ COMPLETADO - Componente implementado reutilizando estructura de FiltrosSubSubsections

### 197. **Crear filtros específicos MainFiltersFilters.tsx** ✅ COMPLETADO
    - Argumento: Filtros específicos para productos de la sección principal de Filtros (marca, compatibilidad).
    - Filtros: Marca y compatibilidad de vehículos
    - Estado: ✅ COMPLETADO - Filtros implementados reutilizando estructura de FiltrosFilters

### 198. **Integrar en la sección principal de Filtros** ✅ COMPLETADO
    - Argumento: Integrar la navegación de subsecciones de Filtros en PartsContentArea.
    - Integración: Renderizado condicional para categoría 'filters'
    - Estado: ✅ COMPLETADO - Integración completa en PartsContentArea

### 199. **Actualizar milestone3.md con nuevas tareas** ✅ COMPLETADO
    - Argumento: Documentar la implementación de subsecciones en la sección principal de Filtros.
    - Estructura: 4 subsecciones con navegación y filtros específicos
    - Estado: ✅ COMPLETADO - Documentación actualizada

### Subsecciones de nivel 2 para "Filtros" (Sección Principal) implementadas:

- **Filtro de Aceite** ✅: Filtros para aceite sintético, mineral, semi-sintético, diferentes marcas y tamaños (5 productos)
- **Filtro de Aire** ✅: Filtros de aire estándar, deportivos, con carbón activo, lavables (5 productos)
- **Filtro de Combustible** ✅: Filtros de combustible estándar, de alta presión, con válvula de retorno (5 productos)
- **Filtro de Habitáculo** ✅: Filtros de habitáculo estándar, con carbón activo, antialérgicos, antibacterianos (5 productos)

## TODO: Sección General de Embrague (Tareas 200-204)

### 200. **Crear componente ClutchSubsections.tsx para sección general de Embrague** ✅ COMPLETADO
    - Argumento: Crear componente para la nueva sección general de Embrague con 4 subsecciones usando el mismo patrón que Filtros.
    - Subsecciones: "Kit de Embrague", "Cojinete de Embrague", "Accionamiento del Embrague", "Volante Motor"
    - Estado: ✅ COMPLETADO - Componente implementado con datos mock y funcionalidad completa

### 201. **Integrar ClutchSubsections en PartsContentArea.tsx** ✅ COMPLETADO
    - Argumento: Integrar la nueva sección de Embrague en el sistema de categorías principales.
    - Integración: Renderizado condicional para categoría 'clutch'
    - Estado: ✅ COMPLETADO - Integración completa en PartsContentArea

### 202. **Crear estructura base para subsecciones de Embrague**
    - Argumento: Establecer la estructura base para las 4 subsecciones de embrague sin datos mock.
    - Subsecciones: Kit de Embrague, Cojinete de Embrague, Accionamiento del Embrague, Volante Motor
    - Estado: ✅ COMPLETADO - Estructura base implementada

### 203. **Implementar navegación entre subsecciones de Embrague**
    - Argumento: Permitir navegación fluida entre las 4 subsecciones de embrague.
    - Funcionalidades: Navegación por pestañas, indicadores visuales, estado activo
    - Estado: ✅ COMPLETADO - Navegación implementada

### 204. **Actualizar milestone3.md con nuevas tareas** ✅ COMPLETADO
    - Argumento: Documentar la implementación de la nueva sección general de Embrague.
    - Estructura: 4 subsecciones base sin datos mock
    - Estado: ✅ COMPLETADO - Documentación actualizada

### 205. **Crear datos mock para subsecciones de Embrague** ✅ COMPLETADO
    - Argumento: Crear archivo clutchSubSubsections.ts con datos mock para las 4 subsecciones de embrague.
    - Archivo: `lib/mocks/clutchSubSubsections.ts`
    - Contenido: 4 subsecciones con 5 productos cada una
    - Estado: ✅ COMPLETADO - Datos mock implementados

### 206. **Crear componente ClutchFilters.tsx** ✅ COMPLETADO
    - Argumento: Crear filtros específicos para productos de embrague (marca, tipo).
    - Archivo: `components/ClutchFilters.tsx`
    - Filtros: Por marca y tipo de componente
    - Estado: ✅ COMPLETADO - Filtros implementados

### 207. **Implementar funcionalidad completa de Embrague** ✅ COMPLETADO
    - Argumento: Implementar la funcionalidad completa siguiendo el patrón de la sección de Filtros.
    - Funcionalidades: Navegación, búsqueda, filtros, vista grid/lista, carrito
    - Estado: ✅ COMPLETADO - Funcionalidad completa implementada

## TODO: Subsecciones de nivel 3 para "Accionamiento del Embrague" (Tareas 208-212)

### 208. **Crear datos mock para subsecciones de Accionamiento del Embrague** ✅ COMPLETADO
    - Argumento: Crear archivo clutchActuationSubSubsections.ts con datos mock para 2 subsecciones específicas.
    - Subsecciones: "Bomba de embrague" y "Bombín de embrague"
    - Estado: ✅ COMPLETADO - Datos mock implementados con 5 productos cada una

### 209. **Crear componente ClutchActuationSubSubsections.tsx** ✅ COMPLETADO
    - Argumento: Componente reutilizable para navegación entre subsecciones de accionamiento de embrague.
    - Funcionalidades: Navegación, búsqueda, filtros, vista grid/lista
    - Estado: ✅ COMPLETADO - Componente implementado con funcionalidad completa

### 210. **Crear filtros específicos ClutchActuationFilters.tsx** ✅ COMPLETADO
    - Argumento: Filtros específicos para productos de accionamiento de embrague (tipo, marca).
    - Filtros: Por tipo de componente y marca
    - Estado: ✅ COMPLETADO - Filtros implementados con 6 marcas y 6 tipos

### 211. **Integrar ClutchActuationSubSubsections en ClutchSubsections.tsx** ✅ COMPLETADO
    - Argumento: Integrar la navegación de subsecciones de accionamiento en el componente principal.
    - Integración: Renderizado condicional y navegación
    - Estado: ✅ COMPLETADO - Integración completa con navegación de nivel 3

### 212. **Actualizar milestone3.md con nuevas tareas** ✅ COMPLETADO
    - Argumento: Documentar la implementación de subsecciones de nivel 3 para accionamiento de embrague.
    - Estructura: 2 subsecciones con navegación y filtros específicos
    - Estado: ✅ COMPLETADO - Documentación actualizada

### Subsecciones de nivel 2 para "Embrague" (Sección General) implementadas:

- **Kit de Embrague** ✅: Kits completos de embrague con disco, plato y cojinete (5 productos con funcionalidad completa)
- **Cojinete de Embrague** ✅: Cojinetes de embrague de diferentes marcas y calidades (5 productos con funcionalidad completa)
- **Accionamiento del Embrague** ✅: Bombines, cables y sistemas de accionamiento hidráulico (5 productos con funcionalidad completa + 2 subsecciones de nivel 3)
- **Volante Motor** ✅: Volantes de inercia, volantes bimasa y volantes ligeros (5 productos con funcionalidad completa)

### Subsecciones de nivel 3 para "Accionamiento del Embrague" implementadas:

- **Bomba de Embrague** ✅: Bombas maestras de embrague hidráulico y sistemas de accionamiento (5 productos con funcionalidad completa)
- **Bombín de Embrague** ✅: Bombines esclavos de embrague hidráulico y cilindros de accionamiento (5 productos con funcionalidad completa)

## TODO: Subsecciones de nivel 2 para "Sistema de Frenado" (Tareas 213-218)

### 213. **Crear datos mock para subsecciones de Sistema de Frenado**
    - Argumento: Crear archivo brakesSubSubsections.ts con datos mock para las 6 subsecciones del sistema de frenado.
    - Subsecciones: "Freno de disco", "Freno de tambor", "Cilindro principal de freno", "Freno de Mano", "Servofreno", "Latiguillos de Freno"
    - Estado: 🔄 PENDIENTE - Crear datos mock con 5 productos por subsección

### 214. **Crear componente BrakesSubSubsections.tsx para navegación**
    - Argumento: Componente reutilizable para navegación entre las 6 subsecciones del sistema de frenado.
    - Funcionalidades: Navegación, búsqueda, filtros, vista grid/lista
    - Estado: 🔄 PENDIENTE - Implementar componente siguiendo patrón de ClutchSubsections

### 215. **Crear filtros específicos BrakesFilters.tsx**
    - Argumento: Filtros específicos para productos del sistema de frenado (marca, tipo, material).
    - Filtros: Por marca, tipo de componente y material
    - Estado: 🔄 PENDIENTE - Implementar filtros específicos para frenos

### 216. **Integrar BrakesSubSubsections en PartsContentArea.tsx**
    - Argumento: Integrar la navegación de subsecciones de frenos en el sistema de categorías principales.
    - Integración: Renderizado condicional para categoría 'brakes'
    - Estado: 🔄 PENDIENTE - Integrar en PartsContentArea

### 217. **Implementar navegación entre subsecciones de Sistema de Frenado**
    - Argumento: Permitir navegación fluida entre las 6 subsecciones del sistema de frenado.
    - Funcionalidades: Navegación por pestañas, indicadores visuales, estado activo
    - Estado: 🔄 PENDIENTE - Implementar navegación completa

### 218. **Actualizar milestone3.md con nuevas tareas**
    - Argumento: Documentar la implementación de subsecciones para el sistema de frenado.
    - Estructura: 6 subsecciones con navegación y filtros específicos
    - Estado: ✅ COMPLETADO - Documentación actualizada

### Subsecciones de nivel 2 para "Sistema de Frenado" a implementar:

- **Freno de disco** 🔄: Pastillas de freno de disco, discos de freno, sensores de desgaste, clips y muelles
- **Freno de tambor** 🔄: Zapatas de freno, tambores de freno, bombines, kits de reparación
- **Cilindro principal de freno** 🔄: Cilindros maestros, bombas de freno, depósitos de líquido
- **Freno de Mano** 🔄: Cables de freno de mano, palancas, mecanismos de freno de estacionamiento
- **Servofreno** 🔄: Servofrenos de vacío, bombas de vacío, válvulas de vacío
- **Latiguillos de Freno** 🔄: Latiguillos flexibles, tubos rígidos, conexiones y abrazaderas

---

## TODO: Subsecciones de nivel 3 para "Freno de disco" (Tareas 219-235)

### 219. **Crear datos mock para subsecciones de nivel 3 de Freno de disco**
    - Argumento: Crear archivo brakeDiscSubSubsections.ts con datos mock para las 4 subsecciones específicas de freno de disco.
    - Subsecciones: "Discos de Freno", "Pastilla de Freno", "Pinza de Freno", "Sensores de desgaste"
    - Estado: 🔄 PENDIENTE - Crear datos mock con 5 productos por subsección

### 220. **Implementar subsecciones de Discos de Freno**
    - Argumento: Crear productos específicos para discos de freno con diferentes materiales y especificaciones.
    - Productos: Discos ventilados, sólidos, perforados, ranurados, diferentes diámetros
    - Marcas: Brembo, Zimmermann, ATE, TRW, Pagid
    - Especificaciones: Material (hierro fundido, carbono), diámetro, grosor, ventilación

### 221. **Implementar subsecciones de Pastilla de Freno**
    - Argumento: Crear productos específicos para pastillas de freno con diferentes materiales de fricción.
    - Productos: Pastillas cerámicas, orgánicas, semi-metálicas, racing, económicas
    - Marcas: Brembo, Ferodo, Bosch, Textar, Pagid
    - Especificaciones: Material (cerámica, orgánica, semi-metálica), durabilidad, ruido

### 222. **Implementar subsecciones de Pinza de Freno**
    - Argumento: Crear productos específicos para pinzas de freno con diferentes tipos y aplicaciones.
    - Productos: Pinzas fijas, flotantes, monobloque, de 2 pistones, de 4 pistones
    - Marcas: Brembo, ATE, TRW, Bosch, Pagid
    - Especificaciones: Tipo (fija/flotante), número de pistones, material, aplicación

### 223. **Implementar subsecciones de Sensores de desgaste**
    - Argumento: Crear productos específicos para sensores de desgaste de pastillas de freno.
    - Productos: Sensores de desgaste, cables de sensor, conectores, sistemas de alerta
    - Marcas: Bosch, ATE, TRW, Valeo, Febi
    - Especificaciones: Tipo de sensor, longitud de cable, compatibilidad

### 224. **Crear componente BrakeDiscSubSubsections reutilizable**
    - Argumento: Reutilizar la estructura de BrakesSubSubsections para crear un componente específico para freno de disco.
    - Archivo: `components/BrakeDiscSubSubsections.tsx`
    - Reutilización: Adaptar BrakesSubSubsections para subsecciones específicas de freno de disco

### 225. **Crear filtros específicos BrakeDiscFilters.tsx**
    - Argumento: Crear filtros específicos para productos de freno de disco (tipo, marca, material).
    - Archivo: `components/BrakeDiscFilters.tsx`
    - Filtros: Por tipo de componente, marca, material, aplicación

### 226. **Integrar BrakeDiscSubSubsections en BrakesSubSubsections.tsx**
    - Argumento: Agregar navegación de nivel 3 para freno de disco dentro de la subcategoría de freno de disco.
    - Modificación: `components/BrakesSubSubsections.tsx`
    - Funcionalidad: Navegación de nivel 3 para componentes específicos de freno de disco

### 227. **Implementar navegación de subsecciones de nivel 3 de Freno de disco**
    - Argumento: Crear botones de navegación para cada componente específico de freno de disco con contadores.
    - Diseño: Reutilizar el diseño de botones de sistema de frenado
    - Responsive: Adaptar para móvil y desktop

### 228. **Crear datos mock para productos específicos de freno de disco**
    - Argumento: Generar 5 productos por cada subsección específica de freno de disco con datos realistas.
    - Especificaciones: Marca, modelo, compatibilidad, material, precio, descripción técnica
    - Imágenes: URLs de imágenes representativas de componentes específicos de freno de disco

### 229. **Implementar filtrado por componente específico de freno de disco**
    - Argumento: Permitir filtrar productos por el componente específico de freno de disco seleccionado.
    - Lógica: Similar a la implementada para sistema de frenado pero más específica
    - Estado: Manejar activeBrakeDiscType en BrakesSubSubsections

### 230. **Crear iconos específicos para cada componente de freno de disco**
    - Argumento: Asignar iconos representativos para cada subsección específica de freno de disco.
    - Iconos: Disc (discos), Square (pastillas), Settings (pinzas), AlertTriangle (sensores)
    - Implementación: Usar iconos de Lucide React

### 231. **Implementar vista responsive para subsecciones de nivel 3 de Freno de disco**
    - Argumento: Adaptar la interfaz para dispositivos móviles y tablets.
    - Móvil: Lista vertical de componentes específicos de freno de disco
    - Desktop: Botones horizontales con contadores

### 232. **Integrar contadores de productos en navegación de nivel 3 de Freno de disco**
    - Argumento: Mostrar la cantidad de productos disponibles en cada componente específico de freno de disco.
    - Visualización: Badges con números en cada botón de componente
    - Actualización: Dinámica según filtros aplicados

### 233. **Implementar búsqueda específica para productos de freno de disco**
    - Argumento: Permitir buscar productos específicos de freno de disco por nombre, marca, modelo, material o especificaciones.
    - Campos: Nombre, marca, descripción, compatibilidad, material
    - Filtrado: En tiempo real con debounce

### 234. **Crear breadcrumbs para navegación de nivel 3 de Freno de disco**
    - Argumento: Implementar navegación jerárquica clara para subsecciones específicas de freno de disco.
    - Estructura: Sistema de Frenado > Freno de disco > [Componente Específico]
    - Componente: Reutilizar SubSubsectionHeader

### 235. **Actualizar milestone3.md con nuevas tareas**
    - Argumento: Documentar la implementación de subsecciones de nivel 3 para freno de disco.
    - Estructura: 4 subsecciones con navegación y filtros específicos
    - Estado: ✅ COMPLETADO - Documentación actualizada

### Subsecciones de nivel 3 para "Freno de disco" a implementar:

- **Discos de Freno** 🔄: Discos ventilados, sólidos, perforados, ranurados, diferentes diámetros y materiales
- **Pastilla de Freno** 🔄: Pastillas cerámicas, orgánicas, semi-metálicas, racing, económicas
- **Pinza de Freno** 🔄: Pinzas fijas, flotantes, monobloque, de 2 pistones, de 4 pistones
- **Sensores de desgaste** 🔄: Sensores de desgaste, cables de sensor, conectores, sistemas de alerta

---

## TODO: Subsecciones de nivel 3 para "Freno de tambor" (Tareas 236-252)

### 236. **Crear datos mock para subsecciones de nivel 3 de Freno de tambor**
    - Argumento: Crear archivo brakeDrumSubSubsections.ts con datos mock para las 4 subsecciones específicas de freno de tambor.
    - Subsecciones: "Kit de Frenos", "Cilindro de Rueda", "Zapata de Freno", "Tambor de Freno"
    - Estado: 🔄 PENDIENTE - Crear datos mock con 5 productos por subsección

### 237. **Implementar subsecciones de Kit de Frenos**
    - Argumento: Crear productos específicos para kits completos de freno de tambor.
    - Productos: Kits completos con zapatas, cilindros, muelles, guías y tornillos
    - Marcas: Bendix, Ferodo, TRW, ATE, Valeo
    - Especificaciones: Kit completo, kit básico, kit premium, diferentes diámetros

### 238. **Implementar subsecciones de Cilindro de Rueda**
    - Argumento: Crear productos específicos para cilindros de rueda de freno de tambor.
    - Productos: Cilindros de rueda, cilindros de freno trasero, kits de reparación
    - Marcas: ATE, TRW, Bosch, Bendix, Febi
    - Especificaciones: Diámetro de pistón, tipo de conexión, material

### 239. **Implementar subsecciones de Zapata de Freno**
    - Argumento: Crear productos específicos para zapatas de freno de tambor.
    - Productos: Zapatas de freno, forros de zapata, kits de zapatas
    - Marcas: Ferodo, Bendix, TRW, ATE, Pagid
    - Especificaciones: Material de fricción, diámetro, tipo de fijación

### 240. **Implementar subsecciones de Tambor de Freno**
    - Argumento: Crear productos específicos para tambores de freno.
    - Productos: Tambores de freno, tambores ventilados, tambores sólidos
    - Marcas: ATE, TRW, Bosch, Bendix, Valeo
    - Especificaciones: Diámetro interno, material, ventilación, acabado

### 241. **Crear componente BrakeDrumSubSubsections reutilizable**
    - Argumento: Reutilizar la estructura de BrakeDiscSubSubsections para crear un componente específico para freno de tambor.
    - Archivo: `components/BrakeDrumSubSubsections.tsx`
    - Reutilización: Adaptar BrakeDiscSubSubsections para subsecciones específicas de freno de tambor

### 242. **Crear filtros específicos BrakeDrumFilters.tsx**
    - Argumento: Crear filtros específicos para productos de freno de tambor (tipo, marca, material).
    - Archivo: `components/BrakeDrumFilters.tsx`
    - Filtros: Por tipo de componente, marca, material, aplicación

### 243. **Integrar BrakeDrumSubSubsections en BrakesSubSubsections.tsx**
    - Argumento: Agregar navegación de nivel 3 para freno de tambor dentro de la subcategoría de freno de tambor.
    - Modificación: `components/BrakesSubSubsections.tsx`
    - Funcionalidad: Navegación de nivel 3 para componentes específicos de freno de tambor

### 244. **Implementar navegación de subsecciones de nivel 3 de Freno de tambor**
    - Argumento: Crear botones de navegación para cada componente específico de freno de tambor con contadores.
    - Diseño: Reutilizar el diseño de botones de freno de disco
    - Responsive: Adaptar para móvil y desktop

### 245. **Crear datos mock para productos específicos de freno de tambor**
    - Argumento: Generar 5 productos por cada subsección específica de freno de tambor con datos realistas.
    - Especificaciones: Marca, modelo, compatibilidad, material, precio, descripción técnica
    - Imágenes: URLs de imágenes representativas de componentes específicos de freno de tambor

### 246. **Implementar filtrado por componente específico de freno de tambor**
    - Argumento: Permitir filtrar productos por el componente específico de freno de tambor seleccionado.
    - Lógica: Similar a la implementada para freno de disco pero más específica
    - Estado: Manejar activeBrakeDrumType en BrakesSubSubsections

### 247. **Crear iconos específicos para cada componente de freno de tambor**
    - Argumento: Asignar iconos representativos para cada subsección específica de freno de tambor.
    - Iconos: Package (kits), Circle (cilindros), Square (zapatas), Disc (tambores)
    - Implementación: Usar iconos de Lucide React

### 248. **Implementar vista responsive para subsecciones de nivel 3 de Freno de tambor**
    - Argumento: Adaptar la interfaz para dispositivos móviles y tablets.
    - Móvil: Lista vertical de componentes específicos de freno de tambor
    - Desktop: Botones horizontales con contadores

### 249. **Integrar contadores de productos en navegación de nivel 3 de Freno de tambor**
    - Argumento: Mostrar la cantidad de productos disponibles en cada componente específico de freno de tambor.
    - Visualización: Badges con números en cada botón de componente
    - Actualización: Dinámica según filtros aplicados

### 250. **Implementar búsqueda específica para productos de freno de tambor**
    - Argumento: Permitir buscar productos específicos de freno de tambor por nombre, marca, modelo, material o especificaciones.
    - Campos: Nombre, marca, descripción, compatibilidad, material
    - Filtrado: En tiempo real con debounce

### 251. **Crear breadcrumbs para navegación de nivel 3 de Freno de tambor**
    - Argumento: Implementar navegación jerárquica clara para subsecciones específicas de freno de tambor.
    - Estructura: Sistema de Frenado > Freno de tambor > [Componente Específico]
    - Componente: Reutilizar SubSubsectionHeader

### 252. **Actualizar milestone3.md con nuevas tareas**
    - Argumento: Documentar la implementación de subsecciones de nivel 3 para freno de tambor.
    - Estructura: 4 subsecciones con navegación y filtros específicos
    - Estado: ✅ COMPLETADO - Documentación actualizada

### Subsecciones de nivel 3 para "Freno de tambor" a implementar:

- **Kit de Frenos** 🔄: Kits completos con zapatas, cilindros, muelles, guías y tornillos
- **Cilindro de Rueda** 🔄: Cilindros de rueda, cilindros de freno trasero, kits de reparación
- **Zapata de Freno** 🔄: Zapatas de freno, forros de zapata, kits de zapatas
- **Tambor de Freno** 🔄: Tambores de freno, tambores ventilados, tambores sólidos

---

## TODO: Subsecciones de nivel 2 para "Dirección" (Tareas 253-269)

### 253. **Crear datos mock para subsecciones de nivel 2 de Dirección**
    - Argumento: Crear archivo steeringSubSubsections.ts con datos mock para las 7 subsecciones específicas de dirección.
    - Subsecciones: "Rótulas de dirección", "Rótulas axiales", "Columna de dirección", "Conjunto de cremallera", "Bomba de dirección", "Fuelles", "Volante/Accesorios"
    - Estado: 🔄 PENDIENTE - Crear datos mock con 5 productos por subsección

### 254. **Implementar subsecciones de Rótulas de dirección**
    - Argumento: Crear productos específicos para rótulas del sistema de dirección.
    - Productos: Rótulas superiores, inferiores, izquierda, derecha, con y sin tornillo
    - Marcas: Lemförder, TRW, Febi, Moog, Delphi
    - Especificaciones: Tipo (superior/inferior), lado (izquierda/derecha), con/sin tornillo

### 255. **Implementar subsecciones de Rótulas axiales**
    - Argumento: Crear productos específicos para rótulas del eje axial y transmisión.
    - Productos: Rótulas axiales, rótulas de transmisión, rótulas de cardán
    - Marcas: GKN, Lobro, SKF, Febi, TRW
    - Especificaciones: Tipo de rótula, aplicación, material, diámetro

### 256. **Implementar subsecciones de Columna de dirección**
    - Argumento: Crear productos específicos para componentes de la columna de dirección.
    - Productos: Columnas de dirección, crucetas, juntas universales, manguitos
    - Marcas: Lemförder, TRW, Febi, Moog, Delphi
    - Especificaciones: Tipo de columna, longitud, tipo de junta, material

### 257. **Implementar subsecciones de Conjunto de cremallera**
    - Argumento: Crear productos específicos para el conjunto de cremallera de dirección.
    - Productos: Cremalleras de dirección, terminales, bieletas, kits de reparación
    - Marcas: Lemförder, TRW, Febi, Moog, Delphi
    - Especificaciones: Tipo de cremallera, longitud, tipo de terminal, material

### 258. **Implementar subsecciones de Bomba de dirección**
    - Argumento: Crear productos específicos para bombas de dirección asistida.
    - Productos: Bombas de dirección hidráulica, bombas eléctricas, depósitos, filtros
    - Marcas: TRW, Febi, Lemförder, Delphi, Valeo
    - Especificaciones: Tipo de bomba, presión, caudal, material, aplicación

### 259. **Implementar subsecciones de Fuelles**
    - Argumento: Crear productos específicos para fuelles de protección de rótulas.
    - Productos: Fuelles de rótula, protectores de grasa, kits de reparación
    - Marcas: Febi, Lemförder, TRW, Moog, Delphi
    - Especificaciones: Diámetro, longitud, material, aplicación específica

### 260. **Implementar subsecciones de Volante/Accesorios**
    - Argumento: Crear productos específicos para volante y accesorios de dirección.
    - Productos: Volantes, airbags, botones de control, cubiertas
    - Marcas: TRW, Febi, Lemförder, Delphi, Valeo
    - Especificaciones: Diámetro, material, funcionalidades, compatibilidad

### 261. **Crear componente SteeringSubSubsections reutilizable**
    - Argumento: Reutilizar la estructura de BrakesSubSubsections para crear un componente específico para dirección.
    - Archivo: `components/SteeringSubSubsections.tsx`
    - Reutilización: Adaptar BrakesSubSubsections para subsecciones específicas de dirección

### 262. **Crear filtros específicos SteeringFilters.tsx**
    - Argumento: Crear filtros específicos para productos de dirección (marca, tipo, aplicación).
    - Archivo: `components/SteeringFilters.tsx`
    - Filtros: Por marca, tipo de componente, aplicación, material

### 263. **Integrar SteeringSubSubsections en PartsContentArea.tsx**
    - Argumento: Agregar navegación de nivel 2 para dirección en el sistema de categorías principales.
    - Modificación: `components/PartsContentArea.tsx`
    - Funcionalidad: Renderizado condicional para categoría 'steering'

### 264. **Implementar navegación de subsecciones de nivel 2 de Dirección**
    - Argumento: Crear botones de navegación para cada subsección específica de dirección con contadores.
    - Diseño: Reutilizar el diseño de botones de sistema de frenado
    - Responsive: Adaptar para móvil y desktop

### 265. **Crear datos mock para productos específicos de dirección**
    - Argumento: Generar 5 productos por cada subsección específica de dirección con datos realistas.
    - Especificaciones: Marca, modelo, compatibilidad, material, precio, descripción técnica
    - Imágenes: URLs de imágenes representativas de componentes específicos de dirección

### 266. **Implementar filtrado por subsección específica de dirección**
    - Argumento: Permitir filtrar productos por la subsección específica de dirección seleccionada.
    - Lógica: Similar a la implementada para sistema de frenado pero específica para dirección
    - Estado: Manejar activeSteeringType en SteeringSubSubsections

### 267. **Crear iconos específicos para cada subsección de dirección**
    - Argumento: Asignar iconos representativos para cada subsección específica de dirección.
    - Iconos: Settings (rótulas), RotateCcw (axiales), Navigation (columna), Cog (cremallera), Zap (bomba), Shield (fuelles), SteeringWheel (volante)
    - Implementación: Usar iconos de Lucide React

### 268. **Implementar vista responsive para subsecciones de nivel 2 de Dirección**
    - Argumento: Adaptar la interfaz para dispositivos móviles y tablets.
    - Móvil: Lista vertical de subsecciones específicas de dirección
    - Desktop: Botones horizontales con contadores

### 269. **Actualizar milestone3.md con nuevas tareas**
    - Argumento: Documentar la implementación de subsecciones de nivel 2 para dirección.
    - Estructura: 7 subsecciones con navegación y filtros específicos
    - Estado: ✅ COMPLETADO - Documentación actualizada

### Subsecciones de nivel 2 para "Dirección" a implementar:

- **Rótulas de dirección** 🔄: Rótulas superiores, inferiores, izquierda, derecha, con y sin tornillo
- **Rótulas axiales** 🔄: Rótulas axiales, rótulas de transmisión, rótulas de cardán
- **Columna de dirección** 🔄: Columnas de dirección, crucetas, juntas universales, manguitos
- **Conjunto de cremallera** 🔄: Cremalleras de dirección, terminales, bieletas, kits de reparación
- **Bomba de dirección** 🔄: Bombas de dirección hidráulica, bombas eléctricas, depósitos, filtros
- **Fuelles** 🔄: Fuelles de rótula, protectores de grasa, kits de reparación
- **Volante/Accesorios** 🔄: Volantes, airbags, botones de control, cubiertas

---

## TODO: Subsecciones de nivel 2 para "Refrigeración" (Tareas 270-285)

### 270. **Crear datos mock para subsecciones de nivel 2 de Refrigeración**
    - Argumento: Crear archivo coolingSubSubsections.ts con datos mock para las 6 subsecciones específicas de refrigeración.
    - Subsecciones: "Bomba de agua", "Radiador de agua", "Radiador de Aceite", "Ventilador", "Termostato", "Tubería y sujección"
    - Estado: 🔄 PENDIENTE - Crear datos mock con 5 productos por subsección

### 271. **Implementar subsecciones de Bomba de agua**
    - Argumento: Crear productos específicos para bombas de agua del sistema de refrigeración.
    - Productos: Bombas de agua, kits de reparación, juntas, poleas, correas
    - Marcas: Aisin, Gates, Febi, Continental, Dayco
    - Especificaciones: Tipo de bomba, caudal, presión, material, aplicación

### 272. **Implementar subsecciones de Radiador de agua**
    - Argumento: Crear productos específicos para radiadores de agua del sistema de refrigeración.
    - Productos: Radiadores de agua, núcleos, tanques, válvulas, tapones
    - Marcas: Nissens, Behr, Valeo, Febi, Delphi
    - Especificaciones: Dimensiones, material, tipo de núcleo, capacidad

### 273. **Implementar subsecciones de Radiador de Aceite**
    - Argumento: Crear productos específicos para radiadores de aceite del sistema de refrigeración.
    - Productos: Radiadores de aceite, intercambiadores, válvulas termostáticas
    - Marcas: Nissens, Behr, Valeo, Febi, Delphi
    - Especificaciones: Tipo de refrigeración, material, conexiones, presión

### 274. **Implementar subsecciones de Ventilador**
    - Argumento: Crear productos específicos para ventiladores del sistema de refrigeración.
    - Productos: Ventiladores eléctricos, ventiladores mecánicos, embragues, motores
    - Marcas: Behr, Valeo, Febi, Delphi, Aisin
    - Especificaciones: Diámetro, tipo de accionamiento, potencia, material

### 275. **Implementar subsecciones de Termostato**
    - Argumento: Crear productos específicos para termostatos del sistema de refrigeración.
    - Productos: Termostatos, juntas, sensores de temperatura, válvulas
    - Marcas: Behr, Febi, Gates, Continental, Aisin
    - Especificaciones: Temperatura de apertura, tipo de termostato, material

### 276. **Implementar subsecciones de Tubería y sujección**
    - Argumento: Crear productos específicos para tuberías y elementos de sujección del sistema de refrigeración.
    - Productos: Mangueras, tuberías, abrazaderas, conectores, válvulas
    - Marcas: Gates, Continental, Dayco, Febi, Aisin
    - Especificaciones: Diámetro, longitud, material, tipo de conexión

### 277. **Crear componente CoolingSubSubsections reutilizable**
    - Argumento: Reutilizar la estructura de SteeringSubSubsections para crear un componente específico para refrigeración.
    - Archivo: `components/CoolingSubSubsections.tsx`
    - Reutilización: Adaptar SteeringSubSubsections para subsecciones específicas de refrigeración

### 278. **Crear filtros específicos CoolingFilters.tsx**
    - Argumento: Crear filtros específicos para productos de refrigeración (marca, tipo, material).
    - Archivo: `components/CoolingFilters.tsx`
    - Filtros: Por marca, tipo de componente, material, aplicación

### 279. **Integrar CoolingSubSubsections en PartsContentArea.tsx**
    - Argumento: Agregar navegación de nivel 2 para refrigeración en el sistema de categorías principales.
    - Modificación: `components/PartsContentArea.tsx`
    - Funcionalidad: Renderizado condicional para categoría 'cooling'

### 280. **Implementar navegación de subsecciones de nivel 2 de Refrigeración**
    - Argumento: Crear botones de navegación para cada subsección específica de refrigeración con contadores.
    - Diseño: Reutilizar el diseño de botones de dirección
    - Responsive: Adaptar para móvil y desktop

### 281. **Crear datos mock para productos específicos de refrigeración**
    - Argumento: Generar 5 productos por cada subsección específica de refrigeración con datos realistas.
    - Especificaciones: Marca, modelo, compatibilidad, material, precio, descripción técnica
    - Imágenes: URLs de imágenes representativas de componentes específicos de refrigeración

### 282. **Implementar filtrado por subsección específica de refrigeración**
    - Argumento: Permitir filtrar productos por la subsección específica de refrigeración seleccionada.
    - Lógica: Similar a la implementada para dirección pero específica para refrigeración
    - Estado: Manejar activeCoolingType en CoolingSubSubsections

### 283. **Crear iconos específicos para cada subsección de refrigeración**
    - Argumento: Asignar iconos representativos para cada subsección específica de refrigeración.
    - Iconos: Droplets (bomba), Thermometer (radiador agua), Oil (radiador aceite), Fan (ventilador), Gauge (termostato), Pipe (tuberías)
    - Implementación: Usar iconos de Lucide React

### 284. **Implementar vista responsive para subsecciones de nivel 2 de Refrigeración**
    - Argumento: Adaptar la interfaz para dispositivos móviles y tablets.
    - Móvil: Lista vertical de subsecciones específicas de refrigeración
    - Desktop: Botones horizontales con contadores

### 285. **Actualizar milestone3.md con nuevas tareas**
    - Argumento: Documentar la implementación de subsecciones de nivel 2 para refrigeración.
    - Estructura: 6 subsecciones con navegación y filtros específicos
    - Estado: ✅ COMPLETADO - Documentación actualizada

### Subsecciones de nivel 2 para "Refrigeración" a implementar:

- **Bomba de agua** 🔄: Bombas de agua, kits de reparación, juntas, poleas, correas
- **Radiador de agua** 🔄: Radiadores de agua, núcleos, tanques, válvulas, tapones
- **Radiador de Aceite** 🔄: Radiadores de aceite, intercambiadores, válvulas termostáticas
- **Ventilador** 🔄: Ventiladores eléctricos, ventiladores mecánicos, embragues, motores
- **Termostato** 🔄: Termostatos, juntas, sensores de temperatura, válvulas
- **Tubería y sujección** 🔄: Mangueras, tuberías, abrazaderas, conectores, válvulas
- **Depósito/Vaso de expansión** 🔄: Depósitos de expansión, vasos de expansión, tapones, sensores de nivel

---

## TODO: Subsecciones de nivel 3 para "Radiador de Aceite" (Tareas 286-301)

### 286. **Crear datos mock para subsecciones de nivel 3 de Radiador de Aceite**
    - Argumento: Crear archivo oilRadiatorSubSubsections.ts con datos mock para las 2 subsecciones específicas de radiador de aceite.
    - Subsecciones: "Juntas", "Radiador de Aceite"
    - Estado: 🔄 PENDIENTE - Crear datos mock con 5 productos por subsección

### 287. **Implementar subsecciones de Juntas**
    - Argumento: Crear productos específicos para juntas de radiador de aceite.
    - Productos: Juntas de radiador, juntas de intercambiador, juntas de válvula termostática
    - Marcas: Nissens, Behr, Valeo, Febi, Delphi
    - Especificaciones: Material, diámetro, grosor, temperatura de trabajo

### 288. **Implementar subsecciones de Radiador de Aceite**
    - Argumento: Crear productos específicos para radiadores de aceite completos.
    - Productos: Radiadores de aceite, intercambiadores, núcleos, válvulas termostáticas
    - Marcas: Nissens, Behr, Valeo, Febi, Delphi
    - Especificaciones: Tipo de refrigeración, material, conexiones, presión, dimensiones

### 289. **Crear componente OilRadiatorSubSubsections reutilizable**
    - Argumento: Reutilizar la estructura de BrakeDrumSubSubsections para crear un componente específico para radiador de aceite.
    - Archivo: `components/OilRadiatorSubSubsections.tsx`
    - Reutilización: Adaptar BrakeDrumSubSubsections para subsecciones específicas de radiador de aceite

### 290. **Crear filtros específicos OilRadiatorFilters.tsx**
    - Argumento: Crear filtros específicos para productos de radiador de aceite (marca, tipo, material).
    - Archivo: `components/OilRadiatorFilters.tsx`
    - Filtros: Por marca, tipo de componente, material, aplicación

### 291. **Integrar OilRadiatorSubSubsections en CoolingSubSubsections.tsx**
    - Argumento: Agregar navegación de nivel 3 para radiador de aceite dentro de la subcategoría de radiador de aceite.
    - Modificación: `components/CoolingSubSubsections.tsx`
    - Funcionalidad: Navegación de nivel 3 para componentes específicos de radiador de aceite

### 292. **Implementar navegación de subsecciones de nivel 3 de Radiador de Aceite**
    - Argumento: Crear botones de navegación para cada componente específico de radiador de aceite con contadores.
    - Diseño: Reutilizar el diseño de botones de radiador de agua
    - Responsive: Adaptar para móvil y desktop

### 293. **Crear datos mock para productos específicos de radiador de aceite**
    - Argumento: Generar 5 productos por cada subsección específica de radiador de aceite con datos realistas.
    - Especificaciones: Marca, modelo, compatibilidad, material, precio, descripción técnica
    - Imágenes: URLs de imágenes representativas de componentes específicos de radiador de aceite

### 294. **Implementar filtrado por componente específico de radiador de aceite**
    - Argumento: Permitir filtrar productos por el componente específico de radiador de aceite seleccionado.
    - Lógica: Similar a la implementada para radiador de agua pero más específica
    - Estado: Manejar activeOilRadiatorType en CoolingSubSubsections

### 295. **Crear iconos específicos para cada componente de radiador de aceite**
    - Argumento: Asignar iconos representativos para cada subsección específica de radiador de aceite.
    - Iconos: Shield (juntas), Oil (radiador de aceite)
    - Implementación: Usar iconos de Lucide React

### 296. **Implementar vista responsive para subsecciones de nivel 3 de Radiador de Aceite**
    - Argumento: Adaptar la interfaz para dispositivos móviles y tablets.
    - Móvil: Lista vertical de componentes específicos de radiador de aceite
    - Desktop: Botones horizontales con contadores

### 297. **Integrar contadores de productos en navegación de nivel 3 de Radiador de Aceite**
    - Argumento: Mostrar la cantidad de productos disponibles en cada componente específico de radiador de aceite.
    - Visualización: Badges con números en cada botón de componente
    - Actualización: Dinámica según filtros aplicados

### 298. **Implementar búsqueda específica para productos de radiador de aceite**
    - Argumento: Permitir buscar productos específicos de radiador de aceite por nombre, marca, modelo, material o especificaciones.
    - Campos: Nombre, marca, descripción, compatibilidad, material
    - Filtrado: En tiempo real con debounce

### 299. **Crear breadcrumbs para navegación de nivel 3 de Radiador de Aceite**
    - Argumento: Implementar navegación jerárquica clara para subsecciones específicas de radiador de aceite.
    - Estructura: Refrigeración > Radiador de Aceite > [Componente Específico]
    - Componente: Reutilizar SubSubsectionHeader

### 300. **Actualizar milestone3.md con nuevas tareas**
    - Argumento: Documentar la implementación de subsecciones de nivel 3 para radiador de aceite.
    - Estructura: 2 subsecciones con navegación y filtros específicos
    - Estado: ✅ COMPLETADO - Documentación actualizada

### 301. **Implementar integración completa con sistema de refrigeración**
    - Argumento: Asegurar que la navegación de nivel 3 funcione correctamente dentro del sistema de refrigeración.
    - Funcionalidad: Navegación fluida entre niveles 2 y 3
    - Estado: ✅ COMPLETADO - Integración funcional

### Subsecciones de nivel 3 para "Radiador de Aceite" a implementar:

- **Juntas** 🔄: Juntas de radiador, juntas de intercambiador, juntas de válvula termostática
- **Radiador de Aceite** 🔄: Radiadores de aceite, intercambiadores, núcleos, válvulas termostáticas

---

## TODO: Subsecciones de nivel 3 para "Bomba de agua" (Tareas 302-317)

### 302. **Crear datos mock para subsecciones de nivel 3 de Bomba de agua**
    - Argumento: Crear archivo waterPumpSubSubsections.ts con datos mock para las 2 subsecciones específicas de bomba de agua.
    - Subsecciones: "Bomba de agua", "Juntas"
    - Estado: 🔄 PENDIENTE - Crear datos mock con 5 productos por subsección

### 303. **Implementar subsecciones de Bomba de agua**
    - Argumento: Crear productos específicos para bombas de agua completas.
    - Productos: Bombas de agua, kits de reparación, poleas, correas
    - Marcas: Aisin, Gates, Febi, Continental, Dayco
    - Especificaciones: Tipo de bomba, caudal, presión, material, aplicación

### 304. **Implementar subsecciones de Juntas**
    - Argumento: Crear productos específicos para juntas de bomba de agua.
    - Productos: Juntas de bomba, juntas de tapa, juntas de eje
    - Marcas: Aisin, Gates, Febi, Continental, Dayco
    - Especificaciones: Material, diámetro, grosor, temperatura de trabajo

### 305. **Crear componente WaterPumpSubSubsections reutilizable**
    - Argumento: Reutilizar la estructura de OilRadiatorSubSubsections para crear un componente específico para bomba de agua.
    - Archivo: `components/WaterPumpSubSubsections.tsx`
    - Reutilización: Adaptar OilRadiatorSubSubsections para subsecciones específicas de bomba de agua

### 306. **Crear filtros específicos WaterPumpFilters.tsx**
    - Argumento: Crear filtros específicos para productos de bomba de agua (marca, tipo, material).
    - Archivo: `components/WaterPumpFilters.tsx`
    - Filtros: Por marca, tipo de componente, material, aplicación

### 307. **Integrar WaterPumpSubSubsections en CoolingSubSubsections.tsx**
    - Argumento: Agregar navegación de nivel 3 para bomba de agua dentro de la subcategoría de bomba de agua.
    - Modificación: `components/CoolingSubSubsections.tsx`
    - Funcionalidad: Navegación de nivel 3 para componentes específicos de bomba de agua

### 308. **Implementar navegación de subsecciones de nivel 3 de Bomba de agua**
    - Argumento: Crear botones de navegación para cada componente específico de bomba de agua con contadores.
    - Diseño: Reutilizar el diseño de botones de radiador de aceite
    - Responsive: Adaptar para móvil y desktop

### 309. **Crear datos mock para productos específicos de bomba de agua**
    - Argumento: Generar 5 productos por cada subsección específica de bomba de agua con datos realistas.
    - Especificaciones: Marca, modelo, compatibilidad, material, precio, descripción técnica
    - Imágenes: URLs de imágenes representativas de componentes específicos de bomba de agua

### 310. **Implementar filtrado por componente específico de bomba de agua**
    - Argumento: Permitir filtrar productos por el componente específico de bomba de agua seleccionado.
    - Lógica: Similar a la implementada para radiador de aceite pero específica para bomba de agua
    - Estado: Manejar activeWaterPumpType en CoolingSubSubsections

### 311. **Crear iconos específicos para cada componente de bomba de agua**
    - Argumento: Asignar iconos representativos para cada subsección específica de bomba de agua.
    - Iconos: Droplets (bomba de agua), Shield (juntas)
    - Implementación: Usar iconos de Lucide React

### 312. **Implementar vista responsive para subsecciones de nivel 3 de Bomba de agua**
    - Argumento: Adaptar la interfaz para dispositivos móviles y tablets.
    - Móvil: Lista vertical de componentes específicos de bomba de agua
    - Desktop: Botones horizontales con contadores

### 313. **Integrar contadores de productos en navegación de nivel 3 de Bomba de agua**
    - Argumento: Mostrar la cantidad de productos disponibles en cada componente específico de bomba de agua.
    - Visualización: Badges con números en cada botón de componente
    - Actualización: Dinámica según filtros aplicados

### 314. **Implementar búsqueda específica para productos de bomba de agua**
    - Argumento: Permitir buscar productos específicos de bomba de agua por nombre, marca, modelo, material o especificaciones.
    - Campos: Nombre, marca, descripción, compatibilidad, material
    - Filtrado: En tiempo real con debounce

### 315. **Crear breadcrumbs para navegación de nivel 3 de Bomba de agua**
    - Argumento: Implementar navegación jerárquica clara para subsecciones específicas de bomba de agua.
    - Estructura: Refrigeración > Bomba de agua > [Componente Específico]
    - Componente: Reutilizar SubSubsectionHeader

### 316. **Actualizar milestone3.md con nuevas tareas**
    - Argumento: Documentar la implementación de subsecciones de nivel 3 para bomba de agua.
    - Estructura: 2 subsecciones con navegación y filtros específicos
    - Estado: ✅ COMPLETADO - Documentación actualizada

### 317. **Implementar integración completa con sistema de refrigeración**
    - Argumento: Asegurar que la navegación de nivel 3 funcione correctamente dentro del sistema de refrigeración.
    - Funcionalidad: Navegación fluida entre niveles 2 y 3
    - Estado: ✅ COMPLETADO - Integración funcional

### Subsecciones de nivel 3 para "Bomba de agua" a implementar:

- **Bomba de agua** 🔄: Bombas de agua, kits de reparación, poleas, correas
- **Juntas** 🔄: Juntas de bomba, juntas de tapa, juntas de eje

---

## TODO: Subsecciones de nivel 3 para "Termostato" (Tareas 318-333)

### 318. **Crear datos mock para subsecciones de nivel 3 de Termostato**
    - Argumento: Crear archivo thermostatSubSubsections.ts con datos mock para las 2 subsecciones específicas de termostato.
    - Subsecciones: "Termostato", "Juntas"
    - Estado: 🔄 PENDIENTE - Crear datos mock con 5 productos por subsección

### 319. **Implementar subsecciones de Termostato**
    - Argumento: Crear productos específicos para termostatos completos.
    - Productos: Termostatos, sensores de temperatura, válvulas
    - Marcas: Behr, Febi, Gates, Continental, Aisin
    - Especificaciones: Temperatura de apertura, tipo de termostato, material

### 320. **Implementar subsecciones de Juntas**
    - Argumento: Crear productos específicos para juntas de termostato.
    - Productos: Juntas de termostato, juntas de tapa, juntas de válvula
    - Marcas: Behr, Febi, Gates, Continental, Aisin
    - Especificaciones: Material, diámetro, grosor, temperatura de trabajo

### 321. **Crear componente ThermostatSubSubsections reutilizable**
    - Argumento: Reutilizar la estructura de WaterPumpSubSubsections para crear un componente específico para termostato.
    - Archivo: `components/ThermostatSubSubsections.tsx`
    - Reutilización: Adaptar WaterPumpSubSubsections para subsecciones específicas de termostato

### 322. **Crear filtros específicos ThermostatFilters.tsx**
    - Argumento: Crear filtros específicos para productos de termostato (marca, tipo, material).
    - Archivo: `components/ThermostatFilters.tsx`
    - Filtros: Por marca, tipo de componente, material, aplicación

### 323. **Integrar ThermostatSubSubsections en CoolingSubSubsections.tsx**
    - Argumento: Agregar navegación de nivel 3 para termostato dentro de la subcategoría de termostato.
    - Modificación: `components/CoolingSubSubsections.tsx`
    - Funcionalidad: Navegación de nivel 3 para componentes específicos de termostato

### 324. **Implementar navegación de subsecciones de nivel 3 de Termostato**
    - Argumento: Crear botones de navegación para cada componente específico de termostato con contadores.
    - Diseño: Reutilizar el diseño de botones de bomba de agua
    - Responsive: Adaptar para móvil y desktop

### 325. **Crear datos mock para productos específicos de termostato**
    - Argumento: Generar 5 productos por cada subsección específica de termostato con datos realistas.
    - Especificaciones: Marca, modelo, compatibilidad, material, precio, descripción técnica
    - Imágenes: URLs de imágenes representativas de componentes específicos de termostato

### 326. **Implementar filtrado por componente específico de termostato**
    - Argumento: Permitir filtrar productos por el componente específico de termostato seleccionado.
    - Lógica: Similar a la implementada para bomba de agua pero específica para termostato
    - Estado: Manejar activeThermostatType en CoolingSubSubsections

### 327. **Crear iconos específicos para cada componente de termostato**
    - Argumento: Asignar iconos representativos para cada subsección específica de termostato.
    - Iconos: Gauge (termostato), Shield (juntas)
    - Implementación: Usar iconos de Lucide React

### 328. **Implementar vista responsive para subsecciones de nivel 3 de Termostato**
    - Argumento: Adaptar la interfaz para dispositivos móviles y tablets.
    - Móvil: Lista vertical de componentes específicos de termostato
    - Desktop: Botones horizontales con contadores

### 329. **Integrar contadores de productos en navegación de nivel 3 de Termostato**
    - Argumento: Mostrar la cantidad de productos disponibles en cada componente específico de termostato.
    - Visualización: Badges con números en cada botón de componente
    - Actualización: Dinámica según filtros aplicados

### 330. **Implementar búsqueda específica para productos de termostato**
    - Argumento: Permitir buscar productos específicos de termostato por nombre, marca, modelo, material o especificaciones.
    - Campos: Nombre, marca, descripción, compatibilidad, material
    - Filtrado: En tiempo real con debounce

### 331. **Crear breadcrumbs para navegación de nivel 3 de Termostato**
    - Argumento: Implementar navegación jerárquica clara para subsecciones específicas de termostato.
    - Estructura: Refrigeración > Termostato > [Componente Específico]
    - Componente: Reutilizar SubSubsectionHeader

### 332. **Actualizar milestone3.md con nuevas tareas**
    - Argumento: Documentar la implementación de subsecciones de nivel 3 para termostato.
    - Estructura: 2 subsecciones con navegación y filtros específicos
    - Estado: ✅ COMPLETADO - Documentación actualizada

### 333. **Implementar integración completa con sistema de refrigeración**
    - Argumento: Asegurar que la navegación de nivel 3 funcione correctamente dentro del sistema de refrigeración.
    - Funcionalidad: Navegación fluida entre niveles 2 y 3
    - Estado: ✅ COMPLETADO - Integración funcional

### Subsecciones de nivel 3 para "Termostato" a implementar:

- **Termostato** 🔄: Termostatos, sensores de temperatura, válvulas
- **Juntas** 🔄: Juntas de termostato, juntas de tapa, juntas de válvula

---

## TODO: Subsecciones de nivel 3 para "Tubería y sujección" (Tareas 334-349)

### 334. **Crear datos mock para subsecciones de nivel 3 de Tubería y sujección**
    - Argumento: Crear archivo pipesClampsSubSubsections.ts con datos mock para las 2 subsecciones específicas de tubería y sujección.
    - Subsecciones: "Tubos de agua", "Bridas/sujección"
    - Estado: 🔄 PENDIENTE - Crear datos mock con 5 productos por subsección

### 335. **Implementar subsecciones de Tubos de agua**
    - Argumento: Crear productos específicos para tubos y mangueras de agua.
    - Productos: Mangueras, tuberías, conectores, válvulas
    - Marcas: Gates, Continental, Dayco, Febi, Aisin
    - Especificaciones: Diámetro, longitud, material, tipo de conexión

### 336. **Implementar subsecciones de Bridas/sujección**
    - Argumento: Crear productos específicos para bridas y elementos de sujección.
    - Productos: Abrazaderas, bridas, conectores, tornillos
    - Marcas: Gates, Continental, Dayco, Febi, Aisin
    - Especificaciones: Diámetro, material, tipo de fijación, presión

### 337. **Crear componente PipesClampsSubSubsections reutilizable**
    - Argumento: Reutilizar la estructura de ThermostatSubSubsections para crear un componente específico para tubería y sujección.
    - Archivo: `components/PipesClampsSubSubsections.tsx`
    - Reutilización: Adaptar ThermostatSubSubsections para subsecciones específicas de tubería y sujección

### 338. **Crear filtros específicos PipesClampsFilters.tsx**
    - Argumento: Crear filtros específicos para productos de tubería y sujección (marca, tipo, material).
    - Archivo: `components/PipesClampsFilters.tsx`
    - Filtros: Por marca, tipo de componente, material, aplicación

### 339. **Integrar PipesClampsSubSubsections en CoolingSubSubsections.tsx**
    - Argumento: Agregar navegación de nivel 3 para tubería y sujección dentro de la subcategoría de tubería y sujección.
    - Modificación: `components/CoolingSubSubsections.tsx`
    - Funcionalidad: Navegación de nivel 3 para componentes específicos de tubería y sujección

### 340. **Implementar navegación de subsecciones de nivel 3 de Tubería y sujección**
    - Argumento: Crear botones de navegación para cada componente específico de tubería y sujección con contadores.
    - Diseño: Reutilizar el diseño de botones de termostato
    - Responsive: Adaptar para móvil y desktop

### 341. **Crear datos mock para productos específicos de tubería y sujección**
    - Argumento: Generar 5 productos por cada subsección específica de tubería y sujección con datos realistas.
    - Especificaciones: Marca, modelo, compatibilidad, material, precio, descripción técnica
    - Imágenes: URLs de imágenes representativas de componentes específicos de tubería y sujección

### 342. **Implementar filtrado por componente específico de tubería y sujección**
    - Argumento: Permitir filtrar productos por el componente específico de tubería y sujección seleccionado.
    - Lógica: Similar a la implementada para termostato pero específica para tubería y sujección
    - Estado: Manejar activePipesClampsType en CoolingSubSubsections

### 343. **Crear iconos específicos para cada componente de tubería y sujección**
    - Argumento: Asignar iconos representativos para cada subsección específica de tubería y sujección.
    - Iconos: Pipe (tubos de agua), Wrench (bridas/sujección)
    - Implementación: Usar iconos de Lucide React

### 344. **Implementar vista responsive para subsecciones de nivel 3 de Tubería y sujección**
    - Argumento: Adaptar la interfaz para dispositivos móviles y tablets.
    - Móvil: Lista vertical de componentes específicos de tubería y sujección
    - Desktop: Botones horizontales con contadores

### 345. **Integrar contadores de productos en navegación de nivel 3 de Tubería y sujección**
    - Argumento: Mostrar la cantidad de productos disponibles en cada componente específico de tubería y sujección.
    - Visualización: Badges con números en cada botón de componente
    - Actualización: Dinámica según filtros aplicados

### 346. **Implementar búsqueda específica para productos de tubería y sujección**
    - Argumento: Permitir buscar productos específicos de tubería y sujección por nombre, marca, modelo, material o especificaciones.
    - Campos: Nombre, marca, descripción, compatibilidad, material
    - Filtrado: En tiempo real con debounce

### 347. **Crear breadcrumbs para navegación de nivel 3 de Tubería y sujección**
    - Argumento: Implementar navegación jerárquica clara para subsecciones específicas de tubería y sujección.
    - Estructura: Refrigeración > Tubería y sujección > [Componente Específico]
    - Componente: Reutilizar SubSubsectionHeader

### 348. **Actualizar milestone3.md con nuevas tareas**
    - Argumento: Documentar la implementación de subsecciones de nivel 3 para tubería y sujección.
    - Estructura: 2 subsecciones con navegación y filtros específicos
    - Estado: ✅ COMPLETADO - Documentación actualizada

### 349. **Implementar integración completa con sistema de refrigeración**
    - Argumento: Asegurar que la navegación de nivel 3 funcione correctamente dentro del sistema de refrigeración.
    - Funcionalidad: Navegación fluida entre niveles 2 y 3
    - Estado: ✅ COMPLETADO - Integración funcional

### Subsecciones de nivel 3 para "Tubería y sujección" a implementar:

- **Tubos de agua** 🔄: Mangueras, tuberías, conectores, válvulas
- **Bridas/sujección** 🔄: Abrazaderas, bridas, conectores, tornillos

---

## TODO: Subsecciones de nivel 2 para "Sistema de Escape" (Tareas 350-365)

### 350. **Crear datos mock para subsecciones de nivel 2 de Sistema de Escape**
    - Argumento: Crear archivo exhaustSubSubsections.ts con datos mock para las 7 subsecciones específicas de sistema de escape.
    - Subsecciones: "Catalizador", "Filtro de partículas", "Colector de escape", "Silenciador", "Tubos", "Sonda Lambda", "Sensores Temperatura"
    - Estado: 🔄 PENDIENTE - Crear datos mock con 5 productos por subsección

### 351. **Implementar subsecciones de Catalizador**
    - Argumento: Crear productos específicos para catalizadores del sistema de escape.
    - Productos: Catalizadores, convertidores catalíticos, juntas, abrazaderas
    - Marcas: Bosal, Walker, Febi, Delphi, Valeo
    - Especificaciones: Tipo de catalizador, material, diámetro, longitud

### 352. **Implementar subsecciones de Filtro de partículas**
    - Argumento: Crear productos específicos para filtros de partículas (DPF/FAP).
    - Productos: Filtros de partículas, sensores de presión, válvulas EGR
    - Marcas: Bosal, Walker, Febi, Delphi, Valeo
    - Especificaciones: Tipo de filtro, material, presión, temperatura

### 353. **Implementar subsecciones de Colector de escape**
    - Argumento: Crear productos específicos para colectores de escape.
    - Productos: Colectores de escape, juntas, tornillos, abrazaderas
    - Marcas: Bosal, Walker, Febi, Delphi, Valeo
    - Especificaciones: Material, diámetro, número de cilindros, tipo de conexión

### 354. **Implementar subsecciones de Silenciador**
    - Argumento: Crear productos específicos para silenciadores del sistema de escape.
    - Productos: Silenciadores, resonadores, juntas, abrazaderas
    - Marcas: Bosal, Walker, Febi, Delphi, Valeo
    - Especificaciones: Tipo de silenciador, material, nivel de ruido, diámetro

### 355. **Implementar subsecciones de Tubos**
    - Argumento: Crear productos específicos para tubos del sistema de escape.
    - Productos: Tubos de escape, codos, juntas, abrazaderas
    - Marcas: Bosal, Walker, Febi, Delphi, Valeo
    - Especificaciones: Diámetro, longitud, material, tipo de conexión

### 356. **Implementar subsecciones de Sonda Lambda**
    - Argumento: Crear productos específicos para sondas lambda del sistema de escape.
    - Productos: Sondas lambda, cables, conectores, juntas
    - Marcas: Bosch, NGK, Febi, Delphi, Valeo
    - Especificaciones: Tipo de sonda, número de cables, voltaje, compatibilidad

### 357. **Implementar subsecciones de Sensores Temperatura**
    - Argumento: Crear productos específicos para sensores de temperatura del sistema de escape.
    - Productos: Sensores de temperatura, cables, conectores, juntas
    - Marcas: Bosch, NGK, Febi, Delphi, Valeo
    - Especificaciones: Rango de temperatura, voltaje, tipo de conexión, material

### 358. **Crear componente ExhaustSubSubsections reutilizable**
    - Argumento: Reutilizar la estructura de CoolingSubSubsections para crear un componente específico para sistema de escape.
    - Archivo: `components/ExhaustSubSubsections.tsx`
    - Reutilización: Adaptar CoolingSubSubsections para subsecciones específicas de sistema de escape

### 359. **Crear filtros específicos ExhaustFilters.tsx**
    - Argumento: Crear filtros específicos para productos de sistema de escape (marca, tipo, material).
    - Archivo: `components/ExhaustFilters.tsx`
    - Filtros: Por marca, tipo de componente, material, aplicación

### 360. **Integrar ExhaustSubSubsections en PartsContentArea.tsx**
    - Argumento: Agregar navegación de nivel 2 para sistema de escape en el sistema de categorías principales.
    - Modificación: `components/PartsContentArea.tsx`
    - Funcionalidad: Renderizado condicional para categoría 'exhaust'

### 361. **Implementar navegación de subsecciones de nivel 2 de Sistema de Escape**
    - Argumento: Crear botones de navegación para cada subsección específica de sistema de escape con contadores.
    - Diseño: Reutilizar el diseño de botones de refrigeración
    - Responsive: Adaptar para móvil y desktop

### 362. **Crear datos mock para productos específicos de sistema de escape**
    - Argumento: Generar 5 productos por cada subsección específica de sistema de escape con datos realistas.
    - Especificaciones: Marca, modelo, compatibilidad, material, precio, descripción técnica
    - Imágenes: URLs de imágenes representativas de componentes específicos de sistema de escape

### 363. **Implementar filtrado por subsección específica de sistema de escape**
    - Argumento: Permitir filtrar productos por la subsección específica de sistema de escape seleccionada.
    - Lógica: Similar a la implementada para refrigeración pero específica para sistema de escape
    - Estado: Manejar activeExhaustType en ExhaustSubSubsections

### 364. **Crear iconos específicos para cada subsección de sistema de escape**
    - Argumento: Asignar iconos representativos para cada subsección específica de sistema de escape.
    - Iconos: Filter (catalizador), Shield (filtro partículas), Pipe (colector), Volume2 (silenciador), Pipe (tubos), Activity (sonda), Thermometer (sensores)
    - Implementación: Usar iconos de Lucide React

### 365. **Actualizar milestone3.md con nuevas tareas**
    - Argumento: Documentar la implementación de subsecciones de nivel 2 para sistema de escape.
    - Estructura: 7 subsecciones con navegación y filtros específicos
    - Estado: ✅ COMPLETADO - Documentación actualizada

### Subsecciones de nivel 2 para "Sistema de Escape" a implementar:

- **Catalizador** 🔄: Catalizadores, convertidores catalíticos, juntas, abrazaderas
- **Filtro de partículas** 🔄: Filtros de partículas, sensores de presión, válvulas EGR
- **Colector de escape** 🔄: Colectores de escape, juntas, tornillos, abrazaderas
- **Silenciador** 🔄: Silenciadores, resonadores, juntas, abrazaderas
- **Tubos** 🔄: Tubos de escape, codos, juntas, abrazaderas
- **Sonda Lambda** 🔄: Sondas lambda, cables, conectores, juntas
- **Sensores Temperatura** 🔄: Sensores de temperatura, cables, conectores, juntas

---

---

## TODO: Nueva categoría "Suspensión ejes" (Tareas 366-370)

### 366. **Reemplazar categoría "Transmisión" por "Suspensión ejes"**
    - Argumento: Eliminar la categoría "Transmisión" y reemplazarla por "Suspensión ejes" con productos básicos.
    - Productos básicos: Amortiguador trasero, muelle suspensión, cojinete rueda
    - Marcas: Bilstein, Lemförder, SKF
    - Estado: ✅ COMPLETADO - Categoría actualizada en lib/mocks/parts.ts

### 367. **Actualizar PartsContentArea.tsx**
    - Argumento: Eliminar referencias a componentes de transmisión por correas y transmisión por ejes.
    - Modificación: Remover imports y renderizado condicional de BeltTransmissionSubSubsections y AxleTransmissionSubSubsections
    - Estado: ✅ COMPLETADO - Referencias eliminadas

### 368. **Actualizar milestone3.md**
    - Argumento: Documentar la eliminación de las categorías de transmisión y la creación de "Suspensión ejes".
    - Estructura: Nueva categoría con productos básicos de suspensión
    - Estado: ✅ COMPLETADO - Documentación actualizada

### 369. **Preparar para futuras subsecciones de Suspensión ejes**
    - Argumento: La categoría "Suspensión ejes" está lista para implementar subsecciones de nivel 2 en el futuro.
    - Subsecciones potenciales: Amortiguadores, Muelles, Cojinetes, Bieletas, Rótulas
    - Estado: 🔄 PENDIENTE - Para implementación futura

### 370. **Limpiar archivos obsoletos**
    - Argumento: Los archivos de transmisión por correas y transmisión por ejes pueden ser eliminados ya que no se usan.
    - Archivos: BeltTransmissionSubSubsections.tsx, AxleTransmissionSubSubsections.tsx, etc.
    - Estado: 🔄 PENDIENTE - Para limpieza futura

### Nueva categoría "Suspensión ejes" implementada:

- **Amortiguador Trasero** ✅: Amortiguador trasero izquierdo, gas
- **Muelle Suspensión** ✅: Muelle de suspensión trasero, 12 vueltas  
- **Cojinete Rueda** ✅: Cojinete de rueda trasero, rodamiento sellado

---

## TODO: Subsecciones de nivel 2 para "Suspensión ejes" (Tareas 371-395)

### 371. **Crear datos mock para subsecciones de nivel 2 de Suspensión ejes**
    - Argumento: Crear archivo suspensionAxlesSubSubsections.ts con datos mock para las 8 subsecciones específicas de suspensión ejes.
    - Subsecciones: "Amortiguadores", "Fijación amortiguador/cojinete", "Buje/Cojinete Rueda", "Brazo oscilante", "Rótulas de suspensión", "Mangueta", "Tirantes/Bieletas", "Barra estabilizadora"
    - Estado: 🔄 PENDIENTE - Crear datos mock con 3 productos por subsección

### 372. **Implementar subsecciones de Amortiguadores**
    - Argumento: Crear productos específicos para amortiguadores delanteros y traseros.
    - Productos: Amortiguadores delanteros, amortiguadores traseros, kits de montaje
    - Marcas: Bilstein, Sachs, Monroe
    - Especificaciones: Tipo de amortiguador, posición, material, presión

### 373. **Implementar subsecciones de Fijación amortiguador/cojinete**
    - Argumento: Crear productos específicos para fijaciones y cojinetes de amortiguador.
    - Productos: Cojinetes de amortiguador, tornillos, arandelas, juntas
    - Marcas: Lemförder, Febi, SKF
    - Especificaciones: Diámetro, material, resistencia, tipo de montaje

### 374. **Implementar subsecciones de Buje/Cojinete Rueda**
    - Argumento: Crear productos específicos para bujes y cojinetes de rueda.
    - Productos: Cojinetes de rueda, bujes de suspensión, retenes, tornillos
    - Marcas: SKF, FAG, NSK
    - Especificaciones: Diámetro, material, carga, velocidad

### 375. **Implementar subsecciones de Brazo oscilante**
    - Argumento: Crear productos específicos para brazos oscilantes.
    - Productos: Brazos oscilantes delanteros, brazos oscilantes traseros, bujes de brazo
    - Marcas: Lemförder, TRW, Febi
    - Especificaciones: Longitud, material, tipo de buje, posición

### 376. **Implementar subsecciones de Rótulas de suspensión**
    - Argumento: Crear productos específicos para rótulas de suspensión.
    - Productos: Rótulas superiores, rótulas inferiores, kits de reparación
    - Marcas: Lemförder, TRW, Febi
    - Especificaciones: Ángulo, material, resistencia, tipo de conexión

### 377. **Implementar subsecciones de Mangueta**
    - Argumento: Crear productos específicos para manguetas.
    - Productos: Manguetas delanteras, manguetas traseras, tornillos, cojinetes
    - Marcas: Lemförder, TRW, Febi
    - Especificaciones: Diámetro, material, tipo de montaje, compatibilidad

### 378. **Implementar subsecciones de Tirantes/Bieletas**
    - Argumento: Crear productos específicos para tirantes y bieletas de suspensión.
    - Productos: Tirantes de suspensión, bieletas estabilizadoras, rótulas
    - Marcas: Lemförder, TRW, Febi
    - Especificaciones: Longitud, material, tipo de rótula, posición

### 379. **Implementar subsecciones de Barra estabilizadora**
    - Argumento: Crear productos específicos para barras estabilizadoras.
    - Productos: Barras estabilizadoras, enlaces estabilizadores, bujes de barra
    - Marcas: Lemförder, TRW, Febi
    - Especificaciones: Diámetro, longitud, material, tipo de enlace

### 380. **Crear componente SuspensionAxlesSubSubsections reutilizable**
    - Argumento: Reutilizar la estructura de ExhaustSubSubsections para crear un componente específico para suspensión ejes.
    - Archivo: `components/SuspensionAxlesSubSubsections.tsx`
    - Reutilización: Adaptar ExhaustSubSubsections para subsecciones específicas de suspensión ejes

### 381. **Crear filtros específicos SuspensionAxlesFilters.tsx**
    - Argumento: Crear filtros específicos para productos de suspensión ejes (marca, tipo, material).
    - Archivo: `components/SuspensionAxlesFilters.tsx`
    - Filtros: Por marca, tipo de componente, material, aplicación

### 382. **Integrar SuspensionAxlesSubSubsections en PartsContentArea.tsx**
    - Argumento: Agregar navegación de nivel 2 para suspensión ejes en el sistema de categorías principales.
    - Modificación: `components/PartsContentArea.tsx`
    - Funcionalidad: Renderizado condicional para categoría 'suspension-axles'

### 383. **Implementar navegación de subsecciones de nivel 2 de Suspensión ejes**
    - Argumento: Crear botones de navegación para cada subsección específica de suspensión ejes con contadores.
    - Diseño: Reutilizar el diseño de botones de sistema de escape
    - Responsive: Adaptar para móvil y desktop

### 384. **Crear datos mock para productos específicos de suspensión ejes**
    - Argumento: Generar 3 productos por cada subsección específica de suspensión ejes con datos realistas.
    - Especificaciones: Marca, modelo, compatibilidad, material, precio, descripción técnica
    - Imágenes: URLs de imágenes representativas de componentes específicos de suspensión ejes

### 385. **Implementar filtrado por subsección específica de suspensión ejes**
    - Argumento: Permitir filtrar productos por la subsección específica de suspensión ejes seleccionada.
    - Lógica: Similar a la implementada para sistema de escape pero específica para suspensión ejes
    - Estado: Manejar activeSuspensionAxlesType en SuspensionAxlesSubSubsections

### 386. **Crear iconos específicos para cada subsección de suspensión ejes**
    - Argumento: Asignar iconos representativos para cada subsección específica de suspensión ejes.
    - Iconos: Zap (amortiguadores), Settings (fijación), Circle (buje), Link (brazo), RotateCcw (rótulas), Cog (mangueta), Zap (tirantes), Activity (barra)
    - Implementación: Usar iconos de Lucide React

### 387. **Actualizar milestone3.md con nuevas tareas**
    - Argumento: Documentar la implementación de subsecciones de nivel 2 para suspensión ejes.
    - Estructura: 8 subsecciones con navegación y filtros específicos
    - Estado: ✅ COMPLETADO - Documentación actualizada

### Subsecciones de nivel 2 para "Suspensión ejes" a implementar:

- **Amortiguadores** 🔄: Amortiguadores delanteros, amortiguadores traseros, kits de montaje
- **Fijación amortiguador/cojinete** 🔄: Cojinetes de amortiguador, tornillos, arandelas, juntas
- **Buje/Cojinete Rueda** 🔄: Cojinetes de rueda, bujes de suspensión, retenes, tornillos
- **Brazo oscilante** 🔄: Brazos oscilantes delanteros, brazos oscilantes traseros, bujes de brazo
- **Rótulas de suspensión** 🔄: Rótulas superiores, rótulas inferiores, kits de reparación
- **Mangueta** 🔄: Manguetas delanteras, manguetas traseras, tornillos, cojinetes
- **Tirantes/Bieletas** 🔄: Tirantes de suspensión, bieletas estabilizadoras, rótulas
- **Barra estabilizadora** 🔄: Barras estabilizadoras, enlaces estabilizadores, bujes de barra

## TODO: Crear categorías principales sin datos mock

### 388. **Crear categoría principal de Alimentación de combustible** ✅
    - Argumento: Añadir nueva categoría principal para componentes del sistema de alimentación de combustible.
    - Archivo: `lib/mocks/parts.ts`
    - Categoría: Sin datos mock por ahora, solo estructura básica
    - Icono: Fuel (combustible)
    - ID: 'fuel-system'
    - Estado: ✅ COMPLETADO - Categoría agregada al array de categorías

### 389. **Crear categoría principal de Alimentación de aire** ✅
    - Argumento: Añadir nueva categoría principal para componentes del sistema de alimentación de aire.
    - Archivo: `lib/mocks/parts.ts`
    - Categoría: Sin datos mock por ahora, solo estructura básica
    - Icono: Wind (aire)
    - ID: 'air-system'
    - Estado: ✅ COMPLETADO - Categoría agregada al array de categorías

## TODO: Subsecciones de nivel 2 para "Alimentación de combustible"

### 390. **Crear subsecciones de nivel 2 para Alimentación de combustible** ✅
    - Argumento: Implementar navegación de nivel 2 para componentes específicos del sistema de alimentación de combustible.
    - Subsecciones: Filtro de Combustible, Bomba Alta presión, Depósito de combustible, Válvula reguladora, Aforador de combustible, Tubos combustible
    - Reutilización: Filtro de Combustible ya existe en categoría Filtros
    - Archivo: `components/FuelSystemSubSubsections.tsx`
    - Estado: ✅ COMPLETADO - Componente creado con navegación de 6 subsecciones

### 391. **Crear datos mock para subsecciones de combustible** ✅
    - Argumento: Generar 5 productos por cada subsección específica de alimentación de combustible con datos realistas.
    - Especificaciones: Marca, modelo, compatibilidad, material, precio, descripción técnica
    - Imágenes: URLs de imágenes representativas de componentes específicos de combustible
    - Archivo: `lib/mocks/fuelSystemSubSubsections.ts`
    - Estado: ✅ COMPLETADO - 30 productos mock creados (5 por subsección)

### 392. **Crear filtros específicos FuelSystemFilters.tsx** ✅
    - Argumento: Crear filtros específicos para productos de alimentación de combustible (marca, tipo, material).
    - Archivo: `components/FuelSystemFilters.tsx`
    - Filtros: Por marca, tipo de componente, material, aplicación
    - Estado: ✅ COMPLETADO - Filtros específicos con 13 marcas y 9 materiales

### 393. **Integrar FuelSystemSubSubsections en PartsContentArea.tsx** ✅
    - Argumento: Agregar navegación de nivel 2 para alimentación de combustible en el sistema de categorías principales.
    - Modificación: `components/PartsContentArea.tsx`
    - Funcionalidad: Renderizado condicional para categoría 'fuel-system'
    - Estado: ✅ COMPLETADO - Integración completa con renderizado condicional

## TODO: Subsecciones de nivel 2 para "Alimentación de aire"

### 394. **Crear subsecciones de nivel 2 para Alimentación de aire** ✅
    - Argumento: Implementar navegación de nivel 2 para componentes específicos del sistema de alimentación de aire.
    - Subsecciones: Filtro de Aire, Caja filtro de Aire/Admisión, Tuberías/Sujección, Colector de Admisión/Juntas, Mariposa de Admisión/Junta
    - Reutilización: Filtro de Aire ya existe en categoría Filtros
    - Archivo: `components/AirSystemSubSubsections.tsx`
    - Estado: ✅ COMPLETADO - Componente creado con navegación de 5 subsecciones

### 395. **Crear datos mock para subsecciones de aire** ✅
    - Argumento: Generar 5 productos por cada subsección específica de alimentación de aire con datos realistas.
    - Especificaciones: Marca, modelo, compatibilidad, material, precio, descripción técnica
    - Imágenes: URLs de imágenes representativas de componentes específicos de aire
    - Archivo: `lib/mocks/airSystemSubSubsections.ts`
    - Estado: ✅ COMPLETADO - 25 productos mock creados (5 por subsección)

### 396. **Crear filtros específicos AirSystemFilters.tsx** ✅
    - Argumento: Crear filtros específicos para productos de alimentación de aire (marca, tipo, material).
    - Archivo: `components/AirSystemFilters.tsx`
    - Filtros: Por marca, tipo de componente, material, aplicación
    - Estado: ✅ COMPLETADO - Filtros específicos con 11 marcas y 8 materiales

### 397. **Integrar AirSystemSubSubsections en PartsContentArea.tsx** ✅
    - Argumento: Agregar navegación de nivel 2 para alimentación de aire en el sistema de categorías principales.
    - Modificación: `components/PartsContentArea.tsx`
    - Funcionalidad: Renderizado condicional para categoría 'air-system'
    - Estado: ✅ COMPLETADO - Integración completa con renderizado condicional

## TODO: Subsección de nivel 3 para "Sobrealimentación" dentro de Alimentación de aire

### 398. **Crear subsección de nivel 3 para Sobrealimentación** ✅
    - Argumento: Implementar navegación de nivel 3 para componentes específicos de sobrealimentación dentro de alimentación de aire.
    - Subsección: Sobrealimentación (dentro de Alimentación de aire)
    - Secciones de nivel 3: Turbocompresor, Intercooler, Tubos/Sujección, Lubricación Turbocompresor, Juntas Turbocompresor
    - Archivo: `components/SuperchargingSubSubsections.tsx`
    - Estado: ✅ COMPLETADO - Componente creado con navegación de 5 secciones de nivel 3

### 399. **Crear datos mock para subsecciones de sobrealimentación** ✅
    - Argumento: Generar 5 productos por cada sección de nivel 3 específica de sobrealimentación con datos realistas.
    - Especificaciones: Marca, modelo, compatibilidad, material, precio, descripción técnica
    - Imágenes: URLs de imágenes representativas de componentes específicos de sobrealimentación
    - Archivo: `lib/mocks/superchargingSubSubsections.ts`
    - Estado: ✅ COMPLETADO - 25 productos mock creados (5 por sección de nivel 3)

### 400. **Crear filtros específicos SuperchargingFilters.tsx** ✅
    - Argumento: Crear filtros específicos para productos de sobrealimentación (marca, tipo, material).
    - Archivo: `components/SuperchargingFilters.tsx`
    - Filtros: Por marca, tipo de componente, material, aplicación
    - Estado: ✅ COMPLETADO - Filtros específicos con 15 marcas especializadas y 10 materiales técnicos

### 401. **Integrar SuperchargingSubSubsections en AirSystemSubSubsections.tsx** ✅
    - Argumento: Agregar navegación de nivel 3 para sobrealimentación dentro del sistema de alimentación de aire.
    - Modificación: `components/AirSystemSubSubsections.tsx`
    - Funcionalidad: Renderizado condicional para subsección 'supercharging'
    - Estado: ✅ COMPLETADO - Integración completa con navegación jerárquica de 3 niveles

### Secciones de nivel 3 para "Sobrealimentación" a implementar:

- **Turbocompresor** 🔄: Turbocompresores, compresores, ejes, rotores, carcasa
- **Intercooler** 🔄: Intercoolers, radiadores de aire, intercambiadores de calor
- **Tubos/Sujección** 🔄: Tubos de sobrealimentación, mangueras, conectores, abrazaderas
- **Lubricación Turbocompresor** 🔄: Aceites específicos, filtros, sistemas de lubricación
- **Juntas Turbocompresor** 🔄: Juntas, sellos, retenes, arandelas para turbocompresor

### Subsecciones de nivel 2 para "Alimentación de aire" a implementar:

- **Filtro de Aire** 🔄: Filtros de aire, elementos filtrantes, juntas (reutilizar de categoría Filtros)
- **Caja filtro de Aire/Admisión** 🔄: Cajas de filtro, carcasas, admisión, sellos
- **Tuberías/Sujección** 🔄: Tuberías de admisión, mangueras, conectores, abrazaderas
- **Colector de Admisión/Juntas** 🔄: Colectores de admisión, juntas, sellos, adaptadores
- **Mariposa de Admisión/Junta** 🔄: Mariposas de admisión, sensores, juntas, actuadores

### Subsecciones de nivel 2 para "Alimentación de combustible" a implementar:

- **Filtro de Combustible** 🔄: Filtros de combustible, elementos filtrantes, juntas (reutilizar de categoría Filtros)
- **Bomba Alta presión** 🔄: Bombas de alta presión, sensores de presión, reguladores
- **Depósito de combustible** 🔄: Depósitos, tapones, válvulas de ventilación, sensores de nivel
- **Válvula reguladora** 🔄: Válvulas reguladoras de presión, válvulas de retorno, válvulas de alivio
- **Aforador de combustible** 🔄: Aforadores de combustible, sensores de flujo, medidores
- **Tubos combustible** 🔄: Tubos de combustible, mangueras, conectores, abrazaderas