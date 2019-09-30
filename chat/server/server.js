var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');


var Port = 3000;
var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://localhost:27017/';

app.use(cors());
app.use(bodyParser.json());



MongoClient.connect(dburl, { useNewUrlParser: true,useUnifiedTopology: true }, function(err,db){
    if (err) {
        console.log("DB connection failed");
        return;
    }
    var dbo = db.db('mydb');
    dbo.collection('users').find({}).toArray(function(err, result){
        if (err) {
            console.log("no such collection");
            return;
        }
        console.log(result);
        db.close();
    });
    //console.log("DB connecteion open", db);
});

app.get('/', function(req, res){
    console.log("Get the home page");
    res.send("Home page");
});



var listen = app.listen(Port,function(){
    console.log("Server started at port:", Port);

});
