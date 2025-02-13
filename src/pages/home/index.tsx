import * as s from './styles'

export function Home() {
    return (
        <s.PageContainer>
            <s.TitleContainer>
                <s.Title>K.O.D: Kingdom of Dialect</s.Title>
            </s.TitleContainer>
            
            <s.InputContainer>
                <s.InputTitle>Login:</s.InputTitle>

                <s.Input type='text' placeholder='Insira o e-mail' />

                <s.Input type='password' placeholder='Insira a senha' />

                <s.Button>
                    <s.ButtonTitle>
                        Enviar
                    </s.ButtonTitle>
                </s.Button>

                <s.RegisterLink to={"/register"}>
                    <p>Crie uma conta</p>
                </s.RegisterLink>
            </s.InputContainer>
        </s.PageContainer>
    )
}