const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', getPlayerChoice);

const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', getPlayerChoice);

const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', getPlayerChoice);

const compBtn = document.querySelector('#compBtn');

const comp = document.querySelector('#comp');
const score = document.querySelector('#scoreh2');
const scorediv = document.querySelector('.score');

const pscore = document.querySelector('#pscore');
const cscore = document.querySelector('#cscore');   

let playerScore = 0;
let compScore = 0;

function findAncestor (el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}

function getPlayerChoice(e)
{
    let playerChoice = null;
    let playerSelection = e.target.id;
    console.log(e.target);

    rockBtn.classList.remove('chosen');
    paperBtn.classList.remove('chosen');
    scissorsBtn.classList.remove('chosen');

    if (e.target.classList.contains('sign'))
    {
        const parent = findAncestor(e.target, 'btn');
        parent.classList.add('chosen');
    }
    else 
    {
        e.target.classList.add('chosen');
    }
    
    if (playerSelection == 'rock') playerChoice = 0;
    else if (playerSelection == 'paper') playerChoice = 1;
    else playerChoice = 2;

    playRound(getComputerChoice(), playerChoice);
}

function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 10)%3;
    if (choice == 0) comp.textContent = "✊" ;
    else if (choice == 1) comp.textContent = "✋";
    else comp.textContent = "✌";
    compBtn.classList.add('chosen');
    return choice;
}

function playRound(compChoice, playerChoice)
{
    if (compChoice == 0)
    {
        if (playerChoice == 0)
        {
            playerScore++;
            compScore++;
            pscore.textContent = playerScore;
            cscore.textContent = compScore;
            score.textContent = "It's a tie!";
        }
        else if (playerChoice == 1)
        {
            playerScore++;
            pscore.textContent = playerScore;
            score.textContent = "You win! Paper beats rock";
        }
        else 
        {
            compScore++;
            cscore.textContent = compScore;
            score.textContent = "You lose. Rock beats scissors";
        }
    }
    else if (compChoice == 1)
    {
        if (playerChoice == 0)
        {
            compScore++;
            cscore.textContent = compScore;
            score.textContent = "You lose. Paper beats rock";
        }
        else if (playerChoice == 1)
        {
            playerScore++;
            compScore++;
            pscore.textContent = playerScore;
            cscore.textContent = compScore;
            score.textContent = "It's a tie!";
        }
        else
        {
            playerScore++;
            pscore.textContent = playerScore;
            score.textContent = "You win! Scissors beats paper";
        } 
        
    }
    else 
    {
        if (playerChoice == 0)  
        {
            playerScore++;
            pscore.textContent = playerScore;
            score.textContent = "You win! Rock beats scissors";
        }
        else if (playerChoice == 1)
        {
            compScore++;
            cscore.textContent = compScore;
            score.textContent = "You lose. Scissors beats paper";
        }
        else
        {
            playerScore++;
            compScore++;
            pscore.textContent = playerScore;
            cscore.textContent = compScore;
            score.textContent = "It's a tie!";
        } 
    }
    checkWinner();
}


function checkWinner()
{
    if (playerScore == 5 || compScore == 5)
    {
        rockBtn.removeEventListener('click', getPlayerChoice);
        paperBtn.removeEventListener('click', getPlayerChoice);
        scissorsBtn.removeEventListener('click', getPlayerChoice);

        if (playerScore > compScore)
        {
            score.textContent = "You won the game! Click here to play again";
            score.style.color = '#1fd655';
        }
        else if (playerScore < compScore)
        {
            score.textContent = "You lost the game :( Click here to play again";
            score.style.color = '#e31c25';
        }
        else 
        {
            score.textContent = "The game is a tie! Click here to play again";
            score.style.color = 'rgb(255, 217, 0)';
        }

        scorediv.addEventListener('click', () => location.reload());
        scorediv.classList.add('scorehover');
    }
}

