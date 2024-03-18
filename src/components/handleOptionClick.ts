import { checkAnswer } from "./checkAnswer";
import { QuizState } from "./quizState";

export const handleOptionClick = (
    event: Event,
    quizState: QuizState,
    quizNextQuestionButton: HTMLButtonElement
) => {
    if (!quizNextQuestionButton)
        throw new Error("HTMLElement does not exist...");

    const target = event.target as HTMLElement;
    if (target.tagName === "LI") {
        const selectedOptionIndex = parseInt(target.dataset.index || "0");
        checkAnswer(selectedOptionIndex, quizState);
        quizNextQuestionButton.disabled = false;
    }
};
