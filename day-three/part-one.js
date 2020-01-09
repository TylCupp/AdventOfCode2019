const inputConvert = require('../index');

const [wireOne, wireTwo] = inputConvert('./input.txt').split('\n');

const location = wire => {
  const wireDirections = wire.split(',');
  const movement = {};
  let currentX = 0;
  let currentY = 0;
  let currentStepsTaken = 0;

  wireDirections.forEach(move => {
    const direction = move[0];
    const steps = Number(move.slice(1));

    for (let i = 0; i < steps; i += 1) {
      currentStepsTaken += 1;
      if (direction === 'R') currentX += 1;
      if (direction === 'L') currentX -= 1;
      if (direction === 'U') currentY += 1;
      if (direction === 'D') currentY -= 1;

      const coods = `${currentX}-${currentY}`;

      if (!movement[coods]) movement[coods] = currentStepsTaken;
    }
  });
  return movement;
};

const wire1 = location(wireOne);
const wire2 = location(wireTwo);

const findIntersections = () => {
  const longest = Object.keys(wire1).length > Object.keys(wire2).length ? wire1 : wire2;
  const smallest = Object.keys(wire1).length > Object.keys(wire2).length ? wire2 : wire1;
  const duplicates = {};

  Object.keys(longest).forEach(key => {
    if (smallest[key]) duplicates[key] = longest[key];
  });

  return duplicates;
};

const findShortest = () => {
  const duplicates = findIntersections();
  let shortest = Infinity;

  Object.keys(duplicates).forEach(key => {
    const test = key.split('-').reduce((a, b) => Math.abs(Number(a)) + Math.abs(Number(b)));
    shortest = shortest > test ? test : shortest;
  });

  return shortest;
};

console.log(findShortest());
