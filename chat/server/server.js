var express = require('express');
var app = express();
var http = require('http').Server(app);
// var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
const io = require('socket.io')(http);
//const socket = require('./socket.js')

var Port = 3000;
var dbname = 'mydb';

var MongoClient = require('mongodb').MongoClient;
var objectID = require('mongodb').ObjectID;
var dburl = 'mongodb://localhost:27017/';

app.use(cors());
app.use(bodyParser.json());




MongoClient.connect(dburl, { useNewUrlParser: true,useUnifiedTopology: true }, function(err,db){
    if (err) {
        console.log("DB connection failed");
        return;
    }

    console.log("DB connecteion open");
    require('./api/get_user.js')(db,dbname);
    require('./api/create_user.js')(db,app);
    require('./api/create_group.js')(db,app);
    require('./api/create_channel.js');
    require('./api/add_user_to_group.js');
    require('./api/add_user_to_channel.js');
    require('./api/delete_user.js');
    require('./api/delete_group.js');
    require('./api/delete_channel.js');
    require('./api/remove_user_from_group.js');
    require('./api/remove_user_from_channel.js');
    
    // var dbo = db.db(dbname);
    // dbo.collection('users').find({}).toArray(function(err, result){
    //     if (err) {
    //         console.log("no users in the collection");
    //         return;
    //     }
    //     console.log(result);
        
    //     db.close();
    // });
});

app.get('/', function(req, res){
    console.log("Get the home page");
    res.send("Home page");
});



var listen = http.listen(Port,function(){
    console.log("Server started at port:", Port);
});
