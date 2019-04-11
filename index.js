const Player = require('./lib/Player');
const GameInput = require('./lib/GameInput');
const Game = require('./lib/Game');
const GameBoard = require('./lib/GameBoard');
const GameStates = require('./lib/GameStates');

const main = async () => {
  console.log('Starting Tic Tac Toe');

  const name1 = await GameInput.identifyName(1);
  const char1 = await GameInput.identifyChar(1);

  console.log(`Player ${name1} has char ${char1}`);
  const player1 = new Player(name1, char1);

  const name2 = await GameInput.identifyName(2);
  const char2 = await GameInput.identifyChar(2);

  console.log(`Player ${name2} has char ${char2}`);
  const player2 = new Player(name2, char2);

  console.log('Initializing game');
  const game = new Game(player1, player2, new GameBoard());

  const rlPlays = GameInput.readPlays();

  console.log('play line and column starting by zero. Ex: 1,1 plays on the middle of the board');

  rlPlays.on('line', (input) => {
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
    } else {
      console.log('play line and column starting by zero. Ex: 1,1 plays on the middle of the board');
    }
  });
};

main();
