# Deployment Guide for Pin Hemmawan Website

## Prerequisites

1. **Node.js** (v18 or higher)
2. **pnpm** package manager
3. **Vercel account** (free tier available)

## Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Vercel Deployment

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project root
cd website
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? [Select your account]
# - Link to existing project? N
# - Project name: pinpropertypro-com
# - In which directory is your code located? ./
```

### Option 2: Deploy via GitHub Integration

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure build settings:
     - Framework Preset: `Vite`
     - Root Directory: `website`
     - Build Command: `pnpm build`
     - Output Directory: `dist`

### Option 3: Manual Upload

1. Build the project locally:
   ```bash
   pnpm build
   ```

2. Upload the `dist` folder to Vercel:
   - Go to Vercel dashboard
   - Click "New Project"
   - Select "Deploy from ZIP"
   - Upload the `dist` folder

## Environment Variables (if needed)

Add these in Vercel dashboard under Project Settings > Environment Variables:

```
GA_MEASUREMENT_ID=G-XXXXXXXXXX  # Replace with your Google Analytics ID
CONTACT_EMAIL=contact@pinpropertypro.com
```

## Custom Domain Setup

1. **In Vercel Dashboard**:
   - Go to Project Settings > Domains
   - Add your custom domain: `pinpropertypro.com`
   - Add www subdomain: `www.pinpropertypro.com`

2. **DNS Configuration**:
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Add A record: `@` → `76.76.19.61`
   - Or follow Vercel's specific DNS instructions

## Post-Deployment Checklist

### 1. SEO & Analytics
- [ ] Replace `GA_MEASUREMENT_ID` with actual Google Analytics ID
- [ ] Submit sitemap to Google Search Console: `https://pinpropertypro.com/sitemap.xml`
- [ ] Verify robots.txt: `https://pinpropertypro.com/robots.txt`

### 2. Social Media
- [ ] Update Open Graph image (`/og-image.jpg`)
- [ ] Test social media sharing on Facebook, Twitter, LinkedIn

### 3. Contact Information
- [ ] Verify all contact links work (LINE, WhatsApp, Phone)
- [ ] Test contact form submissions
- [ ] Update contact email if different

### 4. Performance
- [ ] Run Google PageSpeed Insights
- [ ] Test mobile responsiveness
- [ ] Verify all images load properly

### 5. SEO Verification
- [ ] Test all meta descriptions and titles
- [ ] Verify structured data with Google Rich Results Test
- [ ] Check internal linking

## Monitoring & Maintenance

### Analytics Setup
1. **Google Analytics**:
   - Create GA4 property
   - Replace `GA_MEASUREMENT_ID` in `index.html`
   - Set up conversion goals

2. **Google Search Console**:
   - Add and verify property
   - Submit sitemap
   - Monitor search performance

### Regular Updates
- Update testimonials monthly
- Add new areas/properties as needed
- Monitor and respond to contact form submissions
- Update meta descriptions for seasonal relevance

## Troubleshooting

### Build Errors
- Ensure all dependencies are installed: `pnpm install`
- Check for TypeScript errors: `pnpm lint`
- Verify all imports are correct

### Deployment Issues
- Check Vercel build logs
- Ensure `vercel.json` configuration is correct
- Verify environment variables are set

### SEO Issues
- Use Google Search Console for crawl errors
- Test structured data with Google's Rich Results Test
- Monitor Core Web Vitals in PageSpeed Insights

## Performance Optimization

The website is already optimized with:
- ✅ React 19 with modern build tools
- ✅ Tailwind CSS for minimal bundle size
- ✅ Code splitting and lazy loading ready
- ✅ SEO meta tags and structured data
- ✅ Responsive images and modern formats
- ✅ Security headers in Vercel config

## Support

For technical issues with deployment:
1. Check Vercel documentation
2. Review build logs in Vercel dashboard
3. Test locally with `pnpm build && pnpm preview`

For content updates:
1. Edit relevant files in `src/pages/`
2. Update SEO meta tags if needed
3. Test changes locally before deploying

