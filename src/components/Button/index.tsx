import * as s from "./styles"

import { ReactNode } from "react"

interface ButtonPropsI {
    children: ReactNode,
    clickFunction: () => void
    link?: string
}

export function Button({ children, clickFunction, link } : ButtonPropsI) {
    return (
        <s.ButtonContainer onClick={clickFunction} to={link !== undefined ? link : ""}>
            {children}
        </s.ButtonContainer>
    )
}