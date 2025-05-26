import * as s from './styles'

import { useState } from 'react'

import { CharacterImage } from '../../components/CharacterImage'
import { DialogBox } from '../../components/Dialog/DialogBox'
import { Button } from '../../components/Button'

import { dialogs } from '../../data/dialogs'

interface LevelPropsI {
    level: number
}

export function Level({ level } : LevelPropsI) {
    const [currentDialogId, setCurrentDialogId] = useState<string>('1');
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(true);

    const levelDialog = dialogs.find((d) => d.level === level)?.dialogLines;
    const currentLine = levelDialog?.find((line) => line.id === currentDialogId);

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

    function handleLevelEnd() {
        setCurrentDialogId('1')
        setIsDialogOpen(true)
    }

    return (
        <s.PageContainer level={level}>
            <s.CharacterImageContainer>
                <CharacterImage level={0} />

                {
                    level >= 2 ? (
                        <CharacterImage level={1} />
                    )
                    :
                    <></>
                }
            </s.CharacterImageContainer>

            <s.ContentContainer>
                {
                    isDialogOpen && currentLine ? (
                        <DialogBox
                            speaker={currentLine.speaker}
                            text={currentLine.text}
                            choices={currentLine.choices}
                            onChoice={handleChoice}
                            onNext={handleNext} 
                            visible={isDialogOpen}                
                        />
                    )
                    :
                    (
                        <Button variant='black-outline' link={`${level < 6 ? `/level${level + 1}` : '/credits'}`} clickFunction={handleLevelEnd}>
                            {
                                level < 6 ? (
                                    <>Próxima fase</>
                                )
                                :
                                (
                                   <>Créditos</> 
                                ) 
                            }
                        </Button>
                    )
                }
            </s.ContentContainer>

            {
                level !== 0 ? (
                    <s.CharacterImageContainer>
                        <CharacterImage level={level} />
                    </s.CharacterImageContainer>
                )
                :
                <></>
            }
        </s.PageContainer>
    )
}