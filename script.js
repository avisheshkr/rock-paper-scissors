// Create an array of strings (rock, paper and scissors)
const inputs = ["Rock", "Paper", "Scissors"];

// Create a function to get random inputs (Rock, Paper or Scissors) from computer
function computerPlay() {
    let selection = inputs[Math.floor(Math.random() * 3)];
    console.log("Computer: " + selection);
    return selection;
}

// Create a function to get input from the player
function playerInput() {
    let selection = prompt("Enter the input: ");
    return selection;
}

// Call the function and store the inputs from both players 
    let computerSelection = computerPlay();
    let playerSelection = playerInput();

    document.getElementById("computerInput").innerHTML = "Computer: " + computerSelection;
    document.getElementById("userInput").innerHTML = "Player: " + playerSelection;
    console.log("Player: " + playerSelection);
    

// Check whether stalemate or win and Output the winner
    if (computerSelection === playerSelection) {
        document.getElementById("winner").innerHTML = "Stalemate";
    } else {
        if ((computerSelection === "Paper" && playerSelection === "Rock") || (computerSelection === "Rock" && playerSelection === "Scissors") || (computerSelection === "Scissors" && playerSelection === "Paper")) {
            console.log("Computer Wins!");
            document.getElementById("winner").innerHTML = "Computer Wins!";
        } else {
            console.log("Player Wins!");
            document.getElementById("winner").innerHTML = "Player Wins!";
        }
    }

