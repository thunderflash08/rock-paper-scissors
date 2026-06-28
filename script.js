let humanScore = 0;
let compScore = 0;
let roundcount = 0;

function runGame() {
  function getComputerchoice() {
    let n = Math.floor(Math.random() * 3) + 1;
    switch (n) {
      case 1:
        return "Rock";
        break;

      case 2:
        return "Paper";
        break;

      case 3:
        return "Scissors";
        break;
    }
  }

  function getHumanChoice() {
    let input = prompt("enter your choice: ");
    let cleaninput =
      input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    return cleaninput;
  }

  function getRoundWinner(humanchoice, compchoice) {
    // 0 = draw, 1 = playerwins , 2 = computerwins;
    let roundstatus = 0;
    if (humanchoice === compchoice) {
      roundstatus = 0;
    } else if (
      (humanchoice === "Rock" && compchoice === "Scissors") ||
      (humanchoice === "Paper" && compchoice === "Rock") ||
      (humanchoice === "Scissors" && compchoice === "Paper")
    ) {
      roundstatus = 1;
      humanScore += 1;
    } else {
      roundstatus = 2;
      compScore += 1;
    }
    let logmsg = Roundmsg(roundstatus, humanchoice, compchoice);
    roundcount += 1;
    return logmsg;
  }

  function Roundmsg(stat, humanchoice, compchoice) {
    let msg = "";
    switch (stat) {
      case 0:
        msg = `Round Draw!: Both chose ${humanchoice}`;
        break;

      case 1:
        msg = `You Won!!!: ${humanchoice} beats ${compchoice} !`;
        break;

      case 2:
        msg = `You Lost!!: ${compchoice} beat ${humanchoice}`;
        break;
    }
    return msg;
  }

  while (roundcount < 5) {
    console.log(getRoundWinner(getHumanChoice(), getComputerchoice()));
    console.log(`human score: ${humanScore}`);
    console.log(`computer score: ${compScore}`);
  }

  if (humanScore > compScore) {
    console.log(
      `You won the game!! Your Score - ${humanScore}\n Opponent Score - ${compScore}`,
    );
  } else if (compScore > humanScore) {
    console.log(
      `You Lost the game!! Your Score - ${humanScore}\n Opponent Score - ${compScore}`,
    );
  } else {
    console.log(
      `Game is a Draw!! Your Score - ${humanScore}\n Opponent Score - ${compScore} `,
    );
  }
}

runGame();
