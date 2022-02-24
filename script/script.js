//function for computer random choices
function computerPlay(){
    let compChoice = ['rock', 'paper', 'scissors'];
    return compChoice[Math.floor(Math.random() * compChoice.length)];
}



//Create function for single round of the game
//Return a string that declares the winner
function playRound(playerChoice, computerChoice){
    if(playerChoice === 'rock' && computerChoice === 'scissors'){
        return `You won! ${playerChoice} beats ${computerChoice}`;
    }else if(playerChoice === 'scissors' && computerChoice === 'paper'){
        return `You won! ${playerChoice} beats ${computerChoice}`;
    }else if(playerChoice === 'paper' && computerChoice === 'rock'){
        return `You won! ${playerChoice} beats ${computerChoice}`;
    }else if( playerChoice === computerChoice){
        return 'It\'s a tie';
    }else{
        return `You lose! ${computerChoice} beats ${playerChoice}`;
    }
}

const playerChoice = prompt('rock paper scissors', 'enter choice').toLowerCase();
console.log(playerChoice);
const computerChoice = computerPlay();
console.log(computerChoice);
console.log(playRound(playerChoice, computerChoice));