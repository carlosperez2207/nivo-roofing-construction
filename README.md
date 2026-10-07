# Nivo Roofing & Construction

Sitio web desarrollado para **Nivo Roofing & Construction**, una empresa de construcción ubicada en El Paso, Texas.

El objetivo del proyecto fue crear una página clara, visual y funcional donde los clientes puedan conocer los servicios de la empresa, revisar trabajos realizados y solicitar una cotización.

## Características principales

- Página principal informativa
- Diseño adaptable a diferentes tamaños de pantalla
- Sección de servicios
- Información sobre la empresa
- Galería de trabajos realizados
- Sección de contacto
- Formulario para solicitar cotización
- Validación de formulario
- Cambio de idioma entre español e inglés
- Página de confirmación después de enviar el formulario

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- JSON
- Bootstrap
- FormSubmit

## Idiomas

El sitio permite cambiar entre:

- Español
- Inglés

Los textos se cargan dinámicamente desde un archivo `lang.json`.

## Servicios mostrados

La página presenta algunos de los principales servicios de la empresa:

- Interiores
- Remodelación de baños
- Instalación de pisos
- Sheetrock
- Ampliaciones
- Roofing
- Carpintería

## Galería

El sitio cuenta con una galería de trabajos donde se muestran fotografías reales de proyectos realizados por la empresa.

## Formulario de contacto

El formulario permite al usuario enviar información como:

- Nombre
- Número de teléfono
- Correo electrónico
- Descripción del proyecto

También incluye validaciones antes de enviar la información.

## Estructura del proyecto

```text
nivo-roofing-construction/
│
├── index/
│   ├── index.html
│   ├── galeria.html
│   ├── style.css
│   ├── index.js
│   ├── lang.json
│   └── imagenes/
│       ├── logo.jpg
│       └── trabajos...
│
├── formulario/
│   ├── formulario.html
│   ├── gracias.html
│   ├── formulario.css
│   └── validaciones.js
│
└── README.md
