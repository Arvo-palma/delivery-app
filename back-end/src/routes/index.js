const express = require('express');
const {
  // loginController,
  // createUserController,
  getProductsController,
  // createSaleController,
  getSalesController,
  updateStatusController,
  getUserOrdersController,
  getUsersController,
  // createUserByAdminController,
  deleteUserController,
  // getAllOrdersController,
  getOrderById,
} = require('../controllers');

// const { userAlreadyExists } = require('../middlewares/userValidations')

const router = express.Router();

// router.post('/login', loginController);
// router.post('/register', userAlreadyExists, createUserController);
router.get('/customer/products', getProductsController);
// router.post('/customer/checkout', createSaleController);
router.get('/seller/orders', getSalesController);
router.put('/seller/orders/:id', updateStatusController);
router.get('/customer/orders/:id', getUserOrdersController);
router.get('/admin/manage', getUsersController);
// router.post('/admin/manage/user', createUserByAdminController);
router.delete('/admin/manage/user/:id', deleteUserController);
// router.get('/orders', getAllOrdersController);
router.get('/orders/:id', getOrderById);

module.exports = router;
