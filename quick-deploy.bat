@echo off
echo ========================================
echo Pin Property Pro - Quick Deploy
echo ========================================
echo.
echo This will:
echo 1. Build the website
echo 2. Push changes to GitHub  
echo 3. Deploy to Vercel
echo.
set /p confirm="Continue? (y/n): "
if /i "%confirm%" neq "y" (
    echo Cancelled.
    pause
    exit /b 0
)

echo.
echo [1/3] Building website...
call deploy.bat

echo.
echo [2/3] Pushing to GitHub...
call push-to-github.bat

echo.
echo ========================================
echo Quick Deploy Completed! ✓
echo ========================================
echo.
echo Your Pin Property Pro website is now:
echo ✓ Built and optimized
echo ✓ Pushed to GitHub
echo ✓ Deployed to Vercel
echo.
pause
