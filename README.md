# Portfolio Web - Leonardo Bringas

Portfolio web personal de Leonardo Bringas (@LeoBringasAtLife), desarrollador web y estudiante de Ingeniería de Software. Un sitio web moderno, responsivo y accesible que muestra proyectos, experiencia y habilidades técnicas.

## 📋 Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Páginas](#páginas)
- [Funcionalidades](#funcionalidades)
- [Instalación y Uso](#instalación-y-uso)
- [Personalización](#personalización)
- [Estructura de Archivos](#estructura-de-archivos)
- [Autor](#autor)
- [Licencia](#licencia)

## 📝 Descripción

Este portfolio web es una aplicación estática desarrollada con HTML, CSS y JavaScript vanilla. Presenta información profesional, proyectos destacados, un blog personal y una galería de fotos. El diseño es completamente responsivo y cuenta con soporte para modo oscuro/claro.

## ✨ Características

- **Diseño Responsivo**: Adaptable a dispositivos móviles, tablets y escritorio
- **Modo Oscuro/Claro**: Tema personalizable con persistencia en localStorage
- **Navegación Suave**: Scroll suave entre secciones
- **Menú Móvil**: Menú hamburguesa para dispositivos móviles
- **Modal Interactivo**: Vista previa de CV con estilo retro Windows 95
- **Slider de Tecnologías**: Carrusel infinito mostrando herramientas y tecnologías
- **SEO Optimizado**: Meta tags y estructura semántica HTML5
- **Accesibilidad**: Atributos ARIA y navegación por teclado

## 🏗️ Estructura del Proyecto

```
Portfolio-v1/
│
├── index.html              # Página principal
├── blog.html               # Página del blog
├── fotos.html              # Galería de fotos
├── README.md              # Este archivo
│
├── pdf/                   # Documentos PDF
│   └── CV_LEONARDO_ISAIAS_BRINGAS_MONTERO.pdf
│
└── src/
    └── assets/
        ├── css/           # Hojas de estilo
        │   ├── global.css      # Estilos globales y variables CSS
        │   ├── style.css       # Estilos de la página principal
        │   ├── blog.css        # Estilos del blog
        │   └── fotos.css       # Estilos de la galería
        │
        ├── js/            # Scripts JavaScript
        │   ├── index.js        # Funcionalidades de la página principal
        │   └── theme.js        # Gestión del tema oscuro/claro
        │
        ├── image/         # Imágenes del portfolio
        │   ├── leo.jpeg
        │   ├── screenshot-paint-js.png
        │   ├── screenshot-wikipedia.png
        │   └── screenshot-generador-parrafos.png
        │
        └── tools/         # Iconos y recursos
            ├── logo.ico
            ├── icons-html.svg
            ├── icons-css.svg
            ├── icons-javascript.svg
            ├── icons-python.svg
            ├── icons-git.svg
            └── icons-visual-studio-code-2019.svg
```

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con variables CSS, Flexbox y Grid
- **JavaScript (Vanilla)**: Sin dependencias externas, JavaScript puro

### Fuentes y Iconos
- **Google Fonts**: Fuente Oxygen (300, 400, 700)
- **Material Icons**: Iconos de Material Design

### Herramientas de Desarrollo
- **Git**: Control de versiones
- **VS Code**: Editor de código

## 📄 Páginas

### 1. Página Principal (`index.html`)

La página principal incluye:

- **Header con Perfil**:
  - Foto de perfil
  - Nombre de usuario (@LeoBringasAtLife)
  - Descripción profesional
  - Botones para descargar y previsualizar CV
  - Botón de cambio de tema (modo oscuro/claro)

- **Navegación**:
  - Menú de navegación con enlaces a secciones
  - Menú móvil con animación
  - Enlaces a Blog y Fotos

- **Sección de Proyectos Destacados**:
  - Paint JS Win95: Aplicación web inspirada en Microsoft Paint
  - Buscador Wikipedia: Integración con Wikipedia API
  - Generador de Párrafos: Herramienta para generar texto de muestra
  - Enlace a perfil de GitHub

- **Sección Sobre Mí**:
  - Biografía profesional
  - Enlaces a redes sociales y GitHub

- **Sección de Tecnologías**:
  - Slider infinito con iconos de tecnologías
  - HTML, CSS, JavaScript, Python, Git, VS Code

- **Footer**:
  - Copyright
  - Enlaces a redes sociales (GitHub, LinkedIn, Twitter/X, Instagram, CodePen, Blogger)

### 2. Página de Blog (`blog.html`)

- Diseño de blog con sidebar
- Artículo: "El error que me hizo mejor desarrollador"
- Navegación de temas y subtemas
- Botón de cambio de tema
- Enlace de regreso a la página principal

### 3. Página de Fotos (`fotos.html`)

- Galería de fotos personales
- Grid responsivo de imágenes
- Botón de cambio de tema
- Enlace de regreso a la página principal
- Footer con redes sociales

## 🎯 Funcionalidades

### Modo Oscuro/Claro
- Toggle entre modo oscuro y claro
- Persistencia de preferencia en `localStorage`
- Detección automática de preferencia del sistema
- Iconos y textos dinámicos según el tema activo

### Menú Móvil
- Menú hamburguesa con animación
- Overlay oscuro al abrir el menú
- Cierre automático al hacer clic en enlaces o overlay
- Diseño adaptativo para diferentes tamaños de pantalla

### Modal de CV
- Modal estilo Windows 95 para vista previa del CV
- Iframe con el PDF del CV
- Cierre con botón X o clic fuera del modal
- Prevención de scroll del body cuando está abierto

### Smooth Scroll
- Navegación suave entre secciones
- Cierre automático del menú móvil al navegar

### Slider de Tecnologías
- Carrusel infinito con animación continua
- Iconos SVG de tecnologías
- Efecto de gradiente en los bordes

## 🚀 Instalación y Uso

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, para desarrollo)

### Instalación

1. **Clonar el repositorio**:
```bash
git clone https://github.com/LeooBringasAtLife/Portfolio-v1.git
cd Portfolio-v1
```

2. **Abrir en el navegador**:
   - Opción 1: Abrir directamente `index.html` en el navegador
   - Opción 2: Usar un servidor local:
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (http-server)
npx http-server

# Con PHP
php -S localhost:8000
```

3. **Acceder al sitio**:
   - Navegar a `http://localhost:8000` (si usas servidor local)
   - O abrir `index.html` directamente

## 🎨 Personalización

### Variables CSS

Las variables CSS están definidas en `src/assets/css/global.css`:

```css
:root {
  --color-primary: #004a88;
  --bg-color: #ffffff;
  --text-color: #1a1a1a;
}
```

## 👤 Autor

**Leonardo Bringas** (@LeoBringasAtLife)

- Estudiante de Ingeniería de Software
- Desarrollador Web
- Enfoque en Python e IA
- Freelance

### Redes Sociales
- GitHub: [@LeooBringasAtLife](https://github.com/LeooBringasAtLife)
- LinkedIn: [Perfil](https://linkedin.com/)
- Twitter/X: [@leobringaslife](https://x.com/leobringaslife)
- Instagram: [@leobringasatlife](https://instagram.com/leobringasatlife)
- CodePen: [@Leoo-BringasAtLife](https://codepen.io/Leoo-BringasAtLife)
- Blogger: [Blog](https://draft.blogger.com/blog/posts/9196245956103519491)

## 📝 Notas Adicionales

### Proyectos Destacados

1. **Paint JS Win95**: Aplicación web de dibujo con estética retro Windows 95
   - Repositorio: [GitHub](https://github.com/LeooBringasAtLife/Paint-JS-Win95)
   - Tecnologías: JavaScript, Canvas

2. **Buscador Wikipedia**: Integración con Wikipedia API
   - Repositorio: [GitHub](https://github.com/LeooBringasAtLife/Searcher-Wikipedia)
   - Tecnologías: HTML, Fetch API

3. **Generador de Párrafos**: Herramienta para generar texto de muestra
   - Repositorio: [GitHub](https://github.com/LeooBringasAtLife/Paragraph-Generator)
   - Tecnologías: JavaScript, DOM

### Características Técnicas

- **Sin Frameworks**: Desarrollo con tecnologías nativas
- **Performance**: Carga rápida sin dependencias externas pesadas
- **Accesibilidad**: Atributos ARIA, navegación por teclado, contraste adecuado
- **SEO**: Meta tags optimizados, estructura semántica
- **Cross-browser**: Compatible con navegadores modernos

---

**Última actualización**: Diciembre 2025.12.27

