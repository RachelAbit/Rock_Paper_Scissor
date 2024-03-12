function getComputerChoice(){

    let computerChoice = ["Rock", "Paper", "Scissor"];
    let random_pick = Math.floor(Math.random() * computerChoice.length);
    let pick = computerChoice[random_pick];

    return pick;
}

//Game Logic
function playRound(player_choice, computer_choice, comW, playerW){

    if((player_choice === "ROCK" || player_choice === "rock" || player_choice === "Rock") && computer_choice === "Paper"){
        comW = true;
        
    }else if((player_choice === "ROCK" || player_choice === "rock" || player_choice === "Rock") && computer_choice === "Scissor"){
        playerW = true;
        
    }else if((player_choice === "ROCK" || player_choice === "rock" || player_choice === "Rock") && computer_choice === "Rock"){
        console.log("Tie!");

    }else if((player_choice === "Paper" || player_choice === "PAPER" || player_choice === "paper") && computer_choice === "Scissor"){
        comW = true;
        
    }else if((player_choice === "Paper" || player_choice === "PAPER" || player_choice === "paper") && computer_choice === "Rock"){
        playerW = true;
        
    }else if((player_choice === "Paper" || player_choice === "PAPER" || player_choice === "paper") && computer_choice === "Paper"){
        console.log("Tie!")

    }else if((player_choice === "Scissor" || player_choice === "SCISSOR" || player_choice === "scissor") && computer_choice === "Rock"){
        comW = true;

    }else if((player_choice === "Scissor" || player_choice === "SCISSOR" || player_choice === "scissor") && computer_choice === "Paper"){
        playerW = true;

    }else if((player_choice === "Scissor" || player_choice === "SCISSOR" || player_choice === "scissor") && computer_choice === "Scissor"){
        console.log("Tie!");
    }

    updateScore(playerW, comW);

}

let yourScore = 0;
let computerScore = 0;

function updateScore(player, computer){
    const score_pl = document.querySelector('.plScore');
    const score_com = document.querySelector('.compScore');
    if(player){
        ++yourScore;
    }else if(computer){
        ++computerScore;
    }
    score_pl.textContent = `${yourScore}`;
    score_com.textContent = `${computerScore}`;

    winner();
}

function winner(){
    const player_res = document.querySelector('.player-res');
    const com_res = document.querySelector('.com-res');
    if(yourScore === 5){
        player_res.textContent = "You Win!"
        com_res.textContent = "Computer lose!"
    }else if(computerScore === 5){
        com_res.textContent = "Computer Wins!";
        player_res.textContent = "You Lose";
    }else{
        console.log("its a tie!")
    }
}

const button = document.querySelectorAll('button');
let player_choice = button;

button.forEach(btn =>{
    btn.addEventListener('click', (e) =>{
        let computer_choice = getComputerChoice();
        let pl_choose = document.querySelector('.pl-choose');
        let com_choose = document.querySelector('.com-choose');
        const buttonText = btn.textContent;

        pl_choose.textContent = `${buttonText}`;
        com_choose.textContent =` ${computer_choice}`;

        playRound(buttonText, computer_choice)
    });
});
