//function for computer random choices
function computerPlay(){
    let compChoice = ['Rock', 'Paper', 'Scissor'];
    return compChoice[Math.floor(Math.random() * compChoice.length)];
}

console.log(computerPlay());
