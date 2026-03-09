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
}

function playGame() {
    for (let index = 0; index < 5; index++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if(humanScore> computerScore){
        console.log("You Won the game!");
    }else if(humanScore> computerScore){
        console.log("You Lose the game!");
    }else{
        console.log("Draw!");
    }
}


playGame();