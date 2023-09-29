import promptSync from "prompt-sync";

const prompt = promptSync();

const target = Math.round(Math.random()*100);
let guesses = 0;
// console.log(`shhh the number is ${target}`);

while (true){
    let ans = prompt("Guess the number.The number is between 0 and 100: ");
    guesses++;
    if (parseInt(ans)===target){
        console.log(`Good job you guessed the number in ${guesses} tries`);
        break;

    }else if (parseInt(ans) > target) {
      console.log("Your guess is greater than the number");
    } else {
      console.log("Your guess is lower than the number ");
    }
}