import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'MedievalSharp', cursive;
  }

  body{
    background-color: #222222;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 400px;
`;
