function getComputerChoice(){

    let choice = ["Rock", "Paper", "Scissor"];

    let random = Math.floor(Math.random() * choice.length);
    let pick = choice[random];

    return pick;

}

function playGame(player_choice, computer_choice){
    if((player_choice === "Rock" || player_choice === "rock") && computer_choice === "Paper"){
        console.log("Computer Wins");
    }else if((player_choice === "Rock" || player_choice === "rock") && computer_choice === "Scissor"){
        console.log("You win");
    }else if((player_choice === "Rock" || player_choice === "rock") && computer_choice === "Rock"){
        console.log("Tie!");
    }else if((player_choice === "Paper" || player_choice === "paper")  && computer_choice === "Scissor"){
        console.log("Computer Wins");
    }else if((player_choice === "Paper" || player_choice === "paper")  && computer_choice === "Rock"){
        console.log("You win");
    }else if((player_choice === "Paper" || player_choice === "paper")  && computer_choice === "Paper"){
        console.log("Tie!")
    }else if((player_choice === "Scissor" || player_choice === "scissor") && computer_choice === "Rock"){
        console.log("Computer Wins");
    }else if((player_choice=== "Scissor" || player_choice === "scissor") && computer_choice === "Paper"){
        console.log("You win");
    }else if((player_choice === "Scissor" || player_choice === "scissor") && computer_choice === "Scissor"){
        console.log("Tie");
    }else{
        console.log("Invalid input");
    }
}

let user = prompt("Enter your choice: ");
let computer_choice = getComputerChoice();

console.log("You choose: " + user);
console.log("Computer choose: " + computer_choice);
playGame(user, computer_choice);





// function play(playerChoice, computerChoice){

// }

// let stringArray = ["apple", "banana", "orange", "grape", "kiwi"];

// let randomIndex = Math.floor(Math.random() * stringArray.length);
// let randomString = stringArray[randomIndex];

// console.log(randomString);