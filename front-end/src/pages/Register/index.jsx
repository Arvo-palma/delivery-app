// vitals
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import api from '../../api';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reqStatus, setReqStatus] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    const NUMBER_OF_CHARACTERS = 12;
    const EMAIL_REGEX = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const PASSWORD_MIN_CHARS = 6;

    setIsValid(
      name.length >= NUMBER_OF_CHARACTERS
      && EMAIL_REGEX.test(email)
      && password.length >= PASSWORD_MIN_CHARS,
    );
  }, [name, password, email, shouldRedirect]);

  const handleClick = async () => {
    const newUser = await api.post('/register', {
      name,
      email,
      password,
    }).catch((err) => {
      console.log(err.response);
      setIsHidden(false);
      setReqStatus(err.response.data.message);
    });

    if (!newUser) {
      return;
    }

    if (newUser.data.token) {
      localStorage.setItem(
        'user',
        JSON.stringify({ email, name, role: 'customer', token: newUser.data.token }),
      );
      setShouldRedirect(true);
    }
  };

  if (shouldRedirect) return <Navigate to="/customer/products" />;

  return (
    <>
      <div>
        <h1 className="register">Cadastro</h1>
        <form onSubmit={ (event) => { event.preventDefault(); } }>
          <label htmlFor="input-name">
            Nome
            <input
              data-testid="common_register__input-name"
              id="input-name"
              name="name"
              onChange={ (evt) => setName(evt.target.value) }
              placeholder="Seu nome"
              type="text"
              value={ name }
            />
          </label>
          <br />
          <label htmlFor="input-email">
            Email
            <input
              data-testid="common_register__input-email"
              id="input-email"
              name="email"
              onChange={ (evt) => setEmail(evt.target.value) }
              placeholder="seu-email@site.com.br"
              type="email"
              value={ email }
            />
          </label>
          <br />
          <label htmlFor="input-password">
            Senha
            <input
              data-testid="common_register__input-password"
              id="input-password"
              name="password"
              onChange={ (evt) => setPassword(evt.target.value) }
              placeholder="**********"
              type="password"
              value={ password }
            />
          </label>
          <button
            data-testid="common_register__button-register"
            disabled={ !isValid }
            onClick={ handleClick }
            type="button"
          >
            CADASTRAR
          </button>
        </form>
      </div>
      { isHidden
        ? (
          <> </>
        )
        : (
          <span
            className="hidden-message"
            data-testid="common_register__element-invalid_register"
          >
            {reqStatus}
          </span>) }
    </>
  );
}

export default Register;
