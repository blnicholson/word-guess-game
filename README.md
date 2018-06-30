# word-guess-game

This project was created using html, css, bootstrap and javascript.  It is a basic hangman or letter guess game.  The user will press the image to start the game.  The game will take the user's input and if the correct letter is guessed, it will place the correct letter on the gameboard.  This will replace the underscore that was on the gameboard. If the user correctly guesses all letters, the game will add a win to the win column and repick another letter.  If the user runs out of remaining guesses, the game will alert the user that they ran out of guesses, and add a win to the loss column. 

Example of game start function
  function start(){
  underScore =[];
  rightGuess=[];
  wrongGuess=[];
  numberGuesses=15;

  arrToLower = String.prototype.toLowerCase.apply(words).split(",");
  choosenWord = arrToLower[Math.floor(Math.random() * arrToLower.length)];
  wordSplit = choosenWord.split("");
  for (var i = 0; i < choosenWord.length; i++) {
    underScore[i] = "-";
    document.getElementById("underscores").innerHTML = underScore.join(" ");
   
  } 
}
