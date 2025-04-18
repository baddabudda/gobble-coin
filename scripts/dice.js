const MIN_DICE_VALUE = 1.0;
const MAX_DICE_VALUE = 6.0;
const diceImage = document.querySelector('.dice-image');

function generateDiceValue() {
    let diceValue = Math.floor(Math.random() * (MAX_DICE_VALUE - MIN_DICE_VALUE + 1) + MIN_DICE_VALUE);
    return diceValue;
}

function updateDiceGraphic(diceValue) {
    displayDice(diceValue);
    shakeDice();
}

function shakeDice() {
    diceImage.classList.add('dice-image_rotated');
    setTimeout(() => {
        diceImage.classList.remove('dice-image_rotated');
    }, 30);
}

function displayDice(diceNumber) {
    switch(diceNumber) {
        case 1:
            diceImage.src = "./public/dice-1.svg";
            break;
        case 2:
            diceImage.src = "./public/dice-2.svg";
            break;
        case 3:
            diceImage.src = "./public/dice-3.svg";
            break;
        case 4:
            diceImage.src = "./public/dice-4.svg";
            break;
        case 5:
            diceImage.src = "./public/dice-5.svg";
            break;
        case 6:
            diceImage.src = "./public/dice-6.svg";
            break;
        default:
            diceImage.src = ""
    }
}