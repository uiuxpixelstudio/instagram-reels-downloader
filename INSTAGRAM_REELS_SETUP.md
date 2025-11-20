# Instagram Reels Downloader App - Complete Setup Guide

## Project Overview
This is a React + TypeScript + Tailwind CSS application that downloads Instagram Reels using RapidAPI.

## Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Git
- A RapidAPI account and API key

## Step 1: Initial Setup & Dependencies Installation

### 1.1 Create React + TypeScript Project
```bash
npm create vite@latest instagram-reels-downloader -- --template react-ts
cd instagram-reels-downloader
npm install
```

### 1.2 Install Required Dependencies
```bash
npm install axios react-icons dotenv
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Dependencies Explanation:
- **axios**: HTTP client for making API requests
- **react-icons**: Icon library for UI components
- **dotenv**: Manage environment variables
- **tailwindcss**: CSS framework for styling
- **postcss & autoprefixer**: CSS processing tools

## Step 2: Tailwind CSS Configuration

### 2.1 Update `tailwind.config.js`
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 2.2 Update `src/style.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Step 3: Get RapidAPI Key

### 3.1 Sign Up and Get API Key
1. Go to https://rapidapi.com/
2. Create a free account
3. Search for "Instagram Reels Downloader" or similar API
4. Subscribe to a free plan
5. Get your API key from the API dashboard

### 3.2 Recommended APIs (Choose one):
- **Instagram Reels Downloader** by any-api
- **Instagram Video Downloader** by RapidAPI marketplace
- **Social Media Video Downloader**

## Step 4: Environment Configuration

### 4.1 Create `.env` file in root directory
```
VITE_RAPIDAPI_KEY=your_api_key_here
VITE_RAPIDAPI_HOST=api_host_here
```

### 4.2 Update `vite.env.d.ts`
```typescript
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RAPIDAPI_KEY: string;
  readonly VITE_RAPIDAPI_HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

## Step 5: Project Structure
```
src/
├── components/
│   ├── InputForm.tsx
│   ├── VideoCard.tsx
│   ├── LoadingSpinner.tsx
│   └── ErrorAlert.tsx
├── services/
│   └── instagramService.ts
├── types/
│   └── index.ts
├── App.tsx
├── App.css
├── main.tsx
└── style.css
```

## Step 6: Running the Application

### 6.1 Development Server
```bash
npm run dev
```

The app will run on `http://localhost:5173`

### 6.2 Building for Production
```bash
npm run build
npm run preview
```

## Step 7: API Integration Details

### API Endpoint Format (Example)
```
Base URL: https://[API_HOST]
Endpoint: /download or /fetch
Method: GET or POST
Parameters: reels_url (Instagram Reels URL)
```

### Expected Response Format
```json
{
  "success": true,
  "data": {
    "video_url": "https://...",
    "thumbnail": "https://...",
    "title": "Video Title",
    "duration": "00:30"
  }
}
```

## Step 8: Testing the Application

1. Start development server: `npm run dev`
2. Paste an Instagram Reels URL
3. Click download
4. Right-click video and "Save video as"

## Step 9: Troubleshooting

### Common Issues:
1. **API Key not working**: Check .env file is in root, format is correct
2. **CORS errors**: Use a backend proxy or check API settings
3. **Video not downloading**: Verify Instagram URL format is correct

## Step 10: Deployment Options

### Deploy to Vercel (Recommended for React)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Push code to GitHub
2. Connect to Netlify
3. Set environment variables in Netlify dashboard
4. Deploy with one click

### Deploy to Heroku
1. Create Heroku account
2. Install Heroku CLI
3. Connect repository
4. Set environment variables
5. Deploy

## Security Notes
- Never commit `.env` file
- Use environment variables for sensitive data
- Keep API key private
- Consider rate limiting on backend

## References
- React Docs: https://react.dev
- TypeScript Docs: https://typescriptlang.org
- Tailwind CSS: https://tailwindcss.com
- RapidAPI: https://rapidapi.com
- Vite: https://vitejs.dev
