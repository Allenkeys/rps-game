let choice = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
//function for computer to return random string choices from an array
function getComputerInput(){
    return choice[Math.floor(Math.random() * choice.length)];
}

//function for player inputs to return case-insensitive string
function getPlayerInput(){
    let choicePlay;
    return choicePlay = prompt('Enter rock, paper or scissors').toLowerCase();
}


//Create function for single round of the game
//Return scores and log a string that declares the winner
function roundWinner(playerChoice, computerChoice){

    if(playerChoice === computerChoice){
    
       console.log('It\'s a tie');
    }else if((playerChoice === 'rock' && computerChoice === 'scissors') || 
    (playerChoice === 'scissors' && computerChoice === 'paper') || 
    (playerChoice === 'paper' && computerChoice === 'rock')){
        console.log(`You won! ${playerChoice} beats ${computerChoice}`);
        return playerScore += 1;
    }else{
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
        return computerScore += 1;
    }
}

//Create fuction for five consecutive rounds of game
function createRound(){
    for(let i = 0; i < 5; i++){
        let playerChoice = getPlayerInput();
        let computerChoice = getComputerInput();
        roundWinner(playerChoice, computerChoice);
        //console.log(roundWinner(playerChoice, computerChoice));
        console.log(playerChoice);
        console.log(playerScore);
        console.log(computerChoice);
        console.log(computerScore);
    }
}

createRound();
//Function to create 5 play times
// function game(){
//     for(let i = 0; i < 5; i++){
//         const playerChoice = getPlayerInput(); 
//         const computerChoice = getComputerInput();
//         roundWinner(playerChoice, computerChoice); 
//         console.log(playerChoice);
//         console.log(computerChoice);
//         console.log(roundWinner(playerChoice, computerChoice));
//     }
//     console.log(playerScore);
//     console.log(computerScore);
// }

// game();
