/* global describe it expect beforeEach context */

const Game = require('../../lib/Game');
const Player = require('../../lib/Player');
const GameBoard = require('../../lib/GameBoard');

const GameStates = require('../../lib/GameStates');

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

    context('when play is successful', () => {
      it('register the turn', () => {
        game.play(game.player1, [0, 0]);

        expect(game.getLastTurn().char).to.be.equals('X');
      });
    });
  });

  describe('getResult()', () => {
    context('when it is not finished', () => {
      it('returns "not finished"', () => {
        expect(game.getResult()).to.be.equals(GameStates.IN_PROGRESS);
      });
    });

    context('when it has a vertical match', () => {
      it('returns "finished"', () => {
        game.play(game.player1, [0, 0]);
        game.play(game.player1, [1, 0]);
        game.play(game.player1, [2, 0]);

        expect(game.getResult()).to.be.equals(GameStates.FINISHED);
      });
    });

    context('when it has a horizontal match', () => {
      it('returns "finished"', () => {
        game.play(game.player1, [0, 0]);
        game.play(game.player1, [0, 1]);
        game.play(game.player1, [0, 2]);

        expect(game.getResult()).to.be.equals(GameStates.FINISHED);
      });
    });

    context('when it has a diagonal match', () => {
      it('returns "finished"', () => {
        game.play(game.player1, [0, 0]);
        game.play(game.player1, [1, 1]);
        game.play(game.player1, [2, 2]);

        expect(game.getResult()).to.be.equals(GameStates.FINISHED);
      });
    });
  });
});
