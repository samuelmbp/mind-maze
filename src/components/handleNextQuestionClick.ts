import { quizState } from "./quizState";
import { renderQuestion } from "./renderQuestion";
import { displayProgress } from "./displayProgress";
import { renderCongratulationsMessage } from "./renderCongratulationsMessage";
import { quizQuestions } from "../data/quizQuestions";

export const handleNextQuestionClick = (
    quizContainerBody: HTMLElement,
    quizNextQuestionButton: HTMLButtonElement
): void => {
    if (!quizContainerBody || !quizNextQuestionButton) {
        throw new Error("HTMLElement does not exist..");
    }

    if (quizState.currentQuestionIndex >= quizQuestions.length - 1) {
        const scoreHistory = JSON.parse(
            localStorage.getItem("scoreHistory") || "[]"
        );
        scoreHistory.push({
            date: new Date().toLocaleString(),
            score: quizState.correctAnswers,
        });
        localStorage.setItem("scoreHistory", JSON.stringify(scoreHistory));
    }

    if (quizState.currentQuestionIndex < quizQuestions.length - 1) {
        quizState.currentQuestionIndex++;
        quizState.questionAnswered = false;
        renderQuestion(quizState, quizContainerBody);
        displayProgress(quizState);
        quizContainerBody.classList.remove("correct", "incorrect");
        quizNextQuestionButton.disabled = true;
    } else {
        renderCongratulationsMessage(
            quizState,
            quizContainerBody,
            quizNextQuestionButton
        );
    }
};
