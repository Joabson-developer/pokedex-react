import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }

  body{
    background: ${({ theme }) => theme.colors.background_900};
    color: ${({ theme }) => theme.colors.text_100};
    font-family: 'Public Sans', sans-serif;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
