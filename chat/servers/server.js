var express = require('express');
var app = express();
var http = require('http').Server(app);
// var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
const io = require('socket.io')(http);
const sockets = require('./socket.js')

var Port = 3000;
var dbname = 'mydb';

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
// var mongoose = require('mongoose');
var dburl = 'mongodb://localhost:27017';

app.use(cors());
app.use(bodyParser.json());



MongoClient.connect(dburl, { useNewUrlParser: true,useUnifiedTopology: true }, function(err,client){
    if (err) {
        console.log("DB connection failed");
        return;
    }
    const db = client.db(dbname);
    // var dbo = db.db(dbname);
    sockets.connect(app,io,db);

    var uname = "super";
    console.log("DB connecteion open");
    // app.post('/api/auth',require('./routes/login.js'));
    require('./routes/get_user.js')(db,app);
    // require('./routes/create_user.js')(dbo,app);
    // require('./routes/create_group.js')(dbo,app);
    // require('./routes/create_channel.js');(dbo,app)
    // require('./routes/add_user_to_group.js')(db,app,ObjectID);
    // require('./routes/add_user_to_channel.js')(db,app,ObjectID);
    // require('./routes/delete_user.js')(db,app,ObjectID);
    // require('./routes/delete_group.js')(db,app,ObjectID);
    // require('./routes/delete_channel.js')(db,app,ObjectID);
    // require('./routes/remove_user_from_group.js')(db,app,ObjectID);
    // require('./routes/remove_user_from_channel.js')(db,app,ObjectID);
    
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
