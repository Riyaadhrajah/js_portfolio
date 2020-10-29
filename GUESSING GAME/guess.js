var secret = 7;
var answer;
var startButton = document.getElementById("ClickMe");
startButton.addEventListener("click", askQuestion);

function askQuestion() {
    while (answer !== secret) {
        answer = parseInt(prompt("Please guess a number between 1 and 10."));

        if (answer < secret) {
            alert("Incorrect! Your guess is not high enough.");

        } else if (answer > secret) {
            alert("Incorrect! Your guess is too high.");
        } else {
            correct_answer_found();
        }
    }
}

function correct_answer_found() {
    document.write("Correct! You have guessed the right number.");

}