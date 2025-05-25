import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const ButtonContainer = styled(NavLink)`
    width: 10rem;
    height: 4rem;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 12px;

    color: ${(props) => props.theme['text']};
    font-size: 1.5rem;
    font-family: "PressStart2P", sans-serif;
    text-decoration: none;

    background-color: ${(props) => props.theme['background-light']};

    &:hover {
        cursor: pointer;
        opacity: 0.75;
    }
`