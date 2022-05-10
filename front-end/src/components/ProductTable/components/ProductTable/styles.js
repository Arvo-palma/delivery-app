import styled from 'styled-components';

const ProductTableStyles = styled.table`
  width: 80%;
  display: flex;
  flex-flow: column;
  margin: auto;
  thead {
    margin: 1rem 0;
    width: 100%;
    tr {
      align-items: center;
      display: flex;
      > div:nth-of-type(1) {
        display: flex;
        width: 70%;
        justify-content: space-between;
        width: 7%;
      }
      > th:nth-of-type(2) {
        width: 63%;
      }
    }
    > div:nth-of-type(2) {
      align-items: center;
      display: flex;
      justify-content: space-evenly;
      width: 30%;
    }
  }
}
tbody {
  width: 100%;
  tr {
    align-items: center;
    display: flex;
    width: 100%;
    margin: 1rem auto;
    justify-content: space-between;
    > td:nth-of-type(1) {
      background-color: #2fc18c;
      border-radius: 8px 0 0 8px;
      width: 7%;
      text-align: center;
      padding: 2px;
    }
    > td:nth-of-type(2) {
      align-items: center;
      background-color: #eaf1ef;
      display: flex;
      width: 63%;
      padding: 2px;
    }
    > td:nth-of-type(3) {
      background-color: #036b52;
      color: #fff;
      font-weight: 600;
      text-align: center;
      width: 10%;
    }
    > td:nth-of-type(4) {
      background-color: #421981;
      color: #fff;
      font-weight: 600;
      text-align: center;
      width: 10%;
    }
    > td:nth-of-type(5) {
      background-color: #056cf9;
      color: #fff;
      font-weight: 600;
      text-align: center;
      width: 10%;
    }
  }
}
`;

export default ProductTableStyles;
