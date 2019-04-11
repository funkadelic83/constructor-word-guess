var Letter = require("./letter.js");

var Word = function() {
    this.letters = [];
    this.fillArray = function(secretWord) {
        for (var i = 0; i < secretWord.length; i++) {
            this.letters.push(new Letter(secretWord[i]));
        }
        
    };
    console.log(this.letters);
    
    }

module.exports = Word;

