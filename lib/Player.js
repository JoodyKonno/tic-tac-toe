module.exports = class Player {
  constructor(name, char) {
    this.name = name;
    this.char = char;
  }

  getName() {
    return this.name;
  }

  getChar() {
    return this.char;
  }
};
