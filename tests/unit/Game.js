/* global describe it expect beforeEach context */

const Game = require('../../lib/Game');
const Player = require('../../lib/Player');
const GameBoard = require('../../lib/GameBoard');

const GameStates = require('../../lib/GameStates');

let game;

let player1;
let player2;

describe('Game', () => {
  beforeEach(() => {
    player1 = new Player('meat ball', 'X');
    player2 = new Player('big fetus', 'O');

    game = new Game(player1, player2, new GameBoard());
  });

  describe('play()', () => {
    it('sets an input from player on board', () => {
      game.play([0, 0]);

      const expectedOutput = [
        ['X', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-'],
      ];
      expect(game.getBoardFields()).to.be.deep.equal(expectedOutput);
    });

    context('when play is successful', () => {
      it('register the turn', () => {
        game.play([0, 0]);

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
        game.play([0, 0]);
        game.play([0, 1]);
        game.play([1, 0]);
        game.play([2, 1]);
        game.play([2, 0]);

        expect(game.getResult()).to.be.equals('meat ball is the winner');
      });
    });

    context('when it has a horizontal match', () => {
      it('returns "finished"', () => {
        game.play([0, 0]);
        game.play([1, 0]);
        game.play([0, 1]);
        game.play([1, 1]);
        game.play([0, 2]);

        expect(game.getResult()).to.be.equals('meat ball is the winner');
      });
    });

    context('when it has a diagonal match', () => {
      it('returns "finished"', () => {
        game.play([0, 0]);
        game.play([0, 1]);
        game.play([1, 1]);
        game.play([2, 0]);
        game.play([2, 2]);

        expect(game.getResult()).to.be.equals('meat ball is the winner');
      });
    });
  });
});
