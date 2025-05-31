import styled from 'styled-components'

type LevelProps = {
  level: number;
};

export const PageContainer = styled.div<LevelProps>`
    height: 100vh;
    display: flex;
    justify-content: center;
    padding: 2rem 4rem 0 2rem;

    ${({ level }) => {
        switch (level) {
            case 0:
                return `
                    background: url(${import.meta.env.BASE_URL}assets/backgrounds/2.portal.png) no-repeat center;
                    background-size: cover;
                `;

            case 1:
                return `
                    background: url(${import.meta.env.BASE_URL}assets/backgrounds/3.casa_tia.png) no-repeat center;
                    background-size: cover;
                `;

            case 2:
                return `
                    background: url(${import.meta.env.BASE_URL}assets/backgrounds/4.fazenda.png) no-repeat center;
                    background-size: cover;
                `;

            case 3:
                return `
                    background: url(${import.meta.env.BASE_URL}assets/backgrounds/5.mercado.png) no-repeat center;
                    background-size: cover;
                `;

            case 4:
                return `
                    background: url(${import.meta.env.BASE_URL}assets/backgrounds/6.loja_roupa.png) no-repeat center;
                    background-size: cover;
                `;

            case 5:
                return `
                    background: url(${import.meta.env.BASE_URL}assets/backgrounds/7.computador.png) no-repeat center;
                    background-size: cover;
                `;

            case 6:
                return `
                    background: url(${import.meta.env.BASE_URL}assets/backgrounds/8.final_portal.png) no-repeat center;
                    background-size: cover;
                `;
        
            default:
                break;
        }
    }}
`

export const ContentContainer = styled.div`
    width: auto;
    height: auto;

    min-width: 40%;
    min-height: 40%;
    max-width: 50%;
    max-height: 50%;

    display: flex;
    justify-content: center;
    margin-inline: auto;

    @media (max-width: 700px) {
        max-width: 100%;
        margin-inline: auto;
        margin-top: auto;
        margin-bottom: 50%;
    }
`

export const CharacterImageContainer = styled.div`
    width: 10%;
    height: 25%;
    gap: 1rem;

    display: flex;
    flex-direction: column;
`

export const ReloadWarning = styled.p`
    position: absolute;
    bottom: 10px;
    left: 10px;
    font-weight: bold;
    font-size: 1.15rem;
    margin-top: 2rem;
`