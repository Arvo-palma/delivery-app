const { getUserOrders } = require('../services');

const OK = 200;

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const userOrders = await getUserOrders(id);
    return res.status(OK).json(userOrders);
  } catch (error) {
    console.log(error);
  }
};