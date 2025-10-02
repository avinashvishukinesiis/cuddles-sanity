# Cuddles Preschool 2.0 - Project Documentation

## Project Overview
A Next.js 15 web application for Cuddles Preschool with Sanity CMS integration, featuring automated data fetching, content optimization, and a comprehensive multi-page website.

## Technology Stack
- **Framework**: Next.js 15.5.0 (App Router)
- **React**: 19.1.0
- **CMS**: Sanity 4.10.1
- **Styling**: Tailwind CSS 4, Styled Components 6.1.19
- **Animation**: Framer Motion 12.23.12
- **Email**: Nodemailer 7.0.6
- **Language**: TypeScript 5

---

## File Structure

### 📁 Root Directory

#### Entry Points
- **`package.json`** - Project dependencies and scripts
  - `npm run dev` - Start development server (Next.js on port 3000)
  - `npm run studio` - Start Sanity Studio (port 3333)
  - `npm run build` - Build for production
  - `npm run start` - Start production server

- **`next.config.ts`** - Next.js configuration
  - Forces Webpack build (disables Turbopack)
  - Main entry: `/Users/karan/Documents/cuddles2.0/next.config.ts:4`

- **`tailwind.config.js`** - Tailwind CSS configuration

- **`tsconfig.json`** - TypeScript configuration

---

### 📁 `/app` - Next.js App Router

#### Core Layout Files
- **`app/layout.tsx`** - Root layout (Main Entry Point)
  - Loads custom fonts: Ohno Softie Variable, Geist Sans, Geist Mono
  - Sets up metadata (title, description)
  - Wraps app in RootLayoutClient
  - Entry: `/Users/karan/Documents/cuddles2.0/app/layout.tsx:30`

- **`app/RootLayoutClient.tsx`** - Client-side root layout wrapper
  - Renders Navbar and Footer conditionally
  - Handles FAQ section visibility
  - Initializes AutoCompact system on mount
  - Excludes header/footer for `/studio` route
  - Entry: `/Users/karan/Documents/cuddles2.0/app/RootLayoutClient.tsx:16`

- **`app/page.tsx`** - Homepage (Main Landing Page)
  - Fetches hero section and testimonials data
  - Renders: HeroSection, EarlyEducation, CuddlesProgram, ActivityZone, Include, Testimonial, LetsConnect
  - Entry: `/Users/karan/Documents/cuddles2.0/app/page.tsx:10`

#### Page Routes
- **`app/AboutUs/page.tsx`** - About Us page
- **`app/Assistance/page.tsx`** - Parent Assistance page
- **`app/Contact/page.tsx`** - Contact page
- **`app/Curriculum/page.tsx`** - Curriculum page
- **`app/Partnerships/page.tsx`** - Partnerships page
- **`app/Safety/page.tsx`** - Safety page

#### API Routes
- **`app/api/contact/route.ts`** - Contact form email handler
  - POST endpoint to send emails via Nodemailer
  - Sends to: cuddles.communication@gmail.com
  - Fields: child_name, age, guardian, phone, email, comments
  - Entry: `/Users/karan/Documents/cuddles2.0/app/api/contact/route.ts:4`

- **`app/api/build/route.ts`** - Build status API endpoint

#### Studio Route
- **`app/studio/[[...tool]]/page.tsx`** - Sanity Studio page (catch-all route)
- **`app/studio/layout.tsx`** - Studio-specific layout

---

### 📁 `/sanity` - Sanity CMS Configuration

#### Configuration Files
- **`sanity.config.ts`** - Main Sanity configuration
  - Configures project ID, dataset (dev/prod)
  - Plugins: structureTool, visionTool (dev only)
  - CORS settings for multiple origins
  - Entry: `/Users/karan/Documents/cuddles2.0/sanity.config.ts:26`

- **`sanity.cli.ts`** - Sanity CLI configuration
  - Defines project ID and dataset for CLI commands
  - Entry: `/Users/karan/Documents/cuddles2.0/sanity.cli.ts:10`

- **`sanity/env.ts`** - Environment configuration

#### Schema Files (`sanity/schemas/`)
All schemas define content structure for Sanity Studio:

- **`index.ts`** - Schema type registry
  - Exports: aboutUs, program, testimonial, footer, homePage, curriculum, partnerships, safety, assistance, contact
  - Entry: `/Users/karan/Documents/cuddles2.0/sanity/schemas/index.ts:12`

- **`aboutUs.ts`** - About Us page schema
- **`assistance.ts`** - Assistance page schema
- **`contact.ts`** - Contact page schema
- **`curriculum.ts`** - Curriculum page schema
- **`heroSection.ts`** - Hero section schema
- **`homePage.ts`** - Homepage schema
- **`partnerships.ts`** - Partnerships page schema
- **`program.ts`** - Program schema
- **`safety.ts`** - Safety page schema
- **`siteSettings.ts`** - Site settings schema
- **`testimonial.ts`** - Testimonial schema

#### Sanity Utilities (`sanity/lib/`)
- **`client.ts`** - Sanity client configuration
- **`image.ts`** - Image URL builder
- **`live.ts`** - Live preview configuration

#### Structure
- **`sanity/structure.ts`** - Custom Studio structure
- **`sanity/schemaTypes/index.ts`** - Schema types export

---

### 📁 `/lib` - Utility Libraries

#### Core Utilities
- **`lib/sanity.ts`** - Main Sanity client and GROQ queries
  - Creates 3 clients: public client, admin client, preview client
  - Dataset selection: dev/prod based on environment
  - Fallback projectId: 'w8a19ipn'
  - GROQ queries for all content types
  - Entry: `/Users/karan/Documents/cuddles2.0/lib/sanity.ts:27` (client)
  - Entry: `/Users/karan/Documents/cuddles2.0/lib/sanity.ts:57` (urlFor helper)
  - Entry: `/Users/karan/Documents/cuddles2.0/lib/sanity.ts:62` (queries object)

- **`lib/types.ts`** - TypeScript type definitions
  - Defines all content types used across the app

#### Automation Systems
- **`lib/auto-data-fetcher.ts`** - Automated data fetching with caching
  - In-memory cache with 5-minute duration
  - Auto-retry logic (3 attempts, exponential backoff)
  - Functions:
    - `autoFetchHomePage()` - Fetches homepage data with fallback
    - `autoFetchHeroSection()` - Fetches hero section
    - `autoFetchTestimonials()` - Fetches testimonials
    - `autoFetchAllPages()` - Bulk fetch all pages
  - Cache utilities: clear, size, keys, invalidate, stats
  - Entry: `/Users/karan/Documents/cuddles2.0/lib/auto-data-fetcher.ts:21` (cachedFetch)
  - Entry: `/Users/karan/Documents/cuddles2.0/lib/auto-data-fetcher.ts:77` (autoFetchHomePage)

- **`lib/auto-compact.ts`** - Content compaction system
  - Initializes on client-side (called from RootLayoutClient)

- **`lib/auto-content-sync.ts`** - Content synchronization

- **`lib/auto-image-optimizer.ts`** - Image optimization utilities

- **`lib/config-validator.ts`** - Configuration validation
  - Validates Sanity configuration
  - Provides fallback values

- **`lib/sanity-utils.ts`** - Sanity helper utilities

---

### 📁 `/components` - React Components

#### Global Components
- **`components/NavBar/Navbar.tsx`** - Main navigation bar
- **`components/Footer/Footer.tsx`** - Site footer
- **`components/FAQ/Faq.tsx`** - FAQ section (shown on most pages except Partnerships)
- **`components/LetsConnect/letsConnect.tsx`** - Contact form component
- **`components/Testimonial/Testimonial.tsx`** - Testimonials carousel
- **`components/MotionWrapper.tsx`** - Framer Motion animation wrapper
- **`components/ContentCard.tsx`** - Reusable content card

#### HomePage Components (`components/HomePage/`)
- **`HeroSection/HeroSection.tsx`** - Homepage hero section
- **`Early-education/EarlyEducation.tsx`** - Early education section
- **`CuddlesProgram/CuddlesProgram.tsx`** - Programs overview
- **`ActivityZone/ActivityZone.tsx`** - Activity zones display
- **`Include/Include.tsx`** - What's included section

#### AboutUs Components (`components/AboutUs/`)
- **`HeroSection/HeroSection.tsx`** - About Us hero
- **`VisionAndMission/VissionAndMission.tsx`** - Vision and mission
- **`AboutCEO/AboutCEO.tsx`** - CEO information

#### Curriculum Components (`components/Curriculum/`)
- **`HeroSection/HeroSection.tsx`** - Curriculum hero
- **`LearningMethodology/LearningMethodology.tsx`** - Learning approaches
- **`DayAtCuddles/DayAtCuddles.tsx`** - Daily schedule
- **`SubjectAreas/SubjectAreas.tsx`** - Subject areas
- **`FAQ/FAQ.tsx`** - Curriculum-specific FAQs

#### Safety Components (`components/Safety/`)
- **`HeroSection/HeroSection.tsx`** - Safety hero
- **`Emergency/Emergency.tsx`** - Emergency protocols
- **`HealthyHabits/HealthyHabits.tsx`** - Health practices

#### Assistance Components (`components/Assistance/`)
- **`HeroSection/Herosection.tsx`** - Assistance hero
- **`ContinuedCare/ContinuedCare.tsx`** - Continued care info
- **`ParentResource/ParentResource.tsx`** - Parent resources

#### Partnerships Components (`components/Parternerships/`)
- **`HeroSection/HeroSection.tsx`** - Partnerships hero
- **`ParternerWith/ParternerWith.tsx`** - Partner types
- **`CuddlesParterner/CuddlesParterner.tsx`** - Partner benefits
- **`Enroll/Enroll.tsx`** - Enrollment steps
- **`LetsBuild/LetsBuild.tsx`** - Build together section

#### Contact Components (`components/Contact/`)
- **`HeroSection/HeroSection.tsx`** - Contact hero with locations

---

### 📁 `/scripts` - Utility Scripts

Data seeding and migration scripts:
- **`create-testimonials.js`** - Create testimonial documents
- **`migrate-testimonials-to-homepage.js`** - Migrate testimonials to homepage
- **`populate-about-us-sections.js`** - Seed About Us data
- **`populate-include-section.js`** - Seed include section data
- **`seed-all-pages.js`** - Seed all page content
- **`seed-partnerships.js`** - Seed partnerships data
- **`update-home-document.js`** - Update homepage document

Image upload scripts:
- **`upload-about-us-images.js`** - Upload About Us images
- **`upload-curriculum-images.js`** - Upload curriculum images
- **`upload-images.js`** - General image upload
- **`upload-partnership-images.js`** - Upload partnership images

---

### 📁 `/public` - Static Assets

- **`public/content/`** - Content files
- **`public/photo/`** - Image assets

---

### 📁 `/.sanity` - Sanity Runtime

- **`.sanity/runtime/app.js`** - Sanity Studio runtime

---

## Application Flow

### 1. Application Bootstrap
```
Entry: app/layout.tsx:30 (RootLayout)
  ↓
Loads fonts & metadata
  ↓
Wraps in: app/RootLayoutClient.tsx:16
  ↓
Initializes AutoCompact system
  ↓
Conditionally renders NavBar, children, FAQ, Footer
```

### 2. Homepage Data Flow
```
Entry: app/page.tsx:10 (Home)
  ↓
Calls: lib/auto-data-fetcher.ts:179 (autoFetchHeroSection)
Calls: lib/auto-data-fetcher.ts:203 (autoFetchTestimonials)
  ↓
Uses: lib/auto-data-fetcher.ts:21 (cachedFetch with retry logic)
  ↓
Queries: lib/sanity.ts:27 (Sanity client)
  ↓
Renders components with fetched data
```

### 3. Contact Form Flow
```
User submits form in: components/LetsConnect/letsConnect.tsx
  ↓
POST to: app/api/contact/route.ts:4
  ↓
Sends email via Nodemailer
  ↓
Returns success/failure response
```

### 4. Sanity Studio Flow
```
Access: http://localhost:3333/studio
  ↓
Entry: app/studio/[[...tool]]/page.tsx
  ↓
Uses: sanity.config.ts:26 (Sanity configuration)
  ↓
Loads schemas from: sanity/schemas/index.ts:12
  ↓
Manages content via Sanity Studio UI
```

---

## Key Features

### 1. Automated Data Fetching
- **Location**: `lib/auto-data-fetcher.ts`
- In-memory caching (5-minute TTL)
- Auto-retry with exponential backoff (3 attempts)
- Fallback data for resilience
- Cache management utilities

### 2. Environment-Based Configuration
- **Development**: Uses `NEXT_PUBLIC_SANITY_DATASET_DEV`
- **Production**: Uses `NEXT_PUBLIC_SANITY_DATASET_PROD`
- Fallback dataset: 'production'
- Fallback projectId: 'w8a19ipn'

### 3. Content Management
- Sanity CMS for all content
- Schemas for: Homepage, About Us, Curriculum, Safety, Assistance, Partnerships, Contact
- Image optimization via Sanity CDN
- Live preview support

### 4. Performance Optimizations
- Client-side caching
- CDN usage in production
- Image optimization
- Auto-compact system

---

## Environment Variables

Required in `.env.local`:
```
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_DATASET_DEV=
NEXT_PUBLIC_SANITY_DATASET_PROD=
SANITY_API_TOKEN=

# Email (Nodemailer)
SMTP_USER=
SMTP_PASS=
```

---

## Development Commands

```bash
# Start Next.js dev server (port 3000)
npm run dev

# Start Sanity Studio (port 3333)
npm run studio

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

---

## Routes

### Public Routes
- `/` - Homepage
- `/AboutUs` - About Us page
- `/Curriculum` - Curriculum page
- `/Safety` - Safety page
- `/Assistance` - Parent Assistance page
- `/Partnerships` - Partnerships page
- `/Contact` - Contact page

### Admin Routes
- `/studio` - Sanity Studio CMS

### API Routes
- `POST /api/contact` - Send contact form email

---

## Component Hierarchy

```
RootLayout (app/layout.tsx:30)
└── RootLayoutClient (app/RootLayoutClient.tsx:16)
    ├── NavBar (shown on non-studio routes)
    ├── MotionWrapper
    │   └── Page Content (children)
    │       └── Page-specific components
    ├── FAQSection (shown on most pages except Partnerships)
    └── Footer (shown on non-studio routes)
```

---

## Data Schema Types

Defined in `lib/types.ts` and `sanity/schemas/`:

1. **HomePage** - Main homepage content
2. **AboutUs** - About Us page content
3. **Curriculum** - Curriculum page content
4. **Safety** - Safety page content
5. **Assistance** - Assistance page content
6. **Partnerships** - Partnerships page content
7. **Contact** - Contact page content
8. **Program** - Individual program details
9. **Testimonial** - Customer testimonials
10. **HeroSection** - Hero section content
11. **SiteSettings** - Footer and site-wide settings

---

## Auto-Systems

### 1. AutoFetch System
- **File**: `lib/auto-data-fetcher.ts`
- **Purpose**: Automated data fetching with caching and retry logic
- **Key Functions**:
  - `cachedFetch()` - Generic cached fetch with retry
  - `autoFetchHomePage()` - Homepage data
  - `autoFetchHeroSection()` - Hero section
  - `autoFetchTestimonials()` - Testimonials
  - `autoFetchAllPages()` - Bulk fetch

### 2. AutoCompact System
- **File**: `lib/auto-compact.ts`
- **Purpose**: Content compaction
- **Initialization**: `RootLayoutClient.tsx:20` (client-side)

### 3. Auto Content Sync
- **File**: `lib/auto-content-sync.ts`
- **Purpose**: Content synchronization

### 4. Auto Image Optimizer
- **File**: `lib/auto-image-optimizer.ts`
- **Purpose**: Image optimization

---

## Sanity Configuration

### Client Types
1. **Public Client** (`lib/sanity.ts:27`)
   - Uses CDN in production
   - Published content only
   - No authentication required

2. **Admin Client** (`lib/sanity.ts:36`)
   - Direct API access
   - Requires SANITY_API_TOKEN
   - Includes draft content
   - Used for mutations

3. **Preview Client** (`lib/sanity.ts:46`)
   - Direct API access
   - Requires SANITY_API_TOKEN
   - Preview drafts perspective

### GROQ Queries
All queries defined in `lib/sanity.ts:62`:
- heroSection
- aboutUs
- programs
- testimonials
- includeSection
- curriculum
- partnerships
- safety
- assistance
- contact
- siteSettings

---

## Email Configuration

- **Service**: Gmail SMTP
- **Port**: 465 (SSL)
- **Handler**: `app/api/contact/route.ts:4`
- **Recipient**: cuddles.communication@gmail.com
- **Required Env Vars**: SMTP_USER, SMTP_PASS

---

## Notes for Development

1. **Sanity Studio**: Run on port 3333 via `npm run studio`
2. **Next.js Dev**: Run on port 3000 via `npm run dev`
3. **Cache Duration**: 5 minutes for all auto-fetched data
4. **Retry Logic**: 3 attempts with exponential backoff
5. **Font Loading**: Custom Ohno Softie Variable font in `app/Fonts/`
6. **Studio Access**: No header/footer on `/studio` routes
7. **FAQ Visibility**: Hidden on Partnerships page only
8. **Webpack**: Forced (Turbopack disabled) in next.config.ts

---

## Troubleshooting

### Sanity Connection Issues
- Check `NEXT_PUBLIC_SANITY_PROJECT_ID` in `.env.local`
- Verify dataset configuration (dev/prod)
- Fallback projectId is 'w8a19ipn'

### Cache Issues
- Cache TTL: 5 minutes
- Use `cacheUtils.clear()` to reset
- Use `cacheUtils.stats()` to debug

### Email Issues
- Verify SMTP_USER and SMTP_PASS
- Check Gmail security settings
- Review logs in API route

---

## Project Structure Summary

```
cuddles2.0/
├── app/                    # Next.js App Router (pages, layouts, API)
├── components/             # React components (organized by page)
├── lib/                    # Utilities, Sanity clients, auto-systems
├── sanity/                 # Sanity CMS configuration & schemas
├── scripts/                # Data seeding & migration scripts
├── public/                 # Static assets
├── .sanity/                # Sanity runtime
├── sanity.config.ts        # Sanity configuration entry
├── sanity.cli.ts           # Sanity CLI configuration
├── next.config.ts          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies & scripts
```

---

*Last Updated: 2025-10-03*
