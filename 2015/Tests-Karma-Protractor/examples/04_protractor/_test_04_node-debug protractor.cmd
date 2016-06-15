@ECHO OFF

%~d0
CD "%~dp0"

node-debug node_modules/protractor/bin/protractor protractor.conf.js

pause