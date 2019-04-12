var Letter = require("./letter.js");

var Word = function () {
    this.lettersArray = [];
    this.fillArray = function (secretWord) {
        for (var i = 0; i < secretWord.length; i++) {
            this.lettersArray.push(new Letter(secretWord[i]));
        }
        this.lettersArray.forEach(function (letterObj) {
            console.log(letterObj.display);
        })
    };
}

module.exports = Word;

