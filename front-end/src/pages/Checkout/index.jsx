/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import api from '../../api';

import NavBar from '../../components/NavBar';
import ProductTable from '../../components/ProductTable';
import BoxTitle from '../../components/BoxTitle';
import TotalCount from '../../components/TotalCount';
import CartItemsContext from '../../context/CartItemsContext';
// import Context from '../../context';

import CheckoutStyles from './components/CheckoutStyles/styles';

function Checkout() {
  const [data, setData] = useState([]);
  const {
    shoppingCart,
  } = useContext(CartItemsContext);

  const [chosenProductList, setProductList] = useState([]);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [seller, setSeller] = useState([]);
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [saleId, setSaleId] = useState();

  const getTotalPrice = (obj) => {
    const myTotal = obj.reduce((acc, act) => acc + act.subTotal, 0);

    return myTotal.toFixed(2).replace('.', ',');
  };

  const getData = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));

    const fetchRequest = await api.get('/admin/manage', {
      headers: {
        token,
      },
    });
    const sellers = fetchRequest.data.filter((user) => user.role === 'seller');
    setData(sellers);
  };

  useEffect(() => {
    getData();

    setProductList(shoppingCart);
    // setSellerList(sellers);
    // setSeller(sellers[0].name);
  }, [shoppingCart]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, token } = await JSON.parse(localStorage.getItem('user'));

    const totalPrice = chosenProductList.reduce((acc, act) => acc + act.subTotal, 0);

    const sale = {
      products: [...chosenProductList],
      deliveryAddress: address,
      deliveryNumber: addressNumber,
      seller,
      userInfo: email,
      totalPrice,
    };

    const finishSale = await api.post('/orders', {
      ...sale,
    }, {
      headers: {
        authorization: token,
      },
    }).then((response) => {
      console.log(response.data);
      setSaleId(response.data);
      setShouldRedirect(true);
      return <Navigate to={ `/customer/orders/${response.data}` } />;
    })
      .catch((err) => console.log(err));

    if (finishSale) setShouldRedirect(true);
  };

  useEffect(() => {
    if (address.length > 0 && addressNumber.length > 0) setIsValid(true);
  }, [address, addressNumber]);

  if (shouldRedirect && saleId) {
    return <Navigate to={ `/customer/orders/${saleId}` } />;
  }

  return (
    <CheckoutStyles>
      <NavBar page="pedidos" />
      <BoxTitle title="Finalizar Pedido" />
      <div className="requests-container">
        <ProductTable setProductList={ setProductList } list={ chosenProductList } />
        <TotalCount
          value={ getTotalPrice(chosenProductList) }
        />
      </div>
      <BoxTitle title="Detalhes e Endereço para Entrega" />
      <div>
        <form onSubmit={ (event) => handleSubmit(event) }>
          <select
            data-testid="customer_checkout__select-seller"
            type="select"
            // value={ seller }
            onChange={ ({ target: { value } }) => setSeller(value) }
          >
            {
              data.map((vendor) => (
                <option value={ vendor.name } key={ vendor.name }>
                  {vendor.name}
                </option>
              ))
            }
          </select>
          <input
            placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
            type="text"
            onChange={ ({ target: { value } }) => setAddress(value) }
            data-testid="customer_checkout__input-address"
          />
          <input
            placeholder="198"
            type="text"
            onChange={ ({ target: { value } }) => setAddressNumber(value) }
            data-testid="customer_checkout__input-addressNumber"
          />
          <button
            type="submit"
            data-testid="customer_checkout__button-submit-order"
            disabled={ !isValid }
          >
            Finalizar Pedido
          </button>
        </form>
      </div>
    </CheckoutStyles>
  );
}

export default Checkout;
