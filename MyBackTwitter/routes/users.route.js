var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller');

/* POST crear usuario. */
router.post('/', userController.createUser);

module.exports = router;
