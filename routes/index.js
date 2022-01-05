const express = require('express');
const router = express.Router();

const homeController = require('../contollers/home_controller');
router.get('/', homeController.home);
router.get('/sign-up', homeController.singup);
router.get('/sign-in', homeController.singin);

module.exports = router;