import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import './productCard.css';
import CartItemsContext from '../../context/CartItemsContext';

function ProductCard({ id, name, urlImage, price }) {
  const {
    inputProduct,
    addButtonCart,
    removeButtonCart,
  } = useContext(CartItemsContext);

  const [quantity, setQuantity] = useState(0);

  function notNegativeValue() {
    if (quantity !== 0) {
      setQuantity(quantity - 1);
      removeButtonCart({ id, name, urlImage, price });
    }
  }

  function addPositiveValue() {
    setQuantity(Number(quantity) + 1);
    addButtonCart({ id, name, urlImage, price });
  }

  function inputValue({ target }) {
    setQuantity(target.value);
    inputProduct({ id, name, urlImage, price }, Number(target.value));
  }
  // () => setQuantity(Number(quantity) + 1)
  return (
    <div className="card-body">
      <div
        className="price"
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        { `R$ ${price.replace(/\./, ',')}`}
      </div>
      <img
        alt="productImage"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
      />
      <div className="div-buttons">
        <p
          className="drink-name"
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          { name }
        </p>
        <div className="container-buttons">
          <button
            className="btn-add"
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            onClick={ notNegativeValue }
          >
            -
          </button>
          <input
            className="input-quantity"
            data-testid={ `customer_products__input-card-quantity-${id}` }
            value={ quantity }
            type="number"
            onChange={ inputValue }
          />
          <button
            className="btn-rm"
            type="button"
            data-testid={ `customer_products__button-card-add-item-${id}` }
            onClick={ addPositiveValue }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductCard;

// TESTE DE LOGIN
// adm@deliveryapp.com
// a4c86edecc5aee06eff8fdeda69e0d04
