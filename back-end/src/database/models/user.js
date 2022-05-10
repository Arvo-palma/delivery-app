module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'users',
  });
  
  user.associate = (models) => {
    user.hasMany(models.sale, { as: 'userId', foreignKey: 'userId' }),
    user.hasMany(models.sale, { as: 'sellerId', foreignKey: 'sellerId' });
  }

  return user;
};
