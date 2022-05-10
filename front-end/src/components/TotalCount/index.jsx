import React from 'react';
import PropTypes from 'prop-types';

import TotalCountStyles from './components/TotalCountStyles/styles';

function TotalCount({ value }) {
  return (
    <TotalCountStyles>
      <div
        className="value-container"
      >
        Total: R$
        <span
          data-testid="customer_checkout__element-order-total-price"
        >
          { `${value}` }
        </span>
      </div>
    </TotalCountStyles>
  );
}

TotalCount.propTypes = {
  value: PropTypes.number.isRequired,
};

export default TotalCount;
