const rps_map = new Map()

rps_map.set("rock", 0);
rps_map.set("paper", 1);
rps_map.set("scissors", 2);

function getByValue(searchValue) {
  for (let [key, value] of rps_map.entries()) {
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

function playGame(){
    let humanScore = 0;
    let compScore = 0;

    for(let i = 0; i<5; i++){
        let comp = getComputerChoice();
        let human = getHumanChoice();
        let winner = playRound(human, comp);

        if(winner == -1){
            compScore++;
        }
        else if (winner == 1){
            humanScore++;
        }

        console.log(`Human Score: ${humanScore}, Computer Score: ${compScore}`);
    }

    if(humanScore>compScore){
        console.log("Humanity Wins");
    }

    else if (compScore>humanScore){
        console.log("Computer Wins");
    }

    else{
        console.log("Tie");
    }
}

playGame();


