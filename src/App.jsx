/* eslint-disable react/prop-types */
import { useState } from 'react';
import "./App.css";

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <div className='container'>
      <h1>Tres en raya</h1>
      <div className="board-row">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div className="board-row">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div className="board-row">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
    </div>
  );
}
