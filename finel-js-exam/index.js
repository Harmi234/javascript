
document.addEventListener("DOMContentLoaded", () => {
    let resultsContainer = document.getElementById("quiz-results");
    let quizData = JSON.parse(localStorage.getItem("quizData")) || [];

    quizData.forEach(({ question, userAnswer, correctAnswer }) => {
        let resultDiv = document.createElement("div");
        resultDiv.textContent = `${question}: Your Answer: ${userAnswer} | Correct Answer: ${correctAnswer}`;
        resultDiv.classList.add(userAnswer == correctAnswer ? "correct" : "incorrect");
        resultsContainer.appendChild(resultDiv);
    });

    let totalCorrect = quizData.filter(item => item.userAnswer == item.correctAnswer).length;
    let totalDiv = document.createElement("div");
    totalDiv.textContent = `Total Answers: ${totalCorrect}`;
    resultsContainer.appendChild(totalDiv);
});
