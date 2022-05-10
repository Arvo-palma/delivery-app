module.exports = (sequelize, DataTypes) => {
  const sale = sequelize.define("sale", {
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL(10, 2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'sales',
  },
);

  sale.associate = (models) => {
    sale.belongsTo(models.user, { as: 'user', foreignKey: 'userId' }),
    sale.belongsTo(models.user, { as: 'seller', foreignKey: 'sellerId' });
  }

  return sale;
};
