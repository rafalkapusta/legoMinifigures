import { createGlobalStyle } from "styled-components";

export const appTheme = {
    color: {
        blue: "#0b5d8d",
        showDetail: "#9a0202",
        spinnerBlue: "#0e87d3",
        hoverBlue: "#0a5075",
        background: "#0a7979"
    }
};

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${appTheme.color.background};
    margin: 0;
    font-family: Montserrat, sans-serif;
    
    button {
      font-family: inherit;
    }
  }
`;
