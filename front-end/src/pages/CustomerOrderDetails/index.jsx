/* eslint-disable react-hooks/exhaustive-deps */
// vitals
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import api from '../../api';

// components
import NavBar from '../../components/NavBar';
import CustomerOrderDetailsCard from './components/OrderDetailCard';

// styles

function CustomerOrderDetails() {
  const [selectedOrder, setSelectedOrder] = useState([{}]);
  const [sellerName, setSellerName] = useState();

  const { id } = useParams();

  useEffect(() => {
    const requestOrderData = async () => {
      const getData = await api.get(`/orders/${id}`);
      const getSellerName = await api.get(`/users/${getData.data.sellerId}`);

      setSelectedOrder(getData.data);
      setSellerName(getSellerName.data.user.name);
    };

    requestOrderData();
  }, []);

  return (
    <>
      <NavBar />
      <section>
        <h3>Detalhe do Pedido</h3>
        {
          selectedOrder
          && (<CustomerOrderDetailsCard
            selectedOrder={ selectedOrder }
            sellerName={ sellerName }
          />
          )
        }
      </section>
    </>
  );
}

export default CustomerOrderDetails;
