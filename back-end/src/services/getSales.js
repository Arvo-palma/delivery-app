const { sale } = require('../database/models');

module.exports = async () => {
  const allSales = await sale.findAll();

  return allSales;
};