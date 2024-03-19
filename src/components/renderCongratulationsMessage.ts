import { QuizState } from "./quizState";
import { quizQuestions } from "../data/quizQuestions";
import { fireConfetti } from "../effects/confetti";

export const renderCongratulationsMessage = (
    quizState: QuizState,
    quizContainerBody: HTMLElement,
    quizNextQuestionButton: HTMLButtonElement
): void => {
    const quizQuestionsLength = quizQuestions.length;
    const congratulationsSection = document.querySelector<HTMLElement>(
        ".quiz-container__congratulations"
    );
    const answeredCountSpan = document.querySelector<HTMLParagraphElement>(
        ".congratulations__answered-count"
    );
    const totalCountSpan = document.querySelector<HTMLSpanElement>(
        ".congratulations__total-count"
    );

    const quizHeading =
        document.querySelector<HTMLHeadingElement>("#quiz-heading");

    const progress = document.querySelector<HTMLDivElement>("#progress");

    if (
        !answeredCountSpan ||
        !totalCountSpan ||
        !quizNextQuestionButton ||
        !quizContainerBody ||
        !congratulationsSection ||
        !quizHeading ||
        !progress
    ) {
        throw new Error("HTML Element does not exist...");
    }

    congratulationsSection.style.display = "block";
    answeredCountSpan.textContent = quizState.correctAnswers.toString();
    totalCountSpan.textContent = quizQuestionsLength.toString();

    quizNextQuestionButton.style.display = "none";
    quizContainerBody.style.display = "none";
    quizHeading.style.display = "none";
    progress.style.display = "none";
    fireConfetti();
};
