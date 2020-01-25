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
`;

export default GlobalStyle;
