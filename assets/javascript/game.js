// Javascript for My Psychic Game

var letterStr = 'abcdefghijklmnopqrstuvwxyz'
var randomLtr = '';
var winCnt = 0;
var loseCnt = 0;
var guessLeftCnt = 5;
var userInputlist = [];

// Get a Random word
function getrandomLetter() {
    var letter = letterStr.charAt(Math.floor(Math.random() * letterStr.length))
    return letter
}

// Display Game
function display() {
    document.querySelector("#randomLetter").innerHTML = randomLtr; 
    document.querySelector("#winCount").innerHTML =  winCnt;
    document.querySelector("#loseCount").innerHTML = loseCnt;
    document.querySelector("#GuessLeftCount").innerHTML = guessLeftCnt;
    document.querySelector("#guessLetter").innerHTML = userInputlist;
}

// Reset user input list
function resetArray(array) {
    while (array.length) {
        array.pop();
    }    
}

// ==============================================================================
// MAIN PROCESS
// Calling functions to start the game.
randomLtr = getrandomLetter()
display()

// When the user presses a key
document.onkeyup = function(event) {     
    // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
    var userInput = '' 
    if (guessLeftCnt > 0) {
        userInput = event.key.toLowerCase()
        userInputlist.push(userInput);
    }

    // If they guess the correct letter, increase and update counters
    if (userInput === randomLtr) 
    {   
        winCnt++
        guessLeftCnt = 5
        randomLtr = getrandomLetter()
        resetArray(userInputlist)
    }
    // If wrong, check if any Guess Left Count and update counters
    else 
    {
        guessLeftCnt--
        if (guessLeftCnt < 0)
        {
            loseCnt++
            guessLeftCnt = 5
            resetArray(userInputlist)
            randomLtr = getrandomLetter()                       
        }
    }   
    display() 
   
}
