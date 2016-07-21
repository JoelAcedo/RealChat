'use strict'

const http = require('http');
const port = process.env.PORT || 8080;

const server = http.createServer(onRequest);

function onRequest (req, res) {
    res.end('Hola io.js');
};

function onListening (req, res) {
    console.log('Servidor escuchando en puerto: ' + port);
};

server.listen(port, onListening);
