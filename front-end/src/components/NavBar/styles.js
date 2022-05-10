// vitals
import styled from 'styled-components';

const NavBarStyled = styled.nav`
  align-items: center;
  background-color: #036b52;
  display: flex;
  font-family: "Work Sans", sans-serif;
  justify-content: space-between;

  > div {
    display: flex;

    a {
      color: white;
      padding: 1rem 3rem;
      text-decoration: none;
      text-transform: uppercase;
    }

    .btn-user {
      background-color: #421981;
      color: white;
      padding: 1rem 3rem;
      text-decoration: none;
    }

    .btn-quit {
      background-color: #056bf7;
      border: none;
      color: white;
      outline: none;
      padding: 1rem 3rem;
      text-decoration: none;
      text-transform: uppercase;
    }
  }

  .current {
    background-color: #2fc18c;
    color: #272727;
  }
`;

export default NavBarStyled;
