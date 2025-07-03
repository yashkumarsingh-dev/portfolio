# Portfolio Website - Yash Kumar Singh

## Overview

This is a modern, responsive portfolio website built for Yash Kumar Singh, a Full Stack Developer specializing in MERN Stack and AI/ML technologies. The application showcases a clean, professional design with smooth animations and interactive elements to present the developer's skills, projects, and experience.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom design tokens for consistent theming
- **UI Components**: Radix UI primitives with shadcn/ui component library for accessible, customizable components
- **Animations**: Framer Motion for smooth, performant animations and transitions
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: In-memory storage for development, designed for database-backed sessions in production

## Key Components

### 1. Header Component
- Sticky navigation with smooth scroll effects
- Mobile-responsive hamburger menu
- Dynamic background opacity based on scroll position
- Smooth scroll to sections on navigation click

### 2. Hero Section
- Full-viewport height with centered content
- Animated text reveals using Framer Motion
- Call-to-action buttons for viewing projects and downloading resume
- Animated scroll indicator

### 3. About Section
- Two-column layout with profile image and biography
- Education timeline with animation triggers
- Intersection observer for scroll-based animations

### 4. Skills Section
- Animated skill cards with icons and hover effects
- Categorized display of technical skills and tools
- Staggered animations for visual appeal

### 5. Projects Section
- Project cards with gradient backgrounds and hover effects
- Technology tags and external links
- Responsive grid layout

### 6. Contact Form
- Form validation using React Hook Form with Zod schema validation
- API integration for form submission
- Toast notifications for user feedback
- Data persistence to PostgreSQL database

## Data Flow

1. **Client Rendering**: React components render with SSR-ready architecture
2. **API Communication**: REST API endpoints handle contact form submissions
3. **Database Operations**: Drizzle ORM manages database queries and mutations
4. **State Management**: React Query handles caching and synchronization
5. **Form Handling**: React Hook Form manages form state with server-side validation

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **UI Libraries**: Radix UI components, Framer Motion, React Icons
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Validation**: Zod for schema validation
- **Date Handling**: date-fns for date formatting
- **Styling**: Tailwind CSS, class-variance-authority for component variants

### Development Dependencies
- **Build Tools**: Vite, ESBuild for production builds
- **TypeScript**: Full TypeScript support with strict configuration
- **Database Tools**: Drizzle Kit for schema management and migrations

## Deployment Strategy

### Development Environment
- Vite dev server with HMR (Hot Module Replacement)
- Express server with middleware for API routes
- Environment-based configuration for database connections

### Production Build
- Vite builds optimized client bundle to `dist/public`
- ESBuild bundles server code to `dist/index.js`
- Static file serving through Express in production
- Database migrations handled through Drizzle Kit

### Database Schema
- **Users Table**: Basic user management (extensible for future auth)
- **Contacts Table**: Contact form submissions with timestamps
- **Schema Validation**: Zod schemas ensure data integrity

### Performance Optimizations
- Code splitting and lazy loading ready
- Optimized asset bundling
- Efficient database queries with proper indexing
- Responsive image loading and optimization

## Changelog

```
Changelog:
- July 03, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```