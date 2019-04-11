var Word = require("./word.js");

var guess = process.argv[2];

var wordsArray = ["money", "cash", "cheddar", "bucks", "dollars", "dolla dolla bills"];
var secretWord = wordsArray[(Math.floor(Math.random() * wordsArray.length))];
var chosenWord = new Word(secretWord);

console.log(secretWord);

// console.log(chosenWord);

//CALLS THE FILL ARRAY METHOD ON THE CHOSEN WORD OBJECT
chosenWord.fillArray(secretWord);
