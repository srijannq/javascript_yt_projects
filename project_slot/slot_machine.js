//1.Deposit some money
//2.Determine the no. of lines user has bet on
//3. collect the bet amount
//4.spin the machine
//5. check if the user has won and give them the money or if they lose take the bet amount.
import PromptSync from "prompt-sync";
const prompt = PromptSync();

const ROWS = 3;
const COLS = 3;
const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};
const SYMBOLS_VALUE = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

const deposit = () => {
  const depositAmount = parseFloat(prompt("Please enter the deposit amount: "));
  if (isNaN(depositAmount) || depositAmount <= 0) {
    console.log("Invalid deposit, try again!");
    deposit();
  }
  return depositAmount;
};

const getNoOfLines = () => {
  const noOfLines = parseInt(
    prompt("Enter the no. of lines that you want to bet on: ")
  );
  if (isNaN(noOfLines) || noOfLines < 1 || noOfLines > 3) {
    console.log("Invalid input. please choose between 1 and 3.");
    getNoOfLines();
  }
  return noOfLines;
};
const getBet = (balance, lines) => {
  const bet = parseFloat(prompt("Enter the bet per line : "));

  if (isNaN(bet) || bet <= 0 || bet > balance / lines) {
    console.log("Invalid bet");
    getBet(balance, lines);
  }
  return bet;
};
const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }
  const reels = [];
  for (let i = 0; i < COLS; i++) {
    reels.push([]);
    const reelSymbols = [...symbols];

    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedReel = reelSymbols[randomIndex];
      reels[i].push(selectedReel);
      reelSymbols.splice(randomIndex, 1);
    }
  }
  return reels;
};
const transpose = (reels) => {
  const rows = [];
  for (let i = 0; i < ROWS; i++) {
    rows.push([]);
    for (let j = 0; j < COLS; j++) {
      rows[i].push(reels[j][i]);
    }
  }
  return rows;
};
const printRows = (rows) => {
  for (const row of rows) {
    let rowString = "";
    for (const [i, symbol] of row.entries()) {
      rowString += symbol;
      if (i != row.length - 1) {
        rowString += " | ";
      }
    }
    console.log(rowString);
  }
};
const userWinings = (lines, user_bet, rows) => {
  let winings = 0;
  for (let row=0;row<lines;row++){
    
    const symbols = rows[row];
    let allSame = true;
    for(const symbol of symbols){
      if (symbol != symbols[0]){
        allSame = false;
        break;
      }

    }
    if (allSame){
      winings += user_bet*SYMBOLS_VALUE[symbols[0]];
    }

  }
  return winings;
};

let balance = deposit();
const noOfLines = getNoOfLines();
const bet = getBet(balance, noOfLines);
const reels = spin();
const transposeReels = transpose(reels);
printRows(transposeReels);
const winnings = userWinings(noOfLines,bet,transposeReels);
console.log(`Your winnings are: ${winnings}`);
