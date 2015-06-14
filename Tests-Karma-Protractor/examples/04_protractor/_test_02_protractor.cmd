@ECHO OFF

%~d0
CD "%~dp0"

call npm test

pause