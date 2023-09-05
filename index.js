let number = Math.floor((Math.random() * 100) + 1);
//console.log(number);
let chances = 0;
let guess;

console.log(" ---- This is a guessing game ---- \n\n\n You have to Enter a Number between 1 and 100.\n\n");

do {
  guess = prompt("Enter a Number between 1 and 100 : ");
  guess = Number.parseInt(guess);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    console.log("Invalid input !!!!! \n Please Enter a Number between 1 and 100 ");
    continue;
  }

  chances++;

  if (guess > number) {
    console.log("Number Entered is Greater ! Try Smaller \n");
  } else if (guess < number) {
    console.log("Number Entered is Smaller ! Try Greater \n");
  }

} while (guess !== number);

let score = chances;
console.log("\n Congratulations 🥳🥳\n");
console.log(" The Number generated was - ", number, "\n You guessed it Right!! 😁");
console.log(" \n Your Final score is :- ", score);
