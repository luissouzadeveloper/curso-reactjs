// CSS
import './css/Game.css'

const Game = ({ verifyLetter }) => {
    return (
        <>
            <h2>Game</h2>
            <button onClick={verifyLetter}>Finalizar o jogo</button>
        </>
    )
}

export default Game