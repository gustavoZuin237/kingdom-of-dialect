import * as s from "./styles"

import { ReactNode } from "react"

interface ButtonPropsI {
    children: ReactNode,
    clickFunction: () => void
    link?: string
    variant: 'white' | 'black' | 'white-outline' | 'black-outline'
    disabled?: boolean
}

export function Button({ children, clickFunction, link, variant, disabled } : ButtonPropsI) {
    return (
        <s.ButtonContainer disabled={disabled} variant={variant} onClick={clickFunction} to={link !== undefined ? link : ""}>
            {children}
        </s.ButtonContainer>
    )
}