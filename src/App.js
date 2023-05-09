import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import EndGame from './components/EndGame';
import ResetButton from './components/ResetButton';
import Scoreboard from './components/Scoreboard';
import { Wrapper } from './components/WrapperStyles';

function App() {

  //Conditions for winning the game
  const WinConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(true);
  const [winner, setWinner] = useState("");
  const [scores, setScores] = useState({ scoreX: 0, scoreO: 0 });
  const [tally, setTally] = useState(0)
  const [end, setEnd] = useState(false);

  const handleSquareClick = (squareIndex) => {
    const newBoard = board.map((value, index) => {
      //Checks to see which players turn it is before returning value
      if (index === squareIndex) {
        return player === true ? "X" : "O";
      } else {
        return value;
      }
    })
    const winner = checkWinner(newBoard);

    //Updates scoreboard
    if (winner) {
      if (winner === "O") {
        let { scoreO } = scores;
        scoreO += 1;
        setScores({ ...scores, scoreO })
      } else {
        let { scoreX } = scores;
        scoreX += 1;
        setScores({ ...scores, scoreX })
      }
    }
    //Updates tally
    setTally(tally => tally += 1);
    console.log(tally)

    setBoard(newBoard);
    setPlayer(!player);
  }

  //Checks to see if winning conditions are met
  const checkWinner = (board) => {
    for (let i = 0; i < WinConditions.length; i++) {
      const [x, y, z] = WinConditions[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setEnd(true);
        setWinner(`${board[x]} wins!`);
        return board[x];
      }
    }
    if(winner === "" && tally === 8){
      setEnd(true);
      setWinner("DRAW");
    }
  }


const resetBoard = () => {
  setEnd(false);
  setBoard(Array(9).fill(null));
  setTally(0);
  setWinner("")
}


return (
  <div className="App">
    <Wrapper>
      <Scoreboard scores={scores} player={player} />
      {end === true ?
        <EndGame winner={winner} />
        :
        null
      }
      <Board board={board} onClick={end ? resetBoard : handleSquareClick} />
      <ResetButton resetBoard={resetBoard} />
    </Wrapper>
  </div>
);
}

export default App;
