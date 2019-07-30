// COMPUTER LOGIC
let computerPlay = (index = parseInt(Math.random() * 3)) => ["Rock", "Paper", "Scissors"][index];

let playerLife = 5;
let comLife = 5;

let btn = document.getElementsByTagName('button');
let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');

let gameResult = document.querySelector('.game-result h1')

rockBtn.addEventListener('click', (e) => {
    let comSec = computerPlay().toLowerCase();
    // console.log(e.target)

    if(comSec === 'paper') {
        playerLife--
        console.log(playerLife)
        console.log(comLife)
        pScore.innerHTML = playerLife
        comScore.innerHTML = comLife
    } else if(comSec === 'scissors') {
        comLife--;
        console.log(playerLife)
        console.log(comLife)
        pScore.innerHTML = playerLife
        comScore.innerHTML = comLife
    } else if(comSec === 'rock') {
        console.log("DRAW!")
        gameResult.textContent = "DRAW!"
        pScore.innerHTML = playerLife
        comScore.innerHTML = comLife
        console.log(playerLife)
        console.log(comLife);
    }

    if(comLife === 0) {
        console.log("Player wins!")
        gameResult.textContent = "Player wins!"
    } else if(playerLife === 0) {
        console.log("Computer wins!")
        gameResult.textContent = "Computer Wins!"
    }


})

paperBtn.addEventListener('click', (e) => {
    let comSec = computerPlay().toLowerCase();

    if(comSec === 'rock') {
        comLife--
        console.log(playerLife)
        console.log(comLife)
        pScore.innerHTML = playerLife
        comScore.innerHTML = comLife
    } else if(comSec === 'scissors') {
        playerLife--;
        console.log(playerLife)
        console.log(comLife)
        pScore.innerHTML = playerLife
        comScore.innerHTML = comLife
    } else if(comSec === 'paper') {
        console.log("DRAW!")
        console.log(playerLife)
        console.log(comLife);
        pScore.innerHTML = playerLife
        comScore.innerHTML = comLife
    }

    if(comLife === 0) {
        console.log("Player wins!")
        gameResult.textContent = "Player wins!"
    } else if(playerLife === 0) {
        console.log("Computer wins!")
        gameResult.textContent = "Computer Wins!"
    }
})

scissorsBtn.addEventListener('click', (e) => {
    let comSec = computerPlay().toLowerCase();

    if(comSec === 'rock') {
        playerLife--
        console.log(playerLife)
        console.log(comLife)
        pScore.innerHTML = playerLife
        comScore.innerHTML = comLife
    } else if(comSec === 'paper') {
        comLife--;
        console.log(playerLife)
        console.log(comLife)
        pScore.innerHTML = playerLife
        comScore.innerHTML = comLife
    } else if(comSec === 'scissors') {
        console.log("DRAW!")
        console.log(playerLife)
        console.log(comLife);
        pScore.innerHTML = playerLife
        comScore.innerHTML = comLife
    }

    if(comLife === 0) {
        console.log("Player wins!")
        gameResult.textContent = "Player wins!"
    } else if(playerLife === 0) {
        console.log("Computer wins!")
        gameResult.textContent = "Computer Wins!"
    }
})

let pScore = document.querySelector('#score-p');
let comScore = document.querySelector('#score-com');
pScore.innerHTML = playerLife;
comScore.innerHTML = comLife;