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
    !congratulationsSection ||
    !answeredCountSpan ||
    !totalCountSpan ||
    !playAgainButton ||
    !quizNextQuestionButton
)
    throw new Error("HTML Element does not exist...");

let currentQuestionIndex: number = 0;
let correctAnswers: number = 0;
let questionAnswered: boolean = false;
// quizNextQuestionButton.disabled = true;

const renderQuestion = () => {
    const question: Question = quizQuestions[currentQuestionIndex];

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

const handleOptionClick = (event: Event) => {
    const target = event.target as HTMLElement;

    if (target.tagName === "LI") {
        const selectedOptionIndex = parseInt(target.dataset.index || "0");
        checkAnswer(selectedOptionIndex);
        quizNextQuestionButton.disabled = false;
    }
};

const handleNextQuestionClick = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        questionAnswered = false;
        renderQuestion();
        displayProgress();
        quizContainerBody.classList.remove("correct", "incorrect");
        quizNextQuestionButton.disabled = true;
    } else {
        renderCongratulationsMessage();
    }
};

const resetQuizGame = (): void => {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    questionAnswered = false;

    renderQuestion();
    displayProgress();

    congratulationsSection.style.display = "none";
    quizContainerBody.style.display = "block";
    quizNextQuestionButton.style.display = "block";
    quizNextQuestionButton.disabled = true;
};

// Initial render
const initializeQuiz = () => {
    quizNextQuestionButton.disabled = true;

    renderQuestion();
    displayProgress();

    quizContainerBody.addEventListener("click", handleOptionClick);
    quizNextQuestionButton.addEventListener("click", handleNextQuestionClick);
    playAgainButton.addEventListener("click", resetQuizGame);
};

initializeQuiz();
