import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    setActivePlayer((prev) => (prev === "X" ? "0" : "X"));
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={"Player 1"}
            symbol={"X"}
            isActive={activePlayer === "X"}
          />
          <Player
            initialName={"Player 2"}
            symbol={"0"}
            isActive={activePlayer === "0"}
          />
        </ol>
        <GameBoard
          activePlayerSymbol={activePlayer}
          onSquareSelect={handleSelectSquare}
        />
      </div>
      <Log />
    </main>
  );
}

export default App;