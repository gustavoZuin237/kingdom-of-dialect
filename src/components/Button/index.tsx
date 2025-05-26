import * as s from "./styles"

import { ReactNode } from "react"

interface ButtonPropsI {
    children: ReactNode,
    clickFunction: () => void
    link?: string
    variant: 'white' | 'black' | 'white-outline' | 'black-outline'
}

export function Button({ children, clickFunction, link, variant } : ButtonPropsI) {
    return (
        <s.ButtonContainer variant={variant} onClick={clickFunction} to={link !== undefined ? link : ""}>
            {children}
        </s.ButtonContainer>
    )
}