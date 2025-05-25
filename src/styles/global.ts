import { createGlobalStyle } from 'styled-components'

import PressStart2P from '../assets/fonts/PressStart2P-Regular.ttf';
import Handjet from '../assets/fonts/Handjet.ttf';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'PressStart2P';
        src: url(${PressStart2P}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Handjet';
        src: url(${Handjet}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }

    *:focus {
        border: 0;
        outline: 0;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 100vw;
    }

    ::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.purple};
        border-radius: 100vw;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${(props) => props.theme['purple-dark']};
    }

    body, input, button {
        -webkit-font-smoothing: antialiased;
        font-family: 'Handjet', sans-serif;
        font-size: 1rem;
    }
`