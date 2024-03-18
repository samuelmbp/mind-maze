export type QuizState = {
    currentQuestionIndex: number;
    correctAnswers: number;
    questionAnswered: boolean;
};

export let quizState: QuizState = {
    currentQuestionIndex: 0,
    correctAnswers: 0,
    questionAnswered: false,
};
