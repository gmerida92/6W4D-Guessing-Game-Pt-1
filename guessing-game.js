const readline = require('readline');
const askGuess = readline.createInterface({
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

askGuess.question("Enter a guess: ",(guess) => {
    let response = checkGuess(Number(guess));
    if(!response){
        askGuess.question("Enter a guess: ",(guess) => {
            checkGuess(Number(guess));
        })
    }
    else {
        askGuess.close()
    }
})





console.log(askGuess());

// let test1 = checkGuess(49);
// console.log(test1);

// let test2 = checkGuess(50);
// console.log(test2);

// let test3 = checkGuess(51);
// console.log(test3);
