@echo off
title Perfil ICEG
cd /d "%~dp0"

if not exist "runtime\node.exe" (
    echo.
    echo  ERRO: runtime\node.exe nao encontrado.
    echo  Verifique se a pasta runtime esta presente ao lado deste arquivo.
    echo.
    pause
    exit /b 1
)

echo.
echo  Iniciando Perfil ICEG (versao portátil)...
echo  O jogo abrira automaticamente no navegador em alguns segundos.
echo  Para encerrar, feche esta janela.
echo.

start "" cmd /c "timeout /t 3 /nobreak >nul && start http://127.0.0.1:5174"
runtime\node.exe server.js
pause
