////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
        winner = 'tie';
    } else if (playerMove === 'rock') {
        if (computerMove === 'scissors') {
          winner = 'player';
        } else if (computerMove === 'paper') {
          winner = 'computer';
        } else if (computerMove === 'rock') {
          winner = 'tie'
        }
    } else if (playerMove === 'scissors') {
        if (computerMove === 'paper') {
          winner = 'player';
        } else if (computerMove === 'rock') {
          winner = 'computer';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
          winner = 'player';
        } else if (computerMove === 'scissors')
          winner = 'computer';
    } else {
        return "not vaild";
    } 
    return winner;
}


function playToFive() {
  console.log('Let\'s play Rock Paper Scissors');
  var playerWins = 0;
  var computerWins = 0;
    while ((playerWins < 5) && (computerWins <= 5)) {
        var playerMove = getPlayerMove(getInput());
        var computerMove = getComputerMove(randomPlay());
        var winner = getWinner(playerMove, computerMove);
        console.log("Player chose " + playerMove + " while the Computer chose " + computerMove + ".");
        console.log('The winner of this round is ' + winner + ".");
        if (winner === 'player') {
            playerWins += 1;
            computerWins = computerWins;
            console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
        } else if (winner === 'computer') {
            playerWins = playerWins;
            computerWins += 1;
            console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
        } else if (winner === 'tie') {
            console.log('No winner. The score is still Player: ' + playerWins + ' to Computer: ' + computerWins + '.');
        } else {
            break;
        }
    }
  return [playerWins, computerWins];
}

