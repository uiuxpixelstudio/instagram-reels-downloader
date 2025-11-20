@echo off
REM Instagram Reels Downloader - Setup Script for Windows
REM This script will set up the project and start it

echo.
echo 🚀 Instagram Reels Downloader - Setup Script
echo =============================================
echo.

REM Check if Node.js is installed
echo Checking for Node.js...
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed!
    echo Please install Node.js from https://nodejs.org
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✓ Node.js found: %NODE_VERSION%
echo.

REM Check if npm is installed
echo Checking for npm...
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ npm is not installed!
    echo Please install npm with Node.js
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
echo ✓ npm found: %NPM_VERSION%
echo.

REM Install dependencies
echo 📦 Installing dependencies...
echo This may take a few minutes...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)
echo ✓ Dependencies installed successfully
echo.

REM Check if .env file exists
echo 🔐 Checking for .env file...
if not exist .env (
    echo ⚠️  .env file not found!
    echo.
    echo Creating .env file with template...
    (
        echo # Get these values from RapidAPI
        echo # Visit: https://rapidapi.com
        echo # Search: "Instagram Reels Downloader"
        echo # Subscribe to free plan and copy your API credentials below
        echo.
        echo VITE_RAPIDAPI_KEY=your_api_key_here
        echo VITE_RAPIDAPI_HOST=your_api_host_here
    ) > .env
    echo ✓ Created .env file
    echo.
    echo ⚠️  IMPORTANT: Update .env file with your RapidAPI credentials!
    echo    1. Visit https://rapidapi.com
    echo    2. Search for 'Instagram Reels Downloader'
    echo    3. Subscribe to free plan
    echo    4. Copy API Key and Host
    echo    5. Update .env file with your credentials
    echo    6. Run: npm run dev
    echo.
) else (
    echo ✓ .env file found
    echo.
)

REM Display startup instructions
echo ✅ Setup Complete!
echo.
echo 📝 Next Steps:
echo.
echo 1️⃣  Update .env file with your RapidAPI credentials:
echo    VITE_RAPIDAPI_KEY=your_key_here
echo    VITE_RAPIDAPI_HOST=your_api_host_here
echo.
echo 2️⃣  Start the development server:
echo    npm run dev
echo.
echo 3️⃣  Open your browser:
echo    http://localhost:5173
echo.
echo 4️⃣  Paste an Instagram Reels URL and download!
echo.
echo 📚 Documentation:
echo    - QUICKSTART.md - 5-minute setup guide
echo    - README.md - Project overview
echo    - RAPIDAPI_GUIDE.md - API integration help
echo    - DEPLOYMENT.md - How to deploy
echo.
echo 🚀 Ready to start? Run:
echo    npm run dev
echo.
pause
