// components/renderQuestion.ts
import { QuizState } from "./quizState";
import { Question, quizQuestions } from "../data/quizQuestions";

export const renderQuestion = (
    quizState: QuizState,
    quizContainerBody: HTMLElement
): void => {
    const question: Question = quizQuestions[quizState.currentQuestionIndex];

    if (!quizContainerBody) {
        throw new Error("HTML Element does not exist...");
    }

    quizContainerBody.innerHTML = `
    <h2 class="quiz-container__question">${question.questionText}</h2>
    <div class="quiz-container__options-body">
      <ul class="quiz-options">
        ${question.options
            .map(
                (option, index) => `
              <li data-index=${index} class="${
                    quizState.questionAnswered ? "disabled" : ""
                }">
                ${option}
              </li>`
            )
            .join("")}
      </ul>
    </div>       
  `;
};
