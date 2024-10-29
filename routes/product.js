const express = require('express');
const { getProducts, getSingleProduct } = require('../controllers/productController');
const router = express.Router();

router.route('/products',getProducts);
router.route('/product/:id',getSingleProduct);


module.exports = router;