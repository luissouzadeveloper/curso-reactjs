// CSS
import './css/GameOver.css'

const GameOver = ({ retry }) => {
    return (
        <div>
            <h2>Game Over</h2>

            <button onClick={retry}>Tentar novamente?</button>
        </div>
    )
}

export default GameOver