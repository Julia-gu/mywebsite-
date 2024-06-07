const choices = document.querySelectorAll(".choice");
const result = document.getElementById("result");
const restartButton = document.getElementById("restartButton");

choices.forEach(choice => {
    choice.addEventListener("click", function() {
        const userChoice = this.id;
        const computerChoice = getComputerChoice();
        const winner = getWinner(userChoice, computerChoice);
        result.textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${winner}`;
        if (winner === "You win!") {
            document.body.classList.add("win-bg");
        } else {
            document.body.classList.remove("win-bg");
        }
    });
});

restartButton.addEventListener("click", function() {
    result.textContent = "";
    document.body.classList.remove("win-bg");
});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "Nice try;)";
    }
}
