module.exports = class Player {
  constructor(name) {
    this.name = name;
    this.char = '';
  }

  setChar(char) {
    this.char = char;
  }

  getChar() {
    return this.char;
  }
};
