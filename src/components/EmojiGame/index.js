/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    previousClickedEmojiosList: [],
    isLose: false,
  }

  onClickEmoji = id => {
    const {previousClickedEmojiosList} = this.state
    if (previousClickedEmojiosList.includes(id)) {
      this.setState(prevState => ({
        isLose: !prevState.isLose,
      }))
    } else {
      this.setState(prevState => ({
        previousClickedEmojiosList: [
          ...prevState.previousClickedEmojiosList,
          id,
        ],
        score: prevState.score + 1,
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickPlayAgain = () => {
    const {isLose} = this.state
    if (isLose) {
      this.setState(prevState => ({
        topScore:
          prevState.topScore < prevState.score
            ? prevState.score
            : prevState.topScore,
        score: 0,
        previousClickedEmojiosList: [],
        isLose: false,
      }))
    } else {
      this.setState(prevState => ({
        topScore:
          prevState.topScore < prevState.score
            ? prevState.score
            : prevState.topScore,
        score: 0,
        previousClickedEmojiosList: [],
      }))
    }
  }

  render() {
    const {score, topScore, isLose, previousClickedEmojiosList} = this.state
    const {emojisList} = this.props
    const shuffledEmojisList = this.shuffledEmojisList()
    const isWin = previousClickedEmojiosList.length === emojisList.length
    return (
      <div>
        <NavBar score={score} topScore={topScore} isClicked={isWin || isLose} />
        <div className="game-display-container">
          {isWin || isLose ? (
            <WinOrLoseCard
              isWin={isWin}
              score={score}
              onClickPlayAgain={this.onClickPlayAgain}
            />
          ) : (
            <ul className="emojis-cards-container">
              {shuffledEmojisList.map(eachEmoji => (
                <EmojiCard
                  emojiDetails={eachEmoji}
                  key={eachEmoji.id}
                  onClickEmoji={this.onClickEmoji}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default EmojiGame
