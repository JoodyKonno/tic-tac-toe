/* global describe it expect beforeEach context */

const Game = require('../../lib/Game');
const Player = require('../../lib/Player');
const GameBoard = require('../../lib/GameBoard');

let game;

describe('Game', () => {
  describe('constructor()', () => {
    beforeEach(() => {
      game = new Game(new Player('meat ball'), new Player('big fetus'), new GameBoard());
    });

    it('set the char "X" to the first player', () => {
      expect(game.getPlayer1Char()).to.be.equal('X');
    });

    it('set the char "O" to the first player', () => {
      expect(game.getPlayer2Char()).to.be.equal('O');
    });
  });
});
