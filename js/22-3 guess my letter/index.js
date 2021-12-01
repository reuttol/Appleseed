const msg = document.querySelector(".msg");
const displayGuesses = document.querySelector('.guesses');
const quetionMark = document.querySelector(".guess");
const info = document.querySelector(".info");

const randomizeLetter = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97);

let guesses = [];
let randomLetter = randomizeLetter();
document.addEventListener("keydown",checkMove, false);

function checkMove(event){
    const guess = event.key.toLowerCase();

    if(!/^[A-Z]$/i.test(guess))
        display("Please enter a valid letter", "red");
    else if(guesses.includes(guess))
        display(`${guess} has already been guessed`,"red");
    else if(guess === randomLetter){
        display("Yay! You geussed it!", "green");
        quetionMark.innerText = randomLetter;
        info.innerText = "Would you like to play again?"
        displayGuesses.innerText = "";
        const btn = document.createElement('button');
        btn.innerText = "Yes";
        btn.addEventListener('click', playAgain);
        document.removeEventListener("keydown", checkMove);
        displayGuesses.appendChild(btn);
    }
    else{
        display("Nope, wrong letter","red");
        guesses.push(guess);
        text = displayGuesses.innerText;
        displayGuesses.innerText = text === '' ? `${guess}` : `${displayGuesses.innerText}, ${guess}`;
    }

}

function display(str, color){
    msg.innerText = str;
    msg.style.color = color; 
}

function playAgain(){
    guesses = []
    randomLetter = randomizeLetter();
    document.addEventListener("keydown",checkMove, false);

    msg.innerText = "Guess a letter"
    msg.style.color = "black";
    info.innerText = "Keys Guessed";
    quetionMark.innerText = "?";
    displayGuesses.removeChild(displayGuesses.firstChild);
}