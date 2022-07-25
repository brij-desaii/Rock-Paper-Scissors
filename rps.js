let win = 0;
let tie = 0;

//function that returns 0-rock 1-paper and 2-scissors
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 10)%3;
    return choice;
}

//function to play a round of the game
function playRound(compChoice, playerChoice)
{
    if (compChoice == 0)
    {
        if (playerChoice == 'rock')
        {
            tie = tie + 1;
            return "Tie";
        }
        else if (playerChoice == 'paper')
        {
            win++;
            return "You win! Paper beats rock";
        }
        else return "You lose. Rock beats scissors";
    }
    else if (compChoice == 1)
    {
        if (playerChoice == 'rock')
        {
            return "You lose. Paper beats rock";
        }
        else if (playerChoice == 'paper')
        {
            tie++;
            return "Tie";
        }
        else
        {
            win++;
            return "You win! Scissors beats paper";
        } 
        
    }
    else
    {
        if (playerChoice == 'rock')
        {
            win++;
            return "You win! Rock beats scissors";
        }
        else if (playerChoice == 'paper')
        {
            return "You lose. Scissors beats paper";
        }
        else
        {
            tie++;
            return "Tie";
        } 
    }

    
}

//main game function
function game()
{
    for(let i = 0; i < 5; i++)
    {
        let playerChoice = prompt("Enter rock or paper or scissors:");
        playerChoice = playerChoice.toLowerCase();
        let compChoice = getComputerChoice();

        console.log(playRound(compChoice, playerChoice));
    }
    let loss = 5 -(win+tie);
    console.log("The final score is: wins=",win," ties=", tie, " loses=", loss);
    if (win > loss)
    {
        console.log("You won the game!");
    }
    else if (win < loss)
    {
        console.log("You lost the game. Better luck next time!");
    }
    else
    {
        console.log("It's a tie!");
    }
}

game();