import * as s from './styles'

import { ReactNode } from 'react';

interface DialogBoxProps {
    children: ReactNode
}

export function DialogBox({ children } : DialogBoxProps) {
    return (
        <s.DialogBoxContainer>
            {children}
        </s.DialogBoxContainer>
    )
}