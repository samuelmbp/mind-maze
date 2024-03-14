import "./style.scss";
import { quizQuestions } from "./data/quizQuestions";

const quizContainerBody = document.querySelector<HTMLElement>(
    ".quiz-container__body"
);

if (!quizContainerBody) throw new Error("Element does not exist...");

quizQuestions.forEach((question) => {
    quizContainerBody.innerHTML = `
        <h2 class="quiz-container__question">${question.questionText}</h2>
        <div class="quiz-container__options-body">
            <ul class="quiz-options">
                ${question.options
                    .map((option) => `<li>${option}</li>`)
                    .join("")}
            </ul>
        </div>       
    `;
});
