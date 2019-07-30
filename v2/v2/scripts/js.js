        let computerPlay = (index = parseInt(Math.random() * 3)) => ["Rock", "Paper", "Scissors"][index]; 

        function playRound(playerSelection, computerSelection) {
            let playsec = playerSelection.toLowerCase();
            let comsec = computerSelection;
            
            switch(true) {
                case playsec === "rock" && comsec === "scissors":
                case playsec === "paper" && comsec === "rock":
                case playsec === "scissors" && comsec === "paper":
                    return "You win! " + playsec + " beats " + comsec;
                case comsec === "rock" && playsec === "scissors":
                case comsec === "paper" && playsec === "rock":
                case comsec === "scissors" && playsec === "paper":
                    return "You lose! " + comsec + " beats " + playsec;
                case comsec === playsec:
                    return "Draw!";
            }
        }

        let playGame = document.querySelector('button#button-play');
        let gameResult = document.querySelector('.game-result h1')
        console.log(playGame)
        console.log(gameResult)

        let p1Score = document.querySelector('#score-p1')
        let computerScore = document.querySelector('#score-p2')


        let playerLife = 5;
        let comLife = 5;

        let game = () => {

            let playerSelection = prompt()
            const computerSelection = computerPlay().toLowerCase()
            console.log(playRound(playerSelection, computerSelection))

            // player life drain
                if(playRound(playerSelection, computerSelection).includes("win")) {
                    comLife--
                    p1Score.textContent = playerLife
                    computerScore.textContent = comLife
                    console.log(playerLife);
                    console.log(comLife);

                } else if (playRound(playerSelection, computerSelection).includes("lose")) {
                    playerLife--
                    p1Score.textContent = playerLife
                    computerScore.textContent = comLife
                    console.log(playerLife);
                    console.log(comLife);
                }

                // if(playerLife === 0) {
                //     console.log("Player wins!")
                // } else {
                //     console.log("Computer Wins!")
                // }

            if(playerLife > 0 && comLife > 0 ) {
                playRound(playerSelection, computerSelection)
            } else if(comLife === 0) {
                console.log("Computer Wins!")
                gameResult.textContent = "Computer Wins!"
            } else if(playerLife === 0) {
                console.log("Player wins!")
                gameResult.textContent = "Player wins!"
            }

        }

        playGame.addEventListener('click', () => game())

        // const playerSelection = prompt();
        // const computerSelection = computerPlay().toLowerCase()
        // console.log(playRound(playerSelection, computerSelection))
        // game()