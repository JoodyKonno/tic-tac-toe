const GameBoard = require('./lib/GameBoard');

const gameBoard = new GameBoard();

console.log('Tic Tac Toe game');
console.log(gameBoard.getBoard());

gameBoard.input('O', [0, 1]);
console.log('Player 1 takes 0,1');
console.log(gameBoard.getBoard());

gameBoard.input('X', [1, 1]);
console.log('Player 2 takes 1,1');
console.log(gameBoard.getBoard());
