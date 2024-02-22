function getComputerChoice(){

    let computerChoice = ["Rock", "Paper", "Scissor"];
    let random_pick = Math.floor(Math.random() * computerChoice.length);
    let pick = computerChoice[random_pick];

    return pick;
}

//Game Logic
function playRound(player_choice, computer_choice, comW, playerW){

    if((player_choice === "ROCK" || player_choice === "rock" || player_choice === "Rock") && computer_choice === "Paper"){
        console.log("You lose! Paper beats Rock");
        comW = true;
        
    }else if((player_choice === "ROCK" || player_choice === "rock" || player_choice === "Rock") && computer_choice === "Scissor"){
        console.log("You win! Rocks beat Scissor");
        playerW = true;
        
    }else if((player_choice === "ROCK" || player_choice === "rock" || player_choice === "Rock") && computer_choice === "Rock"){
        console.log("Tie!");

    }else if((player_choice === "Paper" || player_choice === "PAPER" || player_choice === "paper") && computer_choice === "Scissor"){
        console.log("You lose! Scissor beats Paper");
        comW = true;
        
    }else if((player_choice === "Paper" || player_choice === "PAPER" || player_choice === "paper") && computer_choice === "Rock"){
        console.log("You win! Paper beats Rock");
        playerW = true;
        
    }else if((player_choice === "Paper" || player_choice === "PAPER" || player_choice === "paper") && computer_choice === "Paper"){
        console.log("Tie!")

    }else if((player_choice === "Scissor" || player_choice === "SCISSOR" || player_choice === "scissor") && computer_choice === "Rock"){
        console.log("You lose! Rock beats Scissor");
        comW = true;

    }else if((player_choice === "Scissor" || player_choice === "SCISSOR" || player_choice === "scissor") && computer_choice === "Paper"){
        console.log("You win! Scissor beats Paper");
        playerW = true;

    }else if((player_choice === "Scissor" || player_choice === "SCISSOR" || player_choice === "scissor") && computer_choice === "Scissor"){
        console.log("Tie!");
    }

    updateScore(playerW, comW);

}

let yourScore = 0;
let computerScore = 0;

function updateScore(player, computer){
    if(player){
        ++yourScore;
    }else if(computer){
        ++computerScore;
    }
    console.log("Your score: " + yourScore)
    console.log("Computer Score: " + computerScore)

    winner();
}

function winner(){
    if(yourScore > computerScore){
        console.log("You're a winner!");
    }else if(yourScore < computerScore){
        console.log("You're a loser! Computer wins!")
    }else{
        console.log("its a tie!")
    }
}

function playGame(){
    let player_choice = prompt("Enter your choice between Rock, Paper, Scissor: ");
    let computer_choice = getComputerChoice();

    console.log("You choose: " + player_choice);
    console.log("Computer choose: " + computer_choice);

    playRound(player_choice, computer_choice);
}

playGame();
playGame();
playGame();
playGame();
playGame();

