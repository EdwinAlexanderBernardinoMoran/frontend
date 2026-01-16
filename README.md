# 📦 Products Management - Frontend

Sistema de gestión de productos construido con React, TypeScript, Vite, Tailwind CSS y Shadcn.

## 🚀 Características

- ✅ CRUD completo de productos (Crear, Leer, Actualizar, Eliminar)
- 🔍 Búsqueda en tiempo real con debounce
- 📄 Paginación client-side (10 productos por página)
- 🎨 UI moderna con shadcn/ui y Tailwind CSS
- 🔔 Notificaciones toast con Sonner
- ⚡ Optimización con React Hook Form
- 🎯 Ordenamiento por ID descendente
- 📱 Diseño responsive
- 🔄 Estados de carga y error manejados

## 🛠️ Stack Tecnológico

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 7
- **Estilos:** Tailwind CSS 4
- **UI Components:** shadcn/ui + Radix UI
- **Forms:** React Hook Form
- **HTTP Client:** Axios
- **Icons:** Lucide React
- **Notifications:** Sonner

## 📋 Requisitos Previos

- Node.js >= 18.x
- pnpm (recomendado) o npm
- Backend API corriendo en `http://localhost:3001` cambialo por la url de tu backend.

## 🚀 Instalación

1. **Clonar el repositorio y navegar a la carpeta**

```bash
cd frontend
```

2. **Instalar dependencias**

Con pnpm (recomendado):

```bash
pnpm install
```

Con npm:

```bash
npm install
```

## 🏃 Ejecución

### Modo Desarrollo

```bash
pnpm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Build para Producción

```bash
pnpm run build
```

Los archivos de producción se generarán en la carpeta `dist/`

### Preview de Build

```bash
pnpm preview
```

### Lint

```bash
pnpm lint
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes UI base (shadcn)
│   └── ui/
├── products/           # Feature de productos
│   ├── actions/       # Lógica de negocio
│   ├── api/           # Configuración de API
│   ├── components/    # Componentes de productos
│   ├── hooks/         # Custom hooks
│   ├── interfaces/    # Tipos TypeScript
│   └── mappers/       # Transformadores de datos
├── shared/            # Componentes compartidos
│   └── components/
├── lib/               # Utilidades
├── ProductApp.tsx     # Componente principal
└── main.tsx          # Punto de entrada
```

## 🔌 Configuración de API

El frontend se conecta a la API en `http://localhost:3001`. Para cambiar la URL base has una copia del archivo `.env.example`
