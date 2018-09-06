const wordGuess = 'curry';

const wordState = [];

let remainGuess = 5;

const prevGuess = [];

function displayWordState(state){
    let output = '';

    for(let i = 0 ; i< state.length ; i++){
        const char = state[i];
        
        output = output + char;
        output = output + ' ';
    }
    const wordStateContainer = document.getElementById('word');
    wordStateContainer.innerHTML = output;
}
function displayRemainGuess(num){
    document.getElementById('remainGuess').innerHTML = num;
}
function displayPrevGuesses(guessesArray){
    const list = document.getElementById('prevGuess');
        list.innerHTML = '';

    for (let i=0 ; i < guessesArray.length ; i++){

        const guess = document.createElement('li');
        guess.innerHTML = guessesArray[i];
        list.appendChild(guess);
    }
}
function guess(wordGuess , wordState , currGuess){
    for(let i = 0; i < wordGuess.length ; i++){
        if(wordGuess[i] == currGuess){
            wordState[i] = currGuess;
        }
    }
    displayWordState(wordState);
    const won = checkWon(wordState);
    if(won){
        window.alert('You Won!')
    }
    else if(remainGuess == 0){
        window.alert('You lost!')
    }
}
function checkWon(wordState){
    let hasBlanks= false;
    for(let i = 0; i < wordState.length ;  i++){
        if( wordState[i] == '_'){
    hasBlanks = true;
}
    }
    return !hasBlanks;
}
function setup(){
 for(let i =0; i < wordGuess.length ; i++){
     wordState.push('_');
 }
displayRemainGuess(remainGuess);
displayWordState(wordState);
displayPrevGuesses(prevGuess)
}
function validateInput(guess, prevGuess){
    if(guess.length==1 && prevGuess.indexOf(guess) == -1){
        return true;
    }
    return false;
}
const form = document.getElementById('playInput');
const input = document.getElementById('txtInput')

form.onsubmit = function(event){
    event.preventDefault();
    const currentInput = input.value.toLowerCase();

    if(!validateInput(currentInput , prevGuess)){
        window.alert('Please choose character from A-Z that has not been used before.')
        return ;
    }
    input.value = '';

    prevGuess.push(currentInput);
    guessesLeft =  remainGuess -1 ;
    displayRemainGuess(remainGuess);
    guess(wordGuess, wordState , currentInput)
    displayPrevGuesses(prevGuess);

}

setup();
