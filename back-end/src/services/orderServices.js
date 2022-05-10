const { sale, product, salesProduct } = require('../database/models');

const getAllOrders = async () => {
  try {
    const allOrders = await sale.findAll({
      attributes: { exclude: ['deliveryAddress', 'deliveryNumber'] },
      include: [{
        model: product,
        as: 'product',
        through: { attributes: ['saleId', 'quantity', 'productId'] },
      }],
    });
    
    return allOrders;
  } catch (err) {
    console.log(err);
  }
};

const createSaleProduct = async (orderInfo, orderId) => {
  try {
    const { products } = orderInfo;
    await products.forEach(async (eachProduct) => {
      const productId = eachProduct.id;
      const productQuantity = eachProduct.quantity;
      await salesProduct.create({ saleId: orderId, productId, quantity: productQuantity });
    });

    return true;
  } catch (err) {
    console.log(err);
  }
};

const createOrder = async (order, sellerId = 2) => {
  try {
    const { id } = await sale.create({
      ...order,
      sellerId,
      saleDate: new Date(),
      status: 'Pendente',
    });

    const createRelation = await createSaleProduct(order, id);

    if (!id || !createRelation) {
      return false;
    }

    return id;
  } catch (err) {
    console.log(err);
}
};

module.exports = { getAllOrders, createOrder };