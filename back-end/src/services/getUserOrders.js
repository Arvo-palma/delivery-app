const { sale } = require('../database/models');

module.exports = async (userId) => {
  const userOrders = await sale.findAll({
    where: {
      userId,
    },
  });

  return userOrders;
};