# GALVIORS Ganja - Sanity CMS Setup

## How to set up Sanity

1. **Sign up/Login to Sanity**
   - Visit [sanity.io](https://www.sanity.io/) and create an account or login
2. **Create a new project**
   - Go to [sanity.io/manage](https://www.sanity.io/manage) and create a new project
3. **Get your Project ID**
   - Copy your Project ID from the project dashboard
4. **Configure the project**
   - Open `sanity.config.ts` and replace `YOUR_PROJECT_ID` with your actual Project ID
   - Open `sanity/lib/client.ts` and replace `YOUR_PROJECT_ID` with your actual Project ID
5. **Install dependencies**
   ```bash
   npm install
   ```
6. **Start the Sanity Studio**
   ```bash
   npm run sanity:dev
   ```
   This will open the admin panel at `http://localhost:3333`

## Features

### Admin Panel
- ✅ Add new watches with images
- ✅ Edit existing watch details
- ✅ Set prices (AZN format)
- ✅ Add descriptions
- ✅ Mark watches as sold
- ✅ Create and manage categories
- ✅ Upload images with hotspot cropping
- ✅ Rich media management

### Frontend
- ✅ Dynamic product fetching from CMS
- ✅ Optimized image loading with Sanity CDN
- ✅ Dynamic product pages with clean URLs
- ✅ Sold items automatically hidden from main page
- ✅ Static generation with ISR (Incremental Static Regeneration)
- ✅ Responsive luxury design

## Project Structure

```
galviors-ganja/
├── sanity/
│   ├── schemaTypes/
│   │   ├── watch.ts       # Watch product schema
│   │   ├── category.ts    # Category schema
│   │   └── index.ts
│   ├── lib/
│   │   ├── client.ts      # Sanity client
│   │   ├── image.ts       # Image URL builder
│   │   └── queries.ts     # GROQ queries
│
├── app/
│   ├── page.tsx           # Home page
│   └── watch/
│       └── [slug]/
│           └── page.tsx   # Dynamic product page
│
└── components/
    └── ...all components
```

## GROQ Queries

- **WATCHES_QUERY**: Get all available (not sold) watches
- **WATCH_BY_SLUG_QUERY**: Get a single watch by slug
- **CATEGORIES_QUERY**: Get all categories

## Image Optimization

All images are served through Sanity's CDN with:
- Automatic resizing
- WebP format support
- Lazy loading
- Hotspot-aware cropping

## Deploying to Production

1. **Deploy Sanity Studio**
   ```bash
   npm run sanity:build
   ```
   Then deploy to Vercel, Netlify, or Sanity's hosting

2. **Deploy Next.js frontend**
   - Connect your repository to Vercel/Netlify
   - Add your Sanity Project ID as environment variable if needed
   - Deploy!

That's it! Your luxury watch e-commerce site is now CMS-powered! 🎉
