/* eslint-disable react-hooks/exhaustive-deps */
// vitals
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import api from '../../api';

// components
import NavBar from '../../components/NavBar';
import OrderDetailCard from './components/OrderDetailCard';
// styles
import SellerOrderDetailsStyles from './styles';

function SellerOrderDetails() {
  const [selectedOrder, setSelectedOrder] = useState([{}]);

  const { id } = useParams();

  useEffect(() => {
    const requestOrderData = async () => {
      const getData = await api.get(`/orders/${id}`);

      setSelectedOrder(getData.data);
    };

    requestOrderData();
  }, []);

  return (
    <SellerOrderDetailsStyles>
      <NavBar />
      <section>
        <h3>Detalhe do Pedido</h3>
        {
          selectedOrder
            ? <OrderDetailCard selectedOrder={ selectedOrder } /> : null
        }
      </section>
    </SellerOrderDetailsStyles>
  );
}

export default SellerOrderDetails;
