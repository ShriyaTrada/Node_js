const num = Math.floor(Math.random() * 100) + 1;
let a = 0;

function checkGuess() 
{
    const Guess = parseInt(document.getElementById('guessInput').value);
    a++;

    if (Guess === num) 
    {
        document.getElementById('result').innerText = `Congratulations! You guessed the correct number (${num}) in ${a} attempts.`;
    } 
    else if (Guess < num) 
    {
        document.getElementById('result').innerText = 'Too low! Try again.';
    } 
    else 
    {
        document.getElementById('result').innerText = 'Too high! Try again.';
    }
}