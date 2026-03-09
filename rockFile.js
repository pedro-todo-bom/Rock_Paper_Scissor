let humanScore = 0;
let computerScore = 0;



function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber <= 0.33) {
        return "rock";
    } else if (randomNumber >= 0.66) {
        return "scissors";
    } else {
        return "paper";
    }
}

function getHumanChoice() {
    const input = prompt("Please choose between rock, paper and scissors:");
    return input;
}

function playRound(humanChoice, computerChoice) {
    const parsedHumanChoice = String(humanChoice).toLowerCase();
    let isDraw = false;
    let humanVictory = false;

    if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            humanVictory = true;
        } else if (computerChoice == "paper") {
            isDraw = true;
        }
    } else if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            humanVictory = true;
        } else if (computerChoice == "rock") {
            isDraw = true;
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "paper") {
            humanVictory = true;
        } else if (computerChoice == "scissors") {
            isDraw = true;
        }
    }

    if (isDraw) {
        console.log("It's a Draw!");
    } else if (humanVictory == true) {
        humanScore++;
        console.log("You win! " + humanChoice + " beats " + computerChoice);
    } else {
        computerScore++;
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
    }

    if(humanScore === 5 || computerScore === 5){
        alert("Game Over! Final Score: " + humanScore + " - " + computerScore);
    }

    const humanScoreElement = document.getElementById("human-score");
    const computerScoreElement = document.getElementById("computer-score");
    humanScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;
}


const rockButton =document.querySelector(".rock-btn");
rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

const paperButton =document.querySelector(".paper-btn");
paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

const scissorsButton =document.querySelector(".scissors-btn");
scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});
