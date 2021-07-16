//variable to store the list of guesses
let guesses=[];
//variable to store a correct random number
let correctNumber=getRandomNumber();

window.onload=function(){
    document.getElementById("number-submit").addEventListener("click",playGame);
    document.getElementById("restart-game").addEventListener("click",initGame);
}
function playGame(){
  let numberGuess=document.getElementById("number-guess").value;
  saveGuessHistory(numberGuess);
  displayResult(numberGuess);
  displayHistory();

}

function getRandomNumber(){
    /**
   * Math.random returns a number between 0 and 1,
   * and that's why we multiply it by 100
   */
  return Math.floor((Math.random()*100)+1);
}

function initGame(){
    correctNumber=getRandomNumber();
    document.getElementById("result").innerHTML = "";
    guesses=[];
    displayHistory();

}

// Save the user guess entered from the input
function saveGuessHistory(numberGuess){
    guesses.push(numberGuess);
   //console.log(guesses);
}

function displayHistory(){
    let index=guesses.length -1
    let list="<ul class ='list-group'>";
    while(index>=0){
        list+="<li class ='list-group-item'>"+"You guessed "+guesses[index]+"</li>";
        index--;
    }
    list+="</ul>";
    document.getElementById('history').innerHTML=list;

}



function displayResult(numberGuess){
    if(numberGuess >  correctNumber){
        showNumberAbove();
    }
    else if(numberGuess < correctNumber){
        showNumberBelow();
    }
    else{
        showYouWon();
    }

}

function getDialog(dialogType,text){
    let dialog;
    switch(dialogType){
        case "warning":
            dialog="<div class ='alert alert-warning' role='alert'>"
            break;
        case 'won':
            dialog="<div class ='alert alert-success' role='alert'>"
            break;
            
    }
    dialog=dialog+text+"</div>";
    return dialog;

}

function showYouWon(){
    const text="Awesome job, you got it!";
    let dialog=getDialog('won',text);
    document.getElementById("result").innerHTML=dialog;
}

function showNumberAbove(){
    const text = "Your guess is too high!"
    let dialog = getDialog('warning', text)
    document.getElementById("result").innerHTML = dialog;
  }
  
  function showNumberBelow(){
    const text = "Your guess is too low!"
    let dialog = getDialog('warning', text)
    document.getElementById("result").innerHTML = dialog;
  }


  