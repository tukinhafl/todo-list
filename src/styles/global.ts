import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, div, input, button, form {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
  }
`

export default GlobalStyle