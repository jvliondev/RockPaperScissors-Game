/*Create a rock paper scissors game

1. create a function that plays a single round of game
that function will take two parameters playerSelection and computerSelection
it will return a string "You lose! Paper beats Rock!"
maker sure that playerSelection is case-insensitive such as "rock" "Rock" "RocK"
we will assign getComputerChoice() to computerSelection





*/
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;


/*Below this getComputerChoice function is randomizing a number 
depending on the variable options length and math.floor is ensuring
it is a whole number. Since the array length contains 3 items,
the function randomly gets a number which is connected to the position
of the options index. This gives the choice between rock, paper, or scissors.
*/
function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * options.length);
    return options[index];
}


function playRound(playerSelection, computerSelection){

    if (computerSelection === 'paper' && playerSelection == "rock"){
        return "You lose! Paper beats Rock!"
    } else if (computerSelection === 'paper' && playerSelection == "scissors"){
        return "You win! Scissors beat Paper!"
    } else if (computerSelection === 'paper' && playerSelection == "paper"){
        return "Draw! Nobody Wins!"
    } else if (computerSelection === 'scissors' && playerSelection == "rock"){
        return "You win! Rock beats Scissors!"
    } else if (computerSelection === 'scissors' && playerSelection == "paper"){
        return "You lose! Scissors beats Paper!"
    } else if (computerSelection === 'scissors' && playerSelection == "scissors"){
        return "Draw! Nobody Wins!"
    } else if (computerSelection === 'rock' && playerSelection == "paper"){
        return "Your win! Paper beats Rock!"
    } else if (computerSelection === 'rock' && playerSelection == "scissors"){
        return "You lose! Rock beats Scissors!"
    } else if (computerSelection === 'rock' && playerSelection == "rock"){
        return "Draw! Nobody Wins!"
    } else {
        return "Please enter rock, paper or scissors!"
    }
}

document.getElementById('myButton').addEventListener('click', function() {
    playerSelection = document.getElementById('myInput').value.toLowerCase();
    computerSelection = getComputerChoice();
    let gameResult = playRound(playerSelection, computerSelection);
    document.getElementById('results').innerHTML = gameResult;
   //------------------------------------------------------------------- 
    let win = gameResult.includes("win");
    let lose = gameResult.includes("lose");
// link the results to the playerScore and computerScore
//if the computer wins, add 1 to the computerScore
//if the player wins, add 1 to the playerScore
    if (win){
        playerScore += 1;
        document.getElementById("playerScore").innerHTML = playerScore;
    }
    if (lose){
        computerScore += 1;
        document.getElementById("computerScore").innerHTML = computerScore;
    }
});




