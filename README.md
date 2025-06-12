# CalculatorPensie.com

## Overview
CalculatorPensie.com is Romania's comprehensive pension calculation and planning platform, designed to help Romanian citizens estimate their retirement income and plan their financial future.

## Features
- **Main Pension Calculator**: Calculate standard retirement pension based on Romanian formulas
- **Early Retirement Calculator**: Explore early retirement options with penalty calculations
- **Pillar III Calculator**: Plan private pension contributions with tax advantages
- **Educational Guides**: Comprehensive content about Romanian pension system
- **SEO-Optimized Blog**: Regular updates on pension law changes and planning tips

## Technology Stack
- **Frontend**: React 18 with TypeScript
- **Backend**: Express.js with TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: Wouter for client-side routing
- **Forms**: React Hook Form + Zod validation
- **Data Fetching**: TanStack Query
- **Build Tool**: Vite

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone [repository-url]
cd calculatorpensie

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5000`

## Project Structure
```
├── client/src/           # Frontend React application
│   ├── components/       # Reusable UI components
│   ├── pages/           # Page components
│   ├── lib/             # Utilities and calculations
│   └── hooks/           # Custom React hooks
├── server/              # Backend Express application
│   ├── routes.ts        # API endpoints
│   ├── storage.ts       # Data management
│   └── index.ts         # Server entry point
├── shared/              # Shared types and schemas
└── docs/                # Documentation files
```

## Romanian Pension Calculations

### Standard Pension Formula
Based on Romanian pension law (Legea 263/2010):
- Calculation: (Average Income × Contribution Years × 1.265%) 
- Maximum: 75% of average income
- Minimum contribution: 15 years required

### Early Retirement
- Men: Available from age 62 (penalty: 0.25% per month)
- Women: Available from age 60 (penalty: 0.25% per month)
- Requires minimum 15 years contribution

### Pillar III Benefits
- Annual tax deduction up to €400
- 10% tax rate on contributions
- Tax-free withdrawal after age 60 and 5 years

## API Endpoints

### Articles
- `GET /api/articles` - Get all articles
- `GET /api/articles/recent` - Get recent articles
- `GET /api/articles/:slug` - Get article by slug

### Calculations
- `POST /api/calculations` - Save calculation result
- `GET /api/calculations/recent` - Get recent calculations

### Newsletter
- `POST /api/newsletter/subscribe` - Subscribe to newsletter
- `GET /api/newsletter/subscribers` - Get subscriber count

## SEO Implementation

### Content Structure
The site follows a silo architecture for topical authority:

1. **Planificarea Pensiei** (Pension Planning)
   - Investment strategies
   - Planning guides
   - Common mistakes

2. **Tipuri de Pensii** (Pension Types)
   - Standard retirement
   - Early retirement
   - Survivor benefits
   - Disability pensions

3. **Legislație** (Legislation)
   - Current pension laws
   - Age requirements
   - Contribution rules

### Internal Linking
- Pillar pages link to all cluster articles in their silo
- Cluster articles link back to pillar pages
- Related content cross-linking within silos

## Content Management

### Adding New Articles
Articles are managed through the storage system:

```typescript
const newArticle = {
  title: "Article Title",
  slug: "article-slug",
  excerpt: "Brief description",
  content: "Full article content in markdown",
  category: "planificare" | "tipuri-pensii" | "legislatie",
  readTime: 5, // minutes
  published: true
};
```

### Article Categories
- **planificare**: Pension planning and strategy content
- **tipuri-pensii**: Information about different pension types
- **legislatie**: Legal requirements and legislative updates

## Deployment

### Production Build
```bash
# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables
Create `.env` file with required variables:
```
NODE_ENV=production
PORT=5000
DATABASE_URL=your_database_url (if using database)
```

## Contributing

### Code Style
- TypeScript strict mode enabled
- ESLint configuration for code quality
- Prettier for code formatting
- Follow React best practices

### Adding Features
1. Create feature branch from main
2. Implement changes with proper TypeScript types
3. Add tests for new functionality
4. Update documentation
5. Submit pull request

## Legal Compliance

### Disclaimer
This calculator provides estimates based on current Romanian pension legislation. Results are for planning purposes only. For official pension information, consult Casa Națională de Pensii Publice (CNPP).

### Data Privacy
- No personal data stored permanently
- Calculations performed locally
- HTTPS encryption for all data transmission
- GDPR compliant data handling

## Support and Contact

### Documentation
- User Guide: `USER_GUIDE.md`
- Development Notes: `DEVELOPMENT_NOTES.md`
- SEO Strategy: `SEO_IMPLEMENTATION_GUIDE.md`
- Progress Tracking: `PROGRESS_TRACKER.md`

### Technical Support
For technical issues or questions:
1. Check existing documentation
2. Review troubleshooting guide
3. Contact development team

## License
This project is proprietary software. All rights reserved.

## Acknowledgments
- Romanian pension calculations based on official CNPP formulas
- UI components from shadcn/ui library
- Icons from Lucide React
- Built with modern React and TypeScript best practices