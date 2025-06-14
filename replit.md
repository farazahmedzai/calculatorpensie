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

## Current Project Status (June 14, 2025)

### ✅ COMPLETED FEATURES (100%)
1. **Core Application Infrastructure**
   - React + TypeScript frontend with Wouter routing
   - Express.js backend with full API endpoints
   - TanStack Query for data management
   - shadcn/ui components with Tailwind CSS
   - Responsive design for mobile/desktop

2. **Three Functional Calculators**
   - Main pension calculator with Romanian formulas
   - Early retirement calculator with penalty calculations
   - Pillar III calculator for private contributions
   - All calculators working with instant JavaScript calculations

3. **Content Management System**
   - 12 sample articles across 3 categories (planificare, tipuri-pensii, legislatie)
   - Blog system with categorization and filtering
   - Article management with CRUD operations
   - Newsletter subscription system

4. **Basic SEO Foundation**
   - Proper meta titles and descriptions
   - H1 tags optimized for "Calculator Pensie 2025"
   - Current pension point value (2.031 Lei, 2025)
   - Homepage calculator above-the-fold as required

### 🔄 IN PROGRESS - SEO & Authority Building (15% Remaining)
Critical items blocking #1 Google ranking:

1. **Schema.org Markup** (0% Complete)
   - WebApplication markup for calculators
   - FAQPage markup for rich snippets
   - Organization and WebSite structured data

2. **Trust & Authority Pages** (0% Complete)
   - Despre Noi page (About Us/Mission)
   - Metodologie page (Calculation transparency)
   - Contact page (Professional presence)
   - Privacy Policy page (Data handling)

3. **FAQ Section with Rich Snippets** (0% Complete)
   - Target "La ce vârstă mă pot pensiona?" question
   - 5+ common pension questions with structured answers
   - Schema.org FAQPage implementation

4. **Technical SEO Optimization** (25% Complete)
   - ✅ Sitemap.xml and robots.txt configured
   - ❌ Google Analytics 4 setup needed
   - ❌ Core Web Vitals optimization required
   - ❌ Navigation anchor tag warnings need fixing

### 🎯 IMMEDIATE PRIORITIES - Path to #1 Ranking

**Week 1 Critical Tasks**:
1. Implement Schema.org markup (WebApplication + FAQPage)
2. Create FAQ section on homepage for rich snippets
3. Build trust pages (Despre Noi, Metodologie, Contact, Privacy)
4. Fix technical issues (navigation warnings, Core Web Vitals)
5. Set up Google Analytics 4 with conversion tracking

**Success Metrics**: 
- All technical SEO elements implemented
- Trust pages establish E-E-A-T authority
- Rich snippets eligible for "calculator pensie" searches
- Site performance optimized for mobile-first indexing

## Recent Changes
- June 14, 2025: Comprehensive status audit completed across all documentation
- June 14, 2025: Identified 15% remaining work focused on SEO/authority
- June 14, 2025: Prioritized Schema.org and trust pages as blocking items
- June 14, 2025: Updated all year references from 2024 to 2025
- June 14, 2025: Initial setup completed

## User Preferences

Preferred communication style: Simple, everyday language.