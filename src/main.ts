import "./style.scss";
import { quizQuestions } from "./data/quizQuestions";

const quizContainerBody = document.querySelector<HTMLElement>(
    ".quiz-container__body"
);
const quizProgress = document.querySelector<HTMLDivElement>(".quiz-progress");

if (!quizContainerBody || !quizProgress)
    throw new Error("Element does not exist...");

let currentQuestionIndex: number = 0;

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

quizProgress.textContent = `Question ${currentQuestionIndex + 1}/${
    quizQuestions.length
}`;
