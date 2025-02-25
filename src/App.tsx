import { LevelContextProvider } from "./contexts/levelContext";

import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import {
  BrowserRouter
} from "react-router-dom";

import { Router } from "./router";

document.title = "K.O.D | Kingdom of Dialect";

export function App() {
  return (
    <LevelContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        
        <GlobalStyle />
      </ThemeProvider>
    </LevelContextProvider>
  );
}
