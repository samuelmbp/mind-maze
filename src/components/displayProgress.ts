import { QuizState } from "./quizState";
import { quizQuestions } from "../data/quizQuestions";

export const displayProgress = (quizState: QuizState): void => {
    const quizProgress =
        document.querySelector<HTMLDivElement>(".quiz-progress");

    if (!quizProgress) {
        throw new Error("HTML Element does not exist...");
    }

    quizProgress.textContent = `Question ${
        quizState.currentQuestionIndex + 1
    }/${quizQuestions.length}`;
};
