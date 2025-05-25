import * as s from './styles'

import { DialogChoice } from '../../../data/dialogs';

import { Button } from '../../Button';

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

    return (
        <s.DialogBoxContainer>
                <s.Speaker>{speaker}</s.Speaker>
                <s.Text>{text}</s.Text>

                <s.ButtonContainer>
                    {
                        choices && choices.length > 0 ? (
                            choices.map((choice) => (
                                <Button
                                    key={choice.nextId}
                                    clickFunction={() => onChoice(choice.nextId)}
                                >
                                    {choice.text}
                                </Button>
                            ))
                        ) 
                        : 
                        (
                            <Button clickFunction={onNext}>Next</Button>
                        )
                    }
                </s.ButtonContainer>
        </s.DialogBoxContainer>
    );
};
