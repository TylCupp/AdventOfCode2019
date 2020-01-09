const inputConvert = require('../index');

const input = inputConvert('./input.txt')
  .split('\n')
  .map(Number);

const convertedFuelRequirements = input.map(mass => Math.floor(mass / 3) - 2);

const fuelRequiredForMass = (acc, cur) => acc + cur;

const fuelRequiredForFuelMass = (acc, cur) => {
  let additionalFuel = 0;
  let fuel = cur;

  while (fuel > 0) {
    fuel = Math.floor(fuel / 3) - 2;
    if (fuel > 0) additionalFuel += fuel;
  }

  return acc + additionalFuel;
};

const fuelForFuel = convertedFuelRequirements.reduce(fuelRequiredForFuelMass, 0);

const fuel = convertedFuelRequirements.reduce(fuelRequiredForMass);

console.log(fuelForFuel + fuel);
