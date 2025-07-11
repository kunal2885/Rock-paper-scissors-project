let userScore = 0
let compScore = 0
const choices = document.querySelectorAll(".imagediv")
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})
const gameDraw = ()=>{
    let msgBox = document.getElementById("msg-box")
    msgBox.innerText = "Game was Drawn"
    msgBox.style.backgroundColor = "rgb(43, 39, 39)"
}
const updateUserScore = (userScore)=>{
    const scoreUser = document.getElementById("userScore")
    scoreUser.innerText = userScore;
}
const updateCompScore = (compScore)=>{
    const scoreComp = document.getElementById("compScore")
    scoreComp.innerText = compScore;
}
const showWinner = (userWin,userChoice,compChoice)=>{
    let msgBox = document.getElementById("msg-box")
    if(userWin){
        userScore++;
        updateUserScore(userScore);
        msgBox.innerText = `Congrats, you win ${userChoice} beats ${compChoice}`
        msgBox.style.backgroundColor = "blue"
        
    }
    else{
        compScore++;
        updateCompScore(compScore)
        msgBox.innerText = `Computer win ,${compChoice} beats ${userChoice}`
        msgBox.style.backgroundColor = "red"
        
    }
    setTimeout(()=>{
        msgBox.innerText = "Pick Your Move"
        msgBox.style.backgroundColor = "rgb(43, 39, 39)"
    },15000)
    
}

const gencompchoice = ()=>{
    let choices = ["rock","paper","scissors"]
    let randomIndex = Math.round(Math.random()*2)
    return choices[randomIndex]


}
const playGame = (userChoice)=>{
    const compChoice = gencompchoice()
    if(userChoice === compChoice){
        gameDraw();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper, scissors
            userWin = compChoice === "paper"? false : true
        }
        else if(userChoice === "scissors"){
            //rock,paper
            userWin = compChoice === "paper"? true : false
        }
        else{
            //rock,scissors
            userWin = compChoice === "rock"? true : false
        }
        showWinner(userWin,userChoice,compChoice)
    }
    

}
