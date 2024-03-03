let playGame = confirm("Shall we play a game of death.");

if (playGame)
{
  let playerChoice = prompt("Please enter rock | paper | scissors");
  if (playerChoice)
  {
    let playerOne = playerChoice.trim().toLowerCase();
    if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors")
    {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer = computerChoice === 1 ? "rock"
        : computerChoice === 2 ? "paper"
        : "scissors";

      let result = playerOne === computer 
        ? "Tie game!" 
        : playerOne === "rock" && computer === "paper" 
        ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
        : playerOne === "paper" && computer === "scissors"
        ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
        : playerOne === "scissors" && computer === "rock"
        ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
        : `playerOne: ${playerOne}\nComputer: ${computer}\nPlayerOne wins!`;
      
      alert(result);
      
      let playeAgain = confirm("Playe Again?") ? location.reload() : ("Until next times.");
    }
    else
    {
      alert("You didn't provide the valid choice.");
    }
  }
  else
  {
    alert("Ok never mind see you again.");
  }
}
else
{
  alert("OK, see you again soon.");
}