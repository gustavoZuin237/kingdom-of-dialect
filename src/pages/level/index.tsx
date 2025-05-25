import * as s from './styles'

import { useState } from 'react'

import { CharacterImage } from '../../components/CharacterImage'
import { DialogBox } from '../../components/Dialog/DialogBox'

interface LevelPropsI {
    level: number
}

export function Level({ level } : LevelPropsI) {
    const [showDialogBox, setShowDialogBox] = useState(true)

    const username = sessionStorage.getItem("username")

    function toggleDialogBox() {
        setShowDialogBox(!showDialogBox)
    }

    return (
        <s.PageContainer>
            <s.CharacterImageContainer>
                <CharacterImage level={0} />
            </s.CharacterImageContainer>

            <p>{username}</p>

            <s.ContentContainer>
                <DialogBox
                   speaker={"Test speaker"}
                   text={"Test text"}
                   onChoice={() => { } }
                   onNext={toggleDialogBox} 
                   visible={showDialogBox}                
                />
            </s.ContentContainer>


            <s.CharacterImageContainer>
                <CharacterImage level={level} />
            </s.CharacterImageContainer>
        </s.PageContainer>
    )
}