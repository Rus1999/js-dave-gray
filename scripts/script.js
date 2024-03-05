const initGame = () => {
  const startGame = confirm("Shall we play rock, paper, or scissors?");
  startGame ? playGame() : alert("Ok, maybe next time.");
}

const playGame = () => {
  while (true) {
    let playerChoice = getPlayerChoice();
    playerChoice = formatPlayerChoice(playerChoice);
    if (playerChoice === "") {
      invalidChoice();
      continue;
    }
    if (!playerChoice) { // when click cancel will return false from the getPlayerChoice
      console.log("Don't play");
      decidedNotToPlay();
      break;
    }
    playerChoice = evaluatePlayerChoice(playerChoice); // when provide invalid input will be evaulate then check false
    if (!playerChoice){
      console.log("Evaluate");
      invalidChoice();
      continue;
    }
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    if (askToPlayAgain()) {
      continue;
    } else {
      thanksForPlaying();
      break;
    }
  }
};

const getPlayerChoice = () => {
  return prompt("Please enter rock, paper, or scissors.");
}

const formatPlayerChoice = (playerChioce) => {
  if (playerChioce || playerChioce === "") {
    return playerChioce.trim().toLowerCase();
  } else {
    return false;
  }
}

const decidedNotToPlay = () => {
  alert("I guess you changed your mind. Maybe next time.");
}

const evaluatePlayerChoice = (playerChoice) => {
  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors"
  ) {
    return playerChoice;
  } else {
    return false;
  }
};

const invalidChoice = () => {
  alert("You didn't enter rock, paper, or scissors.");
}

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  const rpsArray = ["rock", "paper", "scissors"];
  return rpsArray[randomNumber];
}

const determineWinner = (player, computer) => {
  const winner =
    player === computer
      ? "Tie game!"
      : player === "rock" && computer === "paper"
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : player === "paper" && computer === "Scissors"
          ? `playaerOne: ${player}\nComputer: ${computer}\nComputer wins!`
          : player === "scissors" && computer === "rock"
            ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
            : `playerOne: ${player}]nComputer: ${computer}\nPlayer one wins!`;

  return winner;
}

const displayResult = (result) => {
  alert(result);
}

const askToPlayAgain = () => {
  return confirm("Play Again?");
}

const thanksForPlaying = () => {
  alert("Ok, thanks for playing.");
}

initGame();