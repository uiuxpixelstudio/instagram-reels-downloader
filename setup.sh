#!/bin/bash
# Instagram Reels Downloader - Setup & Run Script
# This script will set up the project and start it

echo "🚀 Instagram Reels Downloader - Setup Script"
echo "============================================="
echo ""

# Check if Node.js is installed
echo "✓ Checking for Node.js..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js from https://nodejs.org"
    exit 1
fi
echo "✓ Node.js found: $(node --version)"
echo ""

# Check if npm is installed
echo "✓ Checking for npm..."
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed!"
    echo "Please install npm with Node.js"
    exit 1
fi
echo "✓ npm found: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
echo "This may take a few minutes..."
npm install
if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi
echo "✓ Dependencies installed successfully"
echo ""

# Check if .env file exists
echo "🔐 Checking for .env file..."
if [ ! -f .env ]; then
    echo "⚠️  .env file not found!"
    echo ""
    echo "Creating .env file with template..."
    cat > .env << EOF
# Get these values from RapidAPI
# Visit: https://rapidapi.com
# Search: "Instagram Reels Downloader"
# Subscribe to free plan and copy your API credentials below

VITE_RAPIDAPI_KEY=your_api_key_here
VITE_RAPIDAPI_HOST=your_api_host_here
EOF
    echo "✓ Created .env file"
    echo ""
    echo "⚠️  IMPORTANT: Update .env file with your RapidAPI credentials!"
    echo "   1. Visit https://rapidapi.com"
    echo "   2. Search for 'Instagram Reels Downloader'"
    echo "   3. Subscribe to free plan"
    echo "   4. Copy API Key and Host"
    echo "   5. Update .env file with your credentials"
    echo "   6. Run: npm run dev"
    echo ""
else
    echo "✓ .env file found"
    echo ""
fi

# Display startup instructions
echo "✅ Setup Complete!"
echo ""
echo "📝 Next Steps:"
echo ""
echo "1️⃣  Update .env file with your RapidAPI credentials:"
echo "   VITE_RAPIDAPI_KEY=your_key_here"
echo "   VITE_RAPIDAPI_HOST=your_host_here"
echo ""
echo "2️⃣  Start the development server:"
echo "   npm run dev"
echo ""
echo "3️⃣  Open your browser:"
echo "   http://localhost:5173"
echo ""
echo "4️⃣  Paste an Instagram Reels URL and download!"
echo ""
echo "📚 Documentation:"
echo "   - QUICKSTART.md - 5-minute setup guide"
echo "   - README.md - Project overview"
echo "   - RAPIDAPI_GUIDE.md - API integration help"
echo "   - DEPLOYMENT.md - How to deploy"
echo ""
echo "🚀 Ready to start? Run:"
echo "   npm run dev"
echo ""
