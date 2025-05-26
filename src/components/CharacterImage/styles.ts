import styled from "styled-components";

export const CharacterContainer = styled.div`
    width: 100%;
    height: auto;
    min-width: 100px;
    padding: 1rem;

    background-color: ${(props) => props.theme['background']};
    border-radius: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Image = styled.img`
    width: 100%;
`