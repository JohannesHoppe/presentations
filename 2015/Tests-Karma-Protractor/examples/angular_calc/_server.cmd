@echo off

%~d0
CD "%~dp0"

start http://localhost:3456/

call npm start

pause