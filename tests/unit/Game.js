/* global describe it expect beforeEach context */

const Game = require('../../lib/Game');
const Player = require('../../lib/Player');
const GameBoard = require('../../lib/GameBoard');

const player1 = new Player('meat ball');
const player2 = new Player('big fetus');
const board = new GameBoard();

let game;

describe('Game', () => {
  describe('constructor()', () => {
    beforeEach(() => {
      game = new Game(player1, player2, board);
    });

    it('set the char "X" to the first player', () => {
      expect(game.getPlayer1Char()).to.be.equal('X');
    });

    it('set the char "O" to the first player', () => {
      expect(game.getPlayer2Char()).to.be.equal('O');
    });
  });
});
