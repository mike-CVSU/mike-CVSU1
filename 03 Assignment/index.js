let randomNumber = generateRandomNumber();
let attempts = 0;

function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function restartGame() {
    randomNumber = generateRandomNumber();
    attempts = 0;
    document.getElementById('userGuess').value = '';
    document.getElementById('message').innerText = '';
    document.getElementById('attempts').innerText = 'Attempts: 0';
    document.getElementById('userGuess').disabled = false;
    document.querySelector('button').disabled = false;
}

function checkGuess() {
    let userGuess = document.getElementById('userGuess').value;
    attempts++;

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        document.getElementById('message').innerText = "Invalid input: Please Input number between 1 - 10.";
    } else {
        userGuess = parseInt(userGuess);
        if (userGuess === randomNumber) {
            document.getElementById('message').innerText = `Congratulations! You've won in ${attempts} attempts.`;
            disableInputAndButton();
            setTimeout(restartGame, 2000); // Restart game after 2 seconds
        } else if (userGuess < randomNumber) {
            document.getElementById('message').innerText = "Too low! Try again.";
        } else {
            document.getElementById('message').innerText = "Too high! Try again.";
        }
    }
    document.getElementById('attempts').innerText = `Attempts: ${attempts}`;
}

function disableInputAndButton() {
    document.getElementById('userGuess').disabled = true;
    document.querySelector('button').disabled = true;
}
