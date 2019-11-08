/***************************************************************************
 *                              authentication routes                      *
 ***************************************************************************/

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authUser');


/**
 * add new user
 * POST /api/auth/addNewUser
 */
router.post('/addNewUser', authController.addNewUser);

module.exports = router;