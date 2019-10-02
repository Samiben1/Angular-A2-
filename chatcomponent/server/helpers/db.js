// Set up mongoose connection
const mongoose = require('mongoose');

//Set up default mongoose connection
const dotenv = require('dotenv');
dotenv.config();
const mongoDB = process.env.MONGODB_URL;

console.log('mongo url is: '+ mongoDB);
mongoose.connect(mongoDB,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Database connection successful')
    })
    .catch(err => {
        console.error('Database connection error')
    })
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));