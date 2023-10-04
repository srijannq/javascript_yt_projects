import PromptSync from "prompt-sync";
const prompt = PromptSync();


const answer1 = prompt("Do you want to play the game(y/n)? ");
if (answer1.toLowerCase()==="y"){
    const answer2 = prompt("You start of the journey and came to a intersection with two paths. which path do you go left or right?");
    if (answer2==="left"){
        const answer3 = prompt("You come across a bridge. Do you want to to cross it or turn and find another path");
        if (answer3==="cross"){
            console.log("You find the treasure across the bridge and win! Congratulations!");

        }else{
            console.log("You come across a deadend . you lose!")
        }

    }else{
        console.log("You come across a deadly monster which kills you. You lose!")
    }


}else{
    console.log("Too bad! bye.");
}