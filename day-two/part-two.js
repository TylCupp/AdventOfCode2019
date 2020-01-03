const inputConvert = require('../index');

const input = () => {
  return inputConvert('./input.txt')
    .split(',')
    .map(Number);
};

const convertedOpcodeProgram = (noun, verb, code) => {
  const convertCode = code;
  convertCode[1] = noun;
  convertCode[2] = verb;

  for (let i = 0; i < convertCode.length; i += 4) {
    const opcode = convertCode[i];
    const valOne = convertCode[convertCode[i + 1]];
    const valTwo = convertCode[convertCode[i + 2]];

    if (opcode === 1) convertCode[convertCode[i + 3]] = valOne + valTwo;
    if (opcode === 2) convertCode[convertCode[i + 3]] = valOne * valTwo;
    if (opcode === 99) break;
  }

  return convertCode[0];
};

const findNewNounAndVerb = () => {
  let found = 0;
  for (let i = 0; i < 99; i += 1) {
    for (let j = 0; j < 99; j += 1) {
      const resetCode = input();
      const returnValue = convertedOpcodeProgram(i, j, resetCode);

      if (returnValue === 19690720) {
        found = 100 * i + j;
        break;
      }
    }
    if (found > 0) break;
  }
  return found;
};

const newProgram = findNewNounAndVerb();

console.log(newProgram);
