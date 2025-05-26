import { createGlobalStyle } from 'styled-components'

import PressStart2P from '../assets/fonts/PressStart2P-Regular.ttf';
import PixelifySans from '../assets/fonts/PixelifySans.ttf'

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'PressStart2P';
        src: url(${PressStart2P}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'PixelifySans';
        src: url(${PixelifySans}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *:focus {
        border: 0;
        outline: 0;
    }

    html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

    body, input, button {
        -webkit-font-smoothing: antialiased;
        font-family: 'PixelifySans', sans-serif;
        font-size: 1rem;
    }
`