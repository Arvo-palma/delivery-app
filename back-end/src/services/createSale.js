const { sale, salesProduct } = require('../database/models');

const createSalesProduct = async (saleInfo, saleId) => {
  try {
    const { productIds, quantities } = saleInfo;
    await productIds.forEach(async (productId, index) => {
    const quantity = quantities[index];
    await salesProduct.create({ saleId, productId, quantity });
  });

  return true;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = async (saleInfo) => {
  try {
    const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber } = saleInfo;
    const createdSale = await sale.create({
      userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      saleDate: new Date(),
      status: 'Pendente',
    });
    const saleId = createdSale.id;
    await createSalesProduct(saleInfo, saleId);
    return createdSale.id;
  } catch (error) {
    console.log(error);
    return false;
  }
};