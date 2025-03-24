import * as s from './styles'

export function Home() {
    return (
        <s.PageContainer>
            <s.TitleContainer>
                <s.Title>K.O.D: Kingdom of Dialect</s.Title>
            </s.TitleContainer>

            <s.TitleContainer>
                <s.Subtitle>
                    Pronto para começar?
                </s.Subtitle>
            </s.TitleContainer>

            <s.RegisterLink to={"/register"}>
                <p>Criar personagem</p>
            </s.RegisterLink>
        </s.PageContainer>
    )
}