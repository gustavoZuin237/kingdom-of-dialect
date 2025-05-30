import styled from 'styled-components'

export const PageContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 4rem;

    background: url("/assets/backgrounds/9.creditos_jogo.png") no-repeat center;
    background-size: cover;
`

export const CreditsContainer = styled.div`
    width: 75%;
    height: auto;
    padding: 2rem;
    background-color: ${(props) => props.theme['background']};
    color: ${(props) => props.theme['black']};
    border-radius: 12px;
    overflow-y: scroll;
    overflow-x: hidden;
`

export const CreditsHeader = styled.header`
    font-weight: bold;
    font-size: 1.25rem;
    margin-block: 0.5rem;
`