import "./style.scss";
import { Question, quizQuestions } from "./data/quizQuestions";

const quizContainerBody = document.querySelector<HTMLElement>(
    ".quiz-container__body"
);
const quizProgress = document.querySelector<HTMLDivElement>(".quiz-progress");
const quizNextQuestionButton = document.querySelector(
    "quiz-container__next-button"
);

if (!quizContainerBody || !quizProgress)
    throw new Error("Element does not exist...");

let currentQuestionIndex: number = 0;
let correctAnswers: number = 0;

const renderQuestion = (question: Question) => {
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
};

quizProgress.textContent = `Question ${currentQuestionIndex + 1}/${
    quizQuestions.length
}`;

const checkAnswer = (selectedOption: number) => {
    const question = quizQuestions[currentQuestionIndex];
    const optionsList =
        document.querySelectorAll<HTMLElement>(".quiz-options li");

    optionsList.forEach((option, index) => {
        if (index === selectedOption) {
            if (index === question.correctAnswerIndex) {
                option.classList.add("correct");
                // ADD CONFETTI HERE
                correctAnswers++;
            } else {
                option.classList.add("incorrect");
            }
        }
    });
};

renderQuestion(quizQuestions[currentQuestionIndex]);
checkAnswer(0);
console.log(correctAnswers);
