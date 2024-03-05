let playGame = confirm("Shall we play a game of death.");

if (playGame) {
  while (playGame) {
    const playerChoice = prompt("Please enter rock | paper | scissors");
    if (playerChoice || playerChoice === "") {
      const playerOne = playerChoice.trim().toLowerCase();
      if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
        const computerChoice = Math.floor(Math.random() * 3);
        const rpsArray = ["rock", "paper", "scissors"];
        const computer = rpsArray[computerChoice];

        const result = playerOne === computer
          ? "Tie game!"
          : playerOne === "rock" && computer === "paper"
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : playerOne === "paper" && computer === "scissors"
              ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
              : playerOne === "scissors" && computer === "rock"
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : `playerOne: ${playerOne}\nComputer: ${computer}\nPlayerOne wins!`;

        alert(result);

        playGame = confirm("Play Again?");
        if (!playGame) alert("Ok, thanks for playing.");
        continue;
      }
      else {
        alert("You didn't provide the valid choice.");
        continue;
      }
    }
    else {
      alert("Ok never mind see you again.");
      break;
    }
  }
}
else {
  alert("OK, see you again soon.");
} 