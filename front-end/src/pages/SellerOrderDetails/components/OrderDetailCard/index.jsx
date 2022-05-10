// vitals
import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';

// components
import formatDate from '../../helpers/DateFormatter';

// styles
import OrderDetailCardStyles from './styles';
import OrderDetailTable from '../OrderDetailTable';

const ORDER_ID = 'seller_order_details__element-order-details-label-order-id';
const ORDER_DATE = 'seller_order_details__element-order-details-label-order-date';
const ORDER_STATUS = 'seller_order_details__element-order-details-label-delivery-status';
const BTN_PREPARING = 'seller_order_details__button-preparing-check';
const BTN_DISPATCH = 'seller_order_details__button-dispatch-check';

function OrderDetailCard({ selectedOrder }) {
  const { id, saleDate, status: orderStatus, product, totalPrice = 0 } = selectedOrder;
  const [updateState, setUpdateState] = useState('Pendente');

  useEffect(() => {
    localStorage.setItem('orderState', JSON.stringify(updateState));
  }, [updateState]);

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
          <div
            data-testid={ ORDER_STATUS }
            className="status-order"
          >
            {JSON.parse(localStorage.getItem('orderState')) || updateState}
          </div>
        </div>
        <div className="header-buttons">
          <button
            data-testid={ BTN_PREPARING }
            className="prepare-button"
            type="button"
            disabled={ updateState === 'Entregue' || orderStatus === 'Preparando' }
            onClick={ () => setUpdateState('Preparando') }
          >
            Preparar pedido
          </button>
          <button
            data-testid={ BTN_DISPATCH }
            className="dispatch-button"
            type="button"
            disabled={ orderStatus === 'Entregue' || orderStatus === 'Pendente' }
          >
            Saiu entrega
          </button>
        </div>
      </div>
      <OrderDetailTable product={ product } />
      <div
        className="value-container"
        data-testid="seller_order_details__element-order-total-price"
      >
        {totalPrice.toString().replace('.', ',')}
      </div>
    </OrderDetailCardStyles>
  );
}

OrderDetailCard.propTypes = {
  selectedOrder: propTypes.objectOf('string').isRequired,
};

export default OrderDetailCard;
