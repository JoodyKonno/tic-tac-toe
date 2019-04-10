const GameStates = require('./GameStates');

module.exports = class Game {
  constructor(player1, player2, gameBoard) {
    this.player1 = player1;
    this.player2 = player2;
    this.gameBoard = gameBoard;

    this.player1.setChar('X');
    this.player2.setChar('O');
  }

  play(player, position) {
    this.gameBoard.input(player.getChar(), position);
    return this;
  }

  getResult() {
    if (
      this.gameBoard.hasVerticalMatches(this.getPlayer1Char())
      || this.gameBoard.hasVerticalMatches(this.getPlayer2Char())
    ) {
      return GameStates.FINISHED;
    }

    if (
      this.gameBoard.hasHorizontalMatches(this.getPlayer1Char())
      || this.gameBoard.hasHorizontalMatches(this.getPlayer2Char())
    ) {
      return GameStates.FINISHED;
    }

    if (
      this.gameBoard.hasDiagonalMatches(this.getPlayer1Char())
      || this.gameBoard.hasDiagonalMatches(this.getPlayer2Char())
    ) {
      return GameStates.FINISHED;
    }

    if (!this.gameBoard.isFilled()) {
      return GameStates.IN_PROGRESS;
    }

    return GameStates.DRAW;
  }

  getBoardFields() {
    return this.gameBoard.getFields();
  }

  getBoard() {
    return this.gameBoard.getBoard();
  }

  getPlayer1() {
    return this.player1;
  }

  getPlayer2() {
    return this.player2;
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
