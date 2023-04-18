let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("user-comp");
const scoreBord_div = document.querySelector(".score-bord");
const result_div = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scis_div = document.getElementById("s");

function getcompChoice() {
    const choices = ['r', 'p', 's'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}
console.log(getcompChoice());

function convert(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}
function win(user,comp) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    const smallUserWord = " (user) ".fontsize(3).sub();
    const smallCompWord = " (computer) ".fontsize(3).sub();
    result_div.innerHTML = `${convert(user)}${smallUserWord}   Beats  ${convert(comp)}${smallCompWord}  , You win! 🏆`;
    const userElement = document.getElementById(user);
    if (!userElement) {
      console.error(`Error: element with id '${user}' not found.`);
      return;
    }
    userElement.classList.add('green-glow');
    setTimeout(function () {
      userElement.classList.remove('green-glow');
    }, 800);
  
}
function lose(user,comp) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    const smallUserWord = " (user) ".fontsize(3).sub();
    const smallCompWord = " (computer) ".fontsize(3).sub();
    result_div.innerHTML = `${convert(user)}${smallUserWord}   Loses to  ${convert(comp)}${smallCompWord}  , You Lost! 💀`
    const userElement = document.getElementById(user);
    userElement.classList.add('red-glow');
    setTimeout(function () {
      userElement.classList.remove('red-glow');
    }, 800);
}
function draw(user,comp) {
    const smallUserWord = " (user) ".fontsize(3).sub();
    const smallCompWord = " (computer) ".fontsize(3).sub();
    result_div.innerHTML = `${convert(user)}${smallUserWord}   Equals  ${convert(comp)}${smallCompWord}  , You equal! 😬`
    const userElement = document.getElementById(user);
    userElement.classList.add('blue-glow');
    setTimeout(function () {
      userElement.classList.remove('blue-glow');
    }, 800);
}
function Game(userchoice) {
    const compchoice = getcompChoice();
    switch (userchoice + compchoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userchoice,compchoice); 
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userchoice,compchoice); 
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userchoice,compchoice);
            break;
        
    }
}
function main() {
    
    rock_div.addEventListener('click', function () {
        Game("r");
    })
    paper_div.addEventListener('click', function () {
        Game("p");
    })
    scis_div.addEventListener('click', function () {
        Game("s");
    })
}
main();