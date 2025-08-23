@echo off
echo ========================================
echo Git Installation for Pin Property Pro
echo ========================================
echo.

REM Check if Git is already installed
git --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Git is already installed! ✓
    git --version
    echo.
    echo You can now run push-to-existing-repo.bat
    pause
    exit /b 0
)

echo Git is not installed. Let's install it now.
echo.
echo OPTION 1: Automatic Download (Recommended)
echo This will open the Git download page in your browser.
echo.
set /p choice="Press Y to open download page, or N to see manual instructions: "

if /i "%choice%"=="Y" (
    echo Opening Git download page...
    start https://git-scm.com/download/win
    echo.
    echo INSTALLATION INSTRUCTIONS:
    echo 1. Download "64-bit Git for Windows Setup"
    echo 2. Run the installer
    echo 3. Use default settings (just click Next/Install)
    echo 4. After installation, restart this script
    echo.
    echo The installer will:
    echo ✓ Install Git command line tools
    echo ✓ Install Git Bash
    echo ✓ Set up PATH environment variable
    echo.
    pause
) else (
    echo.
    echo MANUAL INSTALLATION:
    echo 1. Go to: https://git-scm.com/download/win
    echo 2. Download "64-bit Git for Windows Setup"
    echo 3. Run the installer with default settings
    echo 4. Restart your command prompt
    echo 5. Run this script again to verify installation
    echo.
    pause
)

echo.
echo After installing Git:
echo 1. Close this window
echo 2. Open a new command prompt
echo 3. Run push-to-existing-repo.bat
echo.
