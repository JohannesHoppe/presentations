// app.js
console.log('Order discount example - with microservice pattern');

var fs = require('fs'),
    spawn = require('child_process').spawn;

var services = ['app-server', 'app-client'];

services.forEach(function (service) {
    
    console.log('*** Spawning child process: ', service, '***');

    var log = fs.createWriteStream('./log/' + service + '.log');
    var proc = spawn('node', [service + '.js']);

    proc.stdout.pipe(log);
    proc.stderr.pipe(log);

    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
});



