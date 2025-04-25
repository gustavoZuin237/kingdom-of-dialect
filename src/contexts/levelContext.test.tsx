import { expect, test } from 'vitest';
import { getExplanation, getQuestions, getUsedQuestions } from './levelContext';

import { questions } from '../data/questions';
import { explanations } from '../data/explanations';

let category = 1

while (category < 5) {
    // getExplanation
    test("Should return the correct explanation according to the inserted category", () => {
        expect(getExplanation(category)).toBe(explanations[category - 1].explanation)
    })    

    // getQuestions
    test("Should return 3 random questions", () => {
        expect(getQuestions(category).length).toBe(3)
    })
    
    test("Should return valid questions", () => {
        const selectedQuestions = getQuestions(category)
    
        expect(questions[category - 1].questionList.includes(selectedQuestions[0]))
        expect(questions[category - 1].questionList.includes(selectedQuestions[1]))
        expect(questions[category - 1].questionList.includes(selectedQuestions[2]))
    })
    
    test("Should return different questions", () => {
        const selectedQuestions = getQuestions(category)
    
        expect(selectedQuestions[0] !== selectedQuestions[1])
        expect(selectedQuestions[0] !== selectedQuestions[2])
        expect(selectedQuestions[1] !== selectedQuestions[2])
    })

    // getUsedQuestions
    test("Should return used questions", () => {
        const selectedQuestions = getQuestions(category)
        const usedQuestions = getUsedQuestions(category)
        
        expect(selectedQuestions == usedQuestions).toBeTruthy()
    })

    category++
}