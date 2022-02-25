const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let secretNumber = 50;
const checkGuess = (num) => {
    if(num > secretNumber) {
     console.log("Too high");
     return false;
    }

    if(num < secretNumber) {
     console.log("Too low");
     return false;
    }

    if(num === secretNumber) {
     console.log("Correct!");
    return true;
    }
}

const askGuess = () =>
{
    rl.question("Enter a guess: ", (guess) => {
        if(!checkGuess(Number(guess))) {
            askGuess()
        }
        else {
            console.log("You Win!")
            rl.close()
        }
})}

askGuess();





console.log(askGuess());

// let test1 = checkGuess(49);
// console.log(test1);

// let test2 = checkGuess(50);
// console.log(test2);

// let test3 = checkGuess(51);
// console.log(test3);
