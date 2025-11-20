# Instagram Reels Downloader

A modern web application built with React, TypeScript, and Tailwind CSS to download Instagram Reels videos.

## Features

✨ **Modern UI** - Clean and responsive design
🚀 **Fast Performance** - Built with Vite
🔒 **Type Safe** - Full TypeScript support
🎨 **Tailwind CSS** - Beautiful styling
📱 **Mobile Friendly** - Works on all devices
⚡ **Real-time Processing** - Quick video downloads

## Tech Stack

- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Axios** - HTTP Client
- **RapidAPI** - Video Processing API

## Prerequisites

- Node.js v16+
- npm or yarn
- RapidAPI Account

## Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd instagram-reels-downloader
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory:
```env
VITE_RAPIDAPI_KEY=your_api_key_here
VITE_RAPIDAPI_HOST=your_api_host_here
```

### 4. Get API Credentials

1. Visit [RapidAPI](https://rapidapi.com/)
2. Search for "Instagram Reels Downloader" or similar
3. Subscribe to a free plan
4. Copy your API Key and Host
5. Paste them in the `.env` file

## Running the App

### Development Server
```bash
npm run dev
```
The app will open at `http://localhost:5173`

### Production Build
```bash
npm run build
npm run preview
```

## Usage

1. Paste an Instagram Reels URL
2. Click "Download"
3. Wait for processing
4. Click download button on the video card
5. Save the video to your device

## API Integration

The app uses RapidAPI to fetch and process Instagram videos. The `instagramService.ts` handles all API calls with:
- Error handling
- Request validation
- Response formatting
- Rate limiting awareness

## Project Structure
```
src/
├── components/          # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── InputForm.tsx
│   ├── VideoCard.tsx
│   ├── LoadingSpinner.tsx
│   └── ErrorAlert.tsx
├── services/            # API services
│   └── instagramService.ts
├── types/               # TypeScript types
│   └── index.ts
├── App.tsx              # Main component
├── main.tsx             # Entry point
└── App.css              # Global styles
```

## Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Push to GitHub
2. Connect to Netlify
3. Set environment variables
4. Deploy

### Deploy to GitHub Pages
```bash
npm run build
# Push dist/ folder to gh-pages branch
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_RAPIDAPI_KEY` | Your RapidAPI key |
| `VITE_RAPIDAPI_HOST` | API host from RapidAPI |

## Troubleshooting

### API Key Not Working
- Check `.env` file exists in root
- Verify API key is copied correctly
- Ensure your RapidAPI subscription is active

### CORS Errors
- This is likely a backend issue
- Consider using a proxy service
- Check API documentation for CORS settings

### Videos Not Downloading
- Verify Instagram URL format
- Check internet connection
- Try a different Instagram URL
- Check RapidAPI rate limits

## Security Notes

- Never commit `.env` file
- Keep API keys private
- Use environment variables for sensitive data
- Implement rate limiting for production

## Legal Disclaimer

This tool is for personal use only. Respect copyright and Instagram's Terms of Service. Users are responsible for ensuring they have the right to download content.

## Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to branch
5. Open a Pull Request

## License

MIT License - feel free to use this project

## Support

For issues or questions:
1. Check the troubleshooting section
2. Open an issue on GitHub
3. Visit RapidAPI documentation

## Changelog

### v1.0.0
- Initial release
- Basic download functionality
- UI with Tailwind CSS
- TypeScript support
- Error handling

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
