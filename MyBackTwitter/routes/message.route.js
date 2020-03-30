var express = require('express');
var router = express.Router();
const messageController = require('../controllers/message.controller');

/* POST crear post. */
router.post('/', messageController.createMesage);

module.exports = router;