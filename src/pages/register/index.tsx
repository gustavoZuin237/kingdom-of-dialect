import { useState } from 'react'

import * as s from './styles'

import { Eye, EyeSlash } from "@phosphor-icons/react"

export function Register() {
    const [showPassword, setShowPassword] = useState(false)

    function submitUserRegister() {

    }

    return (
        <s.PageContainer>
            <s.TitleContainer>
                <s.Title>Crie sua conta</s.Title>
            </s.TitleContainer>

            <s.InputContainer>
                <s.InputLabel>Nome de usuário</s.InputLabel>
                <s.Input type='text' placeholder='Insira seu nome de usuário' />

                <s.InputLabel>E-mail</s.InputLabel>
                <s.Input type='email' placeholder='Insira seu nome' />

                <s.InputLabel>Senha</s.InputLabel>
                <s.PasswordInputContainer>
                    <s.Input type={showPassword === true ? 'text' : 'password'} placeholder='Insira sua senha' />

                    <s.Button onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ? <Eye size={24} /> : <EyeSlash size={24} />
                        }
                    </s.Button>
                </s.PasswordInputContainer>
            </s.InputContainer>

            <s.SendButton onClick={submitUserRegister}>
                <s.ButtonTitle>
                    Enviar
                </s.ButtonTitle>
            </s.SendButton>
        </s.PageContainer>
    )
}