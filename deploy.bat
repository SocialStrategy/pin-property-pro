@echo off
echo Setting up git configuration...
git config --global user.email "yarrickau@gmail.com"
git config --global user.name "Pin Property Pro"

echo Adding files to git...
git add .

echo Committing files...
git commit -m "Fresh Pin Property Pro website"

echo Adding remote origin...
git remote add origin https://github.com/yarrickau/Pinpropertypro.com.git

echo Pushing to GitHub...
git push -u origin main --force

echo Done! Now deploying to Vercel...
set VERCEL_TOKEN=hvEiDKOjIAsBQN2Q5f6FuIak
npx vercel --prod --token %VERCEL_TOKEN% --yes

pause

