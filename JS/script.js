 // VARIABLES
const choices = [{
        id: 1,
        name: "rock",
        image: "./image/rock.jpg"
    },
    {
        id: 2,
        name: "paper",
        image: "./image/paper.png"
    },
    {
        id: 3,
        name: "scissors",
        image: "./image/scissors.png"
    }
]


let playerPoints = document.querySelector(".playerPoints")
let computerPoints = document.querySelector(".computerPoints")
let playerChoiceImg = document.querySelector("#playerChoiceImg")
let playerChoiceTxt = document.querySelector("#playerChoiceTxt")
let computerChoiceImg = document.querySelector("#computerChoiceImg")
let computerChoiceTxt = document.querySelector("#computerChoiceTxt")
let buttons = document.querySelectorAll(".btn")
let points = [0, 0]
let randomNumber;



// EVENT LISTENERS
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.textContent === "rock") {
            playerChoiceImg.src = choices[0].image;
            playerChoiceTxt.textContent = choices[0].name;
        } else if (button.textContent === "paper") {
            playerChoiceImg.src = choices[1].image;
            playerChoiceTxt.textContent = choices[1].name;
        } else if (button.textContent === "scissors") {
            playerChoiceImg.src = choices[2].image;
            playerChoiceTxt.textContent = choices[2].name;
        }
        getComputerChoice();
        console.log(points);
    })
})


// FUNCTIONS
function getComputerChoice() {
    computerChoiceImg.src = "./image/change.gif"
    setTimeout(() => {
        randomNumber = Math.floor(Math.random() * 3);
        computerChoiceImg.src = choices[randomNumber].image;
        computerChoiceTxt.textContent = choices[randomNumber].name;
        gameRules();
        playerPoints.textContent = points[0];
        computerPoints.textContent = points[1];
        whoWon();
    }, 1000);
}

function gameRules() {
    if (playerChoiceTxt.textContent === choices[0].name && computerChoiceTxt.textContent === choices[1].name) {
        points[1]++;
    } else if (playerChoiceTxt.textContent === choices[1].name && computerChoiceTxt.textContent === choices[2].name) {
        points[1]++;
    } else if (playerChoiceTxt.textContent === choices[2].name && computerChoiceTxt.textContent === choices[0].name) {
        points[1]++;
    } else if (playerChoiceTxt.textContent === computerChoiceTxt.textContent) {
        console.log("draw");
    } else {
        points[0]++;
    }
}

function whoWon() {
    if (points[0] === 10) {
        alert("You Win!!!")
        points = [0, 0];
    } else if (points[1] === 10) {
        alert("You Loss!!!")
        points = [0, 0];
    }
}