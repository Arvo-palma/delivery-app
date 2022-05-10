// vitals
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import api from '../../api';

// components, mocks and utils
import UsersTable from '../../components/UsersTable';
// import usersResponseMock from './mock/usersResponseMock';
import validateAdminCreate from '../../helper/validateAdminCreate';

// styles
import ManageUsersStyled from './styles';

// constants
const GET_USERS_URL = 'http://localhost:3001/admin/manage';
const DELETE_USER_URL = 'http://localhost:3001/admin/manage/user/';
const ADMIN_PREFIX = 'admin_manage__';
const NAVBAR_PREFIX = 'customer_products__element-navbar-';

function ManageUsers() {
  const userTypes = [
    { value: 'customer', name: 'Cliente' },
    { value: 'seller', name: 'Vendedor' },
  ];

  const [usersResponse, setUsersResponse] = useState([]);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [deletedOrUpdated, setDeletedOrUpdated] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const [isHidden, setIsHidden] = useState(true);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRole, setUserRole] = useState(userTypes[0].value);
  const [userData, setUserData] = useState({});

  const logout = () => {
    localStorage.clear();
    setShouldRedirect(true);
  };

  const resetDefault = () => {
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#password').value = '';
    setUserName('');
    setUserEmail('');
    setUserPassword('');
    setUserRole(userTypes[0].value);
  };

  const submitUser = () => {
    setUserData({
      name: userName,
      email: userEmail,
      password: userPassword,
      role: userRole,
    });
    resetDefault();
  };

  const registerUser = async () => {
    setIsHidden(true);

    // const userExists = await usersResponse.find((user) => user.name === userData.name
    //   || user.email === userData.email);
    // if (userExists) return setIsHidden(false);

    const userToken = await JSON.parse(localStorage.getItem('user')).token;

    await api.post('/admin/manage/user', {
      ...userData,
    }, {
      headers: {
        authorization: userToken,
      },
    }).catch((err) => {
      console.log(err.response.status);
      setIsHidden(false);
    });

    setDeletedOrUpdated(true);
  };

  const getUsers = async (url) => fetch(url).then((response) => response.json());

  const deleteUser = async ({ target }) => {
    await fetch(`${DELETE_USER_URL}${target.value}`, { method: 'DELETE' })
      .then((response) => response.json());
    setDeletedOrUpdated(true);
  };

  useEffect(() => {
    const getUsersList = async () => {
      const getAllUsers = await getUsers(GET_USERS_URL);
      console.log(getAllUsers);
      setUsersResponse(getAllUsers);
      setDeletedOrUpdated(false);
    };
    getUsersList();
  }, [deletedOrUpdated]);

  useEffect(() => {
    if (validateAdminCreate(userName, userEmail, userPassword, userRole)) {
      setIsDisable(false);
    } else setIsDisable(true);
  }, [userName, userEmail, userPassword, userRole]);

  useEffect(() => {
    if (Object.keys(userData).length !== 0 && isDisable) {
      registerUser();
    }
  }, [userData, isDisable]);

  if (shouldRedirect) return (<Navigate to="/login" />);

  return (
    <ManageUsersStyled>
      <section className="manage-navigation-bar">
        <section className="page-name-container">
          <span
            className="page-name"
            data-testid={ `${NAVBAR_PREFIX}link-orders` }
          >
            GERENCIAR USUÁRIOS
          </span>
        </section>
        <section className="user-name-logout">
          <section className="user-name-container">
            <span
              className="user-name"
              data-testid={ `${NAVBAR_PREFIX}user-full-name` }
            >
              { JSON.parse(localStorage.getItem('user')) !== null
                ? JSON.parse(localStorage.getItem('user')).name : '' }
            </span>
          </section>
          <button
            className="logout"
            type="button"
            data-testid={ `${NAVBAR_PREFIX}link-logout` }
            onClick={ logout }
          >
            Sair
          </button>
        </section>
      </section>
      <span className="register-user-title">Cadastrar novo usuário</span>
      <section className="register-user-hidden">
        <section className="register-user-container">
          <label htmlFor="name" className="user-label">
            Nome
            <input
              type="text"
              id="name"
              name="name"
              className="user-input"
              placeholder="Nome e sobrenome"
              onChange={ (e) => setUserName(e.target.value) }
              data-testid={ `${ADMIN_PREFIX}input-name` }
            />
          </label>
          <label htmlFor="email" className="user-label">
            Email
            <input
              type="email"
              id="email"
              name="email"
              className="user-input"
              placeholder="seu-email@site.com.br"
              onChange={ (e) => setUserEmail(e.target.value) }
              data-testid={ `${ADMIN_PREFIX}input-email` }
            />
          </label>
          <label htmlFor="password" className="user-label">
            Senha
            <input
              type="password"
              id="password"
              name="password"
              className="user-input"
              placeholder="**********"
              onChange={ (e) => setUserPassword(e.target.value) }
              data-testid={ `${ADMIN_PREFIX}input-password` }
            />
          </label>
          <label htmlFor="role" className="user-label">
            Tipo
            <select
              name="role"
              id="role"
              className="user-input"
              value={ userRole }
              onChange={ (e) => setUserRole(e.target.value) }
              data-testid={ `${ADMIN_PREFIX}select-role` }
            >
              { userTypes.map((type, index) => (
                <option value={ type.value } key={ index }>{type.name}</option>
              ))}
            </select>
          </label>
          <button
            type="button"
            name="register"
            className="button-register"
            disabled={ isDisable }
            data-testid={ `${ADMIN_PREFIX}button-register` }
            onClick={ submitUser }
          >
            CADASTRAR
          </button>
        </section>
        <section className="hidden-message-container">
          { isHidden
            ? (
              <> </>
            )
            : (
              <span
                className="hidden-message"
                data-testid={ `${ADMIN_PREFIX}element-invalid-register` }
              >
                * Usuário já cadastrado
              </span>) }
        </section>
      </section>
      <UsersTable
        users={ usersResponse !== null
          ? usersResponse.filter((user) => user.role !== 'administrator') : [] }
        deleteUser={ deleteUser }
      />
    </ManageUsersStyled>
  );
}

export default ManageUsers;
