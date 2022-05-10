// vitals
import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// styles
import NavBarStyled from './styles';

function NavBar({ page }) {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')));
  const navigate = useNavigate();

  if (!user) {
    return <Navigate to="/login" />;
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser({});
    navigate('/login');
  };

  return (
    <NavBarStyled id="navbar">
      <div>
        {user.role === 'customer' && (
          <Link
            to="/customer/products"
            data-testid="customer_products__element-navbar-link-products"
          >
            Produtos
          </Link>
        )}
        <Link
          className={ page === 'pedidos' ? 'current' : '' }
          data-testid="customer_products__element-navbar-link-orders"
          to={ `/${user.role}/orders` }
        >
          Meus Pedidos
        </Link>
      </div>
      <div>
        <span
          className="btn-user"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { JSON.parse(localStorage.getItem('user')) !== null
            ? JSON.parse(localStorage.getItem('user')).name : '' }
        </span>
        <button
          className="btn-quit"
          data-testid="customer_products__element-navbar-link-logout"
          type="button"
          onClick={ () => handleLogout() }
        >
          Sair
        </button>
      </div>
    </NavBarStyled>
  );
}

NavBar.propTypes = {
  page: PropTypes.string.isRequired,
};

export default NavBar;
