var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
const io = require('socket.io')(http);
var path = require('path');
var cors = require('cors'); //import the cors package. 
var socket = require('./socket.js');
var fs = require('fs');




app.use(cors()); // Add cors middleware to the express application
app.use(bodyParser.json());






app.post('/api/auth',require('./routes/login.js'));
app.post('/createuser',require('./routes/createuser.js'));
app.post('/creategroup',require('./routes/creategroup.js'));
app.post('/deleteuser',require('./routes/deleteuser.js'));
app.post('/deletegroup',require('./routes/deletegroup.js'));
app.post('/getgroupdetail',require('./routes/getgroupdetail.js'));
app.post('/createnewgroupuser',require('./routes/createnewgroupuser.js'));
app.post('/addusertogroup',require('./routes/addusertogroup.js'));
app.post('/promotetogroupadmin',require('./routes/promotetogroupadmin.js'));


app.post('/createchannel',require('./routes/createchannel.js'));
app.post('/deletechannel',require('./routes/deletechannel.js'));

app.post('/removeuserfromgroup',require('./routes/removeuserfromgroup.js'));

app.post('/addusertochannel',require('./routes/addusertochannel.js'));


var Port = 3000;

var listen = http.listen(Port,function(){
    console.log("Server started at port:", Port);
});

socket.connect(io,Port)
