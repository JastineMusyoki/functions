//QUESTION ONE:GAME
function getComputerChoice() {
    const choice = move.choice
    if (choice < 0.34) return "rock";
    if (choice < 0.67) return "paper";
    else if (choice < 1) return "paper";
    
}

const determineWinner = function(userChoice, computerChoice) {
    if (userChoice === computerChoice) return "tie";
    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "win";
    } else {
        return "lose";
    }
};


const displayResult = (result) => {
    const outcome = result === "tie" ? "It's a tie!" : result === "win" ? "Lucky you, You win!" : "Ooops, You lose!";
    console.log(outcome);
};


const playGame = function(userChoice) {
    const computerChoice = getComputerChoice();
    console.log("User choice:", userChoice);
    console.log("Computer choice:", computerChoice);
    const result = determineWinner(userChoice, computerChoice);
    displayResult(result);
};

// Cheat mode: Computer always chooses scissors
const cheatMode = () => {
    getComputerChoice = () => "scissors";
    console.log("Cheat mode activated: Computer always chooses scissors.");
};

cheatMode();

//testing
playGame("scissors");

//QUESTION TWO

function add(numbers) {
    if (numbers === "") return 0; 
    return numbers.split(",").reduce((acc, curr) => {
        const parsedNum = parseFloat(curr.trim()) || 0;
        return acc + parsedNum;
    }, 0); 
}

//testing
console.log(add("1,2,3,4")); 
console.log(add("1,2,one,4")); 
console.log(add(""));
