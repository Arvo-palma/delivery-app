import axios from 'axios';

function postSale(sale) {
  try {
    const saleInfo = {
      userId: sale.userInfo.id,
      sellerId: sale.seller.id,
      totalPrice: sale.totalPrice,
      deliveryAddress: sale.address,
      deliveryNumber: sale.addressNumber,
      productIds: sale.products.map((product) => product.id),
      quantities: sale.products.map((product) => product.quantity),
    };

    axios.post('http://localhost:3001/customer/checkout', saleInfo)
      .then((response) => {
        if (response === true) return true;
      });
  } catch (error) {
    console.log(error);
  }
}

export default postSale;
