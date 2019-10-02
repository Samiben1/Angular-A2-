const express = require('express');
const router = express.Router();
const Chat = require('../models/chat.model');

exports.getChat = function (req, res, next) {
    Chat.find({ room: req.params.room }, function (err, chats) {
        if (err) return next(err);
        res.json(chats);
    });
}

exports.saveChat = function (req, res, next) {
    Chat.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
};