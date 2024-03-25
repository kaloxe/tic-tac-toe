/* eslint-disable react/prop-types */
import { useState } from "react";
import Square from "./Square";
import calculateWinner from "../functions/CalculateWinner";

export default function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
  
    function handleClick(i) {
      const nextSquares = squares.slice();
      if (squares[i] || calculateWinner(squares)) {
        return;
      }
      if (xIsNext) {
        nextSquares[i] = "X";
      } else {
        nextSquares[i] = "O";
      }
      setSquares(nextSquares);
      setXIsNext(!xIsNext);
    }
  
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = "Ganador: " + winner;
    } else {
      status = "Siguiente jugador: " + (xIsNext ? "X" : "O");
    }
  
    return (
      <div className="container">
        <h1>Tres en raya</h1>
        <div className="status">{status}</div>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    );
  }