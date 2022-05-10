import styled from 'styled-components';

const statusColors = {
  preparando: '#d9ca40',
  entregue: '#2FC18C',
  pendente: 'rgb(204, 132, 105)',
  emTransito: '#4aa1ff',
};

const OrderCardsStyle = styled.div`

.order-status {
  background-color: ${({ status }) => statusColors[
    status === 'Em Trânsito' ? 'emTransito' : (status && status.toLowerCase())
  ]}
};

// os colchetes servem para chamar as key

background-color: rgb(240, 240, 240);
box-shadow: 0 1px 2px 1px rgb(190, 190, 190);
display: flex;
flex-direction: row;
font-family: Arial , Helvetica , sans-serif;
height: 4.5em;
margin: 0.8em 0.5em;
width: 22em;

.order-id-container {
align-items: center;
background-color: white;
color: black;
display: flex;
flex-direction: column;
justify-content: center;
width: 25%;

  .order-id-title {
    font-size: 0.7em;
  }

  .order-id-text {
    font-size: 1em;
  }
}
.order-address {
  font-size: 0.7em;
  color: black;
  text-align: right;
  padding: 5px;
}

.order-info-address-container {
  background-color: transparent;
  display: flex;
  flex-direction: column;
  width: 75%;

    .order-info {
      display: flex;
      flex-direction: row;
      height: 100%;

      .order-status {
        text-align: center;
        align-items: center;
        border-radius: 5px;
        color: black;
        display: flex;
        font-weight: 700;
        height: 90%;
        justify-content: center;
        margin: auto;
        width: 52%;
      }

      .order-date-price {
        display: flex;
        flex-direction: column;
        height: 90%;
        justify-content: space-evenly;
        margin: auto;
        width: 44%;

        .date-price {
          align-items: center;
          background-color: rgb(240, 250, 250);
          border-radius: 5px;
          color: black;
          display: flex;
          font-weight: 700;
          height: 40%;
          justify-content: center;
          margin: 0.2em 0;
        }
      }
    }
  }
`;

export default OrderCardsStyle;
