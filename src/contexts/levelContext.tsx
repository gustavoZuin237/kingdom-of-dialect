/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode } from 'react';

import { QuestionListInterface } from '../data/questions';
interface LevelContextI {
    getExplanation: (category: number) => string
    getQuestions: (category: number) => QuestionListInterface[]
    getUsedQuestions: (category: number) => QuestionListInterface[]
}

import { explanations } from '../data/explanations';
import { questions } from '../data/questions';

interface LevelContextProviderProps {
    children: ReactNode
}

export function getExplanation(category: number) {
    const categoryExplanation = explanations.filter((explanation) => {
        return explanation.category == category
    })

    return categoryExplanation[0].explanation
}

export function getQuestions(category: number) {
    const categoryQuestions = questions.filter((question) => {
        return question.category == category
    })

    const getRandomNumber = () => {
        return Math.ceil(Math.random() * 5)
    };

    const questionOptions = categoryQuestions[0].questionList
    const questionList: QuestionListInterface[] = []
    
    while (questionList.length < 3) {
        const questionToAdd = questionOptions[getRandomNumber()]
         if (questionList.includes(questionToAdd) == false) {
            questionList.push(questionToAdd)
        }
    }

    usedQuestions[category - 1].usedQuestions = questionList

    return questionList
}

export function getUsedQuestions(category: number) {
    return usedQuestions[category - 1].usedQuestions
}

interface UsedQuestionI {
    category: number,
    usedQuestions: QuestionListInterface[]
}

const usedQuestions: UsedQuestionI[] = [
    {
        category: 1,
        usedQuestions: []
    },
    {
        category: 2,
        usedQuestions: []
    },
    {
        category: 3,
        usedQuestions: []
    },
    {
        category: 4,
        usedQuestions: []
    },
    {
        category: 5,
        usedQuestions: []
    },
]

export const LevelContext = createContext({} as LevelContextI);

export function LevelContextProvider({ children }: LevelContextProviderProps) {
    return (
        <LevelContext.Provider 
            value={
                {getExplanation, getQuestions, getUsedQuestions}
            }
        >
            { children }
        </LevelContext.Provider>
    )
}