const rockImg = document.querySelector('.rock-img');
const paperImg = document.querySelector('.paper-img');
const scissorsImg = document.querySelector('.scissors-img');
const imageContainer = document.querySelector('.images-container')
const dialog = document.querySelector('dialog');
const restartBtn = document.querySelector('.rst-btn');
const dialogResult = document.querySelector('.result-dialog')
const startBtn = document.querySelector('.start-button')
const hiddenitems = document.querySelector('.hidden-elements')
const winnerSlot = document.querySelector('.winner')
const computerChoose = document.querySelector('.results-computer')
const humanChoose = document.querySelector('.results-human')
const computerResultSpan = document.querySelector('.result-span-computer')
const humanResultSpan = document.querySelector('.result-span-human');
let humanScore = 0;
let computerScore = 0;



function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        updateInformation(computerChoice, humanChoice, 'none')
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors')
        || (humanChoice === 'paper' && computerChoice === 'rock')
        || (humanChoice === 'scissors' && computerChoice === 'paper')) {
            humanScore++;
            updateInformation(computerChoice, humanChoice, 'human')
    }else{
        computerScore++;
        updateInformation(computerChoice, humanChoice, 'computer')
    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let winner;

function playGame(){
    if(humanScore === 5){
        winner = 'human';
        showDialog();
        return;
    }else if(computerScore === 5){
        winner = 'computer';
        showDialog();
        return;
    }
    playRound(humanSelection, computerSelection);
    playGame();
}

function clearData(){
    humanScore = 0;
    computerScore = 0;
    winnerSlot.textContent = '';
    humanChoose.textContent = '';
    computerChoose.textContent = '';
}


function getComputerChoice() {
    const choiceArray = ['rock', 'paper', 'scissors'];
    let randNum = Math.floor(Math.random() * 3);
    return choiceArray[randNum];
}


// human input


function getHumanChoice() {
    imageContainer.addEventListener('click', (e) => {
        
        if (e.target.classList.contains('rock-img')) {
            return 'rock'
        } else if (e.target.classList.contains('paper-img')) {
            return 'paper'
        } else if (e.target.classList.contains('scissors-img')) {
            return 'scissors'
        }
    })
}



function updateInformation(cmpChoice, hmnChoice, whoWin) {
    computerChoose.textContent = `Computer Choose ${cmpChoice}`;
    humanChoose.textContent = `Human Choose ${hmnChoice}`;
    computerResultSpan.textContent = `${computerScore}`;
    humanResultSpan.textContent = `${humanScore}`;
    if (whoWin === 'none') {
        winnerSlot.textContent = `Draw!`;
    } else if (whoWin === 'computer') {
        winnerSlot.textContent = `Computer Wins`;
    }
    else if (whoWin === 'human') {
        winnerSlot.textContent = `Human Wins`;
    }

}




function showDialog() {
    dialogResult.innerHTML = `${winner} wins`
    dialog.showModal();


}

function closeDialog() {
    dialog.close();
}

restartBtn.addEventListener('click',()=>{
    clearData()
    playGame()
})

startBtn.addEventListener('click',()=>{
    hiddenitems.classList.remove('hide');
    startBtn.classList.add('hide');
    
    playGame();
})