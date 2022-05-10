/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import rockGlass from '../../images/rockGlass.svg';
import api from '../../api';

import Context from '../../context';

const paths = {
  customer: '/customer/products',
  seller: '/seller/orders',
  administrator: '/admin/manage',
  noAccount: '/register',
};

function Login() {
  const { requestData } = useContext(Context);
  // const [email, setEmail] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [reqStatus, setReqStatus] = useState();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const navigate = useNavigate();

  const handleClick = async () => {
    const fetchData = await api.post('/login', {
      email: userEmail,
      password,
    }).catch((err) => {
      console.log(err.response);
      setIsHidden(false);
      setReqStatus(err.response.data.message);
    });

    if (fetchData) {
      const { token } = fetchData.data;
      const { name, email, role } = fetchData.data.userInfo;

      localStorage.setItem('user', JSON.stringify({ name, email, role, token }));
      requestData();
      setUserRole(role);
      setShouldRedirect(true);
    }
  };

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      const userJson = JSON.parse(user);
      console.log(userJson);
      handleClick();
      navigate(paths[userJson.role]);
    }
  }, [navigate]);

  useEffect(() => {
    const EMAIL_REGEX = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const PASSWORD_MIN_CHARS = 6;

    setIsValid(EMAIL_REGEX.test(userEmail) && password.length >= PASSWORD_MIN_CHARS);
  }, [password, userEmail]);

  if (shouldRedirect) {
    switch (userRole) {
    case 'customer':
      return <Navigate to="/customer/products" />;
    case 'seller':
      return <Navigate to="/seller/orders" />;
    case 'administrator':
      return <Navigate to="/admin/manage" />;
    default:
    }
  }

  return (
    <>
      <div>
        <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
          Glass
        </object>
        <br />
        <h1 className="logo">Delivery App</h1>
        <form>
          <label htmlFor="input-email">
            <input
              data-testid="common_login__input-email"
              id="input-email"
              name="email"
              onChange={ ({ target: { value } }) => setUserEmail(value) }
              placeholder="Email"
              type="email"
              value={ userEmail }
            />
          </label>
          <br />
          <label htmlFor="input-password">
            <input
              data-testid="common_login__input-password"
              id="input-password"
              name="password"
              onChange={ ({ target: { value } }) => setPassword(value) }
              placeholder="Password"
              type="password"
              value={ password }
            />
          </label>
          <button
            data-testid="common_login__button-login"
            disabled={ !isValid }
            onClick={ () => handleClick() }
            type="button"
          >
            LOGIN
          </button>
        </form>
        <br />
        <Link to="/register">
          <button
            data-testid="common_login__button-register"
            type="button"
          >
            Ainda não tenho conta
          </button>
        </Link>
      </div>
      { isHidden
        ? (
          <> </>
        )
        : (
          <span
            className="hidden-message"
            data-testid="common_login__element-invalid-email"
          >
            {reqStatus}
          </span>) }
    </>
  );
}

export default Login;
