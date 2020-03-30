var express = require('express');
var router = express.Router();
const followerController = require('../controllers/follower.controller');

/* Follower crear follower. */
router.post('/', followerController.createFollower);


/* Follower traer todos followers. */
router.get('/', followerController.findAllFollowers);

module.exports = router;