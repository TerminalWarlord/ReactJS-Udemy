import Player from './components/Player.jsx';
import { useState } from 'react';


function App() {
  const [playerName, setPlayerName] = useState('unknown entity');
  function handleChangePlayerName(name) {
    setPlayerName(name);
  }
  return (
    <>
      <Player onChangePlayerName={handleChangePlayerName} playerName={playerName} />
      <div id="challenges"></div>
    </>
  );
}

export default App;
