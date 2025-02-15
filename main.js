let comInput = 0;
let resultTxt = document.getElementById("result-txt")
let chanceTxt = document.getElementById("chance-txt")
let userInput = document.getElementById("num-area")
let submitBtn = document.getElementById("submitBtn")
let resetBtn = document.getElementById("resetBtn")
let chance = 3;
let history = [];
let gameOver = false;

submitBtn.addEventListener("click", Rules)
resetBtn.addEventListener("click",reset)

function comGenerate(){
    comInput = Math.floor(Math.random() * 100) + 1;
    console.log(comInput)
}

comGenerate()
chanceTxt.textContent = `You have ${chance} chance(s). (and the answer is ${comInput})`

function Rules(){
    userValue = userInput.value

    if (userValue>100||userValue<1){
        resultTxt.textContent = "numbers between 1-100 are accepted"
        userInput.value = "";
        return
    }
    if (history.includes(userValue)){
        resultTxt.textContent="Already used"
        userInput.value = "";
        userInput.focus()
        return
    }
    chance --;
    chanceTxt.textContent = `You have ${chance} chance(s). (and the answer is ${comInput})`
    history.push(userValue)
    console.log(history)
    userInput.value = "";
    userInput.focus()

    if (userValue>comInput){
        resultTxt.textContent="down"
    } else if (userValue<comInput){
        resultTxt.textContent="up"
    } else if (userValue==comInput){
        resultTxt.textContent="Correct!"
        chanceTxt.textContent="";
        gameOver = true;
        submitBtn.disabled=true;
        
    } 

    if (chance < 1 && userValue!=comInput){
        gameOver=true;
        submitBtn.disabled=true;
        resultTxt.textContent="Game Over"
        chanceTxt.textContent="";
        
    } 

}

function reset(){
    gameOver = false;
    userInput.value = "";
    resultTxt.textContent="Result"
    chance = 3;
    submitBtn.disabled=false;
    history = [];
    comGenerate()
    chanceTxt.textContent = `You have ${chance} chance(s). (and the answer is ${comInput})`


}