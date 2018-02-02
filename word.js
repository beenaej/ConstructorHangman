var Letter = require("./letter.js");


var spaceHolder = [];
var chosenWord = "";

var placeHolder = function(chosenWord){
		var letterCollection = [];
		for (var i = 0; i < chosenWord.length; i++){
			letterCollection.push(new Letter(chosenWord.charAt(i)));
		}
		return letterCollection;
		} 

var Word = function(chosenWord){
	this.chosenWord = chosenWord;
	this.letterCollection = placeHolder(this.chosenWord);
	// this.underScore = [];
	this.found = false;
	
	// console.log("Here's our chosenWord in the word constructor: " + this.chosenWord);


Word.prototype.checkIfLetterFound = function(guessLetter){
		var whatToReturn = false;
		for (var i=0; i < this.letterCollection.length; i++){
			whatToReturn |= this.letterCollection[i].updateGuessLetter(guessLetter);
			
		} return whatToReturn;
	
	}

Word.prototype.didWeFindTheWord = function(){
	var whatToReturn = true;
		for (var i=0; i < this.letterCollection.length; i++){
			whatToReturn &= this.letterCollection[i].hasGuessed;
		} return whatToReturn;
	
	}

Word.prototype.wordShow = function(){
	
	var string1 = "";
	for (var i = 0; i < this.letterCollection.length; i++){
		string1 += " " + this.letterCollection[i].displayLetter();
	
	}
	return string1;
}
}
	


module.exports = Word;


