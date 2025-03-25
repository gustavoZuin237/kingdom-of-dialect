import { expect, test } from 'vitest';
import { getExplanation, getQuestions } from './levelContext';

import { questions } from '../data/questions';
import { explanations } from '../data/explanations';

let category = 1

while (category < 5) {
    // getQuestions testing
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
    
    // getExplanation testing
    test("Should return the correct explanation according to the inserted category", () => {
        expect(getExplanation(1)).toBe(explanations[0].explanation)
    })

    category++
}