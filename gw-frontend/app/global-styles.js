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

  form {
    justify-content: center;
    width: 400px;
    margin-top: 2em;
    padding: 50px;
    box-sizing: content-box;
    background-color: ${MAIN_COLORS.darkTableRow};
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
    margin: 0px;
    padding: 1em 0 1em 0;
    text-align: left;
    background-color: ${MAIN_COLORS.tableCaptionGreen};
    color: white;
    text-align: center;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
  }

  th {
    text-align: left;
    padding: 0.5em 1em 0.5em 1em;
    font-size: medium;
  }

  table {
    width: 30vw;
    max-width: 50vw;
    min-width: max-content;
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
