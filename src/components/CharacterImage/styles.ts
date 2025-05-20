import styled from "styled-components";

export const CharacterContainer = styled.div`
    width: 100%;
    height: 100%;

    min-width: 5rem;
    min-height: 2rem;

    background-color: ${(props) => props.theme['background-dark']};

    border: 1px solid;
    border-radius: 100%;

    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Image = styled.img`
    width: 100%;
`