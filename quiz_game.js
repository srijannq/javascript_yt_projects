import promptSync from "prompt-sync"
const prompt = promptSync();
console.log("Welcome to the computer Hardware Quiz!");
let correctAnswers = 0;
const totalQuestions = 3;


const answer1 = prompt("What is the brain of computer? ");
const correctAnswer1 = "CPU";
if (answer1.toUpperCase() === correctAnswer1){
    console.log("You have got it right!");
    correctAnswers++;
}else{
    console.log("You got it wrong!");
}
const answer2 = prompt("What is better 3090ti or 4060?");
const correctAnswer2 = "3090ti";


if (answer2.toLowerCase() === correctAnswer2){
    console.log("You have got it right!");
    correctAnswers++;

}else{
    console.log("You got it wrong!");
}
const answer3 = prompt("What is the recommended amount of ram in 2023? ");
const correctAnswer3 = "16GB";
if (answer3.toUpperCase() === correctAnswer3){
    console.log("You have got it right!");
    correctAnswers++;
}else{
    console.log("You got it wrong!");
}

console.log(`The quiz has ended your score is ${Math.round((correctAnswers/totalQuestions)*100)}%`);

