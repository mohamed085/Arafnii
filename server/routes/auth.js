const router = require('express').Router();

const authController = require('../controllers/auth.js');

router.post('/auth/signup', authController.postSignup);
router.post('/auth/login', authController.postLogin);



module.exports = router;
