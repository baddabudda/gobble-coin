let scoreBoardView = {
    human: document.querySelector('.player'),
    goblin: document.querySelector('.goblin')
};

let actionButtonsContainer = {
    roll: document.querySelector('.roll-button'),
    hold: document.querySelector('.hold-button')
};

const restartButton = document.querySelector('.restart-button');

function disableActionButtons() {
    for (const [id, button] of Object.entries(actionButtonsContainer)) {
        button.disabled = true;
    }
}

function enableActionButtons() {
    if (!gameController.humanTurn) {
        return
    }

    for (const [id, button] of Object.entries(actionButtonsContainer)) {
        button.disabled = false;
    }
}

function clearScoreBoard() {
    scoreBoardView.human.innerText = 0;
    scoreBoardView.goblin.innerText = 0;
}

function renderScore(playerName, scoreValue) {
    scoreBoardView[playerName].innerText = scoreValue;
}

function displayWinner(winnerName) {
    console.log(`${winnerName} won!`);
    restartButton.hidden = false;
}