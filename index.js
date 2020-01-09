const fs = require('fs');

const input = file => {
  return fs.readFileSync(file, 'utf8');
};

module.exports = input;
