import styled from 'styled-components'

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 4rem;
`

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
`

export const Title = styled.h1`
    font-size: 3.5vw;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
`

export const InputContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
`

export const PasswordInputContainer = styled(InputContainer)`
    width: 100%;
    flex-direction: row;
`

export const Input = styled.input`
    width: 100%;
    height: 25%;
    padding: 0.5rem;
    border: 1px solid;
    border-radius: 8px;

    &:focus {
        border: 1px solid;
    }
`

export const InputLabel = styled(Title)`
    font-size: 2vw;
`

export const ButtonTitle = styled(Title)`
    font-size: 2vw;
    font-weight: 400;
`

export const Button = styled.button`
    width: 35px;
    height: 35px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid;
    border-radius: 12px;

    transition: 0.2s;

    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }

    // Correção de bug visual onde a borda desaparece se o elemento estiver em foco
    &:focus {
        border: 1px solid;
    }
`

export const SendButton = styled(Button)`
    width: 7rem;
    height: 3rem;
    border-radius: 6px;
`