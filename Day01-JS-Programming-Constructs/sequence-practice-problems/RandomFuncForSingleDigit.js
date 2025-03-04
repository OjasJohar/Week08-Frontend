function getRandomSingleDigit() {
    return Math.floor(Math.random() * 10);
}

console.log(getRandomSingleDigit()); // Outputs a random number between 0-9

/*
  Math.random() generates a random decimal between 0 and 1 (excluding 1).
  Multiplying by 10 scales it to a range of 0 to 9.999....
  Math.floor() rounds it down to the nearest integer, giving values from 0 to 9.
*/