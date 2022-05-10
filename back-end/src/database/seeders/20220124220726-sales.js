module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('sales',
      [
        {
          user_id: 3,
          seller_id: 2,
          total_price: 10.57,
          delivery_address: 'Rua Xablau',
          delivery_number: '12',
          sale_date: new Date('2011-08-01T19:58:00.000Z'),
          status: 'Pendente',
        },
        {
          user_id: 3,
          seller_id: 2,
          total_price: 14.97,
          delivery_address: 'Rua Salvador',
          delivery_number: '20',
          sale_date: new Date('2011-08-01T19:58:00.000Z'),
          status: 'Preparando',
        },
        {
          user_id: 3,
          seller_id: 2,
          total_price: 8.89,
          delivery_address: 'Rua México',
          delivery_number: '15',
          sale_date: new Date('2011-08-01T19:58:00.000Z'),
          status: 'Em Trânsito',
        },
        {
          user_id: 3,
          seller_id: 2,
          total_price: 4.49,
          delivery_address: 'Rua Maranhão',
          delivery_number: '21',
          sale_date: new Date('2011-08-01T19:58:00.000Z'),
          status: 'Entregue',
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
