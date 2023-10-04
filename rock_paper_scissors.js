import promptSync from "prompt-sync";
const prompt = promptSync();
let wins = 0;
let losses = 0;
let ties = 0;
const computerChoices = ["rock", "paper", "scissors"];
while (true) {
  let userChoice = prompt("Choose rock,paper or scissors or q to quit: ").trim();
  
  if (userChoice.toLowerCase()=='q'){
    break;
  }
  else if (
    userChoice === "rock" ||
    userChoice === "paper" ||
    userChoice === "scissors"
  ) {
    let randomChoice = Math.floor(Math.random() * 3);
    let computerChoice = computerChoices[randomChoice];
    console.log(`Computer Choice:${computerChoice}`);
    if (computerChoice === userChoice) {
      console.log("Draw🥱");
      ties++;
    } else if (
      (computerChoice === "rock" && userChoice === "paper") ||
      (computerChoice === "paper" && userChoice === "scissors") ||
      (computerChoice === "scissors" && userChoice === "rock")
    ) {
      console.log("Won🥳");
      wins++;
    } else {
      console.log("Lose😱");
      losses++;
    }
  } else {
    console.log("Please enter valid input.😥");

  }
}
console.log(`Your record: ${wins} wins,${ties} ties,${losses} losses`);
