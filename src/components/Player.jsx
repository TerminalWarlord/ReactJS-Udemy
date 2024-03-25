export default function Player({ playerName, onChangePlayerName }) {
  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input type="text" onChange={(event) => onChangePlayerName(event.target.value)} />
        <button>Set Name</button>
      </p>
    </section>
  );
}
