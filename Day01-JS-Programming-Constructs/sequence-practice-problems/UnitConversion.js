// a. Convert 42 inches to feet
let inches = 42;
let feet = inches / 12;
console.log(inches +" inches = "+ feet +" feet");

// b. Convert 60 feet × 40 feet to meters (1 ft = 0.3048 meters)
let lengthFeet = 60;
let widthFeet = 40;
let lengthMeters = lengthFeet * 0.3048;
let widthMeters = widthFeet * 0.3048;
let areaMeters = lengthMeters * widthMeters;
console.log("Rectangular Plot: "+lengthFeet+"ft x "+widthFeet+"ft = "+areaMeters.toFixed(2)+" square meters");

// c. Calculate area of 25 such plots in acres (1 acre = 4046.86 square meters)
let totalAreaMeters = areaMeters * 25;
let areaAcres = totalAreaMeters / 4046.86;
console.log("Total area of 25 plots = "+areaAcres.toFixed(2)+" acres");
