function rollDice() {
    return Math.floor(Math.random() * 6) + 1;  //floor(0 + 5.999..)->(0+5) + 1
}

console.log(rollDice()); // Outputs a random number between 1-6
