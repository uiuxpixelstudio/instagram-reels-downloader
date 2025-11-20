# 🚀 Getting Started - Complete Step-by-Step Guide

## Overview
This guide will walk you through everything needed to get your Instagram Reels Downloader app up and running.

---

## Step 1: Prerequisites Check ✓

### What You Need
- **Operating System**: Windows, macOS, or Linux
- **Node.js**: Version 16 or higher
- **npm or yarn**: Comes with Node.js
- **Text Editor/IDE**: VS Code recommended
- **Internet Connection**: For npm packages and API

### Verify Installation
Open terminal/PowerShell and run:

**Windows (PowerShell):**
```powershell
node --version
npm --version
```

**macOS/Linux (Terminal):**
```bash
node --version
npm --version
```

Expected output:
```
v18.0.0  (or higher)
8.0.0    (or higher)
```

### If Not Installed
1. Visit https://nodejs.org
2. Download LTS version
3. Run installer
4. Restart terminal/PowerShell
5. Verify installation

---

## Step 2: Get Your API Credentials 🔑

### Step 2.1: Visit RapidAPI

Go to: https://rapidapi.com

### Step 2.2: Create Account (or Login)

- Click "Sign Up"
- Enter email and password
- Verify email
- Complete profile

### Step 2.3: Search for Instagram API

1. In search bar, type: `instagram reels downloader`
2. Press Enter
3. Browse results (look for high ratings)

### Recommended APIs:
- "Instagram Reels Downloader" by any-api
- "Instagram Video Downloader"
- "Social Media Downloader"

### Step 2.4: Subscribe to Free Plan

1. Click on chosen API
2. Scroll down to pricing
3. Click "Subscribe to Test"
4. Select "Free" plan
5. Click "Subscribe"
6. Accept terms

### Step 2.5: Get Your Credentials

1. After subscribing, click "Code Snippets"
2. Look for section with headers
3. Find these values:
   - `X-RapidAPI-Key` → Copy this
   - `X-RapidAPI-Host` → Copy this

Example:
```
X-RapidAPI-Key: abc123def456ghi789jkl012mno345pqr
X-RapidAPI-Host: instagram-api.rapidapi.com
```

**Save these values - you'll need them next!**

---

## Step 3: Setup the Project 📁

### Option A: Automated Setup (Recommended)

#### On Windows:
1. Open PowerShell in project folder
2. Run: `.\setup.bat`
3. Follow on-screen instructions

#### On macOS/Linux:
1. Open Terminal in project folder
2. Run: `bash setup.sh`
3. Follow on-screen instructions

### Option B: Manual Setup

#### Step 3.1: Open Terminal/PowerShell

Navigate to project folder:
```powershell
cd C:\Users\YourName\Desktop\ladybug-ai-app
```

#### Step 3.2: Install Dependencies
```bash
npm install
```

Expected output (takes 1-3 minutes):
```
added 500+ packages, and audited 503 packages in 2m 30s
```

#### Step 3.3: Create .env File

**Windows (PowerShell):**
```powershell
New-Item -Name ".env" -ItemType File
```

**macOS/Linux (Terminal):**
```bash
touch .env
```

#### Step 3.4: Add API Credentials

Open `.env` file with text editor (VS Code recommended):
1. Open file browser
2. Navigate to project folder
3. Right-click on `.env`
4. Open with VS Code
5. Paste:
```env
VITE_RAPIDAPI_KEY=your_key_from_rapidapi
VITE_RAPIDAPI_HOST=your_host_from_rapidapi
```

Replace with your actual credentials from Step 2.5

**Example:**
```env
VITE_RAPIDAPI_KEY=abc123def456ghi789jkl012mno345pqr
VITE_RAPIDAPI_HOST=instagram-api.rapidapi.com
```

#### Step 3.5: Save File

Press `Ctrl+S` (Windows/Linux) or `Cmd+S` (macOS)

---

## Step 4: Start Development Server 🎉

### Option 1: Using Terminal/PowerShell

```bash
npm run dev
```

Expected output:
```
  VITE v5.0.0  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h + enter to show help
```

### Option 2: Using VS Code

1. Open VS Code in project folder
2. Terminal → New Terminal
3. Run: `npm run dev`

### Step 5: Open in Browser

Click the link or paste in browser:
```
http://localhost:5173
```

You should see:
- Header with "Instagram Reels Downloader"
- Input field for Instagram URL
- Clean, modern interface
- "Download" button

---

## Step 6: Test the Application 🧪

### Test with Sample URL

1. Find an Instagram Reels video
2. Copy the URL (should look like):
   ```
   https://www.instagram.com/reels/ABC123DEF456/
   ```
3. Paste into app
4. Click "Download"

### Expected Results:

✅ **Success:**
- Video card appears
- Shows thumbnail
- Shows title/author
- Download button available
- Can download video

❌ **If Error:**
- Check `.env` file credentials
- Verify API subscription is active
- Try different URL
- Check browser console (F12)

---

## Step 7: Build for Production 🏗️

When ready to deploy:

```bash
npm run build
```

Expected output:
```
✓ built in 2.34s

dist/
  ├── index.html               4.12 kB
  ├── assets/
  │   ├── index-xxxxx.js       150 kB
  │   └── style-xxxxx.css      45 kB
```

Files are ready in `dist/` folder.

---

## Step 8: Deploy to Web 🌐

### Quick Deploy to Vercel (Easiest)

**Step 1: Install Vercel CLI**
```bash
npm install -g vercel
```

**Step 2: Deploy**
```bash
vercel
```

**Step 3: Follow Prompts**
- Login to Vercel
- Select your project
- Accept default settings
- Wait for deployment

**Step 4: Add Environment Variables**
1. Go to Vercel Dashboard
2. Select your project
3. Settings → Environment Variables
4. Add:
   - `VITE_RAPIDAPI_KEY`
   - `VITE_RAPIDAPI_HOST`
5. Redeploy

See `DEPLOYMENT.md` for other deployment options (Netlify, GitHub Pages, AWS)

---

## Project Structure Overview

```
instagram-reels-downloader/
├── src/
│   ├── components/          # React components
│   ├── services/            # API integration
│   ├── types/               # TypeScript types
│   ├── App.tsx              # Main app
│   └── main.tsx             # Entry point
├── package.json             # Dependencies
├── .env                      # API credentials
├── vite.config.ts           # Build config
├── tsconfig.json            # TypeScript config
└── tailwind.config.js       # Styling config
```

---

## Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# List all scripts
npm run
```

---

## File Locations

| What | Where |
|------|-------|
| React Components | `src/components/` |
| API Integration | `src/services/instagramService.ts` |
| Styles | `src/App.css` |
| Configuration | Root directory |
| Built files | `dist/` folder |
| Credentials | `.env` file (DON'T COMMIT) |

---

## Common Issues & Solutions

### Issue 1: "npm: command not found"
**Solution:**
- Node.js not installed
- Install from https://nodejs.org
- Restart terminal

### Issue 2: "API Key not working"
**Solution:**
- Check `.env` file in root
- Verify key is correct
- No extra spaces
- Restart dev server

### Issue 3: "Module not found"
**Solution:**
```bash
rm -rf node_modules
npm install
```

### Issue 4: "Port 5173 already in use"
**Solution:**
```bash
# Kill process using port 5173
# Or let Vite use different port
```

### Issue 5: Video not downloading
**Solution:**
- Try different Instagram URL
- Check browser console (F12)
- Verify API in RapidAPI works
- Check rate limits

### Issue 6: Build fails
**Solution:**
```bash
npm run build
# Check for TypeScript errors
```

---

## Documentation Reference

Read these files for more info:

| File | Contains |
|------|----------|
| `README.md` | Project overview |
| `QUICKSTART.md` | 5-minute setup |
| `RAPIDAPI_GUIDE.md` | API help |
| `DEPLOYMENT.md` | Deploy options |
| `PROJECT_OVERVIEW.md` | Complete overview |

---

## Next Steps

1. ✅ Prerequisites checked
2. ✅ API credentials obtained
3. ✅ Project setup
4. ✅ App running locally
5. ✅ Test functionality
6. ✅ **Next: Deploy to production!**

---

## Need Help?

### Check These:
1. Browser console (F12)
2. `.env` file values
3. RapidAPI dashboard
4. Documentation files
5. GitHub issues

### Common Resources:
- **React**: https://react.dev
- **Tailwind**: https://tailwindcss.com
- **TypeScript**: https://typescriptlang.org
- **Vite**: https://vitejs.dev
- **RapidAPI**: https://rapidapi.com/support

---

## 🎉 Success!

You now have a fully functional Instagram Reels Downloader!

### What You Can Do:
✅ Download Instagram Reels
✅ Preview videos
✅ Customize the app
✅ Deploy to production
✅ Share with others

### Customization Ideas:
- Change colors and branding
- Add more features (playlists, history)
- Improve UI/UX
- Add batch downloading
- Add settings page

---

## 📝 Checklist

- [ ] Node.js installed
- [ ] RapidAPI account created
- [ ] API credentials obtained
- [ ] `.env` file configured
- [ ] Dependencies installed
- [ ] Dev server running
- [ ] App opened in browser
- [ ] Tested with real URL
- [ ] Built successfully
- [ ] Ready to deploy

---

## Final Tips

💡 **Pro Tips:**
- Keep `.env` private (add to `.gitignore`)
- Test locally before deploying
- Monitor API usage
- Update dependencies regularly
- Use TypeScript for type safety
- Commit code to GitHub

🚀 **You're ready to launch!**

---

**Built with React, TypeScript, and Tailwind CSS**

For questions, check the documentation or visit https://rapidapi.com/support

