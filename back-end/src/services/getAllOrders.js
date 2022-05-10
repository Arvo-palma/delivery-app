const { sale, product } = require('../database/models');

module.exports = async () => {
  const allOrders = await sale.findAll({
    attributes: { exclude: ['deliveryAddress', 'deliveryNumber'] },
    include: [{
        model: product,
        as: 'product',
        through: { attributes: ['saleId', 'quantity', 'productId'] },
    }],
  });

  return allOrders;
};