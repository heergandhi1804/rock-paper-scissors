    let pscore = 0;
    let cscore = 0;

function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const emojis = {
        rock: '🪨',
        paper: '📜',
        scissors: '✂️'
    };

    const compChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById("player").innerText = `You chose: ${emojis[playerChoice]}`;
    document.getElementById("comp").innerText = `Computer chose: ${emojis[compChoice]}`;

    let winner = '';
   
    if (playerChoice === compChoice) {
        winner = "None, it is a tie!";
        pscore += 1;
        cscore += 1;
    } else if (
        (playerChoice === 'rock' && compChoice === 'scissors') ||
        (playerChoice === 'paper' && compChoice === 'rock') ||
        (playerChoice === 'scissors' && compChoice === 'paper')
    ) {
        winner = "You win!";
        pscore += 1;
    } else {
        winner = "Computer wins!";
        cscore += 1;
    }

    document.getElementById("winner").innerText = `Winner: ${winner}`;
    document.getElementById("score").innerText = `Score: You ${pscore} - ${cscore} Computer`;
}
