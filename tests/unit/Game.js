/* global describe it expect beforeEach context */

const Game = require('../../lib/Game');
const Player = require('../../lib/Player');
const GameBoard = require('../../lib/GameBoard');

let game;

describe('Game', () => {
  beforeEach(() => {
    game = new Game(new Player('meat ball'), new Player('big fetus'), new GameBoard());
  });

  describe('constructor()', () => {
    it('set the char "X" to the first player', () => {
      expect(game.getPlayer1Char()).to.be.equal('X');
    });

    it('set the char "O" to the first player', () => {
      expect(game.getPlayer2Char()).to.be.equal('O');
    });
  });

  describe('play()', () => {
    it('sets an input from player on board', () => {
      game.play(game.player1, [0, 0]);

      const expectedOutput = [
        ['X', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-'],
      ];
      expect(game.getBoardFields()).to.be.deep.equal(expectedOutput);
    });
  });

  describe('getResult()', () => {
    context('when it is not finished', () => {
      it('returns "not finished"', () => {
        expect(game.getResult()).to.be.equals('not finished');
      });
    });
  });
});
