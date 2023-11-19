import { useState } from "react";

function Player({ initialName, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);

  let playerName = <span className="player-name">{name}</span>;

  const handleNameChange = (e) => setName(e.target.value);

  if (isEditing)
    playerName = (
      <input type="text" value={name} onChange={handleNameChange} required />
    );

  const handleEditClick = () => {
    setIsEditing((prev) => !prev);
    if (isEditing) onChangeName(symbol, name);
  };

  return (
    <li className={isActive ? "active" : null}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
