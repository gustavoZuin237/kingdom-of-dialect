import * as s from './styles'

import { useContext } from 'react'
import { LevelContext } from '../../../contexts/levelContext'

export function Level1() {
    const levelContext = useContext(LevelContext)

    const questions = levelContext.getQuestions(1)

   return (
        <s.PageContainer>
            <s.ContentContainer>
                /* EXPLANATION */ <br /> <br /> 

                { questions[0].question }
            </s.ContentContainer>

            <s.CharacterContainer>
                <s.Image src='src\images\placeholder-character.png' />
            </s.CharacterContainer>
        </s.PageContainer>
    )
}