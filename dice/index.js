document.getElementById("rollButton").addEventListener("click", function() {
    const dice = document.getElementById("dice");
    const diceFaces = ["1","2","3","4","5","6"];
    const randomIndex = Math.floor(Math.random() * diceFaces.length);
    dice.textContent = diceFaces[randomIndex];
});
