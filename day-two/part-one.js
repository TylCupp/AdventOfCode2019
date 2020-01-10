const inputConvert = require('../index');

const input = inputConvert('./input.txt')
  .split(',')
  .map(Number);

const opcode1 = (x, y) => {
  return x + y;
};

const opcode2 = (x, y) => {
  return x * y;
};

const convertedOpcodeProgram = code => {
  const program = code;
  let instructionPointer = 0;

  while (instructionPointer <= code.length) {
    const opcode = program[instructionPointer];

    if (opcode === 99) break;

    if (opcode === 1 || opcode === 2) {
      const val1 = program[program[instructionPointer + 1]];
      const val2 = program[program[instructionPointer + 2]];
      const store = program[instructionPointer + 3];
      instructionPointer += 4;

      program[store] = opcode === 1 ? opcode1(val1, val2) : opcode2(val1, val2);
    }
  }
  return program[0];
};

console.log(convertedOpcodeProgram(input));
