/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode } from 'react';

interface LevelContextI {
    example: string
}

interface LevelContextProviderProps {
    children: ReactNode
}

export const LevelContext = createContext({} as LevelContextI);

export function LevelContextProvider({ children }: LevelContextProviderProps) {
    return (
        <LevelContext.Provider 
            value={
                {example: "example string property"}
            }
        >
            { children }
        </LevelContext.Provider>
    )
}