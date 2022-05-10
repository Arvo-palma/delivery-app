// vitals
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// components
import Login from '../pages/Login';
import Register from '../pages/Register';
import Products from '../pages/Products';
import Checkout from '../pages/Checkout';
import ManageUsers from '../pages/ManageUsers';
// import CustomerOrders from '../pages/CustomerOrders';
import SellerOrderDetails from '../pages/SellerOrderDetails';
import CustomerOrderDetails from '../pages/CustomerOrderDetails';
import CustomerOrdersTEST from '../pages/CustomerOrdersTEST';
import SellerOrders from '../pages/SellerOrders';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Navigate to="/login" /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/register" element={ <Register /> } />
        <Route exact path="/customer/products" element={ <Products /> } />
        {/* <Route exact path="/customer/orders" element={ <CustomerOrders /> } /> */}
        <Route exact path="/customer/orders" element={ <CustomerOrdersTEST /> } />
        <Route exact path="/customer/orders/:id" element={ <CustomerOrderDetails /> } />
        <Route exact path="/seller/orders" element={ <SellerOrders /> } />
        <Route
          exact
          path="/seller/orders/:id"
          element={ <SellerOrderDetails /> }
        />
        <Route
          exact
          path="/customer/checkout"
          element={
            <Checkout />
          }
        />
        <Route exact path="/admin/manage" element={ <ManageUsers /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
