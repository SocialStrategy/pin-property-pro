@echo off
echo ========================================
echo Pin Property Pro - GitHub Push
echo ========================================
echo.

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

REM Add all changes
echo Adding changes...
git add .

REM Commit changes with timestamp
for /f "tokens=2 delims==" %%a in ('wmic OS Get localdatetime /value') do set "dt=%%a"
set "YY=%dt:~2,2%" & set "YYYY=%dt:~0,4%" & set "MM=%dt:~4,2%" & set "DD=%dt:~6,2%"
set "HH=%dt:~8,2%" & set "Min=%dt:~10,2%" & set "Sec=%dt:~12,2%"
set "timestamp=%DD%/%MM%/%YYYY% %HH%:%Min%"

git commit -m "Updated Pin Property Pro website - %timestamp%"

REM Check if remote exists
git remote get-url origin >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo No GitHub repository connected.
    echo Please create a repository on GitHub.com and provide the URL:
    set /p repo_url="Enter your GitHub repository URL (https://github.com/username/repo.git): "
    git remote add origin %repo_url%
    echo GitHub repository connected ✓
    echo.
)

REM Push to GitHub
echo Pushing to GitHub...
git branch -M main
git push -u origin main

echo.
echo ========================================
echo Successfully pushed to GitHub! ✓
echo ========================================
echo.
pause
