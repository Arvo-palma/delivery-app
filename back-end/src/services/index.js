const findUser = require('./findUser');
const createUser = require('./createUser');
const getProducts = require('./getProducts');
const createSale = require('./createSale');
const getSales = require('./getSales');
const updateStatus = require('./updateStatus');
const getUserOrders = require('./getUserOrders');
const getUsers = require('./getUsers');
const createUserByAdmin = require('./createUserByAdmin');
const findUserByAdmin = require('./findUserByAdmin');
const deleteUser = require('./deleteUser');
const getAllOrders = require('./getAllOrders');
const getOrderById = require('./getOrderById');

module.exports = {
  findUser,
  createUser,
  getProducts,
  createSale,
  getSales,
  updateStatus,
  getUserOrders,
  getUsers,
  createUserByAdmin,
  findUserByAdmin,
  deleteUser,
  getAllOrders,
  getOrderById,
};
