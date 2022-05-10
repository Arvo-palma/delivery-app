import React from 'react';
import PropTypes from 'prop-types';
// import './OrderCard.css';
import moment from 'moment';
import OrderCardsStyle from './styles';

const TEST_PREFIX = '_orders__element-';

function OrderCardTEST({ type, order, index }) {
  return (
    <OrderCardsStyle status={ order.status } className="order-card-container">
      <section className="order-id-container">
        <span className="order-id-title">Pedido</span>
        <span
          className="order-id-text"
          data-testid={ `customer_orders__element-order-id-${order.id}` }
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
              {moment(order.saleDate).format('DD/MM/YYYY')}
            </span>
            <span
              className="date-price"
              data-testid={ `${type}${TEST_PREFIX}card-price-${order.id}` }
            >
              {`${order.totalPrice.replace(/\./, ',')}`}
            </span>
          </section>
        </section>
      </section>
    </OrderCardsStyle>
  );
}

OrderCardTEST.propTypes = {
  type: PropTypes.string.isRequired,
  order: PropTypes.PropTypes.shape().isRequired,
  index: PropTypes.number.isRequired,
};

export default OrderCardTEST;
