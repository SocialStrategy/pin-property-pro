@echo off
echo ========================================
echo Pin Property Pro - Vercel Deployment
echo ========================================
echo.

REM Check if Vercel CLI is installed
vercel --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Installing Vercel CLI...
    npm install -g vercel
    echo Vercel CLI installed ✓
    echo.
)

REM Build the project
echo Building the website...
pnpm build

if %errorlevel% neq 0 (
    echo Build failed! Please check for errors.
    pause
    exit /b 1
)

echo Build completed ✓
echo.

REM Deploy to Vercel
echo Deploying to Vercel...
echo.
echo Note: On first deployment, you'll need to:
echo 1. Login to your Vercel account
echo 2. Link this project to Vercel
echo 3. Choose deployment settings
echo.

vercel --prod

echo.
echo ========================================
echo Deployment process completed! ✓
echo ========================================
echo.
echo Your website should now be live!
echo Check your Vercel dashboard for the URL.
echo.
pause
