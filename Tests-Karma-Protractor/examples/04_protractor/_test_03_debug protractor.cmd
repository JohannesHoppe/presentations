@ECHO OFF

%~d0
CD "%~dp0"

protractor debug protractor.conf.js

pause