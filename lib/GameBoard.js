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
    this.fields[line][column] = char;
    return this;
  }
};
