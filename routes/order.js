const express = require('express');
const { createOrder } = require('../controllers/orderController');
const router = express.Router();


router.route('/order',createOrder);


module.exports = router;
