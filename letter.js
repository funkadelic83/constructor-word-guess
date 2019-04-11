var Letter = function(input) {
    this.letter = input;
    this.letterGuessed = false;
    if (this.letterGuessed === true) {
        console.log(this.letter);
    } else if (this.letter === " ") {
        console.log(" ");
    } else {
        console.log("_");
    };
    this.guessLetter = function(guess) {
        if (this.letter === guess) {
            this.letterGuessed = true;
            console.log(this.letter);
        } else if (this.letter === " ") {
            console.log("");
        } else {
            console.log("_");
        }
    }
};

// Letter('a');
// guessLetter('b');

module.exports = Letter;