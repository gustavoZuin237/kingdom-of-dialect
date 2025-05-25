import * as s from './styles'

import { useState } from 'react'

import { dialogs } from '../../data/dialogs'
import { questions } from '../../data/questions'
import { answers } from '../../data/answers'

import { Button } from '../Button'
interface DialogPropsI {
    level: number
}

export function DialogBox({ level } : DialogPropsI) {
    const [currentDialog, setCurrentDialog] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0)

    const dialogObject = dialogs.filter((dialog) => {
        return dialog.level == level
    })

    const dialogList = dialogObject[0].dialog

    const questionsObject = questions.filter((question) => {
        return question.level == level
    })

    const questionsList = questionsObject[0].questions

    const answersObject = answers.filter((answer) => {
        return answer.level == level
    })

    const answersList = answersObject[0]

    function stepDialog() {
        setCurrentDialog(currentDialog + 1)
    }

    function stepQuestion(selectedAnswer : string) {
        if (selectedAnswer == answersList.correctAnswer) {
            window.alert("Resposta correta! Muito bem")
        }

        else {
            window.alert("Resposta errada... Tudo bem, você tentou o seu melhor!")
        }

        if (currentQuestion == 0) {
            setCurrentQuestion(currentQuestion + 1)
        }

        else {
            return
            // navegar para próxima página
        }
    }

    return (
        <s.DialogBoxContainer>
            {
                dialogList.length < currentDialog + 1 ?
                    <>
                        <s.QuestionContainer>
                            { questionsList[currentQuestion] }
                        </s.QuestionContainer>

                        <s.AnswerContainer>
                            { answersList.answers.map((answer) => {
                                return <button key={answer} onClick={() => {stepQuestion(answer)}}>{answer}</button>
                            })}
                        </s.AnswerContainer>
                    </>   
                :
                    <>
                        <s.ContentContainer>
                            { dialogList[currentDialog] }
                        </s.ContentContainer>

                        <Button clickFunction={stepDialog}>
                            {'->'}
                        </Button>
                    </>
            }
        </s.DialogBoxContainer>
    )
}