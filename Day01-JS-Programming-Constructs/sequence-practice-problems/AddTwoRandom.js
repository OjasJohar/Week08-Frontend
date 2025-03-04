function firstRandom(){
    return Math.floor(Math.random() * 6)+1;
}
function secondRandom(){
    return Math.floor(Math.random() * 6)+1;
}

var firstRandom=firstRandom();
var secondRandom=secondRandom();
console.log(firstRandom + " + " + secondRandom + " = " + (firstRandom+secondRandom));