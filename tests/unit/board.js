/* global describe it expect */

const GameBoard = require('../../lib/GameBoard');

const gameBoard = new GameBoard();

describe('gameBoard.js', () => {
  describe('getBoard()', () => {
    it('displays the board', () => {
      const expectedOutput = `
				| | | |
				| | | |
				| | | |
      `
        .replace(/\t/g, '')
        .trim();

      expect(gameBoard.getBoard()).to.be.equals(expectedOutput);
    });
  });
});
