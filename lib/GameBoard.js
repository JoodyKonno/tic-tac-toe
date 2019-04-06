const {
  InvalidInputError,
  OutOfBoundsError,
  TakenFieldError,
} = require('./CustomErrors');

module.exports = class GameBoard {
  constructor() {
    this.defaultChar = '-';
    this.fields = [
      [this.defaultChar, this.defaultChar, this.defaultChar],
      [this.defaultChar, this.defaultChar, this.defaultChar],
      [this.defaultChar, this.defaultChar, this.defaultChar],
    ];
  }

  getFields() {
    return this.fields;
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

    if (this.fields[line][column] !== this.defaultChar) {
      throw new TakenFieldError();
    }

    this.fields[line][column] = char;
    return this;
  }

  isFilled() {
    return this.fields
      .every(fieldLine => fieldLine.indexOf(this.defaultChar) === -1);
  }

  hasVerticalMatches(char) {
    return [0, 1, 2]
      .map(lineIndex => this.fields
        .map(fieldLine => fieldLine[lineIndex]), this)
      .some(line => line
        .every(item => item === char));
  }

  hasHorizontalMatches(char) {
    return this.fields
      .some(line => line
        .every(item => item === char));
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
