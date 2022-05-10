// vitals
import React from 'react';
import propTypes from 'prop-types';

// styles
import TableStyles from './styles';

const ITEM_ID_NUMER = 'seller_order_details__element-order-table-item-number';
const ITEM_DESC = 'seller_order_details__element-order-table-name';
const ITEM_QTY = 'seller_order_details__element-order-table-name';
const ITEM_PRICE = 'seller_order_details__element-order-table-unit-price';
const ITEM_TOTAL = 'seller_order_details__element-order-table-sub-total';

function OrderDetailTable({ product }) {
  return (
    <TableStyles>
      <thead>
        <tr>
          <div>
            <th>Item</th>
            <th>Descrição</th>
          </div>
          <div>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </div>
        </tr>
      </thead>
      <tbody>
        {product && product.map(({ name, price, salesProduct }, index) => (
          <tr key={ `${name}-${index}` }>
            <td data-testid={ `${ITEM_ID_NUMER}-${index}` }>
              {index + 1}
            </td>
            <td data-testid={ `${ITEM_DESC}-${index}` }>
              {name}
            </td>
            <td data-testid={ `${ITEM_QTY}-${index}` }>{salesProduct.quantity}</td>
            <td data-testid={ `${ITEM_PRICE}-${index}` }>{price}</td>
            <td
              data-testid={ `${ITEM_TOTAL}-${index}` }
            >
              {(Number(price) * Number(salesProduct.quantity)).toFixed(2)}

            </td>
          </tr>
        ))}
      </tbody>
    </TableStyles>
  );
}

OrderDetailTable.propTypes = {
  product: propTypes.arrayOf('object').isRequired,
};

export default OrderDetailTable;
