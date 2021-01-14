import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
		padding: 0;
		outline: 0;
		font-family: 'Fira Code', sans-serif;
  }


  html, body, #root  {
    width: 100%;
    height: 100%;
  }
  #root {
    background: linear-gradient(to right, #c27b83, #492e61);
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
