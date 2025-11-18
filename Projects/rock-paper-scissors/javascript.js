const rps_map = new Map()

rps_map.set("rock", 0);
rps_map.set("paper", 1);
rps_map.set("scissors", 2);

let humanScore = 0;
let compScore = 0;


const display_div = document.querySelector("#display");

const p1 = document.createElement("p");
display_div.appendChild(p1);

p1.textContent = `HUMAN SCORE: ${humanScore}    COMPUTER SCORE: ${compScore}`;  
function getByValue(searchValue) {
//    console.log(searchValue);
  for (let [key, value] of rps_map.entries()) {
    // console.log(key, value);
    if (value === searchValue)
      return key;
  }
}

function getComputerChoice(){
    return Math.floor(Math.random() * (2 - 0 + 1) + 0);
}

function getHumanChoice(){
    let raw_choice = window.prompt("Choose your weapon");

    let choice = raw_choice.toLowerCase();

    let rps_equal = rps_map.get(choice);

    return rps_equal;

}

function playRound(human, computer){

    let compChoice = getByValue(computer);
    let humanChoice = getByValue(human);

    console.log(`Human Choice: ${humanChoice}, Computer Choice: ${compChoice}`);

    if(computer == human + 1 || (human == 2 && computer == 0)){
        console.log("Computer Beats Human");
        return -1;
    }

    else if(human == computer + 1 || (computer == 2 && human == 0)){
        console.log("Human Beats Computer");
        return 1;
    }

    else if(human == computer){
        return 0;
    }

}

function playGame(human){

    let comp = getComputerChoice();

    let winner = playRound(human, comp);

    if(winner == -1){
        compScore++;
    }
    else if (winner == 1){
        humanScore++;
    }
    
    p1.textContent = `HUMAN SCORE: ${humanScore}    COMPUTER SCORE: ${compScore}`;

    if(humanScore == 5){
        p1.textContent = "YOU WIN";
        humanScore = 0;
        compScore = 0;
}

    else if(compScore == 5){
        p1.textContent = "COMPUTER WINS";
        humanScore = 0;
        compScore = 0;
}

}

// playGame();

const rock_button = document.querySelector("#rock");
const paper_button = document.querySelector("#paper");
const scissor_button = document.querySelector("#scissors");



rock_button.addEventListener('click', ()=>{
    playGame(0);
})

paper_button.addEventListener('click', ()=>{
    playGame(1);
})

scissor_button.addEventListener('click', ()=>{
    playGame(2);
})




