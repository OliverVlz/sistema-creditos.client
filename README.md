# Sistema de Créditos por Libranza

Sistema web moderno para la gestión de créditos por libranza dirigido a personal activo y pensionado de las Fuerzas Armadas Colombianas y Policía Nacional.

## 🚀 Tecnologías Principales

- **React 19** - Framework frontend con las últimas características
- **TypeScript** - Tipado estático para mayor robustez
- **Vite** - Build tool ultrarrápido para desarrollo
- **TailwindCSS v4** - Framework CSS utility-first
- **PrimeReact** - Biblioteca de componentes UI empresariales
- **React Router v7** - Navegación y routing avanzado
- **TanStack Query** - Gestión de estado servidor y cache
- **React Hook Form + Zod** - Formularios con validación
- **Zustand** - Gestión de estado cliente ligero

## 📋 Comandos Disponibles

```bash
# Instalación de dependencias
pnpm install

# Modo desarrollo (puerto 3000)
pnpm dev

# Build para producción
pnpm build

# Preview del build
pnpm preview

# Linting del código
pnpm lint
```

## 🏗️ Estructura del Proyecto

```
src/
├── features/           # Módulos organizados por funcionalidad
│   ├── dashboard/      # Panel principal
│   ├── clients/        # Gestión de clientes
│   ├── simulation/     # Simulador de préstamos
│   └── ...
├── components/         # Componentes reutilizables
│   ├── common/         # Componentes comunes
│   └── ui/             # Componentes de UI base
├── hooks/              # Custom hooks
├── shell/              # Layout y navegación principal
│   ├── Layout.tsx      # Layout principal
│   └── SidebarMenu.tsx # Menú de navegación
├── router/             # Configuración de rutas
├── types/              # Definiciones TypeScript
├── schemas/            # Esquemas de validación Zod
└── styles/             # Estilos globales y temas
```

## 🎨 Sistema de Temas

El proyecto incluye un sistema completo de temas con soporte para:

- ✅ **Modo claro/oscuro** automático
- ✅ **Variables CSS personalizadas** para consistencia
- ✅ **Integración perfecta** con PrimeReact
- ✅ **Responsive design** en todos los componentes

## 🔐 Módulos Principales

### **Créditos**
- Dashboard con métricas principales
- Simulador de préstamos interactivo
- Seguimiento de solicitudes personales

### **Gestión**
- Base de datos completa de clientes
- Procesamiento de solicitudes
- Sistema de aprobaciones workflow

### **Administración**
- Configuración de tasas de interés
- Reportes y analytics avanzados
- Configuración del sistema

## 🚦 Routing

Sistema de routing modular con React Router v7:

```tsx
/ → /dashboard (redirect)
├── /dashboard        # Panel principal
├── /simulation       # Simulador
├── /my-loans        # Mis solicitudes
├── /clients         # Gestión de clientes
├── /loans           # Solicitudes
├── /approvals       # Aprobaciones
├── /interest-rates  # Tasas
├── /settings        # Configuración
└── /reports         # Reportes
```

## 🎯 Características Destacadas

- **Architecture Feature-Based** - Código organizado por funcionalidades
- **TypeScript Estricto** - Máxima seguridad de tipos
- **Performance Optimizada** - Lazy loading y code splitting
- **Responsive First** - Diseño mobile-first
- **Accesibilidad** - Cumple estándares WCAG
- **Testing Ready** - Configurado para testing

## 🔧 Configuración de Desarrollo

El proyecto está configurado con:

- **ESLint** - Linting con reglas estrictas
- **Path Aliases** - Imports limpio con @/
- **Hot Reload** - Desarrollo ultrarrápido
- **TypeScript Paths** - Resolución inteligente de módulos

## 📚 Guías de Desarrollo

### Agregar Nueva Feature
1. Crear carpeta en `src/features/`
2. Implementar componentes, páginas y hooks
3. Agregar ruta en `AppRouter.tsx`
4. Actualizar navegación en `SidebarMenu.tsx`

### Componentes UI
- Usar PrimeReact para componentes avanzados
- Componentes custom en `components/ui/`
- Seguir sistema de temas establecido

### Gestión de Estado
- **TanStack Query** para estado servidor
- **Zustand** para estado cliente
- **React Hook Form** para formularios

## 📄 Licencia

Proyecto privado - Inversiones Murillo Martinez © 2025