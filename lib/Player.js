module.exports = class Player {
  constructor(name) {
    this.name = name;
    this.char = '';
  }

  getName() {
    return this.name;
  }

  setChar(char) {
    this.char = char;
  }

  getChar() {
    return this.char;
  }
};
