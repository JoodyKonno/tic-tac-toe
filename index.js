const Game = require('./lib/Game');
const GameBoard = require('./lib/GameBoard');
const Player = require('./lib/Player');

const game = new Game(new Player('Meat Ball'), new Player('Big Fetus'), new GameBoard());

console.log('Starting Tic Tac Toe Game');

console.log(`Player 1: ${game.getPlayer1Name()} with '${game.getPlayer1Char()}'`);
console.log(`Player 2: ${game.getPlayer2Name()} with '${game.getPlayer2Char()}'`);

console.log(game.getBoard());
console.log(`Game is ${game.getResult()}`);

game.play(game.getPlayer1(), [1, 1]);
console.log(`${game.getPlayer1Name()} plays on [1, 1]`);

console.log(game.getBoard());
console.log(`Game is ${game.getResult()}`);

game.play(game.getPlayer2(), [0, 0]);
console.log(`${game.getPlayer2Name()} plays on [0, 0]`);

console.log(game.getBoard());
console.log(`Game is ${game.getResult()}`);

game.play(game.getPlayer1(), [0, 2]);
console.log(`${game.getPlayer1Name()} plays on [0, 2]`);

console.log(game.getBoard());
console.log(`Game is ${game.getResult()}`);

game.play(game.getPlayer2(), [2, 2]);
console.log(`${game.getPlayer2Name()} plays on [2, 2]`);

console.log(game.getBoard());
console.log(`Game is ${game.getResult()}`);

game.play(game.getPlayer1(), [2, 0]);
console.log(`${game.getPlayer1Name()} plays on [2, 0]`);

console.log(game.getBoard());
console.log(`Game is ${game.getResult()}`);
