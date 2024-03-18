import { QuizState } from "./quizState";
import { Question, quizQuestions } from "../data/quizQuestions";
import icon from "../assets/info.png";

export const renderQuestion = (
    quizState: QuizState,
    quizContainerBody: HTMLElement
): void => {
    const question: Question = quizQuestions[quizState.currentQuestionIndex];

    if (!quizContainerBody) {
        throw new Error("HTML Element does not exist...");
    }

    let questionHTML = `
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

            <span class="quiz-container__hint-icon"> 
                <img src=${icon} />
            </span> 
      </ul>
    </div>      
    
  `;

    if (question.hint) {
        questionHTML += `
            <div class="quiz-container__hint-content">
                <p>${question.hint}</p>
            </div>
        `;
    }

    quizContainerBody.innerHTML = questionHTML;

    const hintIcon = quizContainerBody.querySelector<HTMLSpanElement>(
        ".quiz-container__hint-icon"
    );
    const hintContent = quizContainerBody.querySelector<HTMLElement>(
        ".quiz-container__hint-content"
    );

    if (hintIcon && hintContent) {
        hintIcon.addEventListener("click", () => {
            hintContent.style.display = "block";
        });
    }
};
