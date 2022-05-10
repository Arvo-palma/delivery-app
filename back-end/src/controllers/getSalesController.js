const { getSales } = require('../services');

const OK = 200;

module.exports = async (_req, res) => {
  try {
    const allSales = await getSales();

    return res.status(OK).json(allSales);
  } catch (error) {
    console.log(error);
  }
};