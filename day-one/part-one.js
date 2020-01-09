const inputConvert = require('../index');

const input = inputConvert('./input.txt')
  .split('\n')
  .map(Number);

const fuelRequirements = input.map(x => Math.floor(x / 3) - 2).reduce((a, b) => a + b);

console.log(fuelRequirements);
