const express = require('express');
const router = express.Router();

const bookingController = require('../controllers/booking');

router.get('/', bookingController.getAll);
router.post('/', bookingController.createClient)

router.put('/:id', bookingController.updateClient);

router.delete('/:id', bookingController.deleteClient);


module.exports = router;
