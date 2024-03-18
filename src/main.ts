import "./style.scss";
import { initializeQuiz } from "./components/initializeQuiz";

const quizContainerBody = document.querySelector<HTMLElement>(
    ".quiz-container__body"
);
const quizNextQuestionButton = document.querySelector<HTMLButtonElement>(
    ".quiz-container__next-button"
);
const congratulationsSection = document.querySelector<HTMLDivElement>(
    ".quiz-container__congratulations"
);
const playAgainButton = document.querySelector<HTMLButtonElement>(
    ".congratulations__play-again-button"
);

if (
    !quizContainerBody ||
    !quizNextQuestionButton ||
    !playAgainButton ||
    !congratulationsSection
)
    throw new Error("HTML Element does not exist...");

initializeQuiz(
    quizContainerBody,
    quizNextQuestionButton,
    congratulationsSection,
    playAgainButton
);
