let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('input');

function refreshPage(){
      window.location.reload();
  } 


  

function computerPlay (num) {
      let choices = ["rock", "paper", "scissor"];
      return choices[Math.floor(Math.random() * choices.length)];
}
console.log(computerPlay());

function disableButtons() {
      buttons.forEach(elem => {
          elem.disabled = true;
      })
  }
  

function playRound (playerSelection) {
      let computerSelection = computerPlay();
      let result = "";
      /*let playerSelection = player.toLowerCase();*/      
         if ((playerSelection == "rock" && computerSelection == "scissor") ||
                     (playerSelection == "scissor" && computerSelection == "paper") || 
                       (playerSelection == "paper" && computerSelection == "rock"))
      {     
            playerScore += 1;
            result = ("You win" + "<br>Your score: " + playerScore );

                       }  
      else if (playerSelection == computerSelection) {
            result = ("its a draw");
      }

       else {
            computerScore += 1;
            result = ("YOu lose!" + "<br>Computer\'s score: " + computerScore);
            }
      if (computerScore == 5) {
            result = ("Game over." + "<br>Computer\'s score: " +computerScore);
            disableButtons();
      }
      if (playerScore == 5) {
            result = ("You've won!" + "<br>Your score: " + playerScore)
      }

      endGame();
     return document.getElementById('result').innerHTML = result;
     
}

function endGame () {
      const playAgainButton = document.querySelector('.refreshPage');
      const mainElement = document.querySelector('.container');
            if(computerScore === 5 || playerScore === 5) {
                  mainElement.remove();
                  playAgainButton.style.opacity = '1';
            }
            playAgainButton.addEventListener('click', function() {
                  setTimeout(function() {
                      location.reload();
                  }, 250);
              });
          }





buttons.forEach(button =>{
      button.addEventListener('click', function(){
          playRound(button.value)
      })
  })

