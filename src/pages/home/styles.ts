import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

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
    margin-bottom: 4rem;
`

export const Title = styled.h1`
    font-size: 6vw;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
`

export const ButtonTitle = styled(Title)`
    font-size: 2vw;
    font-weight: 400;
`

export const Button = styled.button`
    width: 30%;
    height: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    align-self: center;
    justify-self: center;

    padding: 5px;
    border: 1px solid;
    border-radius: 8px;

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

export const InputContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
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

export const InputTitle = styled(Title)`
    font-size: 2vw;
`

export const RegisterLink = styled(NavLink)`
    text-decoration: none;
    font-size: 1.5vw;
    color: black;

    transition: 0.2s;

    &:hover {
        opacity: 0.6;
    }
`