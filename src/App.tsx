import React from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "./styles/themes/defaultTheme";

import GlobalStyle from "./styles/global";
import Router from "./routes";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
