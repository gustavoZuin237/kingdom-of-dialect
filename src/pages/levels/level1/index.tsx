import * as s from './styles'

import { useContext, useState } from 'react'
import { LevelContext } from '../../../contexts/levelContext'
import { NavLink } from 'react-router-dom'

export function Level1() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [unlockNext, setUnlockNext] = useState(false)

    const levelContext = useContext(LevelContext)

    const questions = levelContext.getQuestions(1)

    // const username = sessionStorage.getItem("username")

    function checkCorrectAnswer(answerId : number) {
        if (questions[currentQuestion].correctAnswer == answerId) {
            window.alert("Resposta correta!")

            nextQuestion()
        }
        else {
            window.alert("Resposta errada!")
        }
    }

    function nextQuestion() {
        if (currentQuestion <= questions.length) {
            setCurrentQuestion(currentQuestion + 1)
        } 

        setUnlockNext(true)
    }

   return (
        <s.PageContainer>
            <s.ContentContainer>
                <s.ExplanationContainer>
                    <s.ExplanationHeader>
                        <h2>Apresentações em Inglês</h2>

                        <p>Ao se apresentar em inglês, siga uma estrutura simples:</p>

                        <blockquote>"Hi, my name is (seu nome). I am from (seu país). I like (hobby/interesse)."</blockquote>
                    </s.ExplanationHeader>

                    <s.ExplanationMain>
                        <h2>Verbos Básicos</h2>

                        <p>Os verbos básicos ajudam a descrever ações e estados. Aqui estão alguns essenciais:</p>

                        <ul>
                            <li>To be (ser/estar) → "I am a student." (Eu sou um estudante.)</li>
                            <li>To have (ter) → "She has a book." (Ela tem um livro.)</li>
                            <li>To like (gostar) → "They like music." (Eles gostam de música.)</li>
                        </ul>
                    </s.ExplanationMain>

                    <s.ExplanationFooter>
                        <p>Aprender esses verbos e como se apresentar corretamente ajudará na comunicação básica em inglês!</p>
                    </s.ExplanationFooter>
                </s.ExplanationContainer>

                <s.QuestionsContainer>
                    {
                        currentQuestion < questions.length ? (
                            <>
                                { questions[currentQuestion].question } <br />
                                { questions[currentQuestion].answers.map((answer) => {
                                    return <button key={answer.id} onClick={() => {checkCorrectAnswer(answer.id)}}>{answer.answer}</button>
                                })}
                            </>
                        ) :
                        
                        unlockNext == true ? (
                            <NavLink to={"/level2"}>Seguir para o próximo nível?</NavLink>
                        )

                        : <></>
                    }
                </s.QuestionsContainer>
            </s.ContentContainer>

            <s.CharacterContainer>
                <s.Image src='src\images\characters\aunt_ferret.png' />
            </s.CharacterContainer>
        </s.PageContainer>
    )
}