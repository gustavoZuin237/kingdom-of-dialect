import * as s from './styles'

import { DialogChoice } from '../../../data/dialogs';

import { Button } from '../../Button';

import { useState } from 'react';

type DialogBoxProps = {
  speaker: string;
  text: string;
  choices?: DialogChoice[];
  onNext: () => void;
  onChoice: (nextId: string) => void;
  visible: boolean
};

export function DialogBox({ speaker, text, choices, onNext, onChoice, visible } : DialogBoxProps) {
    if (!visible) {
        return null
    }

    const [username] = useState(() => {
        return localStorage.getItem('username') || 'Ferret';
    });

    if (speaker == 'player') {
        speaker = username;
    }

    if (text.includes('{username}')) {
        text = text.replace('{username}', username);
    }

    return (
        <s.DialogBoxContainer>
                <s.Speaker>{speaker}</s.Speaker>
                <s.Text>{text}</s.Text>

                <s.ButtonContainer>
                    {
                        choices && choices.length > 0 ? (
                            choices.map((choice) => (
                                <Button
                                    variant='black-outline'
                                    clickFunction={() => onChoice(choice.nextId)}
                                >
                                    {choice.text}
                                </Button>
                            ))
                        ) 
                        : 
                        (
                            <Button variant='black-outline' clickFunction={onNext}>Next</Button>
                        )
                    }
                </s.ButtonContainer>
        </s.DialogBoxContainer>
    );
};
