const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/authmiddleware');

router.post('/register', authController.register); //binding the function for registration and creating POST api.
router.post('/login', authController.login); //binding the login function and creating POST api.
router.put('/profile', auth, authController.updateProfile); //binding the update function and creating PUT api.

module.exports = router;
