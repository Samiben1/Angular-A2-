var express = require('express');
var router = express.Router();

var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var Chat = require('../models/chat.model');

server.listen(4000);

// socket io
io.on('connection', function (socket) {
  console.log('User connected');
  socket.on('disconnect', function() {
    console.log('User disconnected');
  });
  socket.on('save-message', function (data) {
    console.log(data);
    io.emit('new-message', { message: data });
  });
});

// Require the controllers 
const chat_controller = require('../controllers/chat.controller');

/* GET ALL CHATS */
router.get('/:room', chat_controller.getChat);

/* SAVE CHAT */
router.post('/', chat_controller.saveChat);

module.exports = router;