'use strict'

const http = require('http');
const router = require('./router');

const port = process.env.PORT || 8080;
const server = http.createServer();

server.on('request', router);
server.on('listening', onListening);

server.listen(port);

function onListening (req, res) {
    console.log(`Servidor escuchando en puerto: ${port}`);
};


