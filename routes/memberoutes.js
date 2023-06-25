const express = require('express');
const {addMember} = require('../controllers/memberControllers');

const router = express.Router();

router.route('/').post(addMember);

module.exports = router;
