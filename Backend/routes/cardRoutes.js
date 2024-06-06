const express = require('express');
const router = express.Router();

const { createCard} = require('../controllers/boardController');
const { isAuthenticatedUser } = require('../middleware/auth');

router.route('/createCard').post(isAuthenticatedUser, createCard);

module.exports = router;