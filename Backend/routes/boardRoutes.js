const express = require('express');
const router = express.Router();

const {getBoardById,shareBoard } = require('../controllers/boardController');
const { isAuthenticatedUser } = require('../middleware/auth');


router.route('/getBoardById/:boardId').post(isAuthenticatedUser, getBoardById);
router.route('/guest/getBoardById/:boardId').post(getBoardById);
router.route('/shareBoard').post(isAuthenticatedUser, shareBoard);

module.exports = router;