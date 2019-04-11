var Word = require("./word.js");

var wordsArray = ["money", "cash", "cheddar", "bucks", "dollars", "dolla dolla bills"];
var secretWord = wordsArray[(Math.floor(Math.random() * wordsArray.length))];

var chosenWord = new Word(secretWord);
chosenWord.guessLetter();

// console.log(secretWord);

// var guessWord = new Word(wordToGuess);

////// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses