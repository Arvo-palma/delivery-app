const { getAllOrders } = require('../services');

const OK = 200;

module.exports = async (_req, res) => {
  try {
    const allOrders = await getAllOrders();

    return res.status(OK).json(allOrders);
  } catch (error) {
    console.log(error);
  }
};