# CalculatorPensie.com - Development Guide

## Overview

CalculatorPensie.com is Romania's premier online pension calculator platform, designed to become the #1 Google ranking result for "Calculator Pensie". The application provides Romanian citizens with instant, accurate pension calculations and comprehensive educational resources about the Romanian pension system.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Tailwind CSS + shadcn/ui components for consistent, accessible design
- **State Management**: TanStack Query for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for robust form processing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript for type safety across the full stack
- **API Design**: RESTful endpoints for articles, calculations, and newsletter subscriptions
- **Storage**: In-memory storage implementation (MemStorage) with interface for future database migration
- **Development Integration**: Vite middleware integration for seamless development experience

## Key Components

### Core Calculators
1. **Main Pension Calculator**: Standard retirement pension calculation using Romanian formulas
2. **Early Retirement Calculator**: Pension calculation with penalties for early retirement
3. **Pillar III Calculator**: Private pension contributions with tax advantages

### Content Management System
- Article management with categorization (planificare, tipuri-pensii, legislatie)
- Blog system with SEO-optimized content structure
- Educational guide pages organized in silo architecture
- Sample content library with 12 articles across 3 categories

### SEO Infrastructure
- Structured data markup (Schema.org WebApplication and FAQPage)
- Meta tags and Open Graph optimization
- Sitemap and robots.txt configuration
- Internal linking strategy with silo architecture

## Data Flow

### Calculation Flow
1. User inputs pension data through form components
2. Client-side validation using Zod schemas
3. Romanian pension formulas applied in `pension-calculations.ts`
4. Results displayed instantly without server requests
5. Optional calculation storage for analytics

### Content Flow
1. Articles stored in memory with structured metadata
2. API endpoints serve filtered content based on category/status
3. Client queries content using TanStack Query with caching
4. SEO-optimized rendering with proper meta tags and structured data

### User Interaction Flow
1. Homepage displays primary calculator above-the-fold
2. Tab-based interface for different calculator types
3. Educational content accessible through guide pages
4. Newsletter subscription for user engagement

## External Dependencies

### UI Libraries
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **date-fns**: Date manipulation utilities

### Development Tools
- **Drizzle ORM**: Database toolkit with PostgreSQL support
- **ESBuild**: Fast bundling for production
- **PostCSS**: CSS processing with Autoprefixer

### Analytics & SEO
- **Google Analytics 4**: User behavior tracking (configured but not active)
- **Schema.org**: Structured data for rich snippets
- **Meta tags**: Complete SEO optimization

## Deployment Strategy

### Environment Configuration
- **Development**: Local development with Vite dev server
- **Production**: Express server serving static assets
- **Database**: PostgreSQL ready (Drizzle configured)
- **Hosting**: Autoscale deployment target configured

### Build Process
1. Vite builds client-side React application
2. ESBuild bundles server-side Express application
3. Static assets optimized for production
4. Environment-specific configurations applied

### Performance Optimizations
- Code splitting for reduced bundle sizes
- Image optimization and lazy loading
- CSS purging for minimal stylesheet size
- Server-side rendering ready architecture

## Changelog
- June 14, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.