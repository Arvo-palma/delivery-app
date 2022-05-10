const { sale, product } = require('../database/models');

module.exports = async (id) => {
  const getOrder = await sale.findByPk(id, {
    include: [{
      model: product,
      as: 'product',
    }],
  });

  return getOrder;
};