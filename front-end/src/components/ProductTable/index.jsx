import React from 'react';
import PropTypes from 'prop-types';

import TableHead from '../TableHead';
import ProductRow from '../ProductRow';

import ProductTableStyles from './components/ProductTable/styles';

function ProductTable(props) {
  const { setProductList, list } = props;
  const remove = (itemIndex) => {
    const newList = list.filter((item, index) => itemIndex !== index);
    setProductList(newList);
  };

  return (
    <ProductTableStyles>
      <TableHead />
      <tbody>
        {
          list.map((item, index) => (
            <>
              <tr key={ list.indexOf(item) + 1 }>
                <ProductRow
                  name={ item.name }
                  quantity={ item.quantity }
                  subtotal={ (item.price * item.quantity).toFixed(2).replace('.', ',') }
                  price={ item.price.replace('.', ',') }
                  count={ index }
                />
              </tr>
              <button
                type="button"
                data-testid={
                  `customer_checkout__element-order-table-remove-${index}`
                }
                onClick={ () => remove(index) }
              >
                Remover
              </button>
            </>
          ))
        }
      </tbody>
    </ProductTableStyles>
  );
}

ProductTable.propTypes = {
  setProductList: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ProductTable;
