import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import OrderCard from '../../components/OrderCard';
import NavBar from '../../components/NavBar';

function SellerOrders() {
  const [ordersResponse, setOrdersResponse] = useState([]);

  const ordersRequestList = [];

  const getOrders = async (url, setOrders) => {
    const ordersList = await fetch(url).then((response) => response.json());
    setOrders(ordersList);
  };
  console.log('testando:', ordersRequestList);

  useEffect(() => {
    getOrders('http://localhost:3001/seller/orders', setOrdersResponse);
  }, []);

  return (
    <section className="custumer-orders-page">
      <nav>
        <NavBar page="produtos" userName="Usuário" />
      </nav>
      <section className="order-cards-container">
        { ordersResponse.length
          ? (ordersResponse.map((order, index) => (
            <Link
              to={ `/seller/orders/${parseInt(order.id, 10)}` }
              key={ index }
              className="order-card-link"
            >
              <OrderCard
                type="seller"
                order={ order }
                index={ index }
              />
            </Link>
          ))) : <> </> }
      </section>
    </section>
  );
}

export default SellerOrders;
