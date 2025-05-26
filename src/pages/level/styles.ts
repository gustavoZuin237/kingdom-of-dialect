import styled from 'styled-components'

export const PageContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2rem 4rem 0 2rem;

    height: 100vh;
    background: url("src/assets/backgrounds/1.casa_start.png") no-repeat center;
    background-size: cover;
`

export const ContentContainer = styled.div`
    width: auto;
    height: auto;

    min-width: 40%;
    min-height: 40%;
    max-width: 50%;
    max-height: 50%;

    display: flex;
    align-content: flex-end;
    justify-self: flex-end;
    margin: 0 2rem 0 auto;

    @media (max-width: 600px) {
        max-width: 100%;
        margin-top: 50%;
        margin-inline: auto;
    }
`

export const CharacterImageContainer = styled.div`
    width: 10%;
    height: 25%;
`