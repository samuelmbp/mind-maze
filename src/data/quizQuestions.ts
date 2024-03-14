type Question = {
    questionText: string;
    options: string[];
    correctAnswerIndex: number;
    explanation: string;
    hint?: string;
};

export const quizQuestions: Question[] = [
    {
        questionText: "What is the largest ocean on Earth?",
        options: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Arctic Ocean",
            "Pacific Ocean",
        ],
        correctAnswerIndex: 3,
        explanation: "The Pacific Ocean is the largest ocean on Earth.",
        hint: "Think of where the sun sets.",
    },
    {
        questionText: "Who wrote 'To Kill a Mockingbird'?",
        options: [
            "Harper Lee",
            "Mark Twain",
            "F. Scott Fitzgerald",
            "Ernest Hemingway",
        ],
        correctAnswerIndex: 0,
        explanation: "Harper Lee wrote 'To Kill a Mockingbird'.",
        hint: "The author's first name is the surname of a famous civil rights activist.",
    },
    {
        questionText: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Hg"],
        correctAnswerIndex: 0,
        explanation: "The chemical symbol for gold is Au.",
        hint: "Think of the periodic table.",
    },
    {
        questionText: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "India", "South Korea"],
        correctAnswerIndex: 1,
        explanation: "Japan is known as the Land of the Rising Sun.",
        hint: "It's an island nation in East Asia.",
    },
    {
        questionText: "Who painted the Mona Lisa?",
        options: [
            "Vincent van Gogh",
            "Pablo Picasso",
            "Leonardo da Vinci",
            "Michelangelo",
        ],
        correctAnswerIndex: 2,
        explanation: "Leonardo da Vinci painted the Mona Lisa.",
        hint: "The artist was also an inventor and scientist.",
    },
    {
        questionText: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correctAnswerIndex: 2,
        explanation: "Canberra is the capital of Australia.",
        hint: "It's an inland city.",
    },
    {
        questionText:
            "Which planet is known as the 'Morning Star' or 'Evening Star'?",
        options: ["Mercury", "Venus", "Mars", "Saturn"],
        correctAnswerIndex: 1,
        explanation: "Venus is known as the 'Morning Star' or 'Evening Star'.",
        hint: "It's the brightest planet in the night sky.",
    },
    {
        questionText: "Who wrote the play 'Romeo and Juliet'?",
        options: [
            "William Shakespeare",
            "Jane Austen",
            "Charles Dickens",
            "Emily Brontë",
        ],
        correctAnswerIndex: 0,
        explanation: "William Shakespeare wrote the play 'Romeo and Juliet'.",
        hint: "Considered one of the greatest playwrights in history.",
    },
    {
        questionText: "What is the largest mammal in the world?",
        options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswerIndex: 1,
        explanation: "The Blue Whale is the largest mammal in the world.",
        hint: "It's an aquatic animal.",
    },
    {
        questionText: "What is the chemical symbol for water?",
        options: ["O", "H2O", "H2", "H"],
        correctAnswerIndex: 1,
        explanation: "The chemical symbol for water is H2O.",
        hint: "It consists of two elements.",
    },
    {
        questionText: "Who wrote '1984'?",
        options: [
            "George Orwell",
            "Aldous Huxley",
            "Ray Bradbury",
            "H.G. Wells",
        ],
        correctAnswerIndex: 0,
        explanation: "George Orwell wrote '1984'.",
        hint: "The author's real name is Eric Arthur Blair.",
    },
    {
        questionText: "What is the tallest mountain in the world?",
        options: [
            "Mount Kilimanjaro",
            "Mount Everest",
            "Mount McKinley",
            "Mount Fuji",
        ],
        correctAnswerIndex: 1,
        explanation: "Mount Everest is the tallest mountain in the world.",
        hint: "It's part of the Himalayas.",
    },
    {
        questionText: "Who discovered penicillin?",
        options: [
            "Alexander Fleming",
            "Marie Curie",
            "Louis Pasteur",
            "Albert Einstein",
        ],
        correctAnswerIndex: 0,
        explanation: "Alexander Fleming discovered penicillin.",
        hint: "He noticed a bacteria-killing mold in a petri dish.",
    },
    {
        questionText: "Which gas do plants use for photosynthesis?",
        options: ["Oxygen", "Carbon Monoxide", "Nitrogen", "Carbon Dioxide"],
        correctAnswerIndex: 3,
        explanation: "Plants use Carbon Dioxide for photosynthesis.",
        hint: "It's a greenhouse gas.",
    },
    {
        questionText: "What is the largest organ in the human body?",
        options: ["Brain", "Heart", "Liver", "Skin"],
        correctAnswerIndex: 3,
        explanation: "The Skin is the largest organ in the human body.",
        hint: "It's the body's outer covering.",
    },
];
