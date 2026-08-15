# Graph Report - .  (2026-07-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 982 nodes · 1625 edges · 151 communities (57 shown, 94 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0fd217f3`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- home.tsx
- MemStorage
- App.tsx
- compilerOptions
- sidebar.tsx
- LazyComponents.tsx
- use-toast.ts
- cn
- utils.ts
- SEOAuditor
- command.tsx
- menubar.tsx
- SitemapGenerator
- components.json
- dependencies
- PerformanceOptimizer
- devDependencies
- carousel.tsx
- InternalLinkingOptimizer
- sheet.tsx
- chart.tsx
- context-menu.tsx
- dropdown-menu.tsx
- BuildOptimizer
- CSSOptimizer
- link-validator.ts
- alert-dialog.tsx
- table.tsx
- package.json
- breadcrumb.tsx
- react
- drawer.tsx
- navigation-menu.tsx
- toggle-group.tsx
- PerformanceBundleOptimizer
- generate-meta-pages.ts
- ImageOptimization.tsx
- scripts
- alert.tsx
- input-otp.tsx
- fix-index.cjs
- fix-sitemap.cjs
- fix-sitemap.js
- scratch_test.cjs
- scratch_test.js
- scratch_test_server.cjs
- verify-ssg.ts
- accordion.tsx
- avatar.tsx
- tabs.tsx
- RevBidAd.tsx
- enable-prerender.cjs
- pad-blogs-more.mjs
- test-titles.mjs
- check-live.cjs
- check-words.mjs
- class-variance-authority
- tooltip.tsx
- sw.js
- clsx
- cmdk
- connect-pg-simple
- drizzle-orm
- drizzle-zod
- embla-carousel-react
- esbuild
- express
- express-session
- framer-motion
- @hookform/resolvers
- inject-info.mjs
- inject-interlinks.mjs
- input-otp
- jsdom
- lucide-react
- marked
- memorystore
- @neondatabase/serverless
- next-themes
- passport
- passport-local
- @radix-ui/react-accordion
- @radix-ui/react-alert-dialog
- @radix-ui/react-aspect-ratio
- @radix-ui/react-avatar
- @radix-ui/react-checkbox
- @radix-ui/react-collapsible
- @radix-ui/react-context-menu
- @radix-ui/react-dialog
- @radix-ui/react-dropdown-menu
- @radix-ui/react-hover-card
- @radix-ui/react-label
- @radix-ui/react-menubar
- @radix-ui/react-navigation-menu
- @radix-ui/react-popover
- @radix-ui/react-progress
- @radix-ui/react-radio-group
- @radix-ui/react-scroll-area
- @radix-ui/react-select
- @radix-ui/react-separator
- @radix-ui/react-slider
- @radix-ui/react-slot
- @radix-ui/react-switch
- @radix-ui/react-toggle
- @radix-ui/react-toggle-group
- @radix-ui/react-tooltip
- react-day-picker
- react-dom
- react-hook-form
- react-icons
- react-resizable-panels
- recharts
- tailwindcss-animate
- @tanstack/react-query
- tw-animate-css
- @types/marked
- vaul
- ws
- zod
- puppeteer
- @replit/vite-plugin-runtime-error-modal
- tailwindcss
- @tailwindcss/typography
- @tailwindcss/vite
- tsx
- @types/connect-pg-simple
- @types/express
- @types/express-session
- @types/node
- @types/passport
- @types/passport-local
- @types/react
- @types/react-dom
- typescript
- @vitejs/plugin-react
- pad-articles.mjs
- pad-blogs.mjs
- test-live.cjs
- test-netlify.cjs
- test-netlify-delete.cjs

## God Nodes (most connected - your core abstractions)
1. `cn()` - 69 edges
2. `Card` - 26 edges
3. `CardContent` - 26 edges
4. `MemStorage` - 24 edges
5. `Button` - 23 edges
6. `MetaTags()` - 20 edges
7. `WebPageSchema()` - 18 edges
8. `IStorage` - 18 edges
9. `CardHeader` - 15 edges
10. `CardTitle` - 15 edges

## Surprising Connections (you probably didn't know these)
- `useCarousel()` --references--> `react`  [EXTRACTED]
  client/src/components/ui/carousel.tsx → package.json
- `useChart()` --references--> `react`  [EXTRACTED]
  client/src/components/ui/chart.tsx → package.json
- `useFormField()` --references--> `react`  [EXTRACTED]
  client/src/components/ui/form.tsx → package.json
- `useSidebar()` --references--> `react`  [EXTRACTED]
  client/src/components/ui/sidebar.tsx → package.json
- `useToast()` --references--> `react`  [EXTRACTED]
  client/src/hooks/use-toast.ts → package.json

## Import Cycles
- None detected.

## Communities (151 total, 94 thin omitted)

### Community 0 - "home.tsx"
Cohesion: 0.05
Nodes (83): EarlyRetirementCalculator(), EarlyRetirementForm, earlyRetirementSchema, CalculatorForm, calculatorSchema, MainCalculator(), MainCalculatorProps, Pillar3Calculator() (+75 more)

### Community 1 - "MemStorage"
Cohesion: 0.06
Nodes (25): app, registerRoutes(), IStorage, MemStorage, storage, log(), serveStatic(), setupVite() (+17 more)

### Community 2 - "App.tsx"
Cohesion: 0.06
Nodes (32): App(), LazyBlog, LazyBlogArticle, LazyCalculatorAnticipata, LazyCalculatorPilon2, LazyCalculatorPilon3, LazyCalculatorPuncte, LazyCalculatorVarsta (+24 more)

### Community 3 - "compilerOptions"
Cohesion: 0.07
Nodes (30): build, client/src/**/*, dist, dom, dom.iterable, esnext, node, node_modules (+22 more)

### Community 4 - "sidebar.tsx"
Cohesion: 0.07
Nodes (27): Separator, Sidebar, SidebarContent, SidebarContext, SidebarContextProps, SidebarFooter, SidebarGroup, SidebarGroupAction (+19 more)

### Community 5 - "LazyComponents.tsx"
Cohesion: 0.08
Nodes (14): faqData, FAQItem, LazyBlogArticle, LazyBlogPage, LazyContactPage, LazyEarlyRetirementCalculator, LazyFAQSection, LazyLegislatie (+6 more)

### Community 6 - "use-toast.ts"
Cohesion: 0.11
Nodes (25): Toast, ToastAction, ToastActionElement, ToastClose, ToastDescription, ToastProps, ToastTitle, toastVariants (+17 more)

### Community 7 - "cn"
Cohesion: 0.15
Nodes (17): ButtonProps, buttonVariants, Calendar(), CalendarProps, Pagination(), PaginationContent, PaginationEllipsis(), PaginationItem (+9 more)

### Community 8 - "utils.ts"
Cohesion: 0.11
Nodes (9): Checkbox, HoverCardContent, PopoverContent, Progress, ScrollArea, ScrollBar, Slider, Switch (+1 more)

### Community 9 - "SEOAuditor"
Cohesion: 0.24
Nodes (3): SEOAuditor, SEOAuditResult, SEOIssue

### Community 10 - "command.tsx"
Cohesion: 0.12
Nodes (14): Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut() (+6 more)

### Community 11 - "menubar.tsx"
Cohesion: 0.12
Nodes (11): Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarLabel, MenubarRadioItem, MenubarSeparator, MenubarShortcut() (+3 more)

### Community 12 - "SitemapGenerator"
Cohesion: 0.14
Nodes (4): RobotsTxtConfig, SEOAnalyzer, SitemapGenerator, SitemapUrl

### Community 13 - "components.json"
Cohesion: 0.12
Nodes (16): aliases, components, hooks, lib, ui, utils, rsc, $schema (+8 more)

### Community 14 - "dependencies"
Cohesion: 0.13
Nodes (16): date-fns, @jridgewell/trace-mapping, @netlify/functions, dependencies, date-fns, @jridgewell/trace-mapping, @netlify/functions, @radix-ui/react-tabs (+8 more)

### Community 15 - "PerformanceOptimizer"
Cohesion: 0.21
Nodes (3): CriticalResource, PerformanceMetrics, PerformanceOptimizer

### Community 16 - "devDependencies"
Cohesion: 0.15
Nodes (13): autoprefixer, drizzle-kit, devDependencies, autoprefixer, drizzle-kit, postcss, @replit/vite-plugin-cartographer, @types/ws (+5 more)

### Community 17 - "carousel.tsx"
Cohesion: 0.15
Nodes (12): Carousel, CarouselApi, CarouselContent, CarouselContext, CarouselContextProps, CarouselItem, CarouselNext, CarouselOptions (+4 more)

### Community 18 - "InternalLinkingOptimizer"
Cohesion: 0.20
Nodes (4): InternalLink, internalLinking, InternalLinkingOptimizer, PageContext

### Community 19 - "sheet.tsx"
Cohesion: 0.22
Nodes (7): SheetContent, SheetContentProps, SheetDescription, SheetHeader(), SheetOverlay, SheetTitle, sheetVariants

### Community 20 - "chart.tsx"
Cohesion: 0.20
Nodes (7): ChartConfig, ChartContainer, ChartContext, ChartContextProps, ChartLegendContent, ChartTooltipContent, THEMES

### Community 21 - "context-menu.tsx"
Cohesion: 0.20
Nodes (9): ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut(), ContextMenuSubContent (+1 more)

### Community 22 - "dropdown-menu.tsx"
Cohesion: 0.20
Nodes (9): DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut(), DropdownMenuSubContent (+1 more)

### Community 25 - "link-validator.ts"
Cohesion: 0.24
Nodes (5): INTERNAL_ROUTES, InternalRoute, LinkValidationResult, optimizeAnchorText(), validateInternalLink()

### Community 26 - "alert-dialog.tsx"
Cohesion: 0.22
Nodes (8): AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay, AlertDialogTitle

### Community 27 - "table.tsx"
Cohesion: 0.22
Nodes (8): Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow

### Community 28 - "package.json"
Cohesion: 0.25
Nodes (7): bufferutil, license, name, optionalDependencies, bufferutil, type, version

### Community 29 - "breadcrumb.tsx"
Cohesion: 0.25
Nodes (7): Breadcrumb, BreadcrumbEllipsis(), BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator()

### Community 30 - "react"
Cohesion: 0.25
Nodes (7): useCarousel(), useChart(), useFormField(), useSidebar(), useIsMobile(), react, react

### Community 31 - "drawer.tsx"
Cohesion: 0.25
Nodes (6): DrawerContent, DrawerDescription, DrawerFooter(), DrawerHeader(), DrawerOverlay, DrawerTitle

### Community 32 - "navigation-menu.tsx"
Cohesion: 0.25
Nodes (7): NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuViewport

### Community 33 - "toggle-group.tsx"
Cohesion: 0.33
Nodes (5): ToggleGroup, ToggleGroupContext, ToggleGroupItem, Toggle, toggleVariants

### Community 35 - "generate-meta-pages.ts"
Cohesion: 0.33
Nodes (6): __dirname, __filename, main(), PageMeta, replaceMeta(), staticRoutes

### Community 37 - "scripts"
Cohesion: 0.33
Nodes (6): scripts, build, check, db:push, dev, start

### Community 39 - "alert.tsx"
Cohesion: 0.40
Nodes (4): Alert, AlertDescription, AlertTitle, alertVariants

### Community 40 - "input-otp.tsx"
Cohesion: 0.40
Nodes (4): InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot

### Community 41 - "fix-index.cjs"
Cohesion: 0.40
Nodes (4): fs, html, indexPath, path

### Community 42 - "fix-sitemap.cjs"
Cohesion: 0.40
Nodes (4): content, fs, path, sitemapPath

### Community 43 - "fix-sitemap.js"
Cohesion: 0.40
Nodes (4): content, fs, path, sitemapPath

### Community 44 - "scratch_test.cjs"
Cohesion: 0.40
Nodes (3): fs, { JSDOM }, path

### Community 45 - "scratch_test.js"
Cohesion: 0.40
Nodes (3): fs, { JSDOM }, path

### Community 46 - "scratch_test_server.cjs"
Cohesion: 0.50
Nodes (4): express, { JSDOM }, main(), path

### Community 47 - "verify-ssg.ts"
Cohesion: 0.40
Nodes (3): __dirname, __filename, staticRoutes

### Community 48 - "accordion.tsx"
Cohesion: 0.50
Nodes (3): AccordionContent, AccordionItem, AccordionTrigger

### Community 49 - "avatar.tsx"
Cohesion: 0.50
Nodes (3): Avatar, AvatarFallback, AvatarImage

### Community 50 - "tabs.tsx"
Cohesion: 0.50
Nodes (3): TabsContent, TabsList, TabsTrigger

## Knowledge Gaps
- **414 isolated node(s):** `https`, `content`, `LazyBlog`, `LazyBlogArticle`, `LazyContact` (+409 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **94 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `package.json`, `react`, `class-variance-authority`, `clsx`, `cmdk`, `connect-pg-simple`, `drizzle-orm`, `drizzle-zod`, `embla-carousel-react`, `express`, `express-session`, `framer-motion`, `@hookform/resolvers`, `input-otp`, `jsdom`, `lucide-react`, `marked`, `memorystore`, `@neondatabase/serverless`, `next-themes`, `passport`, `passport-local`, `@radix-ui/react-accordion`, `@radix-ui/react-alert-dialog`, `@radix-ui/react-aspect-ratio`, `@radix-ui/react-avatar`, `@radix-ui/react-checkbox`, `@radix-ui/react-collapsible`, `@radix-ui/react-context-menu`, `@radix-ui/react-dialog`, `@radix-ui/react-dropdown-menu`, `@radix-ui/react-hover-card`, `@radix-ui/react-label`, `@radix-ui/react-menubar`, `@radix-ui/react-navigation-menu`, `@radix-ui/react-popover`, `@radix-ui/react-progress`, `@radix-ui/react-radio-group`, `@radix-ui/react-scroll-area`, `@radix-ui/react-select`, `@radix-ui/react-separator`, `@radix-ui/react-slider`, `@radix-ui/react-slot`, `@radix-ui/react-switch`, `@radix-ui/react-toggle`, `@radix-ui/react-toggle-group`, `@radix-ui/react-tooltip`, `react-day-picker`, `react-dom`, `react-hook-form`, `react-icons`, `react-resizable-panels`, `recharts`, `tailwindcss-animate`, `@tanstack/react-query`, `tw-animate-css`, `@types/marked`, `vaul`, `ws`, `zod`?**
  _High betweenness centrality (0.232) - this node is a cross-community bridge._
- **Why does `react` connect `react` to `use-toast.ts`, `dependencies`?**
  _High betweenness centrality (0.200) - this node is a cross-community bridge._
- **Why does `cn()` connect `cn` to `home.tsx`, `sidebar.tsx`, `use-toast.ts`, `utils.ts`, `command.tsx`, `menubar.tsx`, `carousel.tsx`, `sheet.tsx`, `chart.tsx`, `context-menu.tsx`, `dropdown-menu.tsx`, `alert-dialog.tsx`, `table.tsx`, `breadcrumb.tsx`, `drawer.tsx`, `navigation-menu.tsx`, `toggle-group.tsx`, `alert.tsx`, `input-otp.tsx`, `accordion.tsx`, `avatar.tsx`, `tabs.tsx`, `tooltip.tsx`?**
  _High betweenness centrality (0.117) - this node is a cross-community bridge._
- **What connects `https`, `content`, `LazyBlog` to the rest of the system?**
  _414 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `home.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.051367781155015196 - nodes in this community are weakly interconnected._
- **Should `MemStorage` be split into smaller, more focused modules?**
  _Cohesion score 0.06105834464043419 - nodes in this community are weakly interconnected._
- **Should `App.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06105457909343201 - nodes in this community are weakly interconnected._