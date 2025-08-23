# 🚀 Pin Property Pro - Automated Deployment Guide

## ⚡ Quick Setup (One-Time Only)

### 1. Install Required Tools
**Double-click `setup-automation.bat`** - This will guide you through installing:
- Git (for GitHub integration)
- Node.js (for building the website)
- pnpm (package manager)

### 2. Create GitHub Account & Repository
1. Go to [GitHub.com](https://github.com) and create an account
2. Create a new repository called `pin-property-pro`
3. Copy the repository URL (e.g., `https://github.com/yourusername/pin-property-pro.git`)

### 3. Create Vercel Account
1. Go to [Vercel.com](https://vercel.com) and sign up with your GitHub account
2. This automatically connects GitHub and Vercel

## 🎯 Daily Workflow (Super Simple)

### Option 1: Everything at Once
**Double-click `quick-deploy.bat`**
- Builds website
- Pushes to GitHub
- Deploys to Vercel
- Done! ✨

### Option 2: Step by Step
1. **`push-to-github.bat`** - Push changes to GitHub
2. **`deploy.bat`** - Deploy to Vercel

## 📁 What Each File Does

- **`setup-automation.bat`** - One-time setup of all tools
- **`quick-deploy.bat`** - Does everything in one click
- **`push-to-github.bat`** - Only pushes to GitHub
- **`deploy.bat`** - Only deploys to Vercel
- **`start-local.bat`** - Run website locally for testing

## 🔧 Troubleshooting

### If GitHub Push Fails:
- Make sure you've created a repository on GitHub.com
- Check your internet connection
- Verify your GitHub credentials

### If Vercel Deploy Fails:
- Make sure you're logged into Vercel
- Check that the build completed successfully
- Verify your Vercel account is connected

### If Build Fails:
- Run `start-local.bat` first to check for errors
- Make sure all dependencies are installed

## 🌐 Your Website URLs

After deployment, you'll have:
- **GitHub Repository**: `https://github.com/yourusername/pin-property-pro`
- **Live Website**: `https://pin-property-pro.vercel.app` (or custom domain)

## 💡 Pro Tips

1. **Test Locally First**: Always run `start-local.bat` to test changes before deploying
2. **Quick Updates**: Use `quick-deploy.bat` for fast updates
3. **Custom Domain**: Connect your own domain in Vercel dashboard
4. **Automatic Deploys**: Once connected, pushing to GitHub auto-deploys to Vercel

---

**Your modern Pin Property Pro website with Instagram integration is ready to go live! 🏠✨**
