import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  }

body {
  font-family: 'Poppins';
  }

button {
  cursor: pointer;
}
  
ul, 
ol {
    list-style: none;
  }

img {
    display: block;
    max-width: 100%;
    height: auto;
  }

a {
    text-decoration: none;
    color: inherit;
  }  
`;

export const Container = styled.div`
  width: 320px;
  margin: auto 0;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;
