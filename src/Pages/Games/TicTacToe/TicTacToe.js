import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../../components/header";
import NewsLetter from "../../../components/NewsletterSignup";
import Footer from "../../../components/Footer";
import TicTacToeinstruction from "./TicTacToeinstruction";
import "./TicTacToe.css";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const xColor = "blue";
  const oColor = "red";

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };

  const getStatusColor = () => {
    if (winner) {
      return "#FF00E8"; // Teal for Winner
    } else if (board.every((square) => square)) {
      return "#9E00FF"; // Dark Blue for Draw
    } else {
      return isXNext ? xColor : oColor;
    }
  };

  const renderSquare = (i) => (
    <button
      className={`custom-square square ${winner ? "anim" : ""}`}
      onClick={() => handleClick(i)}
      data-value={board[i]}
      id={`square-${i}`}
      style={{
        color: board[i] === "X" ? xColor : board[i] === "O" ? oColor : "",
      }}
    >
      {board[i]}
    </button>
  );

  const statusColor = getStatusColor();
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (board.every((square) => square)) {
    status = "It's a draw!";
  } else {
    status = `Next player: ${isXNext ? "X" : "O"}`;
  }

  const handleClick = (i) => {
    if (calculateWinner(board) || board[i]) {
      return;
    }
    const newBoard = board.slice();
    newBoard[i] = isXNext ? "X" : "O";
    setBoard(newBoard);

    const newWinner = calculateWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner); // Set the winner when there's a winner
    }

    setIsXNext(!isXNext);
  };

  const handleRestart = () => {
    // Reset the game board, player, and winner
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  const handleStartOver = () => {
    // Reset the game board, player, and winner
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div>
      <Header />

      <header className="tictactoe-header">
        <h1 className="tictactoe-title">
          <strong>Tic-Tac-Toe</strong>
        </h1>
      </header>

      <TicTacToeinstruction />

      <div className="container container-tictactoe text-center">
        <div className="custom-status mb-4 mt-4" style={{ color: statusColor }}>
          {status}
        </div>
        <div className="custom-board">
          <div className="row">
            <div className="col-4">{renderSquare(0)}</div>
            <div className="col-4">{renderSquare(1)}</div>
            <div className="col-4">{renderSquare(2)}</div>
          </div>
          <div className="row">
            <div className="col-4">{renderSquare(3)}</div>
            <div className="col-4">{renderSquare(4)}</div>
            <div className="col-4">{renderSquare(5)}</div>
          </div>
          <div className="row">
            <div className="col-4">{renderSquare(6)}</div>
            <div className="col-4">{renderSquare(7)}</div>
            <div className="col-4">{renderSquare(8)}</div>
          </div>
        </div>
      </div>

      <div className="container text-center container-tictactoe-btn">
        <button className="btn btn-primary m-2" onClick={handleRestart}>
          Restart
        </button>
        {winner || board.every((square) => square) ? (
          <button className="btn btn-danger m-2" onClick={handleStartOver}>
            Start Over
          </button>
        ) : null}
      </div>

      <NewsLetter />
      <Footer />
    </div>
  );
}

export default TicTacToe;
