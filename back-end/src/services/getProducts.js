const { product } = require('../database/models');

module.exports = async () => {
  const allProducts = await product.findAll();

  return allProducts;
};