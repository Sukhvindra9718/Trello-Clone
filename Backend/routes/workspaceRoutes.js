const express = require('express');
const router = express.Router();
const {isAuthenticatedUser} = require('../middleware/auth');
const {getWorkspaces} = require('../controllers/workspaceController');

router.route('/getWorkspaces').get(isAuthenticatedUser, getWorkspaces);


module.exports = router;