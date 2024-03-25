

export default function GameOver({ winner, onRematch }) {
    return <div id="game-over">
        <p>Game Over</p>
        {winner && <p>{winner} won!</p>}
        {!winner && <p>It's a draw!</p>}
        <button onClick={onRematch}>Rematch</button>
    </div>
}