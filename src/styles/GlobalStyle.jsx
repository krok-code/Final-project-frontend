import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after  {
  box-sizing: border-box;
}

body {
    font-family: 'Poppins', 'Golos Text', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    margin: 0;
    color: var(--text-color);
    background-color: var(--background-color);
    transition: background-color var(--easedTransition), color var(--easedTransition);
    overflow-x: hidden;
}

#root {
  @media screen and (min-width: 1440px){
    display: grid;
    grid-template: "sidebar header header" 68px
        "sidebar main main" auto 
        / 260px auto auto;    
  }
}

header {
  @media screen and (min-width: 1440px){
    grid-area: header;
    grid-column: 2 / -1;
  }
}

main {
  @media screen and (min-width: 1440px){
    grid-area: main;
    grid-column: 2 / -1;
    grid-row: 2 / -1;
  }
}

aside {
  @media screen and (min-width: 1440px){
    grid-area: sidebar;
    grid-column: 1 / 1;
    grid-row: 1 / -1;
  }
}

 ::-webkit-scrollbar {
  width: 7px;
} 

::-webkit-scrollbar-thumb {
  background-color: var(--scroll-bar-color);
  border-radius: 7px;
}

::-webkit-scrollbar-track {
   background-color: var(--scroll-bar-bg);
   color: rgba(255, 255, 255, 0.4);
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

button {
  font-family: inherit;
  border: none;
  cursor: pointer;
}

input {
  font-family: inherit;

  &:focus {
    outline: none;
  }
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  border: none;
}

.themed_toaster {
  border: 1px solid var(--accent-color);
  background-color: var(--background-color);
  color: var(--text-color);
  text-align: center;
  filter: drop-shadow(1px 1px 7px var(--accent-color));
}
`;

export default GlobalStyles;
