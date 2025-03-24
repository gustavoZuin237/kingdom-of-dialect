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

export const Subtitle = styled(Title)`
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