function hideElementById(elementId) {
    // const element = document.getElementById(elementId);
    // element.classList.add('hidden');
    document.getElementById(elementId).classList.add('hidden');
}

function showElementById(elementId) {
    // const element = document.getElementById(elementId);
    // element.classList.remove('hidden');
    document.getElementById(elementId).classList.remove('hidden');
}

function setBackgroundColorById(elementId){
    // const element = document.getElementById(elementId);
    // element.classList.add('bg-orange-400');

    document.getElementById(elementId).classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    

    // const randomNumber = Math.random()*25;
    // const index = Math.round(randomNumber);

    // const alphabet = alphabets[index];
    // return alphabet;
    // or shortcut
    return alphabets[Math.round(Math.random()*25)];
}

// function getARandomAlphabet() {
//     // get or create an alphabet array
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');
//     // console.log(alphabets);

//     // get a random index between 0 -25
//     const randomNumber = Math.random() * 25;
//     const index = Math.round(randomNumber);
    
//     const alphabet = alphabets[index];
//     // console.log(index, alphabet);
//     return alphabet;
// }

function increaseScore(){
    document.getElementById('score').innerText=parseInt(document.getElementById('score').innerText)+1;

    
}

function decreaseScore(){
    document.getElementById('life').innerText=parseInt(document.getElementById('life').innerText)-1;
    if(parseInt(document.getElementById('life').innerText)===0)
        gameOver();   
    
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    document.getElementById('f-score').innerText=document.getElementById('score').innerText;
}