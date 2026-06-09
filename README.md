# Landing Page - María Noel Viera

Sitio web profesional para María Noel Viera, diseñadora de marcas y especialista en marketing digital.

---

## Tabla de Contenidos

1. [Instalación](#instalación)
2. [Cómo ejecutar el proyecto](#cómo-ejecutar-el-proyecto)
3. [Personalización Completa](#personalización-completa)
4. [Estructura del Proyecto](#estructura-del-proyecto)
5. [Modificaciones por Sección](#modificaciones-por-sección)
6. [Cambios de Contenido](#cambios-de-contenido)
7. [Cambios de Diseño](#cambios-de-diseño)
8. [Deployment](#deployment)

---

## Instalación

### Requisitos Previos

- **Node.js** (v14 o superior) - [Descargar aquí](https://nodejs.org/)
- **npm** o **yarn** (se instala con Node.js)

### Pasos de Instalación

1. **Clona el repositorio:**
```bash
git clone https://github.com/alearecuest/mano_landing_page.git
cd mano_landing_page
```

2. **Instala las dependencias:**
```bash
npm install
```

3. **Instala react-icons (si no se instaló automáticamente):**
```bash
npm install react-icons
```

---

## Cómo ejecutar el proyecto

**Para desarrollo:**
```bash
npm start
```

El proyecto se abrirá automáticamente en `http://localhost:3000`

**Para crear una versión de producción:**
```bash
npm run build
```

Los archivos compilados estarán en la carpeta `/build`

---

## Personalización Completa

### Ubicación de Archivos Editables

```
mano_landing_page/
├── public/
│   ├── logo_mano.png          ← Logo de María Noel
│   └── favicon.ico            ← Icono en la pestaña del navegador
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      ← Menú de navegación
│   │   ├── Hero.jsx            ← Sección de inicio
│   │   ├── About.jsx           ← Sección "Sobre mí"
│   │   ├── Services.jsx        ← Servicios que ofrece
│   │   ├── Portfolio.jsx       ← Galería de proyectos
│   │   ├── Process.jsx         ← Proceso de trabajo
│   │   ├── Testimonials.jsx    ← Testimonios de clientes
│   │   ├── Contact.jsx         ← Formulario de contacto
│   │   └── Footer.jsx          ← Pie de página
│   ├── styles/
│   │   ├── variables.css       ← Colores y estilos globales
│   │   ├── hero.css
│   │   ├── about.css
│   │   ├── services.css
│   │   ├── portfolio.css
│   │   ├── process.css
│   │   ├── testimonials.css
│   │   ├── contact.css
│   │   └── footer.css
│   └── App.jsx                 ← Componente principal
└── README.md                   ← Este archivo
```

---

## Modificaciones por Sección

### LOGO Y BRANDING

#### Cambiar el logo

**Archivo:** `public/logo_mano.png`

1. Reemplaza el archivo `logo_mano.png` con tu nuevo logo (mismo nombre y formato)
2. Asegúrate de que sea PNG con fondo transparente
3. Tamaño recomendado: 200x200px mínimo

**Dónde se usa:**
- Navigation.jsx (línea 16)
- Footer.jsx (línea 36)

#### Cambiar el favicon (icono de pestaña)

**Archivo:** `public/favicon.ico`

1. Reemplaza este archivo con tu favicon
2. Tamaño: 32x32px

---

### NAVEGACIÓN (Header)

**Archivo:** `src/components/Navigation.jsx`

#### Cambiar nombre del logo:

```jsx
// Línea 16-19
<div className="logo-text">
  María <span className="highlight">Noel</span>
</div>
```

Cambia "María" y "Noel" por el nombre que desees.

#### Agregar/Eliminar items del menú:

```jsx
// Línea 24-36 - Aquí se definen los enlaces del menú
<a href="#about" onClick={() => handleScroll('about')}>
  Sobre mí
</a>
```

Para agregar un nuevo item:
```jsx
<a href="#tuSeccion" onClick={() => handleScroll('tuSeccion')}>
  Tu Sección
</a>
```

**Nota:** El `id` debe coincidir con el `id` de tu sección en otros componentes.

---

### SECCIÓN HERO (Inicio)

**Archivo:** `src/components/Hero.jsx`

#### Cambiar título principal:

```jsx
// Línea 22
<h1>
  Transformo marcas en <span className="highlight">experiencias</span> memorables
</h1>
```

#### Cambiar descripción:

```jsx
// Línea 25-28
<p>
  Soy diseñadora de marcas y especialista en marketing con pasión por crear 
  identidades visuales que conectan con tu audiencia y generan resultados reales.
</p>
```

#### Cambiar botones:

```jsx
// Línea 30-38 - Botones CTA
<button className="btn btn-primary" onClick={() => handleScroll('contact')}>
  Comienza tu proyecto
</button>
<button className="btn btn-secondary" onClick={() => handleScroll('portfolio')}>
  Ver mi trabajo
</button>
```

#### Cambiar imagen de perfil:

```jsx
// Línea 45
<img
  src="https://via.placeholder.com/500x500?text=María+Noel"
  alt="María Noel Viera"
/>
```

**Para agregar tu foto:**

1. Guarda tu foto en `public/` (ej: `perfil.jpg`)
2. Reemplaza la URL:
```jsx
src="/perfil.jpg"
```

**Recomendaciones de imagen:**
- Formato: JPG o PNG
- Tamaño: 500x500px mínimo
- Resolucion: 72 DPI para web

---

### SECCIÓN SOBRE MÍ

**Archivo:** `src/components/About.jsx`

#### Cambiar título:

```jsx
// Línea 32
<h2>
  Conozca mi <span className="highlight">trayectoria</span>
</h2>
```

#### Cambiar descripción principal:

```jsx
// Línea 35-39
<p>
  Con más de 8 años de experiencia en diseño y marketing, he trabajado con 
  empresas de diversos sectores, desde startups hasta marcas consolidadas. 
  Mi enfoque siempre ha sido entender profundamente el negocio de cada cliente...
</p>
```

#### Cambiar segundo párrafo:

```jsx
// Línea 41-45
<p>
  Mi pasión por el detalle y la creatividad me ha permitido desarrollar un 
  método único que combina investigación de mercado, psicología del consumidor 
  y diseño estratégico...
</p>
```

#### Cambiar habilidades/especialidades:

```jsx
// Línea 19-28
const skills = [
  'Branding',
  'Diseño Gráfico',
  'Marketing Digital',
  'Identidad Visual',
  'Estrategia de Marca',
  'Social Media',
  'Diseño Web',
  'Packaging',
  'Copywriting',
  'Community Management',
];
```

Agrega o elimina items según tus especialidades.

#### Cambiar foto de "Sobre mí":

```jsx
// Línea 25
<img
  src="https://via.placeholder.com/400x400?text=Sobre+Mi"
  alt="María Noel Viera"
/>
```

Reemplaza con tu foto:
```jsx
src="/foto_sobre_mi.jpg"
```

#### Cambiar texto del botón de CV:

```jsx
// Línea 60
<button className="btn btn-primary">
  Descargar CV
</button>
```

**Para hacer que el botón descargue tu CV:**

1. Guarda tu CV en `public/` (ej: `CV_MariaNoelViera.pdf`)
2. Modifica el botón:
```jsx
<a href="/CV_MariaNoelViera.pdf" download className="btn btn-primary">
  Descargar CV
</a>
```

---

### SECCIÓN SERVICIOS

**Archivo:** `src/components/Services.jsx`

#### Cambiar o agregar servicios:

```jsx
// Línea 8-45 - Array de servicios
const services = [
  {
    id: 1,
    icon: <FiPenTool />,
    title: 'Diseño de Marca',
    description: 'Creación completa de identidad visual...',
    features: ['Logo Design', 'Brand Guidelines', 'Color Palette', 'Typography Selection'],
  },
  // Agrega más servicios siguiendo el mismo formato
];
```

**Para agregar un nuevo servicio:**

1. Copia un bloque de servicio existente
2. Cambia el `id` (próximo número secuencial)
3. Cambia el `icon` (ver lista de iconos abajo)
4. Actualiza `title`, `description` y `features`

**Iconos disponibles en Services:**

```jsx
FiPenTool        // Pluma/Diseño
FiLayout         // Layout/Diseño Web
FiBarChart2      // Gráficos/Análisis
FiShare2         // Compartir/Social Media
FiShoppingBag    // Bolsa/Packaging
FiCamera         // Cámara/Fotografía
```

**Para agregar más iconos:**
- Ve a https://react-icons.github.io/react-icons/icons?name=fi
- Encuentra el icono que necesites
- Agrega a la importación en línea 2

#### Cambiar título y subtítulo:

```jsx
// Línea 49-51
<h2 className="section-title">Mis Servicios</h2>
<p className="section-subtitle">
  Soluciones completas de diseño y marketing para llevar tu marca al siguiente nivel
</p>
```

---

### SECCIÓN PORTFOLIO

**Archivo:** `src/components/Portfolio.jsx`

#### Agregar proyectos:

```jsx
// Línea 8-43 - Array de proyectos
const projects = [
  {
    id: 1,
    title: 'Identidad Visual - TechStart',
    category: 'branding',
    image: 'https://via.placeholder.com/300x300?text=TechStart',
    description: 'Diseño completo de identidad visual...',
    tags: ['Branding', 'Logo Design'],
  },
  // Agrega más proyectos aquí
];
```

**Para agregar un nuevo proyecto:**

1. Agrega un nuevo objeto al array `projects`:
```jsx
{
  id: 9,  // Número único
  title: 'Mi Nuevo Proyecto',
  category: 'branding',  // branding, web, marketing, packaging, fotografia
  image: '/proyecto.jpg',  // Tu imagen en public/
  description: 'Descripción del proyecto...',
  tags: ['Tag1', 'Tag2'],
},
```

2. Guarda tu imagen en `public/` carpeta

#### Cambiar categorías de filtros:

```jsx
// Línea 44-51
const categories = [
  { value: 'all', label: 'Todos' },
  { value: 'branding', label: 'Branding' },
  { value: 'web', label: 'Web Design' },
  // Agrega más categorías
];
```

**Nota:** Las categorías en `value` deben coincidir con las `category` en los proyectos.

---

### SECCIÓN PROCESO

**Archivo:** `src/components/Process.jsx`

#### Cambiar pasos del proceso:

```jsx
// Línea 4-24
const steps = [
  {
    number: 1,
    title: 'Descubrimiento',
    description: 'Nos sumergimos en tu negocio...',
  },
  // Agrega o modifica pasos
];
```

#### Para agregar un paso:

```jsx
{
  number: 5,  // Número único
  title: 'Mi Nuevo Paso',
  description: 'Descripción del paso...',
},
```

---

### SECCIÓN TESTIMONIOS

**Archivo:** `src/components/Testimonials.jsx`

#### Cambiar o agregar testimonios:

```jsx
// Línea 7-26
const testimonials = [
  {
    id: 1,
    name: 'Carlos Mendez',
    title: 'CEO - TechStart',
    avatar: 'https://via.placeholder.com/50x50?text=CM',
    text: 'María transformó completamente nuestra identidad visual...',
    rating: 5,
  },
  // Agrega más testimonios
];
```

**Para agregar un nuevo testimonio:**

```jsx
{
  id: 6,
  name: 'Nombre del Cliente',
  title: 'Cargo - Empresa',
  avatar: '/avatar_cliente.jpg',  // Foto en public/
  text: 'El testimonio del cliente...',
  rating: 5,  // 1-5 estrellas
},
```

**Recomendaciones:**
- Avatares: 50x50px, formato JPG/PNG
- Rating: Número del 1 al 5

---

### SECCIÓN CONTACTO

**Archivo:** `src/components/Contact.jsx`

#### Cambiar información de contacto:

```jsx
// Línea 96-98 - Email
<p>
  <a href="mailto:maria@example.com">maria@example.com</a>
</p>
```

Reemplaza con tu email:
```jsx
<a href="mailto:tu@email.com">tu@email.com</a>
```

#### Cambiar teléfono:

```jsx
// Línea 106-108
<p>
  <a href="tel:+598123456789">+598 (123) 456-789</a>
</p>
```

#### Cambiar ubicación:

```jsx
// Línea 116-117
<h3>Ubicación</h3>
<p>Montevideo, Uruguay</p>
```

#### Cambiar redes sociales:

```jsx
// Línea 124-151
<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" ...>
```

Reemplaza las URLs con tus redes sociales:
```jsx
<a href="https://instagram.com/tu_usuario" target="_blank" rel="noopener noreferrer" ...>
```

#### Cambiar título y descripción del formulario:

```jsx
// Línea 153-157
<div className="contact-form">
  <h3>Envíame un mensaje</h3>
  <form onSubmit={handleSubmit}>
```

#### Configurar envío de emails:

**Actualmente el formulario solo simula envío.** Para hacer que funcione realmente:

**Opción 1: Usar EmailJS (Recomendado - Gratis hasta 200 emails/mes)**

1. Ve a https://www.emailjs.com/
2. Crea una cuenta
3. Obtén tu `Service ID` y `Template ID`
4. Instala la librería:
```bash
npm install @emailjs/browser
```

5. Reemplaza el `handleSubmit` en Contact.jsx:
```jsx
import emailjs from '@emailjs/browser';

const handleSubmit = (e) => {
  e.preventDefault();
  
  emailjs.send(
    'service_xxxxx',  // Tu Service ID
    'template_xxxxx', // Tu Template ID
    {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    },
    'public_xxxxx'    // Tu Public Key
  ).then((result) => {
    setFormMessage('¡Mensaje enviado exitosamente!');
    setFormStatus('success');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  }).catch((error) => {
    setFormMessage('Error al enviar el mensaje.');
    setFormStatus('error');
  });
};
```

**Opción 2: Usar Formspree**

1. Ve a https://formspree.io/
2. Crea una cuenta
3. Obtén tu Endpoint
4. Reemplaza el método POST en el formulario

---

### SECCIÓN FOOTER

**Archivo:** `src/components/Footer.jsx`

#### Cambiar descripción:

```jsx
// Línea 40-43
<p>
  Diseñadora de marcas y especialista en marketing digital. Transformo ideas 
  en identidades visuales que generan impacto y resultados.
</p>
```

#### Cambiar año del copyright:

```jsx
// Línea 187 (Se actualiza automáticamente)
const currentYear = new Date().getFullYear();
```

Esto ya es dinámico y se actualiza automáticamente cada año.

#### Cambiar enlaces del footer:

```jsx
// Línea 69-79 - Enlaces de servicios
<ul>
  <li><a href="#services">Diseño de Marca</a></li>
  // Cambiar o agregar más
</ul>
```

#### Cambiar redes sociales del footer:

```jsx
// Línea 46-64
<a href="https://instagram.com" target="_blank" ...>
```

Reemplaza con tus URLs reales.

#### Cambiar política de privacidad y términos:

```jsx
// Línea 212-214
<a href="#privacy">Política de Privacidad</a>
<a href="#terms">Términos de Servicio</a>
<a href="#cookies">Cookies</a>
```

Reemplaza con enlaces reales a tus documentos.

---

## Cambios de Diseño

### Colores Principales

**Archivo:** `src/styles/variables.css` (o `src/App.css`)

```css
:root {
  --primary-color: #D4A5A5;        /* Color principal (rosa/marrón) */
  --accent-color: #F5E6D3;         /* Color secundario (beige claro) */
  --dark-text: #2C2C2C;            /* Texto oscuro */
  --light-text: #666666;           /* Texto gris */
  --white: #FFFFFF;                /* Blanco */
  --border-color: #E0D5CC;         /* Bordes */
  --shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  --shadow-hover: 0 15px 40px rgba(0, 0, 0, 0.15);
}
```

**Para cambiar colores globalmente:**

1. Abre `src/App.css` o el archivo de variables
2. Modifica los valores de color
3. Se aplicarán automáticamente a todo el sitio

### Cambiar fuentes

**Archivo:** `src/App.css` (aproximadamente línea 10)

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

* {
  font-family: 'Poppins', sans-serif;
}
```

**Para usar otra fuente:**

1. Ve a https://fonts.google.com/
2. Selecciona una fuente
3. Copia el `@import`
4. Reemplaza en tu CSS
5. Actualiza el `font-family`

### Cambiar espaciado y tamaños

**Archivos CSS por sección:**

- `src/styles/hero.css` - Sección de inicio
- `src/styles/about.css` - Sección sobre mí
- `src/styles/services.css` - Servicios
- `src/styles/portfolio.css` - Portfolio
- `src/styles/process.css` - Proceso
- `src/styles/testimonials.css` - Testimonios
- `src/styles/contact.css` - Contacto
- `src/styles/footer.css` - Footer

**Ejemplo - Cambiar tamaño de título:**

```css
/* Archivo: src/styles/hero.css */
.hero h1 {
  font-size: 3.5rem;  /* Cambiar este valor */
  line-height: 1.2;
}
```

### Cambiar animaciones

Las animaciones se definen en CSS:

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

Puedes modificar:
- `opacity` - Transparencia
- `transform: translateY()` - Movimiento vertical
- `transform: translateX()` - Movimiento horizontal
- `transform: scale()` - Tamaño

---

## Responsive Design

El sitio ya es completamente responsivo. Los breakpoints están definidos en cada CSS:

```css
@media (max-width: 768px) {
  /* Estilos para móvil */
}

@media (max-width: 1024px) {
  /* Estilos para tablet */
}
```

**Para ajustar el diseño en móvil:**
1. Modifica los valores en `@media (max-width: 768px)`
2. Prueba en un teléfono o abre DevTools (F12) en tu navegador

---

## Deployment

### Opción 1: Netlify (Recomendado - Gratis y fácil)

1. Sube tu proyecto a GitHub
2. Ve a https://www.netlify.com/
3. Conecta tu repositorio de GitHub
4. Netlify desplegará automáticamente

### Opción 2: Vercel

1. Ve a https://vercel.com/
2. Importa tu proyecto de GitHub
3. Haz clic en "Deploy"

### Opción 3: GitHub Pages

```bash
npm run build
npm install -g gh-pages
npx gh-pages -d build
```

### Opción 4: Tu propio servidor

1. Ejecuta `npm run build`
2. Sube la carpeta `/build` a tu servidor web

---

## Checklist de Personalización

Copia esta lista y marca conforme personalices:

```
CONFIGURACIÓN BÁSICA
☐ Cambiar logo en public/logo_mano.png
☐ Cambiar favicon en public/favicon.ico
☐ Actualizar nombre en Navigation.jsx
☐ Cambiar redes sociales (Contact.jsx y Footer.jsx)

SECCIÓN HERO
☐ Cambiar título principal
☐ Cambiar descripción
☐ Agregar foto de perfil

SECCIÓN SOBRE MÍ
☐ Actualizar años de experiencia
☐ Cambiar descripción
☐ Actualizar lista de habilidades
☐ Agregar foto personal
☐ Crear y agregar CV

SECCIÓN SERVICIOS
☐ Modificar servicios según tus ofertas
☐ Cambiar descripciones
☐ Agregar características

SECCIÓN PORTFOLIO
☐ Agregar tus proyectos
☐ Agregar fotos de proyectos
☐ Escribir descripciones

SECCIÓN PROCESO
☐ Ajustar pasos si es necesario
☐ Cambiar descripciones

SECCIÓN TESTIMONIOS
☐ Agregar testimonios reales
☐ Agregar avatares de clientes

SECCIÓN CONTACTO
☐ Cambiar email
☐ Cambiar teléfono
☐ Cambiar ubicación
☐ Actualizar enlaces de redes sociales
☐ Configurar servicio de email (EmailJS o Formspree)

SECCIÓN FOOTER
☐ Actualizar descripción
☐ Cambiar enlaces de servicios
☐ Actualizar política de privacidad y términos

DISEÑO
☐ Revisar colores (si quieres cambiarlos)
☐ Revisar fuentes
☐ Probar en móvil
```

---

## Troubleshooting

### El sitio no carga en localhost

```bash
# Detén el proceso (Ctrl + C)
# Elimina node_modules
rm -rf node_modules

# Reinstala
npm install

# Inicia de nuevo
npm start
```

### Error de importación de iconos

Verifica que el icono exista en https://react-icons.github.io/react-icons/

### Las imágenes no se cargan

- Asegúrate de guardar las imágenes en `public/`
- Usa la ruta relativa: `/nombre-imagen.jpg`

### El formulario de contacto no envía emails

- Implementa EmailJS o Formspree (ver sección [Configurar envío de emails](#configurar-envío-de-emails))

---

## Contacto y Soporte

Para preguntas sobre la página web, contacta a María Noel:

- Email: maria@example.com
- Teléfono: +598 (123) 456-789
- Ubicación: Montevideo, Uruguay

---

## Licencia

Este proyecto es de uso exclusivo para María Noel Viera.

---

## Versión

**v1.0.0** - Primera versión del sitio web

Última actualización: Junio 2026

---

