// vitals
import React from 'react';
import propTypes from 'prop-types';

// components
import formatDate from '../../helpers/DateFormatter';

// styles
import OrderDetailCardStyles from './styles';
import OrderDetailTable from '../OrderDetailTable';

const TYPE = 'customer_order_details__';

const ORDER_ID = `${TYPE}element-order-details-label-order-id`;
const ORDER_DATE = `${TYPE}element-order-details-label-order-date`;
const ORDER_STATUS = `${TYPE}element-order-details-label-delivery-status`;
const BTN_DISPATCH = `${TYPE}button-delivery-check`;
const SELLER_NAME = `${TYPE}element-order-details-label-seller-name`;

function CustomerOrderDetailsCard({ selectedOrder, sellerName }) {
  const { id, saleDate, status: orderStatus, product, totalPrice = 0 } = selectedOrder;

  return (
    <OrderDetailCardStyles>
      <div className="order-card-header">
        <div className="header-info">
          <div>
            PEDIDO
            {' '}
            <span
              data-testid={ ORDER_ID }
            >
              {id}
            </span>
          </div>
          <div
            data-testid={ ORDER_DATE }
          >
            {formatDate(saleDate)}

          </div>
          <div>
            P. Vendedora
            <span
              data-testid={ SELLER_NAME }
            >
              {sellerName}
            </span>
          </div>
          <div
            data-testid={ ORDER_STATUS }
            className="status-order"
          >
            {orderStatus}

          </div>
        </div>
        <div className="header-buttons">
          <button
            data-testid={ BTN_DISPATCH }
            className="dispatch-button"
            type="button"
            disabled={ orderStatus === 'Entregue' || orderStatus === 'Pendente' }
          >
            Marcar como entregue
          </button>
        </div>
      </div>
      <OrderDetailTable product={ product } />
      <div
        className="value-container"
        data-testid={ `${TYPE}element-order-total-price` }
      >
        {totalPrice.toString().replace('.', ',')}
      </div>
    </OrderDetailCardStyles>
  );
}

CustomerOrderDetailsCard.propTypes = {
  selectedOrder: propTypes.objectOf('string').isRequired,
  sellerName: propTypes.string.isRequired,
};

export default CustomerOrderDetailsCard;
