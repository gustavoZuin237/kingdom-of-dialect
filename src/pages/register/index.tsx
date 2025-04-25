import * as s from './styles'

export function Register() {
    function submitUserRegister() {
        
    }

    return (
        <s.PageContainer>
            <s.TitleContainer>
                <s.Title>Escolha um nome para seu personagem:</s.Title>
            </s.TitleContainer>

            <s.InputContainer>
                <s.InputLabel>Nome do jogador</s.InputLabel>
                <s.Input type='text' placeholder='Insira seu nome...' />
            </s.InputContainer>

            <s.Button onClick={submitUserRegister} to={"/level1"}>
                <s.ButtonTitle>
                    Começar jornada!
                </s.ButtonTitle>
            </s.Button>
        </s.PageContainer>
    )
}