import styled from 'styled-components'

type LevelProps = {
  level: number;
};

export const PageContainer = styled.div<LevelProps>`
    display: flex;
    justify-content: space-between;
    padding: 2rem 4rem 0 2rem;

    height: 100vh;
    background-size: cover;
    background: no-repeat center;

    ${({ level }) => {
        switch (level) {
            case 0:
                return `
                    background: url("src/assets/backgrounds/2.portal.png") no-repeat center;
                    background-size: cover;
                `;

            case 1:
                return `
                    background: url("src/assets/backgrounds/3.casa_tia.png") no-repeat center;
                    background-size: cover;
                `;

            case 2:
                return `
                    background: url("src/assets/backgrounds/4.fazenda.png") no-repeat center;
                    background-size: cover;
                `;

            case 3:
                return `
                    background: url("src/assets/backgrounds/5.mercado.png") no-repeat center;
                    background-size: cover;
                `;

            case 4:
                return `
                    background: url("src/assets/backgrounds/6.loja_roupa.png") no-repeat center;
                    background-size: cover;
                `;

            case 5:
                return `
                    background: url("src/assets/backgrounds/7.computador.png") no-repeat center;
                    background-size: cover;
                `;

            case 6:
                return `
                    background: url("src/assets/backgrounds/8.final_portal.png") no-repeat center;
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