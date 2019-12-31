const fuelRequirements = require('./rocket-equation');

test('Fuel requirements for two mass objects of 1969, 10 is to equal 655', () => {
  expect(fuelRequirements([10, 1969])).toBe(655);
});

test('Fuel requirements for two mass objects of 100756, 10 is to equal 33584', () => {
  expect(fuelRequirements([10, 100756])).toBe(33584);
});
