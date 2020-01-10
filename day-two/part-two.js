const inputConvert = require('../index');

const input = () => {
  return inputConvert('./input.txt')
    .split(',')
    .map(Number);
};

const opcode1 = (x, y) => {
  return x + y;
};

const opcode2 = (x, y) => {
  return x * y;
};

const convertedOpcodeProgram = (code, noun, verb) => {
  const program = code;
  program[1] = noun;
  program[2] = verb;
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
    } else {
      instructionPointer += 4;
    }
  }
  return program[0];
};

const locateIssue = locate => {
  let locatedOutput;

  for (let i = 0; i < 99; i += 1) {
    if (locatedOutput) break;
    for (let j = 0; j < 99; j += 1) {
      const match = convertedOpcodeProgram(input(), i, j);
      if (match === locate) {
        locatedOutput = 100 * i + j;
      }
    }
  }

  return locatedOutput;
};

console.log(locateIssue(19690720));
