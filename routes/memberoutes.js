const express = require('express');
const {
    addMember,
    getAllMembers,
    getMemberById,
    getMemberByEmail
} = require('../controllers/memberControllers');

const router = express.Router();

router.route('/')
    .post(addMember)
    .get(getAllMembers);

router.route('/email/:email')
    .get(getMemberByEmail);

router.route('/id/:id')
    .get(getMemberById);

module.exports = router;
