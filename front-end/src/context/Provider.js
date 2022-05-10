import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from '.';
import fetchProducts from '../services/fetchProducts';
import fetchOrders from '../services/fetchOrders';
import fetchSales from '../services/fetchSales';
import fetchUsers from '../services/fetchUsers';

function Provider({ children }) {
  const [users, setUsers] = useState([]);
  const [sales, setSales] = useState([]);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  async function requestData() {
    setProducts(await fetchProducts());
    setOrders(await fetchOrders());
    setSales(await fetchSales());
    setUsers(await fetchUsers());
  }

  const data = {
    users,
    sales,
    orders,
    products,
  };

  const contextValue = {
    data,
    requestData,
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
