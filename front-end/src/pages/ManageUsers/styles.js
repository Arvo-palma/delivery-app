// vitals
import styled from 'styled-components';

const ManageUsersStyled = styled.section`
  height: 100vh;
  width: 100vw;

  .manage-navigation-bar {
    background-color: rgb(3, 107, 82);
    display: flex;
    flex-direction: row;
    height: 3.5em;
    justify-content: space-between;
    margin: auto auto 1.5em;
    width: 100%;

    .page-name-container {
      background-color: rgb(47, 193, 140);
      display: flex;
      height: 100%;
      width: 20%;

      .page-name {
        font-size: 1em;
        font-weight: 700;
        margin: auto;
      }
    }

    .user-name-logout {
      display: flex;
      flex-direction: row;
      width: 30%;

      .user-name-container {
        background-color: rgb(66, 25, 129);
        display: flex;
        height: 100%;
        width: 65%;

        .user-name {
          color: white;
          font-size: 1.2em;
          margin: auto;
        }
      }

      .logout {
        background-color: rgb(5, 108, 249);
        border: transparent;
        color: white;
        font-size: 1em;
        width: 35%;
      }
    }
  }

  .register-user-title {
  color: rgb(50, 50, 50);
  font-size: 1.4em;
  font-weight: 700;
  margin-left: 5em;
  }

  .register-user-hidden {
    background-color: rgb(250, 250, 250);
    box-shadow: 0 1px 2px 1px rgb(190, 190, 190);
    display: flex;
    flex-direction: column;
    height: 6em;
    margin: 0.5em auto 1.5em;
    width: 85%;

    .register-user-container {
      align-items: center;
      display: flex;
      flex-direction: row;
      height: 95%;
      justify-content: space-evenly;
      width: 100%;

      label {
        display: flex;
        flex-direction: column;
      }

      .user-label {
        height: 3.8em;
        width: 20%;
      }

      .user-input {
        border: 1px solid black;
        border-radius: 4px;
        font-size: 1em;
        height: 100%;
        padding-left: 1em;
        width: 100%;
      }

      .button-register {
        background-color: rgb(0, 110, 80);
        border: transparent;
        border-radius: 8px;
        color: white;
        font-size: 1em;
        height: 3em;
        width: 12%;
      }

      .button-register:disabled {
        background-color: rgba(0, 110, 80, 0.7);
        color: rgba(rgb(210, 210, 210), 0.8);
      }

      .hidden-message-container {
        text-align: end;

        .hidden-message {
          font-size: 0.8em;
          margin-right: 1.5em;
        }
      }
    }
  }
`;

export default ManageUsersStyled;
