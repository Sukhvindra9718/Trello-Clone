const express = require('express');
const router = express.Router();

const {getBoardById } = require('../controllers/boardController');
const { isAuthenticatedUser } = require('../middleware/auth');


router.route('/getBoardById/:boardId').post(isAuthenticatedUser, getBoardById);

module.exports = router;