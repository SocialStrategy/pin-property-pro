@echo off
echo ========================================
echo Pin Property Pro - Automated Setup
echo ========================================
echo.

REM Check if Git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [1/4] Git not found. Installing Git...
    echo.
    echo Please download and install Git from: https://git-scm.com/download/win
    echo After installation, restart this script.
    echo.
    pause
    exit /b 1
) else (
    echo [1/4] Git is installed ✓
)

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [2/4] Node.js not found. Please install Node.js from: https://nodejs.org/
    echo After installation, restart this script.
    echo.
    pause
    exit /b 1
) else (
    echo [2/4] Node.js is installed ✓
)

REM Install pnpm if not installed
pnpm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [3/4] Installing pnpm...
    npm install -g pnpm
) else (
    echo [3/4] pnpm is installed ✓
)

REM Install dependencies
echo [4/4] Installing project dependencies...
pnpm install

echo.
echo ========================================
echo Setup Complete! ✓
echo ========================================
echo.
echo Next steps:
echo 1. Run 'deploy.bat' to build and deploy to Vercel
echo 2. Run 'push-to-github.bat' to push changes to GitHub
echo.
pause
