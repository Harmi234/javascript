document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const quizDataJSON = `[
        { "question": "What is the capital of France?", "correctAnswer": "C" },
        { "question": "What is 2 + 2?", "correctAnswer": "B" },
        { "question": "Which planet is known as the Red Planet?", "correctAnswer": "B" },
        { "question": "Who wrote 'Hamlet'?", "correctAnswer": "C" },
        { "question": "What is the largest mammal in the world?", "correctAnswer": "B" },
        { "question": "What is the chemical symbol for water?", "correctAnswer": "C" },
        { "question": "Which is the smallest country in the world?", "correctAnswer": "A" },
        { "question": "Who painted the Mona Lisa?", "correctAnswer": "C" }
]`;

    let quizData = JSON.parse(quizDataJSON);

    const mapResults = (quiz, form) => {
        return quiz.map((q, index) => {
            let userAnswer = form[`q${index + 1}`].value; 
            return { question: q.question, userAnswer, correctAnswer: q.correctAnswer };
        });
    };

    let results = mapResults(quizData, this);

    localStorage.setItem("quizData", JSON.stringify(results));
    
    alert("Quiz submitted!");

    window.location.href = "/finel-js-exam/index.html"; 
});
