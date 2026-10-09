@echo off
setlocal
cd /d "%~dp0"

echo.
echo  PAT Info - Assistente informatico
echo  ---------------------------------
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo ERRORE: Node.js non trovato.
  echo Installa Node.js LTS da https://nodejs.org e riprova.
  echo.
  pause
  exit /b 1
)

if not exist "node_modules\" (
  echo Prima installazione: npm install ...
  call npm install
  if errorlevel 1 (
    echo Installazione fallita.
    pause
    exit /b 1
  )
)

echo Avvio su http://127.0.0.1:43127
echo Chiudi questa finestra per fermare il server.
echo.
call npm run dev
pause
