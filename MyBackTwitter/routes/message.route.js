var express = require('express');
var router = express.Router();
const messageController = require('../controllers/message.controller');

/* POST crear post. */
router.post('/', messageController.createMesage);

/* GET Traer mensaje. */
router.get('/:idMessage', messageController.findMessageById);

module.exports = router;