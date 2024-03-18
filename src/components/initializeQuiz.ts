import { renderQuestion } from "./renderQuestion";
import { displayProgress } from "./displayProgress";
import { handleOptionClick } from "./handleOptionClick";
import { handleNextQuestionClick } from "./handleNextQuestionClick";
import { resetQuizGame } from "./resetQuizGame";
import { quizState } from "./quizState";

export const initializeQuiz = (
    quizContainerBody: HTMLElement,
    quizNextQuestionButton: HTMLButtonElement,
    congratulationsSection: HTMLDivElement,
    playAgainButton: HTMLButtonElement
) => {
    quizNextQuestionButton.disabled = true;

    if (!quizContainerBody || !quizNextQuestionButton || !playAgainButton)
        throw new Error("HTMLElement does not exist");

    renderQuestion(quizState, quizContainerBody);
    displayProgress(quizState);

    quizContainerBody.addEventListener("click", (event: Event) =>
        handleOptionClick(event, quizState, quizNextQuestionButton)
    );
    quizNextQuestionButton.addEventListener("click", () =>
        handleNextQuestionClick(quizContainerBody, quizNextQuestionButton)
    );
    playAgainButton.addEventListener("click", () =>
        resetQuizGame(
            quizState,
            quizContainerBody,
            quizNextQuestionButton,
            congratulationsSection
        )
    );
};
