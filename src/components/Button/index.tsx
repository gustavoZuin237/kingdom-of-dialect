import * as s from "./styles"

import { ReactNode } from "react"

interface ButtonPropsI {
    children: ReactNode,
    clickFunction: () => void
}

export function Button({ children, clickFunction } : ButtonPropsI) {
    return (
        <button onClick={clickFunction}>
            {children}
        </button>
    )
}