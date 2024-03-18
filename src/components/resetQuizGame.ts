import { renderQuestion } from "./renderQuestion";
import { displayProgress } from "./displayProgress";
import { QuizState } from "./quizState";


export const resetQuizGame = (
    quizState: QuizState,
    quizContainerBody: HTMLElement,
    quizNextQuestionButton: HTMLButtonElement,
    congratulationsSection: HTMLDivElement
): void => {
    if (
        !congratulationsSection ||
        !quizContainerBody ||
        !quizNextQuestionButton
    )
        throw new Error("HTML Element does not exist...");

    quizState.currentQuestionIndex = 0;
    quizState.correctAnswers = 0;
    quizState.questionAnswered = false;

    renderQuestion(quizState, quizContainerBody);
    displayProgress(quizState);

    congratulationsSection.style.display = "none";
    quizContainerBody.style.display = "block";
    quizNextQuestionButton.style.display = "block";
    quizNextQuestionButton.disabled = true;
};
