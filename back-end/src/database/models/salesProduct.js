module.exports = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define("salesProduct", {
    quantity: DataTypes.INTEGER
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'salesProducts',
  });

  salesProduct.associate = (models) => {
    models.product.belongsToMany(models.sale, {
      as: 'sales',
      through: salesProduct,
      foreignKey: 'productId',
      otherKey: 'saleId',
    }),
    models.sale.belongsToMany(models.product, {
      as: 'product',
      through: salesProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
  }

  return salesProduct;
};
