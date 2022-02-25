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
     console.log("Correct");
     return true;
    }
}


// let test = checkGuess(50);
