// vitals
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import Context from '../../context';

// components and mocks
// import Header from '../../components/Header';
import OrderCard from '../../components/OrderCard';
// import ordersResponse from './mock/ordersResponse';

// styles
import './CustomerOrders.css';

// constants
const STATUS = 'order-status';
const ID_SIZE = 4;
// const CUSTOMER_ORDERS_URL = 'http://localhost:3001/customer/orders';
// const ID = 3;

function CustomerOrders() {
  // const { ordersRequestList } = useContext(Context);
  // const [receivedStatus, setReceivedStatus] = useState(false);
  const [ordersResponse, setOrdersResponse] = useState([]);
  const [ordersReceived, setOrdersReceived] = useState(false);

  const ordersRequestList = [];

  const addZerosAfter = (id) => {
    let formatedPrice = `${id}`;
    while (formatedPrice.length < ID_SIZE) formatedPrice = `0${formatedPrice}`;
    return formatedPrice;
  };

  const formatOrders = (ordersList) => {
    ordersList.forEach((order) => {
      const rawDate = (new Date(order.saleDate)).toLocaleDateString('pt-BR');
      const splitDate = rawDate.split('/');
      const priceFixedString = (parseFloat(order.totalPrice).toFixed(2)).toString();
      ordersRequestList.push({
        id: addZerosAfter(order.id),
        status: order.status.toUpperCase(),
        date: `${splitDate[0]}/${splitDate[1]}/${splitDate[2].slice(2)}`,
        totalPrice: `R$ ${priceFixedString.replace('.', ',')}`,
        address: `${order.deliveryAddress}, ${order.deliveryNumber}`,
      });
    });
  };

  // formatOrders(ordersResponse);

  const applyStatusColor = (statusElements) => {
    statusElements.forEach((statusElement, index) => {
      switch (statusElement.innerHTML) {
      case 'ENTREGUE':
        document.querySelector(`#${STATUS}-${index}`).style
          .backgroundColor = 'rgb(64, 217, 180)';
        break;
      case 'PREPARANDO':
        document.querySelector(`#${STATUS}-${index}`).style
          .backgroundColor = 'rgb(140, 217, 64)';
        break;
      case 'EM TRÂNSITO':
        document.querySelector(`#${STATUS}-${index}`).style
          .backgroundColor = 'rgb(213, 100, 60)';
        break;
      case 'PENDENTE':
        document.querySelector(`#${STATUS}-${index}`).style
          .backgroundColor = 'rgb(217, 202, 64)';
        break;
      default: break;
      }
    });
  };

  const getOrders = async (url, setOrders) => {
    const ordersList = await fetch(url).then((response) => response.json());
    setOrders(ordersList);
    setOrdersReceived(true);
  };

  useEffect(() => {
    // getOrders(`${CUSTOMER_ORDERS_URL}/${ID}}`, setOrdersResponse);
    getOrders('http://localhost:3001/customer/orders/3', setOrdersResponse);
    console.log('Fora do IF');
    if (ordersResponse && ordersReceived) {
      console.log('Dentro do IF');
      // ordersResponse.forEach((order) => console.log(order));
      formatOrders(ordersResponse);
      setOrdersReceived(false);
    }
    const statusElements = document.querySelectorAll(`.${STATUS}-text`);
    if (statusElements !== undefined) applyStatusColor(statusElements);
  });

  return (
    <section className="custumer-orders-page">
      {/* <Header title="MEUS PEDIDOS" renderThirdColumn={ false } /> */}
      <section className="order-cards-container">
        { ordersRequestList.length
          ? (ordersRequestList.map((order, index) => (
            <Link
              to={ `customer/orders/${parseInt(order.id, 10)}` }
              key={ index }
              className="order-card-link"
            >
              <OrderCard
                type="customer"
                order={ order }
                index={ index }
              />
            </Link>
          ))) : <> </> }
      </section>
    </section>
  );
}

export default CustomerOrders;
