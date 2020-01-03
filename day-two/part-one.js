const inputConvert = require('../index');

const input = inputConvert('./input.txt')
  .split(',')
  .map(Number);

const convertedOpcodeProgram = code => {
  const convertCode = code;

  for (let i = 0; i < convertCode.length; i += 4) {
    const opcode = convertCode[i];
    const valOne = convertCode[convertCode[i + 1]];
    const valTwo = convertCode[convertCode[i + 2]];

    if (opcode === 1) convertCode[convertCode[i + 3]] = valOne + valTwo;
    if (opcode === 2) convertCode[convertCode[i + 3]] = valOne * valTwo;
    if (opcode === 99) break;
  }

  return convertCode;
};

const restored = code => {
  const newCode = code;
  newCode[1] = 12;
  newCode[2] = 2;

  return newCode;
};

const newProgram = convertedOpcodeProgram(restored(input));

console.log(newProgram[0]);
