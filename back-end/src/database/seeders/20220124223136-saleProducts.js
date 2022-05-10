module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('salesProducts',
      [
        {
          sale_id: 1,
          product_id: 8,
          quantity: 2,
        },
        {
          sale_id: 1,
          product_id: 7,
          quantity: 1,
        },
        {
          sale_id: 2,
          product_id: 3,
          quantity: 3,
        },
        {
          sale_id: 2,
          product_id: 2,
          quantity: 1,
        },
        {
          sale_id: 3,
          product_id: 9,
          quantity: 1,
        },
        {
          sale_id: 4,
          product_id: 6,
          quantity: 1,
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('salesProducts', null, {});
  }
};
