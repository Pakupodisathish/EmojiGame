// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isWin, score, onClickPlayAgain} = props
  const gameResult = isWin ? 'Won' : 'Lose'
  const finalScore = isWin ? 'Best Score' : 'Score'
  const imgUrl = isWin
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const clickPlayAgain = () => {
    onClickPlayAgain()
  }

  return (
    <div className="win-or-lose-card">
      <img src={imgUrl} className="card-img" alt="Win or Lose img" />
      <div className="card-content">
        <h1 className="game-result">You {gameResult}</h1>
        <p className="final-score">{finalScore}</p>
        <p className="total-scored">{score}/12</p>
        <button
          className="play-again-btn"
          type="button"
          onClick={clickPlayAgain}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}
export default WinOrLoseCard
