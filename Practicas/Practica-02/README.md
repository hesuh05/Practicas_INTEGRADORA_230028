# Práctica No. 2: Boceto de Arquitectura del Proyecto Integrador

## Descripción

Elaboración de un boceto interactivo de la arquitectura del Proyecto Integrador utilizando Archify, Codex-CLI y una cuenta de ChatGPT. El diagrama representa los componentes principales del sistema, sus relaciones, los flujos de datos y los límites de confianza.

## Actividades realizadas

- Verificación de la instalación de NPM.
- Instalación y configuración de Codex-CLI y Archify.
- Vinculación de la cuenta de Codex con ChatGPT.
- Generación del diagrama arquitectónico mediante el prompt indicado.
- Inclusión de las capas móvil, autenticación, API, datos, servicios externos e infraestructura.
- Carga de los archivos generados en el repositorio de prácticas.
- Publicación del diagrama como HTML interactivo mediante GitHub Pages.
- Documentación de cambios mediante commits con buenas prácticas.

## Objetivos

- Identificar los componentes principales de la arquitectura del Proyecto Integrador.
- Representar la comunicación entre el cliente móvil, la API y las bases de datos.
- Comprender el uso de Keycloak para la autenticación mediante OAuth 2.0 / OIDC.
- Diferenciar las capas de aplicación, datos, servicios externos e infraestructura.
- Generar un modelo arquitectónico interactivo utilizando Archify.

## Resultados

Se generó un diagrama interactivo con los siguientes componentes y flujos:

### Cliente y autenticación

La aplicación móvil desarrollada con Flutter se comunica con Keycloak mediante OIDC/PKCE para autenticar a los usuarios.

### API y almacenamiento

La aplicación móvil consume la API REST desarrollada con FastAPI mediante HTTPS y Bearer JWT. La API valida los tokens y administra la comunicación con PostgreSQL y MongoDB.

### Servicios externos e infraestructura

FastAPI integra un servicio de mapas basado en Leaflet. Git y GitHub administran el código fuente, mientras que Docker Compose permite ejecutar el entorno local de desarrollo.

## Evidencias y entregables

[Diagrama de arquitectura inicial (HTML)](https://hesuh05.github.io/Practicas_INTEGRADORA_230028/Practicas/Practica-02/arquitectura-inicial.html)
[Evidencias (PDF)](evidencias.pdf)
