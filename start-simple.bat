@echo off
echo Pin Hemmawan Website - Simple Local Server
echo.

REM Check if Python is available (most Windows systems have it)
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Starting simple HTTP server with Python...
    echo Open your browser to: http://localhost:8000
    echo.
    echo Note: This serves the built version. For development, use start-local.bat
    echo Press Ctrl+C to stop the server
    echo.
    cd dist
    python -m http.server 8000
    goto end
)

REM Check if Python3 is available
python3 --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Starting simple HTTP server with Python3...
    echo Open your browser to: http://localhost:8000
    echo.
    echo Note: This serves the built version. For development, use start-local.bat
    echo Press Ctrl+C to stop the server
    echo.
    cd dist
    python3 -m http.server 8000
    goto end
)

REM If no Python, try to use Node.js with a simple server
node --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Starting simple HTTP server with Node.js...
    echo Open your browser to: http://localhost:8000
    echo.
    node -e "const http=require('http'),fs=require('fs'),path=require('path');const server=http.createServer((req,res)=>{let filePath=path.join(__dirname,'dist',req.url==='/'?'index.html':req.url);fs.readFile(filePath,(err,data)=>{if(err){res.writeHead(404);res.end('Not Found');return;}const ext=path.extname(filePath);const contentType={'html':'text/html','css':'text/css','js':'application/javascript','json':'application/json'}[ext.slice(1)]||'text/plain';res.writeHead(200,{'Content-Type':contentType});res.end(data);});});server.listen(8000,()=>console.log('Server running on http://localhost:8000'));"
    goto end
)

echo No suitable server found.
echo Please install Node.js from https://nodejs.org/ or Python
echo Then run start-local.bat for full development server

:end
pause

