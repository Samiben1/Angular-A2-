var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var Port = 3000;
app.get('/', function(req, res){
    console.log("Get the home page");
    res.send("Home page");
});
var listen = app.listen(Port,function(){
    console.log("Server started at port:", Port);
});
