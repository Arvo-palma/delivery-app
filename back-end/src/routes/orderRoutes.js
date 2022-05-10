const express = require('express');

const orderRoutes = express.Router();

const { jwtValidation } = require('../middlewares/tokenValidations');

const orderController = require('../controllers/orderController');

orderRoutes.get('/orders', jwtValidation, orderController.getAllOrders);
orderRoutes.post('/orders', jwtValidation, orderController.createOrder);

module.exports = orderRoutes;
