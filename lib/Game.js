module.exports = class Game {
  constructor(player1, player2, gameBoard) {
    this.player1 = player1;
    this.player2 = player2;
    this.gameBoard = gameBoard;

    this.player1.setChar('X');
    this.player2.setChar('O');
  }

  getBoard() {
    return this.gameBoard.getBoard();
  }

  getPlayer1Name() {
    return this.player1.getName();
  }

  getPlayer2Name() {
    return this.player2.getName();
  }

  getPlayer1Char() {
    return this.player1.getChar();
  }

  getPlayer2Char() {
    return this.player2.getChar();
  }
};