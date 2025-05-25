import styled from 'styled-components'

export const PageContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* padding: 2rem 2rem; */

    background: url("src/assets/backgrounds/9.creditos_jogo.png") no-repeat center;
    background-size: cover;
`

export const Image = styled.img`
    height: 35%;
    margin-bottom: 2rem;
`

export const InputContainer = styled.div`
    width: 75%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 1rem;
    padding: 1rem 0;
    padding-bottom: 2rem;
    margin-bottom: 1rem;

    border-radius: 12px;
    color: ${(props) => props.theme['text']};
    background-color: ${(props) => props.theme['background-light']};
`

export const Input = styled.input`
    width: 60%;
    height: 25%;
    padding: 0.5rem;

    color: ${(props) => props.theme['text']};
    background-color: ${(props) => props.theme['background']};

    border: 0;
    outline: 0;
    border-radius: 8px;

    &:focus {
        border: 1px solid black;
    }
`

export const InputLabel = styled.h1`
    font-size: 2vw;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
`