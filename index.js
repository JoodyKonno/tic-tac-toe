const Game = require('./lib/Game');
const GameBoard = require('./lib/GameBoard');
const Player = require('./lib/Player');

const game = new Game(new Player('Meat Ball'), new Player('Big Fetus'), new GameBoard());

console.log('Starting Tic Tac Toe Game');

console.log(`Player 1: ${game.getPlayer1Name()} with '${game.getPlayer1Char()}'`);
console.log(`Player 2: ${game.getPlayer2Name()} with '${game.getPlayer2Char()}'`);

console.log(game.getBoard());
