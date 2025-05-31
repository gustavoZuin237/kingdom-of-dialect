import styled from 'styled-components'

export const PageContainer = styled.div`
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 2rem 4rem;

    background: url(${import.meta.env.BASE_URL}assets/backgrounds/start-screen.png) no-repeat center;
    background-size: cover;
`