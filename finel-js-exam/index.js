
document.addEventListener("DOMContentLoaded", () => {
    const resultsContainer = document.getElementById("quiz-results");
    const quizData = JSON.parse(localStorage.getItem("quizData")) || [];

    quizData.forEach(({ question, userAnswer, correctAnswer }) => {
        const resultDiv = document.createElement("div");
        resultDiv.textContent = `${question}: Your Answer: ${userAnswer} | Correct Answer: ${correctAnswer}`;
        resultDiv.classList.add(userAnswer == correctAnswer ? "correct" : "incorrect");
        resultsContainer.appendChild(resultDiv);
    });

    const totalCorrect = quizData.filter(item => item.userAnswer == item.correctAnswer).length;
    const totalDiv = document.createElement("div");
    totalDiv.textContent = `Total Answers: ${totalCorrect}`;
    resultsContainer.appendChild(totalDiv);
});
