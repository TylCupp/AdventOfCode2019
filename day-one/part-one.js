const inputConvert = require('../index');

const input = inputConvert('./input.txt');

const fuelRequirements = input.map(x => Math.floor(x / 3) - 2).reduce((a, b) => a + b);

console.log(fuelRequirements);
