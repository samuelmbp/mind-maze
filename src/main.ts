import "./style.scss";
import { Question, quizQuestions } from "./data/quizQuestions";

const quizContainerBody = document.querySelector<HTMLElement>(
    ".quiz-container__body"
);
const quizProgress = document.querySelector<HTMLDivElement>(".quiz-progress");
const quizNextQuestionButton = document.querySelector<HTMLButtonElement>(
    ".quiz-container__next-button"
);
const congratulationsSection = document.querySelector<HTMLElement>(
    ".quiz-container__congratulations"
);
const answeredCountSpan = document.querySelector<HTMLParagraphElement>(
    ".congratulations__answered-count"
);
const totalCountSpan = document.querySelector<HTMLSpanElement>(
    ".congratulations__total-count"
);

const playAgainButton = document.querySelector<HTMLButtonElement>(
    ".congratulations__play-again-button"
);

if (
    !quizContainerBody ||
    !quizProgress ||
    !quizNextQuestionButton ||
    !congratulationsSection ||
    !answeredCountSpan ||
    !totalCountSpan ||
    !playAgainButton
)
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
                    .map(
                        (option, index) => `
                        <li data-index=${index} class="${
                            questionAnswered ? "disabled" : ""
                        }">
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

const renderCongratulationsMessage = (): void => {
    congratulationsSection.style.display = "block";
    answeredCountSpan.textContent = correctAnswers.toString();
    totalCountSpan.textContent = quizQuestions.length.toString();
    // TODO: Add confetti

    quizNextQuestionButton.style.display = "none";
    quizContainerBody.style.display = "none";
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
        renderCongratulationsMessage();
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

const resetQuizGame = (): void => {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    questionAnswered = false;

    renderQuestion(quizQuestions[currentQuestionIndex]);
    displayProgress();

    congratulationsSection.style.display = "none";
    quizContainerBody.style.display = "block";
    quizNextQuestionButton.style.display = "block";
};

quizNextQuestionButton.addEventListener("click", renderNextQuestion);
playAgainButton.addEventListener("click", resetQuizGame);

// Initial render
renderQuestion(quizQuestions[currentQuestionIndex]);
displayProgress();
