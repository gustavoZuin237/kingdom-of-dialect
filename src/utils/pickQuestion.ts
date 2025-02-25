import { QuestionListInterface, questions } from "../data/questions";

export function pickQuestion(category: string) {
    const questionCategory = questions.filter((question) => {
        return question.category == category
    })

    // Error Handling
    if (questionCategory.length === 0) {
        console.error(`No questions found for category: ${category}`);
        return;
    }

    const questionList = questionCategory[0].questionList
    const selectedQuestions: QuestionListInterface[] = []
    const selectedIndices = new Set(); // Set to track selected indices

    while (selectedQuestions.length < 4) {
        const randomIndex = Math.floor(Math.random() * questionList.length);

        // Check if this index has already been selected
        if (!selectedIndices.has(randomIndex)) {
            selectedIndices.add(randomIndex); // Add the index to the set
            selectedQuestions.push(questionList[randomIndex]); // Add the question to the selectedQuestions
        }
    }

    return selectedQuestions;
}