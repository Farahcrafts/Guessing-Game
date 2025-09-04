const min = 0;
const max = 100;
let answer = Math.floor(Math.random() * (max - min + 1) + min);

let attempts = 0;
let running = true;
let guess;

while (running) {
  guess = window.prompt(`Enter a number between ${min} and ${max} `);
  guess = Number(guess);
  console.log(guess);

  if (isNaN(guess)) {
    window.alert("Please enter a number");
  } else if (guess < min || guess > max) {
    window.alert(`Please enter a valid number`);
  } else {
    attempts++;
    if (guess < answer) {
      window.alert("Too low!");
    } else if (guess > answer) {
      window.alert("Too high!");
    } else {
      window.alert(
        `Good job. ${guess} is the right number. You got it after ${attempts} attempts!`
      );
      running = false;
    }
  }
}
