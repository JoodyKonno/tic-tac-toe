/* global describe it expect beforeEach */

const GameBoard = require('../../lib/GameBoard');

let gameBoard;

describe('gameBoard.js', () => {
  beforeEach(() => {
    gameBoard = new GameBoard();
  });

  describe('getBoard()', () => {
    it('displays the board', () => {
      const expectedOutput = `
|-|-|-|
|-|-|-|
|-|-|-|
      `
        .replace(/\t/g, '')
        .trim();

      expect(gameBoard.getBoard()).to.be.equals(expectedOutput);
    });
  });

  describe('input', () => {
    it('inputs a char on the board', () => {
      gameBoard.input('O', [0, 0]);
      const expectedOutput = `
|O|-|-|
|-|-|-|
|-|-|-|
      `
        .replace(/\t/g, '')
        .trim();

      expect(gameBoard.getBoard()).to.be.equals(expectedOutput);
    });
  });
});
