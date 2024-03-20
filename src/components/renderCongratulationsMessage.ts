import { QuizState } from "./quizState";
import { quizQuestions } from "../data/quizQuestions";
import { fireConfetti } from "../effects/confetti";

export const renderCongratulationsMessage = (
    quizState: QuizState,
    quizContainerBody: HTMLElement,
    quizNextQuestionButton: HTMLButtonElement
): void => {
    const quizQuestionsLength = quizQuestions.length;
    const congratulationsSection = document.querySelector<HTMLElement>(
        ".quiz-container__congratulations"
    );
    const answeredCountSpan = document.querySelector<HTMLParagraphElement>(
        ".congratulations__answered-count"
    );
    const totalCountSpan = document.querySelector<HTMLSpanElement>(
        ".congratulations__total-count"
    );

    const quizHeading =
        document.querySelector<HTMLHeadingElement>("#quiz-heading");

    const progress = document.querySelector<HTMLDivElement>("#progress");
    const buttonsSection = document.querySelector<HTMLDivElement>(
        ".congratulations__buttons"
    );

    if (
        !answeredCountSpan ||
        !totalCountSpan ||
        !quizNextQuestionButton ||
        !quizContainerBody ||
        !congratulationsSection ||
        !quizHeading ||
        !progress ||
        !buttonsSection
    ) {
        throw new Error("HTML Element does not exist...");
    }

    if (!congratulationsSection.querySelector(".view-score-history-button")) {
        const viewScoreHistoryButton = document.createElement("button");
        viewScoreHistoryButton.textContent = "View Score History";
        viewScoreHistoryButton.classList.add("view-score-history-button");
        viewScoreHistoryButton.addEventListener("click", () => {
            displayScoreHistory();
        });
        const playAgainButton =
            congratulationsSection.querySelector<HTMLButtonElement>(
                ".congratulations__play-again-button"
            );
        if (playAgainButton) {
            buttonsSection.appendChild(viewScoreHistoryButton);
        }
    }

    congratulationsSection.style.display = "block";
    answeredCountSpan.textContent = quizState.correctAnswers.toString();
    totalCountSpan.textContent = quizQuestionsLength.toString();

    quizNextQuestionButton.style.display = "none";
    quizContainerBody.style.display = "none";
    quizHeading.style.display = "none";
    progress.style.display = "none";
    fireConfetti();
};

const displayScoreHistory = () => {
    const scoreHistoryContainer =
        document.querySelector<HTMLDivElement>(".score-history");

    const scoreHistory = JSON.parse(
        localStorage.getItem("scoreHistory") || "[]"
    );

    const sortedHistory = scoreHistory.sort(
        (
            a: { date: string; score: number },
            b: { date: string; score: number }
        ) => {
            return b.score - a.score;
        }
    );

    const limitHistoryHTML = sortedHistory.slice(
        0,
        Math.min(scoreHistory.length, 10)
    );

    let scoreHistoryHTML = "<h2>Score History: Top 10</h2>";
    scoreHistoryHTML += "<table><tr><th>Date</th><th>Score</th></tr>";
    limitHistoryHTML.forEach((entry: { date: string; score: number }) => {
        scoreHistoryHTML += `<tr><td>${entry.date}</td><td>${entry.score}</td></tr>`;
    });
    scoreHistoryHTML += "</table>";

    if (scoreHistoryContainer) {
        scoreHistoryContainer.innerHTML = scoreHistoryHTML;
    }
};
