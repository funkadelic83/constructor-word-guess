var Letter = function (input) {
    this.letter = input;
    this.display = "";
    this.letterGuessed = false;
    if (this.letter === " ") {
        this.display = " ";
    } else {
        this.display = "_";
    };
    this.addLetter = function(userGuess) {
        if (this.letter === userGuessuess) {
            this.letterGuessed = true;
            this.display = this.letter;
        } else if (this.letter === " ") {
            console.log(" ");
        } else {
            console.log("?");
        }
    };
}
module.exports = Letter;