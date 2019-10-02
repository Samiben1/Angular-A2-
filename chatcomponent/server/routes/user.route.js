const express = require('express');
const router = express.Router();

// Require the controllers 
const user_controller = require('../controllers/user.controller');

// routes
router.post('/authenticate', user_controller.authenticate);
router.post('/register', user_controller.register);
router.get('/', user_controller.getAll);
router.get('/current', user_controller.getCurrent);
router.get('/:id', user_controller.getById);
router.put('/:id', user_controller.update);
router.delete('/:id', user_controller.delete);

module.exports = router;