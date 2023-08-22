let number = Math.floor((Math.random() * 100) + 1);
let chances = 0;
let guess;

console.log("This is a guessing game and you have to enter a number between 1 and 100.\n");

do {
  guess = prompt("Enter a number between 1 and 100");
  guess = Number.parseInt(guess);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    console.log("Invalid input. Please enter a number between 1 and 100.");
    continue;
  }

  chances++;

  if (guess > number) {
    console.log("Number entered is greater.");
  } else if (guess < number) {
    console.log("Number entered is smaller.");
  }

} while (guess !== number);

let score = 100 - chances;
console.log("\nCongratulations 🥳🥳");
console.log("The number generated was", number, "and you guessed it right! 😁");
console.log("Your final score is", score);