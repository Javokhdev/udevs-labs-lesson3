const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');  // Correct path
const ordersController = require('../controllers/ordersController');    // Correct path

// Product routes
router.post('/products', productsController.createProduct);
router.get('/products', productsController.getProducts);
router.put('/products/:id', productsController.updateProduct);
router.delete('/products/:id', productsController.deleteProduct);

// Order routes
router.post('/orders', ordersController.createOrder);
router.get('/orders', ordersController.getOrders);
router.put('/orders/:id', ordersController.updateOrder);
router.delete('/orders/:id', ordersController.deleteOrder);

module.exports = router;

