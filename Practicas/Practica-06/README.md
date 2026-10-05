# Práctica No. 6: Diagrama de Secuencia de Pantallas (Sketches) de Aplicación Móvil

## Descripción

Elaboración de un diagrama de secuencia de pantallas para **LoopBack**, una aplicación móvil de empaques reutilizables. La práctica representa el flujo de devolución, recolección, inspección y recompensa mediante sketches de las pantallas principales, mostrando la interacción entre el consumidor, las aplicaciones móviles, el servidor central y el operador de acopio.

## Actividades realizadas

- Definición del flujo de devolución de empaques reutilizables de LoopBack.
- Identificación de los actores y sistemas participantes en el proceso.
- Diseño de seis sketches de pantallas para representar el recorrido completo de la aplicación.
- Representación de la consulta de puntos de devolución mediante geolocalización.
- Modelado del escaneo de los códigos QR del empaque y del buzón.
- Documentación del estado de devolución pendiente y del proceso de validación.
- Diseño del dashboard del operador logístico para consultar rutas y empaques pendientes.
- Representación de la inspección, validación e incorporación del empaque al inventario.
- Modelado de la notificación de recompensa y actualización del impacto ambiental.
- Organización de las evidencias y del diagrama interactivo en el repositorio aplicando buenas prácticas.

## Objetivos

- Comprender la estructura y utilidad de un diagrama de secuencia.
- Representar la navegación entre pantallas de una aplicación móvil.
- Identificar las responsabilidades de los usuarios, aplicaciones y servicios involucrados.
- Analizar la comunicación entre la aplicación móvil y el servidor central.
- Diseñar sketches claros para comunicar el comportamiento de una solución digital.
- Relacionar las acciones del consumidor y del operador logístico dentro de un mismo flujo.

## Resultados

Se obtuvo un diagrama de secuencia para LoopBack, organizado en las seis pantallas siguientes:

### Flujo del consumidor

El consumidor inicia el proceso consultando un mapa interactivo con los buzones de devolución más cercanos. Después escanea el código QR de la bolsa LoopBack y el código QR del buzón para vincular el depósito con el sistema central. La aplicación muestra el identificador de la bolsa, el estado pendiente de validación y el progreso de la devolución.

### Flujo del operador logístico

El operador de acopio consulta desde su aplicación móvil el dashboard con la ruta asignada, los buzones y los empaques pendientes de recolección. Al recibir una bolsa, escanea su código, evalúa su condición como «Buen Estado» o «Dañado» y confirma la entrada al inventario de sanitización. El servidor central devuelve el resultado de la inspección.

### Recompensa y cierre del proceso

Cuando la inspección es aprobada, el servidor central envía una notificación push al consumidor. La pantalla final muestra un cupón de **$5 OFF** y el balance de impacto ambiental actualizado, completando el ciclo de devolución y recompensa.

## Características del entregable

El diagrama de secuencia interactivo permite:

- Explorar las seis pantallas del flujo mediante los puntos P1–P6.
- Consultar el recorrido del consumidor y del operador logístico.
- Visualizar la comunicación entre las aplicaciones móviles y el servidor central.
- Expandir cada punto para consultar el sketch y la descripción de la pantalla.
- Identificar las solicitudes, respuestas, validaciones y notificaciones del sistema.
- Consultar metadatos y relaciones semánticas de los elementos del diagrama.
- Presentar el flujo mediante animación y distintos estilos visuales.

## Evidencias y entregables

[Diagrama de secuencia de pantallas interactivo](https://hesuh05.github.io/Practicas_INTEGRADORA_230028/Practicas/Practica-06/index.html)
