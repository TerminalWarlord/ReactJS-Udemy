
import { useState } from 'react';
import Player from "./components/Player"
import GameBoard from "./components/Gameboard"
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from './winning-combinations';
import GameOver from './components/GameOver';

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}
function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') currentPlayer = 'O';
  return currentPlayer;

}
function deriveWinner(gameBoard, players) {
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];
    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol];
    }
  }
  return winner;
}


function deriveGameBoard(gameTurns) {
  let gameBoard = [...initialBoard.map(innerArray => [...innerArray])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS)
  // const [activePlayer, setActivePlayer] = useState('X');

  let activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  // console.log(gameBoard)
  const winner = deriveWinner(gameBoard, players);
  const isDraw = gameTurns.length === 9 && !winner;
  function handleRematch() {
    setGameTurns([]);
  }
  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((prevActivePlayer) => prevActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns((prevGameTurn) => {
      const currentPlayer = deriveActivePlayer(prevGameTurn);
      const updatedGameTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevGameTurn];
      return updatedGameTurns;
    })
  }
  function handlePlayerNameChange(name, symbol) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: name
      };
    })
  }


  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name={players.X} symbol='X' isActive={activePlayer === 'X'} onPlayerNameChange={handlePlayerNameChange} />
          <Player name={players.O} symbol='O' isActive={activePlayer === 'O'} onPlayerNameChange={handlePlayerNameChange} />
        </ol>
        {(winner || isDraw) && <GameOver winner={winner} onRematch={handleRematch} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
