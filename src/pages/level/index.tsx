import * as s from './styles'

import { useContext, useState } from 'react'
import { LevelContext } from '../../contexts/levelContext'
import { NavLink } from 'react-router-dom'

import { Explanation } from '../../components/Explanation'
import { CharacterImage } from '../../components/CharacterImage'

interface LevelPropsI {
    level: number
}

export function Level({level} : LevelPropsI) {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [unlockNext, setUnlockNext] = useState(false)

    const levelContext = useContext(LevelContext)

    const questions = levelContext.getQuestions(level)

    const username = sessionStorage.getItem("username")

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
                <Explanation level={level} />

                <s.QuestionContainer>
                    <p>{username}</p>

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
                </s.QuestionContainer>
            </s.ContentContainer>

            <CharacterImage level={level} />
        </s.PageContainer>
    )
}