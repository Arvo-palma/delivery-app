const express = require('express');
const adminController = require('../controllers/adminController');
const { userAlreadyExists } = require('../middlewares/userValidations');
const { jwtValidation } = require('../middlewares/tokenValidations');

const adminRoutes = express.Router();

adminRoutes.post('/admin/manage/user',
  jwtValidation,
  userAlreadyExists,
  adminController.createUser);

module.exports = adminRoutes;