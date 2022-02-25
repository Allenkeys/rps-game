let choice = ['rock', 'paper', 'scissors'];
//function for computer random choices
function computerPlay(){
    return choice[Math.floor(Math.random() * choice.length)];
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






function game(){
    for(let i = 0; i < 5; i++){
        const playerChoice = prompt('rock paper scissors', 'enter choice').toLowerCase(); 
        const computerChoice = computerPlay();
        playRound(playerChoice, computerChoice); 
        console.log(playerChoice);
        console.log(computerChoice);
        console.log(playRound(playerChoice, computerChoice));

    }
}

game();
