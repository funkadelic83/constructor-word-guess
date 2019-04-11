var string = [];

var Letter = function () {
    this.letter = "";
    this.letterGuessed = false;
    if (this.letterGuessed === true) {
        string.push(this.letter);
    } else if (this.letter === " ") {
        string.push(" ");
    } else {
        string.push("_");
        
    };
    // console.log(string.join(" "));
    this.addLetter = function (guess) {
        if (this.letter === guess) {
            this.letterGuessed = true;
            console.log(this.letter);
        } else if (this.letter === " ") {
            console.log(" ");
        } else {
            console.log("?");
        }
    }
};
// Letter('a');
// guessLetter('b');

module.exports = Letter;