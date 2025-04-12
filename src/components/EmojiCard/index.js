// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const clickedEmoji = () => {
    onClickEmoji(id)
  }
  return (
    <li className="emoji-card">
      <button
        className="btn-img-container"
        type="button"
        onClick={clickedEmoji}
      >
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}
export default EmojiCard
