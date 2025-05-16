import styled from "styled-components";

export const CharacterContainer = styled.div`
    width: 25%;

    background-color: ${(props) => props.theme['background-dark']};

    border: 1px solid;
    border-radius: 100%;

    padding: 1rem;
    margin-top: 5rem;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Image = styled.img`
    width: 100%;
`