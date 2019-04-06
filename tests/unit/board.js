/* global describe it expect beforeEach context */

const GameBoard = require('../../lib/GameBoard');

const {
  InvalidInputError,
  OutOfBoundsError,
  TakenFieldError,
} = require('../../lib/CustomErrors');

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

    context('when an invalid char is input', () => {
      it('throws an error', () => {
        expect(() => gameBoard.input('nya', [0, 1])).to.throw(InvalidInputError);
      });
    });

    context('when it inputs in an already taken field', () => {
      it('throws an error', () => {
        gameBoard.input('X', [0, 0]);
        expect(() => gameBoard.input('O', [0, 0])).to.throw(TakenFieldError);
      });
    });
  });
});
