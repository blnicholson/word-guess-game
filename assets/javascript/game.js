//Create an array of words
var words = ["fallout", "destiny", "minecraft", "fortnight", "callofduty"];
// Choose word randomly
var choosenWord = "";
choosenWord = words[Math.floor(Math.random() * words.length)];
//other variables
var rightGuess = [];
var wrongGuess = [];
var underScore = [];
console.log(choosenWord); 
// Create underscores based on length of word
    for (var i = 0; i < choosenWord.length; i++) {
        underScore[i] = "_";
    }
 

console.log(underScore);



// Get users guess
 document.onkeyup = function (event){
    var guess = String.fromCharCode(event.keyCode).toLowerCase();
    
    if(choosenWord.indexOf(guess) > -1) {
    // send word to right array
    rightGuess.push(guess);
    console.log (rightGuess)
    underScore[choosenWord.indexOf(guess)] = guess;
    console.log(underScore);
}     
       
        
    
    else {
            wrongGuess.push(guess);
            console.log(wrongGuess);        
    }
// Check if guess is right
// If right send to right array
// if wrong send to wrong array




    }
