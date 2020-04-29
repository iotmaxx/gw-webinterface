import { createGlobalStyle } from 'styled-components';

import { MAIN_COLORS } from 'containers/App/constants';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.5em;
    color: ${MAIN_COLORS.dark};
  }

  span {
    color: ${MAIN_COLORS.dark};
  }

  button {
    background-color: ${MAIN_COLORS.orange};
    border-radius: 10px;
    border-width: 0px;
    padding: 6px;
    margin-top: 20px;
    cursor: pointer;
    color: ${MAIN_COLORS.dark};
    font-size: large;
  }

  label {
    margin-top: 16px;
  }

  form {
    justify-content: center;
    width: 400px;
    margin-top: 20px;
    padding: 50px;
    box-sizing: content-box;
    border-color: ${MAIN_COLORS.dark};
    border-width: 2px;
    border-style: outset;
    border-radius: 15px;
    background-color: ${MAIN_COLORS.transparentlyBeige};
  }

  input[type=text], input[type=number], input[type=password] {
    border-width: 1px;
    border-style: solid;
    border-radius: 2px;
    padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    width: inherit;
  }

  select {
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: ${MAIN_COLORS.transparentlyDark};
    color: ${MAIN_COLORS.dark};
  }

  caption {
    font-weight: bold;
    font-size: larger;
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: left;
  }

  th {
    text-align: left;
    border: 1px solid ${MAIN_COLORS.tableBorder};
    padding: 8px;
    font-size: medium;
  }

  table {
    width: max-content;
    min-width: 50vw;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px ${MAIN_COLORS.customWebkitScrollbar};
    border-radius: 10px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${MAIN_COLORS.customWebkitScrollbar};
    border-radius: 10px;
  }
`;

export default GlobalStyle;
