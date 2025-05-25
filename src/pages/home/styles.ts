import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

export const PageContainer = styled.div`
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 2rem 4rem;

    background: url("src/assets/backgrounds/start-screen.png") no-repeat center;
    background-size: cover;
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