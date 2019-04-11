const GameStates = require('./GameStates');
const { PlayerWithSameInputError } = require('./CustomErrors');

module.exports = class Game {
  constructor(player1, player2, gameBoard) {
    this.player1 = player1;
    this.player2 = player2;
    this.gameBoard = gameBoard;
    this.turns = [];
    this.currentPlayer = player1;

    if (this.player1.getChar() === this.player2.getChar()) {
      throw new PlayerWithSameInputError(`Two players can't get the same input: ${this.player1.getChar()}`);
    }
  }

  play(position) {
    const currentChar = this.currentPlayer.getChar();

    this.gameBoard.input(currentChar, position);

    this.turns.push({
      char: currentChar,
      position,
    });

    this.swapCurrentPlayer();
    return this;
  }

  getResult() {
    if (this.gameBoard.hasMatches(this.player1.getChar())) {
      return `${this.player1.getName()} is the winner`;
    }

    if (this.gameBoard.hasMatches(this.player2.getChar())) {
      return `${this.player2.getName()} is the winner`;
    }

    if (!this.gameBoard.isFilled()) {
      return GameStates.IN_PROGRESS;
    }

    return GameStates.DRAW;
  }

  swapCurrentPlayer() {
    if (this.currentPlayer.getChar() === this.player1.getChar()) {
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    }
  }

  getCurrentChar() {
    this.currentPlayer.getChar();
  }

  getCurrentPlayer() {
    return this.currentPlayer;
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
};
