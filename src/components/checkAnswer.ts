import { Question, quizQuestions } from "../data/quizQuestions";
import { QuizState } from "./quizState";

export const checkAnswer = (
    selectedOption: number,
    quizState: QuizState
): void => {
    const question: Question = quizQuestions[quizState.currentQuestionIndex];
    const optionsList =
        document.querySelectorAll<HTMLElement>(".quiz-options li");

    optionsList.forEach((option, index) => {
        if (index === selectedOption) {
            if (index === question.correctAnswerIndex) {
                option.classList.add("correct");
                quizState.correctAnswers++;
            } else {
                option.classList.add("incorrect");
            }
        } else {
            option.style.pointerEvents = "none";
        }
    });

    quizState.questionAnswered = true;
};
