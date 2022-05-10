/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import OrderCard from '../../components/OrderCard';
import OrderCardTEST from '../../components/OrderCardTEST';
import NavBar from '../../components/NavBar';

function CustomerOrdersTEST() {
  const [ordersResponse, setOrdersResponse] = useState([]);

  const getOrders = async (url, setOrders) => {
    const ordersList = await fetch(url).then((response) => response.json());
    setOrders(ordersList);
  };

  useEffect(() => {
    getOrders('http://localhost:3001/seller/orders', setOrdersResponse);
  }, []);

  return (
    <section className="custumer-orders-page">
      <nav>
        <NavBar page="produtos" />
      </nav>
      <section className="order-cards-container">
        { ordersResponse && (ordersResponse
          .map((order, index) => (
            <Link
              to={ `${parseInt(order.id, 10)}` }
              key={ index }
              className="order-card-link"
            >
              <OrderCardTEST
                type="customer"
                order={ order }
                index={ index }
              />
            </Link>
          ))) }
      </section>
    </section>
  );
}

export default CustomerOrdersTEST;
