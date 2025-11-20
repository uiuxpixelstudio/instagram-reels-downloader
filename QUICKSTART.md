# Quick Start Guide

## 5-Minute Setup

### Step 1: Install Dependencies (2 min)
```bash
npm install
```

### Step 2: Get API Credentials (1 min)
1. Visit https://rapidapi.com
2. Search: "Instagram Reels Downloader"
3. Subscribe to free plan
4. Copy API Key and Host

### Step 3: Configure .env (1 min)
Edit `.env` file:
```env
VITE_RAPIDAPI_KEY=your_key_here
VITE_RAPIDAPI_HOST=your_host_here
```

### Step 4: Run App (1 min)
```bash
npm run dev
```

✅ **Done!** App is running at http://localhost:5173

---

## Common Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for errors
npm run lint
```

---

## Project Structure
```
📦 instagram-reels-downloader
├── 📄 package.json
├── 📄 .env
├── 📄 tsconfig.json
├── 📄 vite.config.ts
├── 📄 tailwind.config.js
├── 📄 README.md
├── 📄 DEPLOYMENT.md
├── 📁 src/
│   ├── 📁 components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── InputForm.tsx
│   │   ├── VideoCard.tsx
│   │   ├── LoadingSpinner.tsx
│   │   └── ErrorAlert.tsx
│   ├── 📁 services/
│   │   └── instagramService.ts
│   ├── 📁 types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── 📁 public/
└── index.html
```

---

## API Setup Guide

### Find the Right API

**Option 1: Instagram Reels Downloader**
- Go to RapidAPI Marketplace
- Search: "Instagram Reels Downloader"
- Look for by "any-api" or similar

**Option 2: Instagram Video Downloader**
- Search: "Instagram Video Downloader"
- Filter by rating/popularity

**Option 3: Social Media Downloader**
- General purpose video downloader
- Works with multiple platforms

### API Response Format

Most Instagram APIs return:
```json
{
  "success": true,
  "data": {
    "video_url": "https://...",
    "thumbnail": "https://...",
    "title": "Video Title",
    "duration": "00:30",
    "author": "Username"
  }
}
```

### Update API Service

If your API has different format, update `src/services/instagramService.ts`:

```typescript
// Find the response mapping section and adjust:
const response = await apiClient.post('/download', {
  url: cleanUrl,
});

// Adapt to your API response format
```

---

## Features

✅ Paste Instagram Reels URL
✅ Fetch video metadata
✅ Download high-quality video
✅ View video preview
✅ Responsive design
✅ Error handling
✅ Loading states

---

## Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#ec4899', // Change pink to your color
    }
  }
}
```

### Change App Title
Edit `src/components/Header.tsx` and `index.html`

### Add Dark Mode Toggle
Example in components - extend with:
```typescript
const [dark, setDark] = useState(false);
// Add toggle button in Header
```

### Add Multiple Download Quality Options
Update `VideoCard.tsx` with quality selector

---

## Troubleshooting

### "Module not found" Error
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

### API Key Error
- Check `.env` file exists in root directory
- Verify key is copied correctly
- Ensure no extra spaces or quotes
- Restart dev server: `npm run dev`

### Video Not Downloading
1. Check Instagram URL format
2. Try different URL
3. Verify API is working (test in RapidAPI dashboard)
4. Check browser console for errors

### Build Fails
```bash
# Clear cache and rebuild
npm run build
# If still fails, check TypeScript errors:
npm run lint
```

---

## Deployment (3 Options)

### Option 1: Vercel (Recommended - Easiest)
```bash
npm install -g vercel
vercel
# Follow prompts
```

### Option 2: Netlify
1. Push to GitHub
2. Connect GitHub to Netlify
3. Set env variables
4. Deploy

### Option 3: GitHub Pages
```bash
npm run deploy
```

See `DEPLOYMENT.md` for detailed instructions

---

## Next Steps

- [ ] Get API credentials from RapidAPI
- [ ] Add to `.env` file
- [ ] Run `npm install`
- [ ] Start dev server: `npm run dev`
- [ ] Test with Instagram URL
- [ ] Deploy to production

---

## Useful Links

- 📖 [React Documentation](https://react.dev)
- 🎨 [Tailwind CSS](https://tailwindcss.com)
- ⚡ [Vite Guide](https://vitejs.dev)
- 🔗 [RapidAPI](https://rapidapi.com)
- 📝 [TypeScript Handbook](https://typescriptlang.org)

---

**Ready to start?** Run `npm run dev` and enjoy! 🚀
