const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
require('./helpers/db');

const jwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');

//set up environmental config
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT

// initialize our express app
const app = express();

// use bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// use JWT auth to secure the api
//app.use(jwt());

//const product = require('../routes/product.route'); // Imports routes for the products
const user = require('./routes/user.route');
const chat = require('./routes/chat.route');

app.use('/chats', chat);
app.use('/users', user);

// global error handler
app.use(errorHandler);

module.exports = app;