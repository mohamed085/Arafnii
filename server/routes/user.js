const router = require('express').Router();
const verifyToken = require("../middlewares/verify-token");
const userController = require('../controllers/user.js');

/** To return user data */
router.get('/auth/user', verifyToken, userController.getProfile);

router.get('/auth/user/:id', userController.getProfileById);

module.exports = router;
