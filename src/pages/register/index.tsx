import * as s from './styles'

import { useState } from 'react';

import { Button } from '../../components/Button';

export function Register() {
    const [userName, setUserName] = useState<string>("");

    function HandleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value) 
    }

    function submitUserRegister() {
        if (userName !== '') {
            sessionStorage.setItem("username", userName)
        }
    }

    return (
        <s.PageContainer>
            <s.Image src='src/assets/logo/logo.png' />

            <s.InputContainer>
                <s.InputLabel>Nome do jogador</s.InputLabel>
                <s.Input type='text' placeholder='Insira seu nome de jogador...' value={userName} onChange={HandleNameChange} />
            </s.InputContainer>

            {
                userName !== '' ? 
                <Button variant='white' clickFunction={submitUserRegister} link="/level0">
                    NEXT
                </Button>
                :
                <Button disabled variant='white' clickFunction={submitUserRegister} link="">
                    NEXT
                </Button>
            }
        </s.PageContainer>
    )
}