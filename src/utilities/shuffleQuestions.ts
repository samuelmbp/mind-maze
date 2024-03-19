import { Question } from "../data/quizQuestions";

export const shuffleQuestions = (questions: Question[]) => {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Swaps each element with another randomly selected element.
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
};
