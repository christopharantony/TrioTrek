function GameBoard({ onSquareSelect, board }) {
  return (
    <ol id="game-board">
      {board?.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row?.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSquareSelect(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  <p>{playerSymbol}</p>
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
