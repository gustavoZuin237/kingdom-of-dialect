import { useContext } from 'react'
import * as s from './styles'

import { LevelContext } from '../../../contexts/levelContext'

export function Level1() {
    const levelContext = useContext(LevelContext)

    const explanation = levelContext.getExplanation(1)
    const questions = levelContext.getQuestions(1)

   return (
        <s.PageContainer>
            <h1>
                Level 1
            </h1>

            <>
                {console.log("Explicação:", explanation)}
                {console.log("Questões:", questions)}
            </>
        </s.PageContainer>
    )
}