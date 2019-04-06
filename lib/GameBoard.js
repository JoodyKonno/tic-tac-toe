const OutOfBoundsError = require('./OutOfBoundsError');

module.exports = class GameBoard {
  constructor() {
    this.fields = [
      ['-', '-', '-'],
      ['-', '-', '-'],
      ['-', '-', '-'],
    ];
  }

  getBoard() {
    return this.fields
      .map(line => GameBoard.getLine(line))
      .join('\n');
  }

  static getLine(line) {
    return '|'
      .concat(line.join('|'))
      .concat('|');
  }

  input(char, position) {
    const [line, column] = position;

    if (line > 3 || column > 3) {
      throw new OutOfBoundsError();
    }

    this.fields[line][column] = char;
    return this;
  }
};
