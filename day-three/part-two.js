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
  let smallestJourney = Infinity;

  Object.keys(wire1).forEach(key => {
    const distance = wire2[key] ? wire1[key] + wire2[key] : Infinity;
    smallestJourney = smallestJourney > distance ? distance : smallestJourney;
  });

  return smallestJourney;
};

console.log(findIntersections());
