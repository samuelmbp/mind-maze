import "./style.scss";
import { Question, quizQuestions } from "./data/quizQuestions";

const quizContainerBody = document.querySelector<HTMLElement>(
    ".quiz-container__body"
);
const quizProgress = document.querySelector<HTMLDivElement>(".quiz-progress");
const quizNextQuestionButton = document.querySelector<HTMLButtonElement>(
    ".quiz-container__next-button"
);

if (!quizContainerBody || !quizProgress || !quizNextQuestionButton)
    throw new Error("HTML Element does not exist...");

let currentQuestionIndex: number = 0;
let correctAnswers: number = 0;
let questionAnswered: boolean = false;

const renderQuestion = (question: Question) => {
    quizContainerBody.innerHTML = `
        <h2 class="quiz-container__question">${question.questionText}</h2>
        <div class="quiz-container__options-body">
            <ul class="quiz-options">
                ${question.options
                    .map((option, index) =>`
                        <li data-index=${index} class="${questionAnswered ? "disabled" : ""}">
                            ${option}
                        </li>`
                    )
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
    const optionsList = document.querySelectorAll<HTMLElement>(".quiz-options li");

    optionsList.forEach((option, index) => {
        if (index === selectedOption) {
            if (index === question.correctAnswerIndex) {
                option.classList.add("correct");
                // ADD CONFETTI HERE
                correctAnswers++;
            } else {
                option.classList.add("incorrect");
            }
        } else {
            // Disable all other options
            option.style.pointerEvents = "none";
        }
    });

    questionAnswered = true;
};

const renderNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        questionAnswered = false;
        renderQuestion(quizQuestions[currentQuestionIndex]);
        displayProgress();
        quizContainerBody.classList.remove("correct", "incorrect");
    } else {
        alert(
            `Quiz completed! You answered ${correctAnswers} out of ${quizQuestions.length} questions correctly.`
        );
    }
};

// TODO: Refactor by extracting the logic into a function
quizContainerBody.addEventListener("click", (event: Event) => {
    const target = event.target as HTMLElement;

    if (target.tagName === "LI") {
        const selectedOptionIndex = parseInt(target.dataset.index || "0");
        checkAnswer(selectedOptionIndex);
    }
});

quizNextQuestionButton.addEventListener("click", renderNextQuestion);

// Initial render
renderQuestion(quizQuestions[currentQuestionIndex]);
displayProgress();
