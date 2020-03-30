var express = require('express');
var router = express.Router();
const postController = require('../controllers/post.controller');

/* POST crear post. */
router.post('/', postController.createPost);

/*POST ver todos posts */
router.get('/', postController.findAllPosts);


module.exports = router;