@echo off
echo Starting Pin Hemmawan Website Locally...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Node.js is not installed or not in PATH.
    echo Please install Node.js from https://nodejs.org/
    echo.
    pause
    exit /b 1
)

REM Check if pnpm is installed
pnpm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo pnpm is not installed. Installing pnpm...
    npm install -g pnpm
    if %errorlevel% neq 0 (
        echo Failed to install pnpm. Please install manually: npm install -g pnpm
        pause
        exit /b 1
    )
)

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo Installing dependencies...
    pnpm install
    if %errorlevel% neq 0 (
        echo Failed to install dependencies.
        pause
        exit /b 1
    )
)

REM Start the development server
echo.
echo Starting development server...
echo Open your browser to: http://localhost:5173
echo Press Ctrl+C to stop the server
echo.
pnpm dev

pause

