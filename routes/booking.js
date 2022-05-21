const express = require('express');
const router = express.Router();

const bookingController = require('../controllers/booking');

router.get('/', bookingController.getAll);
router.post('/', bookingController.createClient)
// router.post('/', contactsController.createContact);


module.exports = router;
