# CalculatorPensie.com - Development Notes

## Project Structure

### Core Files Organization
```
├── client/src/
│   ├── components/
│   │   ├── calculators/          # Main calculators (3 types)
│   │   ├── layout/               # Header, footer, navigation
│   │   └── ui/                   # shadcn/ui components
│   ├── pages/
│   │   ├── guides/               # Educational content pages
│   │   ├── home.tsx              # Homepage with main calculator
│   │   ├── calculator.tsx        # Calculator page with tabs
│   │   ├── blog.tsx              # Article listing
│   │   └── not-found.tsx         # 404 page
│   ├── lib/
│   │   ├── pension-calculations.ts  # Romanian pension formulas
│   │   ├── queryClient.ts        # API client setup
│   │   └── utils.ts              # Utility functions
│   └── App.tsx                   # Main routing component
├── server/
│   ├── index.ts                  # Express server setup
│   ├── routes.ts                 # API endpoints
│   ├── storage.ts                # Data management layer
│   └── vite.ts                   # Vite dev server integration
├── shared/
│   └── schema.ts                 # Database schema and types
└── Documentation Files (.md)
```

## Romanian Pension Calculation Formulas

### Standard Pension Formula
```typescript
// Basic calculation: (Average Income × Contribution Years × Accrual Rate) / 100
const pensionAmount = (averageIncome * contributionYears * 1.265) / 100;
const maxPension = averageIncome * 0.75; // 75% cap
return Math.min(pensionAmount, maxPension);
```

### Early Retirement Penalties
- **Men**: Can retire at 62 (3 years early) with 0.25% monthly penalty
- **Women**: Can retire at 60 (7 years early) with 0.25% monthly penalty
- **Minimum**: 15 years contribution required for early retirement

### Pillar III Tax Advantages
- **Annual Deduction**: Up to €400 (approximately 2000 Lei)
- **Tax Rate**: 10% on contributions
- **Withdrawal**: Tax-free after 5 years and age 60

## Technical Implementation Details

### Calculator Logic
All calculations are performed client-side using validated Romanian pension formulas:
- Input validation with Zod schemas
- Real-time calculation updates
- Results formatted in Romanian Lei
- Mobile-optimized input forms

### Content Management
Articles stored in memory with full SEO structure:
- Category-based organization (planificare, tipuri-pensii, legislatie)
- Meta descriptions and SEO-friendly slugs
- Reading time estimation
- Publication status management

### API Design
RESTful endpoints for:
- `/api/articles` - Article management
- `/api/articles/recent` - Homepage content
- `/api/calculations` - Pension calculation history
- `/api/newsletter` - Email subscriptions

## SEO Strategy Implementation

### Silo Architecture
Following the comprehensive SEO guide:
1. **Planificare Pensiei** - Planning and strategy content
2. **Tipuri de Pensii** - Pension types and options
3. **Legislație** - Legal requirements and updates

### Internal Linking Pattern
- Pillar pages link to all cluster articles in their silo
- Cluster articles link back to pillar pages
- Cross-linking within silos for related content
- Minimal cross-silo linking to maintain topical authority

### Content Structure
Each article follows SEO best practices:
- H1 with primary keyword
- H2 subheadings for structure
- Meta titles under 60 characters
- Meta descriptions 150-160 characters
- Internal links with descriptive anchor text

## Known Technical Issues

### Minor Console Warnings
1. **Navigation Links**: Nested anchor tag warnings (non-critical)
   - Using wouter Link component with span instead of anchor
   - Does not affect functionality or SEO

2. **Vite Configuration**: Type mismatch in server options (non-critical)
   - Development-only warning
   - Does not affect production build

### Performance Considerations
- All images should be optimized to WebP format
- Consider implementing service worker for caching
- Bundle size optimization for production deployment

## Romanian Market Considerations

### Legal Compliance
- All calculations based on current Romanian pension law (Legea 263/2010)
- Regular updates required when legislation changes
- Links to official CNPP resources for verification

### User Experience
- Romanian language throughout interface
- Lei currency formatting (e.g., "2.500 Lei")
- Age and retirement calculations specific to Romanian system
- Mobile-first design for accessibility

### Content Strategy
- Focus on practical guidance for Romanian citizens
- Address common pension planning concerns
- Regular updates on legislative changes
- Expert-level content to establish authority

## Deployment Checklist

### Pre-Launch Requirements
- [ ] Complete Schema.org markup implementation
- [ ] Add canonical tags to prevent duplicate content
- [ ] Set up Google Analytics 4 with conversion tracking
- [ ] Submit sitemap to Google Search Console
- [ ] Test all calculators with edge cases
- [ ] Verify mobile responsiveness on various devices
- [ ] Check all internal links are working
- [ ] Validate HTML and accessibility compliance

### Post-Launch Monitoring
- Monitor Core Web Vitals performance
- Track keyword rankings for "calculator pensie"
- Analyze user behavior with calculator tools
- Monitor for crawl errors in Search Console
- Track newsletter subscription conversion rates

## Future Enhancement Roadmap

### Phase 1: SEO Optimization
- Complete all 12 cluster articles per strategy
- Implement advanced Schema markup
- Build high-quality backlink portfolio
- Launch guest posting campaign

### Phase 2: User Features
- User accounts for saving calculations
- PDF generation for calculation results
- Email reminders for pension planning milestones
- Advanced calculator with inflation adjustments

### Phase 3: Authority Building
- Expert interviews and quotes
- Collaboration with financial advisors
- Government relations for official partnerships
- Annual pension planning reports and studies

This comprehensive development documentation provides the foundation for maintaining and expanding CalculatorPensie.com as Romania's leading pension calculation authority.