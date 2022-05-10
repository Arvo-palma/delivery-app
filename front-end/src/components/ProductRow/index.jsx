import React from 'react';
import PropTypes from 'prop-types';

function ProductRow({ name, quantity, subtotal, price, count }) {
  return (
    <>
      <td
        key={ `${name}-${count}` }
        data-testid={ `customer_checkout__element-order-table-item-number-${count}` }
      >
        {
          count + 1
        }
      </td>
      <td
        key="description"
        data-testid={ `customer_checkout__element-order-table-name-${count}` }
      >
        {
          name
        }
      </td>
      <td
        key="quantity"
        data-testid={ `customer_checkout__element-order-table-quantity-${count}` }
      >
        {
          quantity
        }
      </td>
      <td
        key="unit-value"
      >
        R$
        <span
          data-testid={ `customer_checkout__element-order-table-unit-price-${count}` }
        >
          {price}
        </span>
      </td>
      <td
        key="sub-total"
      >
        R$
        <span data-testid={ `customer_checkout__element-order-table-sub-total-${count}` }>
          {subtotal}
        </span>
      </td>
    </>
  );
}

ProductRow.propTypes = {
  count: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  subtotal: PropTypes.number.isRequired,
};

export default ProductRow;
