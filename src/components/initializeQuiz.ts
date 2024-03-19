import { renderQuestion } from "./renderQuestion";
import { displayProgress } from "./displayProgress";
import { handleOptionClick } from "./handleOptionClick";
import { handleNextQuestionClick } from "./handleNextQuestionClick";
import { resetQuizGame } from "./resetQuizGame";
import { quizState } from "./quizState";
import { quizQuestions } from "../data/quizQuestions";
import { shuffleQuestions } from "../utilities/shuffleQuestions";

export const initializeQuiz = (
    quizContainerBody: HTMLElement,
    quizNextQuestionButton: HTMLButtonElement,
    congratulationsSection: HTMLDivElement,
    playAgainButton: HTMLButtonElement
) => {
    quizNextQuestionButton.disabled = true;
    const quizHeading =
        document.querySelector<HTMLHeadingElement>("#quiz-heading");
    const progress = document.querySelector<HTMLDivElement>("#progress");

    if (
        !quizContainerBody ||
        !quizNextQuestionButton ||
        !playAgainButton ||
        !quizHeading ||
        !progress
    )
        throw new Error("HTMLElement does not exist");

    renderQuestion(quizState, quizContainerBody);
    displayProgress(quizState);

    quizContainerBody.addEventListener("click", (event: Event) =>
        handleOptionClick(event, quizState, quizNextQuestionButton)
    );
    quizNextQuestionButton.addEventListener("click", () =>
        handleNextQuestionClick(quizContainerBody, quizNextQuestionButton)
    );
    playAgainButton.addEventListener("click", () => {
        resetQuizGame(
            quizState,
            quizContainerBody,
            quizNextQuestionButton,
            congratulationsSection
        );
        shuffleQuestions(quizQuestions);
        renderQuestion(quizState, quizContainerBody);
        quizHeading.style.display = "block";
        progress.style.display = "inline-block";
    });
};
