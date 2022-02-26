let choice = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
//function for computer random choices
function computerPlay(){
    return choice[Math.floor(Math.random() * choice.length)];
}

//function for player inputs to be case-insensitive
function playerPlay(){
    let choicePlay;
    return choicePlay = prompt('Enter rock, paper or scissors').toLowerCase();
}


//Create function for single round of the game
//Return a string that declares the winner
function playRound(playerChoice, computerChoice){

    if(playerChoice === computerChoice){
        playerScore;
        computerScore;
       return 'It\'s a tie';
    }else if((playerChoice === 'rock' && computerChoice === 'scissors') || 
    (playerChoice === 'scissors' && computerChoice === 'paper') || 
    (playerChoice === 'paper' && computerChoice === 'rock')){
        playerScore += 1;
        return `You won! ${playerChoice} beats ${computerChoice}`;
    }else{
        computerScore += 1
        return `You lose! ${computerChoice} beats ${playerChoice}`;
    }
}


//FUnction to create 5 times play time
function game(){
    for(let i = 0; i < 5; i++){
        const playerChoice = playerPlay(); 
        const computerChoice = computerPlay();
        playRound(playerChoice, computerChoice); 
        console.log(playerChoice);
        console.log(computerChoice);
        console.log(playRound(playerChoice, computerChoice));
    }
    console.log(playerScore);
    console.log(computerScore);
}

game();
