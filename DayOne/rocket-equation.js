const massInput = [
  106001,
  131342,
  51187,
  87791,
  68636,
  109091,
  111888,
  98012,
  90713,
  54284,
  143884,
  121856,
  117199,
  77883,
  132628,
  123828,
  56939,
  50447,
  77110,
  103272,
  148181,
  59323,
  98249,
  110065,
  144277,
  108204,
  92138,
  54449,
  108098,
  119292,
  65720,
  136053,
  116987,
  78305,
  143302,
  145067,
  106633,
  90519,
  58970,
  57090,
  77334,
  55929,
  95983,
  139236,
  62634,
  89275,
  113296,
  59530,
  114159,
  98407,
  120607,
  84394,
  91151,
  135965,
  56157,
  114073,
  95274,
  75259,
  60582,
  136361,
  54771,
  53286,
  70491,
  131915,
  114306,
  120749,
  117462,
  86194,
  112412,
  140705,
  72377,
  113646,
  145304,
  60811,
  127560,
  78769,
  99205,
  127236,
  136099,
  69166,
  141727,
  115973,
  100845,
  90494,
  62209,
  85841,
  116591,
  78406,
  140341,
  139849,
  55119,
  64092,
  58439,
  52273,
  51742,
  57258,
  95120,
  138764,
  106361,
  82104,
];

const calculateFuel = mass => {
  return Math.floor(mass / 3) - 2;
};

const calculateExtraFuel = fuel => {
  let totalFuel = 0;
  let currentFuel = fuel;

  while (currentFuel > 0) {
    currentFuel = calculateFuel(currentFuel);
    totalFuel += currentFuel > 0 ? currentFuel : 0;
  }

  return totalFuel;
};

const fuelRequirements = input => {
  const numberOfModules = input.length;
  let totalMass = 0;

  for (let i = 0; i < numberOfModules; i += 1) {
    const fuel = calculateFuel(input[i]);
    if (fuel > 0) {
      const extraFuel = calculateExtraFuel(fuel);
      totalMass += fuel + extraFuel;
    }
  }

  console.log(totalMass);
  return totalMass;
};

module.exports = fuelRequirements(massInput);

require('make-runnable');
