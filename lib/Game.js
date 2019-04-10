const GameStates = require('./GameStates');

module.exports = class Game {
  constructor(player1, player2, gameBoard) {
    this.player1 = player1;
    this.player2 = player2;
    this.gameBoard = gameBoard;
    this.turns = [];
  }

  play(position) {
    const currentChar = this.getCurrentChar();

    this.gameBoard.input(currentChar, position);

    this.turns.push({
      char: currentChar,
      position,
    });

    return this;
  }

  getResult() {
    if (this.gameBoard.hasMatches(this.getPlayer1Char())) {
      return `${this.getPlayer1Name()} is the winner`;
    }

    if (this.gameBoard.hasMatches(this.getPlayer2Char())) {
      return `${this.getPlayer2Name()} is the winner`;
    }

    if (!this.gameBoard.isFilled()) {
      return GameStates.IN_PROGRESS;
    }

    return GameStates.DRAW;
  }

  getCurrentChar() {
    if (this.isFirstTurn()) {
      return this.player1.getChar();
    }

    const { char } = this.getLastTurn();

    return (char === this.player1.getChar())
      ? this.player2.getChar()
      : this.player1.getChar();
  }

  isFirstTurn() {
    return !(this.turns.length);
  }

  getLastTurn() {
    return this.turns[this.turns.length - 1];
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
