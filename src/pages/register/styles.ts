import styled from 'styled-components'

export const PageContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: url(${import.meta.env.BASE_URL}assets/backgrounds/1.casa_start.png) no-repeat center;
    background-size: cover;
`

export const Image = styled.img`
    width: 30%;
    height: 30%;
    min-width: 300px;
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

    color: ${(props) => props.theme['black']};
    background-color: ${(props) => props.theme['background']};

    border: 0;
    outline: 0;
    border-radius: 8px;

    &::placeholder {
        color: ${(props) => props.theme['black']};
        font-size: 0.8rem;
    }

    &:focus {
        border: 1px solid black;
    }
`

export const InputLabel = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
`