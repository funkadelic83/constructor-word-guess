var Letter = require("./letter.js");

wordToGuess = "foobar";

var Word = function(letter) {
    this.letters = [];
    this.guessLetter = function(guess) {
        this.letters.push(new Letter(guess));
    };
    console.log(this.letters);
    }

// module.exports = Classroom;