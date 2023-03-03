const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');

router.post('/registration', userController.registration);
router.post('/loing', userController.login);
router.get('/auth', userController.check);

module.exports = router;
