var Word = require("./word.js");
var inquirer = require("inquirer");

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
        })
};

guessLetter();

//CALL addLetter on Letter:
//send the guess to Letter.addLetter to determine if the letter is in the secretWord
// Letter.addLetter(guess);

