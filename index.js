var inquirer = require("inquirer");
var Word = require("./word.js");
var Letter = require("./letter.js");
var prompt = require("prompt");

prompt.start();

	console.log("Welcome to a very celestial hangman! Best of luck!!");

var game = function(){
	this.wordList = ["Earth", "Uranus", "Mars", "Pluto", "Venus", "Jupiter", "Saturn",
				"Mercury", "Neptune", "Sun", "Moon"];
	this.guessesRemaining = 10;
	this.currentWrd = null;
	this.rightLetter = [];
	this.wrongLetter = [];
	this.Wins = 0;
	this.Losses = 0;
	this.startGame = function(wrd){
		var chosenWord = this.wordList[Math.floor(Math.random() * this.wordList.length)];
		this.currentWrd = new Word(chosenWord);
		this.askUser();
		console.log(this.currentWrd.wordShow());  //added so blanks show in beginning
	}

	this.askUser = function(){

		var self = this;

		if (self.currentWrd.didWeFindTheWord()){
					console.log("You won!!!");
					return 1;
				} else {
		
		prompt.get(["guessLetter"], function(err,result){
			
    
			console.log("The letter you guessed is " + result.guessLetter);

			var howManyDidUserGuessSoFar = self.currentWrd.checkIfLetterFound(result.guessLetter);
		
			if (!howManyDidUserGuessSoFar){
				console.log("You got it wrong!");
				self.guessesRemaining -= 1;
				console.log("Guesses remaining: " + self.guessesRemaining);
			} else {
				console.log("You guessed right!");
				}

			if (self.guessesRemaining > 0 || self.currentWrd === false){
				self.askUser();
			} else if (self.guessesRemaining === 0){
				console.log("Sorry, the game is over!" + self.currentWrd.chosenWord);
				console.log(self.currentWrd.wordShow());
			} 
	
			console.log(self.currentWrd.wordShow());
			
			});
	}
}
}

var game1 = new game();
game1.startGame();

