@echo off
echo ========================================
echo Push to SocialStrategy/pin-property-pro
echo ========================================
echo.

REM Check if Git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Git is not installed!
    echo Please install Git from: https://git-scm.com/download/win
    echo After installation, run this script again.
    echo.
    pause
    exit /b 1
)

REM Check if Git is configured
git config user.name >nul 2>&1
if %errorlevel% neq 0 (
    echo Setting up Git configuration...
    set /p username="Enter your GitHub username: "
    set /p email="Enter your GitHub email: "
    git config --global user.name "%username%"
    git config --global user.email "%email%"
    echo Git configured ✓
    echo.
)

REM Initialize git if not already done
if not exist ".git" (
    echo Initializing Git repository...
    git init
    echo Git repository initialized ✓
    echo.
)

REM Add all files
echo Adding all files...
git add .

REM Commit with descriptive message
echo Committing changes...
git commit -m "Add modernized Pin Property Pro website with Instagram integration

- Modern red, cream, and white color scheme
- Pin's Instagram (@pin.propertypro) integration
- Professional real estate layout
- WhatsApp and contact integration
- Responsive design
- Automated deployment scripts"

REM Add the specific remote repository
echo Connecting to GitHub repository...
git remote remove origin 2>nul
git remote add origin https://github.com/SocialStrategy/pin-property-pro.git

REM Push to GitHub
echo Pushing to GitHub...
git branch -M main
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo Successfully pushed to GitHub! ✓
    echo ========================================
    echo.
    echo Repository: https://github.com/SocialStrategy/pin-property-pro
    echo.
    echo Next: Deploy to Vercel using the Vercel dashboard
    echo or run deploy-to-vercel.bat
    echo.
) else (
    echo.
    echo Push failed! You may need to authenticate with GitHub.
    echo Try using GitHub Desktop or authenticate via browser.
    echo.
)

pause
