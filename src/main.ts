import "./style.scss";
import { Question, quizQuestions } from "./data/quizQuestions";

const quizContainerBody = document.querySelector<HTMLElement>(
    ".quiz-container__body"
);
const quizProgress = document.querySelector<HTMLDivElement>(".quiz-progress");
const quizNextQuestionButton = document.querySelector<HTMLButtonElement>(
    ".quiz-container__next-button"
);
console.log(quizNextQuestionButton);

if (!quizContainerBody || !quizProgress || !quizNextQuestionButton)
    throw new Error("HTML Element does not exist...");

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

const displayProgress = (): void => {
    quizProgress.textContent = `Question ${currentQuestionIndex + 1}/${
        quizQuestions.length
    }`;
};

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

const renderNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuestion(quizQuestions[currentQuestionIndex]);
        displayProgress();
    } else {
        console.log("End game");
    }
};

quizNextQuestionButton.addEventListener("click", renderNextQuestion);

// Initial render
renderQuestion(quizQuestions[currentQuestionIndex]);
displayProgress();
checkAnswer(3);
