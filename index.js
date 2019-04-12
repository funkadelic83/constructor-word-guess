var Word = require("./word.js");
var inquirer = require("inquirer");

var remainingGuesses = 7;

var wordsArray = ["money", "cash", "cheddar", "bucks", "dollars", "dolla dolla bills"];
var secretWord = wordsArray[(Math.floor(Math.random() * wordsArray.length))];
var chosenWord = new Word(secretWord);

console.log(secretWord);

console.log(chosenWord);

//CALLS THE FILL ARRAY METHOD ON THE CHOSEN WORD OBJECT
chosenWord.fillArray(secretWord);

function guessLetter() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What letter would you like to guess?",
                name: "guess"
            },
        ]).then(function (inquirerResponse) {
            var userGuess = inquirerResponse.guess;
            console.log(userGuess);

            //CALL addLetter on Letter:
            //send the guess to Letter.addLetter to determine if the letter is in the secretWord
            //that will display the solutions with the guessed words added
            //if the guess is wrong, decrement wrongGuesses by 1 and console log remainingGuesses to user.
            // if (remainingGuesses < 1) {console.log("You lose!")} to the user
            //if (remaining guessses > 0) then prompt the user for another letter
            

            guessLetter();
        })
};

guessLetter();


