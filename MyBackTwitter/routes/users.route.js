var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller');

/* POST crear usuario. */
router.post('/', userController.createUser);

/**
 * GET para listar usuarios
 */

router.get('/',userController.findAllUsers);


/**
 * GET por ID de USUARIO
 */

 router.get('/:idUser', userController.findUserById);

/**
 * BORRAR USUARIO
 */
router.delete('/:idUser', userController.deleteByUser);

module.exports = router;


