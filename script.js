const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorBtn = document.querySelector('.scissor');
const startBtn = document.querySelector('.start-btn');
const whoWin = document.querySelector('.who-wins')
const choices = document.querySelector('.choices');
const computerScrView = document.querySelector('.Computer-score') 
const humanScrView = document.querySelector('.Human-score') 

const summeryContainer = document.querySelector('.summery')
const buttonContainer = document.querySelector('.buttons-area')
const space = document.querySelector('.space');


let humanScore = 0;
let computerScore = 0;
let gameOn = false;


function getComputerChoice() {
    const choiceArray = ['rock', 'paper', 'scissor'];
    let randNum = Math.floor(Math.random() * 3);
    return choiceArray[randNum];
}

buttonContainer.addEventListener('click',(e)=>{
    if(!gameOn){
        return;
    }
    
    let humanChoiceElement;
    let child = e.target.id
    if (child === 'rock') {
        humanChoiceElement = 'rock';
    }else if(child === 'paper'){
        humanChoiceElement = 'paper';
    }else if(child === 'scissor'){
        humanChoiceElement = 'scissor';
    }

    let computerChoiceElement = getComputerChoice()
    playRound(humanChoiceElement, computerChoiceElement)
})

function playRound(human, computer){

    if(!gameOn){
        return;
    }
    let result;
    if(human === computer){
        result = 'Draw!'
    }else if(
        (human === 'rock' && computer === 'scissor')||
        (human === 'paper' && computer === 'rock') ||
        (human === 'scissor' && computer === 'paper')
    ){
        humanScore++;
        result = 'Human wins'
    }else{
        computerScore ++;
        result = 'Computer wins'
    }

    updateScore(result, humanScore, computerScore, human, computer);
    checkWinner();
}


function updateScore(result, humanScore, computerScore, human, computer){
    
    whoWin.textContent = `${result}`
    choices.textContent = `You choose ${human} Computer Choose ${computer}`
    computerScrView.textContent = `Computer: ${computerScore}`
    humanScrView.textContent = `Human: ${humanScore}`
    const p1 = document.createElement('p');
    
    p1.innerText = `${result}`
    summeryContainer.appendChild(p1)
}


function playGame(){
    space.classList.remove('hidden')
    summeryContainer.innerHTML = ``
    humanScore = 0;
    computerScore = 0;
    gameOn = true;
    whoWin.textContent = 'Let’s play!';
    choices.textContent = '';
    computerScrView.textContent = 'Computer: 0';
    humanScrView.textContent = 'Human: 0';
    startBtn.textContent = 'Playing...';
}

function checkWinner(){
    if(computerScore === 5){
        alert(`Winner is Computer`)
        startBtn.textContent = `Restart`
        gameOn = false;
    }else if(humanScore === 5){
        alert(`Winner is Human`)
        startBtn.textContent = `Restart`
        gameOn = false;
}
}

startBtn.addEventListener('click', playGame)

// gethumanChoice()