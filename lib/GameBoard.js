module.exports = class GameBoard {
  static getBoard() {
    return Array(3)
      .fill(GameBoard.getLine())
      .join('\n');
  }

  static getLine() {
    return Array(4)
      .fill('|')
      .join(' ');
  }
};
