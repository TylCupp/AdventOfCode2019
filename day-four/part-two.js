const duplicate = num => {
  let pass = false;
  let lastCut = 0;

  for (let i = 1; i <= num.length; i += 1) {
    if (num[i] !== num[i - 1]) {
      const cut = num.slice(lastCut, i);
      if (cut.length === 2) {
        pass = true;
      }
      lastCut = i;
    }
  }

  return pass;
};

const greaterOrEqual = num => {
  let pass = true;

  for (let i = 1; i < num.length; i += 1) {
    if (num[i] < num[i - 1]) {
      pass = false;
      break;
    }
  }

  return pass;
};

const allPasswords = () => {
  const lowerRange = 138307;
  const upperRange = 654504;
  let passwords = 0;

  for (let i = lowerRange; i < upperRange; i += 1) {
    const increase = greaterOrEqual(i.toString());

    if (increase) {
      const dup = duplicate(i.toString());
      if (dup) {
        passwords += 1;
      }
    }
  }

  return passwords;
};

console.log(allPasswords());
