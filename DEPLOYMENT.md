# Deployment Guide

## Complete Steps to Deploy Instagram Reels Downloader App

### Table of Contents
1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Local Testing](#local-testing)
3. [Deployment to Vercel](#deployment-to-vercel)
4. [Deployment to Netlify](#deployment-to-netlify)
5. [Deployment to GitHub Pages](#deployment-to-github-pages)
6. [Deployment to AWS](#deployment-to-aws)
7. [Post-Deployment Steps](#post-deployment-steps)

---

## Pre-Deployment Checklist

- [ ] Dependencies installed (`npm install`)
- [ ] Environment variables configured (`.env` file)
- [ ] App builds without errors (`npm run build`)
- [ ] App runs locally without errors (`npm run dev`)
- [ ] All components render correctly
- [ ] API credentials are valid
- [ ] `.env` file is in `.gitignore`
- [ ] No console errors
- [ ] Responsive design tested on mobile

---

## Local Testing

### 1. Install All Dependencies
```bash
cd instagram-reels-downloader
npm install
```

### 2. Create and Configure .env File
```bash
# In root directory, create .env
VITE_RAPIDAPI_KEY=your_key_here
VITE_RAPIDAPI_HOST=your_host_here
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Test the Application
- Open `http://localhost:5173`
- Test with sample Instagram URL
- Check console for errors
- Verify responsive design

### 5. Build for Production
```bash
npm run build
```

Expected output:
```
✓ built in 2.34s
dist/
  ├── assets/
  │   ├── index-xxxxx.js
  │   └── style-xxxxx.css
  └── index.html
```

---

## Deployment to Vercel (Recommended)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```
Follow the prompts to authenticate

### Step 3: Deploy
```bash
vercel
```

When prompted:
- **Set up and deploy?** → `Y`
- **Which scope?** → Select your account
- **Link to existing project?** → `N`
- **Project name?** → `instagram-reels-downloader`
- **Directory?** → `.` (current directory)
- **Override settings?** → `N`

### Step 4: Add Environment Variables
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to Settings → Environment Variables
4. Add:
   - `VITE_RAPIDAPI_KEY` = your_key
   - `VITE_RAPIDAPI_HOST` = your_host
5. Redeploy

### Step 5: Deploy Again (with env vars)
```bash
vercel --prod
```

Your app is now live! 🎉

---

## Deployment to Netlify

### Step 1: Create Netlify Account
Visit https://netlify.com and sign up

### Step 2: Connect GitHub Repository
1. Push your code to GitHub
2. In Netlify, click "New site from Git"
3. Select GitHub
4. Authorize Netlify
5. Select your repository

### Step 3: Configure Build Settings
- **Build command**: `npm run build`
- **Publish directory**: `dist`

### Step 4: Set Environment Variables
1. Go to Site settings → Build & deploy → Environment
2. Add environment variables:
   - `VITE_RAPIDAPI_KEY`
   - `VITE_RAPIDAPI_HOST`

### Step 5: Trigger Deploy
Push a commit or manually trigger deploy in Netlify dashboard

---

## Deployment to GitHub Pages

### Step 1: Create GitHub Repository
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/instagram-reels-downloader.git
git push -u origin main
```

### Step 2: Update vite.config.ts
```typescript
export default defineConfig({
  base: '/instagram-reels-downloader/',
  // ... other config
})
```

### Step 3: Install gh-pages Package
```bash
npm install --save-dev gh-pages
```

### Step 4: Update package.json Scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 5: Deploy
```bash
npm run deploy
```

### Step 6: Enable GitHub Pages
1. Go to repository Settings
2. Scroll to GitHub Pages
3. Select source: Deploy from a branch
4. Branch: gh-pages, /root
5. Save

Your site will be available at: `https://yourusername.github.io/instagram-reels-downloader/`

---

## Deployment to AWS

### Option 1: AWS Amplify (Easiest)

#### Step 1: Install Amplify CLI
```bash
npm install -g @aws-amplify/cli
amplify configure
```

#### Step 2: Initialize Amplify
```bash
amplify init
```

#### Step 3: Add Hosting
```bash
amplify add hosting
# Select Amplify Hosting
```

#### Step 4: Deploy
```bash
amplify publish
```

### Option 2: AWS S3 + CloudFront

#### Step 1: Build the App
```bash
npm run build
```

#### Step 2: Create S3 Bucket
1. Go to AWS S3 console
2. Create new bucket
3. Enable static website hosting
4. Upload `dist/` contents

#### Step 3: Configure CloudFront
1. Create CloudFront distribution
2. Point to S3 bucket
3. Set default root object to `index.html`

#### Step 4: Set Custom Domain
1. Go to Route 53
2. Create A record pointing to CloudFront

---

## Post-Deployment Steps

### 1. Test Live Application
- [ ] Visit deployed URL
- [ ] Test all features
- [ ] Check API calls work
- [ ] Verify error handling
- [ ] Test on mobile devices

### 2. Monitor and Logging
- Enable error logging
- Set up analytics
- Monitor API usage
- Check performance metrics

### 3. Setup Domain Name
```bash
# Update DNS records to point to your deployment
# CNAME: your-domain.com → deployment-url
```

### 4. Configure SSL/TLS
- Most platforms provide free SSL
- Verify HTTPS is enabled
- Check SSL certificate validity

### 5. Setup CI/CD Pipeline
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - name: Deploy
        run: npm run deploy
```

---

## Troubleshooting Deployment

### Build Fails
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
npm run build
```

### Environment Variables Not Working
- Check variable names match (VITE_*)
- Verify they're in platform's environment settings
- Redeploy after adding variables
- Check `.env` file is in `.gitignore`

### API Not Responding
- Verify API credentials are correct
- Check RapidAPI subscription is active
- Verify API host is correct
- Check rate limits

### CORS Errors
- This indicates a backend issue
- Consider using a proxy backend
- Check API CORS settings
- Verify request headers

### Performance Issues
- Enable gzip compression
- Optimize images
- Use CDN
- Check bundle size: `npm run build -- --analyze`

---

## Monitoring & Maintenance

### Set Up Analytics
Add to `App.tsx`:
```typescript
// Google Analytics
import { useEffect } from 'react';

useEffect(() => {
  // Initialize analytics
}, []);
```

### Monitor Errors
Use services like:
- Sentry
- LogRocket
- New Relic
- Datadog

### Regular Updates
- Update dependencies monthly: `npm update`
- Check for security vulnerabilities: `npm audit`
- Keep Node.js updated
- Monitor API status

---

## Production Checklist

- [ ] Environment variables set up
- [ ] HTTPS enabled
- [ ] Error tracking configured
- [ ] Analytics enabled
- [ ] CDN configured
- [ ] Backups enabled
- [ ] Monitoring set up
- [ ] Custom domain configured
- [ ] SSL certificate valid
- [ ] Performance optimized

---

## Performance Optimization

### Build Optimization
```bash
npm run build
# Check bundle size in dist/
```

### Runtime Optimization
- Lazy load components
- Optimize images
- Use code splitting
- Implement caching

### API Optimization
- Cache API responses
- Implement request debouncing
- Use request timeout
- Handle rate limiting

---

## Support & Resources

- **Vite Docs**: https://vitejs.dev
- **React Docs**: https://react.dev
- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://netlify.com/docs
- **TypeScript**: https://typescriptlang.org

---

**Happy deploying!** 🚀
