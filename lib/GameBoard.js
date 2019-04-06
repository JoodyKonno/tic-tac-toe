const {
  InvalidInputError,
  OutOfBoundsError,
} = require('./CustomErrors');

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

    if (!GameBoard.validateCoordinates(line, column)) {
      throw new OutOfBoundsError();
    }

    if (!GameBoard.validateChar(char)) {
      throw new InvalidInputError();
    }

    this.fields[line][column] = char;
    return this;
  }

  static validateCoordinates(line, column) {
    const validCoordinates = [0, 1, 2];
    if (validCoordinates.indexOf(line) === -1 || validCoordinates.indexOf(column) === -1) {
      return false;
    }
    return true;
  }

  static validateChar(char) {
    const validChars = ['X', 'O'];
    if (validChars.indexOf(char) === -1) {
      return false;
    }
    return true;
  }
};
