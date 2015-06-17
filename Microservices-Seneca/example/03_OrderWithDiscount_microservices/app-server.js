// app-server.js
var seneca = require('seneca')({ log: 'error' });

console.log('*** Acting as a server ***');

seneca
    .use('./discount-service.js')
    .listen({ host: '127.0.0.1', port: 7777 }); // listen for messages   

