// vitals
import styled from 'styled-components';

const OrderDetailCardStyles = styled.div`
  margin: 2rem 0 0;
  border: 2px #e7e7e7 solid;

  .order-card-header {
    align-items: center;
    background-color: #eaf1ef;
    display: flex;
    font-weight: 600;
    justify-content: space-between;
    padding: 1rem 2rem;
    /* text-transform: uppercase; */

    .header-info {
      align-items: center;
      display: flex;
      gap: 2rem;
      width: 40%;

      .status-order {
        background-color: #d3c63c;
        border-radius: 8px;
        padding: 7px 1rem;
      }
    }

    .header-buttons {
      align-items: center;
      display: flex;
      gap: 2rem;

      .prepare-button {
        background-color: #2fc18c;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        outline: none;
        padding: 7px 1rem;
      }

      .prepare-button:button {
        cursor: pointer;
      }

      .dispatch-button {
        background-color: #036b52;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        outline: none;
        padding: 7px 1rem;
      }

      .dispatch-button:button {
        cursor: pointer;
      }
    }
  }

  .value-container {
    background-color: #036b52;
    color: #fff;
    display: flex;
    font-weight: 600;
    margin: 1px 10% 1rem auto;
    padding: 1rem;
    width: max-content;
  }
`;

export default OrderDetailCardStyles;
