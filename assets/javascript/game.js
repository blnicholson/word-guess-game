//Create an array of words
var words = ["Super-mario", "Pacman", "Contra", "Galaga", "DigDug", "Pong", "Fall-Out", "Frogger", "Duck-Hunt", "Minecraft", "Destiny", "Fortnight", "Doom", "Duke-Nukem", "Portal", "Donkey-Kong", "Zelda","Pokemon", "Tetris","Half-Life" ];
var arrToLower = String.prototype.toLowerCase.apply(words).split(",");
console.log

// Choose word randomly
var choosenWord;
 choosenWord = arrToLower[Math.floor(Math.random() * arrToLower.length)];
 choosenWord.toLowerCase();
 console.log(choosenWord);
 // splits choosenWord into characters
 var wordSplit = choosenWord.split("");




//other variables
var rightGuess = [];
var wrongGuess = [];
var underScore = [];
var numberGuesses = 5;
var wins = 0;
var losses = 0;


// console.log(wordSplit);
console.log(numberGuesses);


function start(){
  underScore =[];
  rightGuess=[];
  wrongGuess=[];
  numberGuesses=5;

  arrToLower = String.prototype.toLowerCase.apply(words).split(",");
  choosenWord = arrToLower[Math.floor(Math.random() * arrToLower.length)];
  wordSplit = choosenWord.split("");
  for (var i = 0; i < choosenWord.length; i++) {
    underScore[i] = "-";
    document.getElementById("underscores").innerHTML = underScore.join(" ");
   
  } 
}
function reset(){
  underScore =[];
  rightGuess=[];
  wrongGuess=[];
  wins = 0;
  losses = 0;
  numberGuesses=5;
  
}
// Create underscores based on length of word

for (var i = 0; i < choosenWord.length; i++) {
  underScore.push("_");
  
  document.getElementById("underscores").innerHTML = underScore.join(" ");
 
}


// Get users guess
  document.onkeyup = function(event) {
  var guess = String.fromCharCode(event.keyCode).toLowerCase();

  //checks to see if use guess is right
  if (wordSplit.indexOf(guess) > -1) {
    rightGuess.push(guess);
  }
  else {
    wrongGuess.push(guess);
    numberGuesses--;
    document.getElementById("remaining").innerHTML = numberGuesses;
    document.getElementById("wrongGuess").innerHTML = wrongGuess;
    
  }
    // replaces underscore with right letter
  for (var i = 0; i < wordSplit.length; i++) {
    if (wordSplit[i] === guess) {
    underScore[i] = guess;
    console.log(underScore);
    document.getElementById ("underscores").innerHTML = underScore.join(" ");
    console.log(underScore.join(""));
    }
  }
   
  if(underScore.join("") === choosenWord) {
    wins++;
    // alert("congrats")
    document.getElementById('wins').innerHTML = wins; 
    start();
  }
  else if(numberGuesses === 0 ){
    losses++;
    alert("Game Over");
    document.getElementById("losses").innerHTML = losses;
    start();
    
  }
  
  }
    

  
  