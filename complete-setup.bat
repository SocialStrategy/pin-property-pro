@echo off
echo ========================================
echo Complete Setup: Git + GitHub + Vercel
echo ========================================
echo.

echo This will help you:
echo 1. Install Git (if needed)
echo 2. Push your website to GitHub
echo 3. Deploy to Vercel
echo.

REM Check if Git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [STEP 1] Installing Git...
    echo.
    call install-git.bat
    echo.
    echo Please restart this script after installing Git.
    pause
    exit /b 1
) else (
    echo [STEP 1] Git is installed ✓
    git --version
    echo.
)

echo [STEP 2] Pushing to GitHub...
echo.
call push-to-existing-repo.bat

echo.
echo [STEP 3] Ready for Vercel deployment!
echo.
echo Your website is now on GitHub: https://github.com/SocialStrategy/pin-property-pro
echo.
echo To deploy to Vercel:
echo 1. Go to: https://vercel.com/new
echo 2. Import from GitHub: SocialStrategy/pin-property-pro
echo 3. Click Deploy
echo.
echo OR run: deploy.bat (after installing Node.js)
echo.
pause
