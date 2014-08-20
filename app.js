var express = require('express');
var server = express();

server.use(express.static(__dirname + '/app')).listen(4321);

console.log('Server is listening on http://localhost:4321');