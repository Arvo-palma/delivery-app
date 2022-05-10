import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CartItemsContext from './CartItemsContext';

function CartItemsProvider({ children }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [shoppingCart, setShoppingCart] = useState([]);
  // usar o shoppingCart e setShoppingCart para outras paǵinas

  const findProductIndex = (product) => shoppingCart
    .findIndex(({ id }) => id === product.id);

  const inputProduct = (product, insertedProducts) => {
    const productIndex = findProductIndex(product);

    if (productIndex >= 0) {
      if (insertedProducts >= 0) {
        shoppingCart.splice(productIndex, 1);
        setShoppingCart(shoppingCart);
      } else {
        shoppingCart[productIndex].quantity = insertedProducts;
        const { price, quantity } = shoppingCart[productIndex];
        shoppingCart[productIndex].subTotal = quantity * price;
        setShoppingCart(shoppingCart);
      }
    } else if (insertedProducts !== 0) {
      setShoppingCart(
        [{ ...product,
          quantity: insertedProducts,
          subTotal: product.price * insertedProducts,
        }],
      );
    }
  };

  const addButtonCart = (product) => {
    const productIndex = findProductIndex(product);
    const shoppingCartNow = [...shoppingCart];

    if (productIndex >= 0) {
      shoppingCartNow[productIndex].quantity += 1;
      const { price, quantity } = shoppingCartNow[productIndex];
      shoppingCartNow[productIndex].subTotal = quantity * price;
      setShoppingCart(shoppingCartNow);
    } else {
      setShoppingCart(
        [...shoppingCartNow,
          { ...product, quantity: 1, subTotal: parseFloat(product.price) }],
      );
    }
  };

  const removeButtonCart = (product) => {
    const productIndex = findProductIndex(product);

    if (productIndex >= 0) {
      const shoppingCartNow = [...shoppingCart];
      shoppingCartNow[productIndex].quantity -= 1;

      if (shoppingCartNow[productIndex].quantity === 0) {
        shoppingCartNow.splice(productIndex, 1);
        setShoppingCart(shoppingCartNow);
      } else {
        const { price, quantity } = shoppingCartNow[productIndex];
        shoppingCartNow[productIndex].subTotal = quantity * price;
        setShoppingCart(shoppingCartNow);
      }
    }
  };

  return (
    <CartItemsContext.Provider
      value={ {
        shoppingCart,
        setShoppingCart,
        totalPrice,
        setTotalPrice,
        inputProduct,
        addButtonCart,
        removeButtonCart,
      } }
    >
      { children }
    </CartItemsContext.Provider>
  );
}

CartItemsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartItemsProvider;
