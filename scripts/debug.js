function d_printScores() {
    console.log(`Human: ${gameController.scoreBoard.human} | Goblin: ${gameController.scoreBoard.goblin}`);
}

function d_showTurn() {
    if (gameController.humanTurn) {
        var playerName = "Human";
    } else {
        playerName = "Goblin";
    }

    console.log(`${playerName}'s turn!`);
}