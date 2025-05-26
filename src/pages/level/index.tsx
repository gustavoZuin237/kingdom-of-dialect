import * as s from './styles'

import { useState } from 'react'

import { CharacterImage } from '../../components/CharacterImage'
import { DialogBox } from '../../components/Dialog/DialogBox'

import { dialogs } from '../../data/dialogs'

interface LevelPropsI {
    level: number
}

export function Level({ level } : LevelPropsI) {
    const [currentDialogId, setCurrentDialogId] = useState<string>('1');
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(true);

    const levelDialog = dialogs.find((d) => d.level === level)?.dialogLines;
    const currentLine = levelDialog?.find((line) => line.id === currentDialogId);

    function toggleDialogBox() {
        setIsDialogOpen(!isDialogOpen)
    }

    function handleNext() {
        if (currentLine?.nextId) {
            setCurrentDialogId(currentLine.nextId);
        } 
        
        else {
            setIsDialogOpen(false); // Ends dialog if there's no next
        }
    };

    function handleChoice(nextId: string) {
        setCurrentDialogId(nextId);
    };

    return (
        <s.PageContainer>
            <s.CharacterImageContainer>
                <CharacterImage level={0} />
            </s.CharacterImageContainer>

            <s.ContentContainer>
                {
                    isDialogOpen && currentLine && (
                        <DialogBox
                            speaker={currentLine.speaker}
                            text={currentLine.text}
                            choices={currentLine.choices}
                            onChoice={handleChoice}
                            onNext={handleNext} 
                            visible={isDialogOpen}                
                        />
                    )
                }
            </s.ContentContainer>


            <s.CharacterImageContainer>
                <CharacterImage level={level} />
            </s.CharacterImageContainer>
        </s.PageContainer>
    )
}