const { StatusCodes } = require('http-status-codes');
const orderServices = require('../services/orderServices');
const userServices = require('../services/userServices');

const getAllOrders = async (req, res) => {
  try {
    const getOrders = await orderServices.getAllOrders();

    return res.status(StatusCodes.OK).json({ orders: getOrders });
  } catch (err) {
    console.log(err);
  }
};

const createOrder = async (req, res) => {
  try {
    const findUser = await userServices.findUserByEmail(req.body.userInfo);
    // const { dataValues: { id: sellerId } } = await userServices.findUserByName(req.body.seller);

    const formattedObj = {
      userId: findUser.dataValues.id,
      ...req.body,
    };

    const newOrder = await orderServices.createOrder(formattedObj);

    if (!newOrder) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Sale not created' });
    }

    return res.status(StatusCodes.CREATED).json(newOrder);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getAllOrders, createOrder };