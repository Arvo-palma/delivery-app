import { Link } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import CartItemsContext from '../../context/CartItemsContext';

function CartCheckoutButton() {
  const { shoppingCart, totalPrice, setTotalPrice } = useContext(CartItemsContext);
  const [disabled, setDisabled] = useState(true);
  function sumPrice() {
    setTotalPrice(shoppingCart
      .reduce((acc, cur) => (cur.price ? (acc + (cur.price * cur.quantity)) : acc), 0));
  }

  useEffect(() => {
    sumPrice();
  }, [shoppingCart, setTotalPrice]);

  useEffect(() => {
    if (shoppingCart.length > 0) {
      setDisabled(false);
    }
  });

  return (
    <Link to="/customer/checkout">
      <button
        type="button"
        data-testid="customer_products__button-cart"
        disabled={ disabled }
      >
        <span data-testid="customer_products__checkout-bottom-value">
          { `Ver Carrinho: R$ ${totalPrice.toFixed(2).replace(/\./, ',')}` }
        </span>
      </button>
    </Link>
  );
}

export default CartCheckoutButton;
