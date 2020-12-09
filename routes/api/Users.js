const express = require('express');
const router = express.Router();

const UserController = require('../../controllers/UserController');

router.post('/register',  UserController.signUpUser)

router.post('/login',  UserController.Loginuser)

router.get('/me/:user',   UserController.getUserInfo)

router.get('/addwebsite/:website',   UserController.addWebsiteInMySite)

module.exports = router;
