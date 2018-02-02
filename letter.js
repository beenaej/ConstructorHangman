// Creates a Letter Constructor that will display underscore or user letter 
//depending on what was entered and if it was correct

var Letter = function(guessedLetter) {
  
  this.guessedLetter = guessedLetter;  //string that will hold underlying character
  this.hasGuessed = false;		//boolean that stores whether letter guessed yet
  	//placeholder character
  
  this.displayLetter = function(){
  	if (this.hasGuessed === false){
  		// console.log("_");
  		return "_";
  	}else {
  		return this.guessedLetter;
  	}
  }
 

  this.updateGuessLetter = function(letter) {
  	//function that returns underlying char if correct or _ if not
  	var matched = this.guessedLetter.toLowerCase() === letter.toLowerCase();
  	if (matched){
  		this.hasGuessed = true;
  	
  	} return matched;

  	
  	
	}
};

 
module.exports = Letter;