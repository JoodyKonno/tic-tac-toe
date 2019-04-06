/* global describe it expect beforeEach context */

const GameBoard = require('../../lib/GameBoard');

const OutOfBoundsError = require('../../lib/OutOfBoundsError');

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

  describe('input()', () => {
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

    context('when it is out of bounds', () => {
      it('throws an error', () => {
        expect(() => gameBoard.input('O', [0, 30])).to.throw(OutOfBoundsError);
      });
    });

    context('when it is an invalid coordinate type', () => {
      it('throws an error', () => {
        expect(() => gameBoard.input('O', [0, 'x'])).to.throw(OutOfBoundsError);
      });
    });
  });
});
