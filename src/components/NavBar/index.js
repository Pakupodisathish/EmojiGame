// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isClicked} = props
  const navBarClassName = isClicked ? 'nav-bar-score' : ''
  return (
    <div className={`nav-bar ${navBarClassName}`}>
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="logo-img"
          alt="emoji logo"
        />
        <h1 className="app-name">Emoji Game</h1>
      </div>
      {!isClicked && (
        <div className="score-container">
          <p className="score">Score: {score}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}
export default NavBar
