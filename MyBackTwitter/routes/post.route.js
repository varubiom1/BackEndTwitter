var express = require('express');
var router = express.Router();
const postController = require('../controllers/post.controller');

/* POST crear post. */
router.post('/', postController.createPost);

module.exports = router;