import { createGlobalStyle } from "styled-components";
import 'typeface-montserrat';

export default createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    outline: 0;
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
  }
`