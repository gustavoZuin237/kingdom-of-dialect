import styled from "styled-components";

export const DialogBoxContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${(props) => props.theme['background']};
    border-radius: 8px;

    padding: 1.5rem;

    font-size: 0.8rem;

    &:hover {
        opacity: 0;
        transition: 0.5s;
    }
`