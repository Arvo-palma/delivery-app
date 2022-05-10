const { getProducts } = require('../services');

const OK = 200;

module.exports = async (_req, res) => {
  try {
    const allProducts = await getProducts();
    
    return res.status(OK).json(allProducts);
  } catch (error) {
    console.log(error);
  }
};