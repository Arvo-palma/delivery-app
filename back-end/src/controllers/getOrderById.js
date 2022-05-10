const { getOrderById } = require('../services');

const OK = 200;

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const getOrder = await getOrderById(id);

    return res.status(OK).json(getOrder);
  } catch (error) {
    console.log(error);
  }
};