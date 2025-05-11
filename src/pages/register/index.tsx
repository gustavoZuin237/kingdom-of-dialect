import { useState } from 'react';

import * as s from './styles'

export function Register() {
    const [userName, setUserName] = useState<string>("");

    function HandleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value)
    }

    function submitUserRegister() {
        sessionStorage.setItem("username", userName)
    }

    return (
        <s.PageContainer>
            <s.TitleContainer>
                <s.Title>Escolha um nome para seu personagem:</s.Title>
            </s.TitleContainer>

            <s.InputContainer>
                <s.InputLabel>Nome do jogador</s.InputLabel>
                <s.Input type='text' placeholder='Insira seu nome...' value={userName} onChange={HandleNameChange} />
            </s.InputContainer>

            <s.Button onClick={submitUserRegister} to={"/level1"}>
                <s.ButtonTitle>
                    Começar jornada!
                </s.ButtonTitle>
            </s.Button>
        </s.PageContainer>
    )
}