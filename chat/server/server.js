var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var Port = 3000;

app.listen(Port);
console.log("Server started at port:", Port);