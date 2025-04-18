// function countScoreGoblin(diceValue) {
//     if (diceValue === 1) {
//         gameController.humanTurn = !gameController.humanTurn;
//         goblinScoreStreak = 0;
//         d_showTurn();
//     } else {
//         goblinScoreStreak += diceValue
//         updateScore(diceValue);

//         if (gameController.scoreBoard.goblin >= WIN_SCORE) {
//             gameOver('Goblin');
//             return;
//         }

//         if (goblinScoreStreak > 20) {
//             gameController.humanTurn = true;
//             goblinScoreStreak = 0;
//             return;
//         } else {
//             roll(countScoreGoblin);
//         }
//     }
// }

// function countScoreHuman(diceValue) {
//     if (diceValue === 1) {
//         gameController.humanTurn = !gameController.humanTurn;
//         runGoblin();
//         d_showTurn();
//     } else {
//         updateScore(diceValue);
//     }

//     if (gameController.scoreBoard.human >= WIN_SCORE) {
//         gameOver('Human');
//         return;
//     }

//     d_printScores();
// }
