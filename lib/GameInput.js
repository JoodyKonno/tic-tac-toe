const readLine = require('readline');

function openRlInterface() {
  return readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

function ask(question) {
  return new Promise((resolve) => {
    const rl = openRlInterface();
    rl.question(question, (awnser) => {
      rl.close();
      resolve(awnser);
    });
  });
}

module.exports = {
  async identifyName(index) {
    const name = await ask(`Player ${index} Name: `);
    return name;
  },

  async identifyChar(index) {
    const char = await ask(`Player ${index} Char(X or O): `);
    return char;
  },

  readPlays() {
    return openRlInterface();
  },
};
