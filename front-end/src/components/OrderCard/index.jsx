import React from 'react';
import PropTypes from 'prop-types';
import './OrderCard.css';

import moment from 'moment';

const TEST_PREFIX = '_orders__element-';

function OrderCard({ type, order, index }) {
  console.log('order', order);
  console.log('type', type);

  return (
    <section className="order-card-container">
      <section className="order-id-container">
        <span className="order-id-title">Pedido</span>
        <span
          className="order-id-text"
          data-testid={ `${type}${TEST_PREFIX}order-id-${order.id}` }
        >
          {order.id}
        </span>
      </section>
      <section className="order-info-address-container">
        <section className="order-info">
          <section id={ `order-status-${index}` } className="order-status">
            <span
              className="order-status-text"
              data-testid={ `${type}${TEST_PREFIX}delivery-status-${order.id}` }
            >
              {order.status}
            </span>
          </section>
          <section className="order-date-price">
            <span
              className="date-price"
              data-testid={ `${type}${TEST_PREFIX}order-date-${order.id}` }
            >
              {moment((new Date(order.saleDate))).format('DD/MM/YYYY')}
            </span>
            <span
              className="date-price"
              data-testid={ `${type}${TEST_PREFIX}card-price-${order.id}` }
            >
              {order.totalPrice}
            </span>
          </section>
        </section>
        { ((type === 'seller')) ? (
          <span
            className="order-address"
            data-testid={ `seller${TEST_PREFIX}card-address-${order.id}` }
          >
            {order.deliveryAddress}
            ,
            {' '}
            {order.deliveryNumber}
          </span>
        ) : <> </> }
      </section>
    </section>
  );
}

OrderCard.propTypes = {
  type: PropTypes.string.isRequired,
  order: PropTypes.PropTypes.shape().isRequired,
  index: PropTypes.number.isRequired,
};

export default OrderCard;

// if (/sellers/.test(pathname)) {
//   type = 'Meal';
//   list = recipes.meals;
//   endpoint = '/comidas';
// } else if (/bebidas/.test(pathname)) {
//   type = 'Drink';
//   list = recipes.drinks;
//   endpoint = '/bebidas';
// }

// const id = `id${type}`;
// const img = `str${type}Thumb`;
// const cardName = `str${type}`;
// const cards = list.slice(min, max);
