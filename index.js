const readLine = require('readline');

const Game = require('./lib/Game');
const GameBoard = require('./lib/GameBoard');
const Player = require('./lib/Player');
const GameStates = require('./lib/GameStates');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Player1 = new Player('Meat Ball', 'X');
const Player2 = new Player('Big Fetus', 'O');

const game = new Game(Player1, Player2, new GameBoard());

console.log('Starting Tic Tac Toe Game');

console.log(`Player 1: ${game.getPlayer1Name()} with '${game.getPlayer1Char()}'`);
console.log(`Player 2: ${game.getPlayer2Name()} with '${game.getPlayer2Char()}'`);

rl.on('line', (input) => {
  console.log(`${game.getPlayer1Name()} plays on [${input}]`);

  try {
    const pos = input
      .split(',')
      .map(item => parseInt(item, 10));
    game.play(pos);
  } catch (err) {
    console.error(err.message);
  }

  console.log(game.getBoard());
  console.log(`Game is ${game.getResult()}`);

  if (game.getResult() !== GameStates.IN_PROGRESS) {
    process.exit(0);
  }
});
