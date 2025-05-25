import * as s from './styles'

import { CharacterImage } from '../../components/CharacterImage'
import { DialogBox } from '../../components/DialogBox'

interface LevelPropsI {
    level: number
}

export function Level({level} : LevelPropsI) {
    const username = sessionStorage.getItem("username")

   return (
        <s.PageContainer>
            <s.CharacterImageContainer>
                <CharacterImage level={0} />
            </s.CharacterImageContainer>

            <p>{username}</p>

            <s.ContentContainer>
                <DialogBox level={level} />
            </s.ContentContainer>


            <s.CharacterImageContainer>
                <CharacterImage level={level} />
            </s.CharacterImageContainer>
        </s.PageContainer>
    )
}