module.exports = class GameBoard {

  getBoard() {
    return Array(3)
      .fill(this.getLine())
      .join('\n');
  }

  getLine() {
    return Array(4)
      .fill('|')
      .join(' ');
  }

};