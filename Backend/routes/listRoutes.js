const express = require('express');
const router = express.Router();

const { createList} = require('../controllers/listController');
const { isAuthenticatedUser } = require('../middleware/auth');

router.route('/createList').post(isAuthenticatedUser, createList);

module.exports = router;