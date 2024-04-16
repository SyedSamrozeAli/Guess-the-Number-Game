const randNum = Math.floor((Math.random()) * 20) + 1;
console.log(randNum);

const form = document.querySelector(".form");
const input = document.querySelector("#guessField");
const submitBtn = document.querySelector("#subt");
const guessSlot = document.querySelector(".prevG");
const remmaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const playAgainBtn = document.querySelector(".playAgain");
let prevGuesses = [];
let remGuesses = 10;

let playGame = true;

function validateGuess(guess) {
    
    if (guess < 1 || guess > 20) {
        return false
        // console.log(playGame)
    } else {
        return true;
    }
}

function checkRemainingGuess(value) {
    
    if (value <= 0) {
        
        playGame = false;
        lowOrHi.textContent = "Sorry you lost the game. Try again";
        lowOrHi.style.backgroundColor = "rgb(255, 24, 24)";
        input.disabled = true;
        playAgainBtn.style.display = "block";
    
    }      

}

function progress(value) {
    prevGuesses.push(value);
    value = " " + value;
    let prevGuessValue = document.createTextNode(value);
    guessSlot.appendChild(prevGuessValue);
    remGuesses--;
    remmaining.innerHTML = remGuesses;
    checkRemainingGuess(remGuesses);
}

function checkGuess(value) {
    
    if (value > randNum) {
        
        lowOrHi.textContent = "Value is High! ";
        lowOrHi.style.backgroundColor = "rgb(255, 24, 24)";
        progress(value);

    } else if (value < randNum) {
        
        lowOrHi.textContent = "Value is Low! ";
        lowOrHi.style.backgroundColor = "rgb(255, 24, 24)";
        progress(value);
        

    } else {
        
        const text = document.createTextNode("You Won !! ");
        lowOrHi.textContent = "You won ";
        lowOrHi.style.backgroundColor = "rgb(3, 204, 3)";
        prevGuesses.push(value);
        value = " " + value;
        let prevGuessValue = document.createTextNode(value);
        guessSlot.appendChild(prevGuessValue);
        input.disabled = true;
        playAgainBtn.style.display = "block";

    }
}

playAgainBtn.addEventListener('click', () => {
    
    // this will refresh the page and user can play again
    window.location.reload();

})

form.addEventListener('submit', function (e) {
    
    e.preventDefault();
    let value = input.value;
    guessSlot.style.display="inline"
    console.log(value);
    if (validateGuess(value) && playGame) 

        checkGuess(value);
    else 
    
        lowOrHi.textContent = "Invalid value. Try again!";
    

    
})