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

  describe('isFilled()', () => {
    context('when not all fields were taken', () => {
      it('returns false', () => {
        expect(gameBoard.isFilled()).to.be.false();
      });
    });

    context('when all fileds were taken', () => {
      it('returns true', () => {
        gameBoard.input('X', [0, 0])
          .input('O', [0, 1])
          .input('X', [0, 2])
          .input('O', [1, 0])
          .input('O', [1, 1])
          .input('X', [1, 2])
          .input('X', [2, 0])
          .input('X', [2, 1])
          .input('O', [2, 2]);

        expect(gameBoard.isFilled()).to.be.true();
      });
    });

    describe('hasVerticalMathches()', () => {
      context('when it has vertical matches', () => {
        it('returns true', () => {
          gameBoard.input('X', [0, 1])
            .input('X', [1, 1])
            .input('X', [2, 1]);

          expect(gameBoard.hasVerticalMatches('X')).to.be.true();
        });
      });

      context('when it has no vertical matches', () => {
        it('returns false', () => {
          gameBoard.input('X', [0, 1])
            .input('X', [1, 1])
            .input('O', [2, 1]);

          expect(gameBoard.hasVerticalMatches('X')).to.be.false();
        });
      });
    });

    describe('hasHorizontalMatches()', () => {
      context('when it has horizontal matches', () => {
        it('returns true', () => {
          gameBoard.input('X', [0, 0])
            .input('X', [0, 1])
            .input('X', [0, 2]);

          expect(gameBoard.hasHorizontalMatches('X')).to.be.true();
        });
      });

      context('when it has no horizontal matches', () => {
        it('returns false', () => {
          gameBoard.input('X', [0, 0])
            .input('X', [0, 1])
            .input('O', [0, 2]);

          expect(gameBoard.hasHorizontalMatches('X')).to.be.false();
        });
      });
    });

    describe('hasDiagonalMatches', () => {
      context('when it has diagonal matches', () => {
        it('returns true', () => {
          gameBoard.input('X', [0, 0])
            .input('X', [1, 1])
            .input('X', [2, 2]);

          expect(gameBoard.hasDiagonalMatches('X')).to.be.true();
        });

        it('returns true', () => {
          gameBoard.input('X', [0, 2])
            .input('X', [1, 1])
            .input('X', [2, 0]);

          expect(gameBoard.hasDiagonalMatches('X')).to.be.true();
        });
      });

      context('when it has diagonal matches', () => {
        it('returns false', () => {
          gameBoard.input('X', [0, 0])
            .input('X', [1, 1])
            .input('O', [2, 2]);

          expect(gameBoard.hasDiagonalMatches('X')).to.be.false();
        });
      });
    });
  });
});
