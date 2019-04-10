const {
  InvalidInputError,
  OutOfBoundsError,
  TakenFieldError,
} = require('./CustomErrors');

function getLine(line) {
  return '|'
    .concat(line.join('|'))
    .concat('|');
}

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
      .map(getLine)
      .join('\n');
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

  hasDiagonalMatches(char) {
    const m1 = [0, 1, 2]
      .map(index => this.fields[index][index], this)
      .every(item => item === char);

    const m2 = [0, 1, 2]
      .map(index => this.fields[this.fields.length - index - 1][index], this)
      .every(item => item === char);

    return (m1) || (m2);
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
