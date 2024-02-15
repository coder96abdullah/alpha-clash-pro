document.addEventListener('keyup',function(event){
    console.log(event.key);
   if(event.key=='/')
      gameOver();
   
    if(event.key.toLowerCase()===document.getElementById('current-alphabet').innerText.toLowerCase())
       {
        increaseScore();
        removeBackgroundColorById(event.key.toLowerCase());  
         continueGame();
        }
    else{
        decreaseScore();
        removeBackgroundColorById(document.getElementById('current-alphabet').innerText.toLowerCase());
        continueGame();}
       
       
    
       
})




// function play(){
//     // step-1: hide the home screen. to hide the screen add the class hidden to the home section
//     
// document.getElementById('home-screen').classList.add('hidden');
    

//     // show the playground
//     const playgroundSection = document.getElementById('play-ground').classList.remove('hidden');
    
//    
// }



function continueGame(){
    // step -1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    

    // set randomly generated alphabet to the screen (show it)
    // const currentAlphabetElement = document.getElementById('current-alphabet');
    // currentAlphabetElement.innerText = alphabet;
    // or shortcut
     document.getElementById('current-alphabet').innerText = alphabet;
    



    // set background color
    setBackgroundColorById(alphabet);
    
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}

function playAgain(){
    hideElementById('final-score');
    showElementById('play-ground');
    document.getElementById('score').innerText=0;
    document.getElementById('life').innerText=5;
    removeBackgroundColorById(document.getElementById('current-alphabet').innerText.toLowerCase());
    continueGame(); 
}
