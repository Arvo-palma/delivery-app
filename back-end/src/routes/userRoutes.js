const express = require('express');
const userController = require('../controllers/userController');
const {
  userAlreadyExists,
  userNotFound,
  passwordsDoesntMatch } = require('../middlewares/userValidations');

const userRoutes = express.Router();

userRoutes.post('/register', userAlreadyExists, userController.createUser);
userRoutes.post('/login', userNotFound, passwordsDoesntMatch, userController.loginUser);
userRoutes.get('/users/:id', userController.getUserByID);

module.exports = userRoutes;