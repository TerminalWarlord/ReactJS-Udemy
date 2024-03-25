import { useState } from "react"

export default function Player({ name, symbol, isActive, onPlayerNameChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  function handleEditClick() {
    setIsEditing((prevIsEditing) => !prevIsEditing);
    if (isEditing) onPlayerNameChange(playerName, symbol);
  }
  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>
  if (isEditing) editablePlayerName = <input value={playerName} type="text" required onChange={handleChange} />

  return (<li className={isActive ? 'active' : undefined}>
    <span className="player">
      {editablePlayerName}
      <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleEditClick}>{!isEditing ? 'Edit' : 'Save'}</button>

    {/* {isEditing?<button onClick={handleEditClick}>Save</button>:<button onClick={handleEditClick}>Save</button>} */}
  </li>)
}