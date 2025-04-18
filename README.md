# Emoji Game

[Live Demo](https://pakupodisathish.github.io/EmojiGame/)

---

## Game Overview

Emoji Game is a fun and engaging memory-based game where players must click on emojis without repeating any. The challenge increases as players try to click all emojis exactly once to win.

---

## Game Rules and Functionality

- **Initial State:**
  - Score and Top Score are set to **0** at the start of the game.

- **Gameplay:**
  - Clicking an emoji increases the Score **if it has not been clicked before**.
  - If all emojis are clicked exactly once, the **Won Game** view is displayed.
  - If an emoji is clicked more than once, the **Lose Game** view is shown.

- **Score and Top Score Tracking:**
  - If the score achieved in the current game is **higher than previous scores**, the Top Score is updated accordingly.
  - When the **Play Again** button is clicked:
    - The Score resets to **0** but the Top Score remains unchanged.
    - The game restarts with shuffled emojis.

---

## Emoji Data Structure

The EmojiGame component receives the `emojisList` as a prop, consisting of a list of emoji objects with the following properties:

| Key        | Data Type |
|------------|----------|
| `id`       | Number   |
| `emojiName` | String   |
| `emojiUrl`  | String   |

Each emoji has a unique ID, a name, and a corresponding image URL.

---

## Set Up Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Pakupodisathish/EmojiGame.git
   cd EmojiGame
### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px), Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/emoji-game-sm-outputs.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Game View](https://assets.ccbp.in/frontend/content/react-js/emoji-game-lg-output-v2.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Won Game](https://assets.ccbp.in/frontend/content/react-js/emoji-game-won-game-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Lose Game](https://assets.ccbp.in/frontend/content/react-js/emoji-game-lose-game-lg-output.png)

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/game-logo-img.png](https://assets.ccbp.in/frontend/react-js/game-logo-img.png) alt should be **emoji logo**
- [https://assets.ccbp.in/frontend/react-js/won-game-img.png](https://assets.ccbp.in/frontend/react-js/won-game-img.png)
- [https://assets.ccbp.in/frontend/react-js/lose-game-img.png](https://assets.ccbp.in/frontend/react-js/lose-game-img.png)

]
</details>



Future Enhancements
- Backend Integration:- Implement a backend using Node.js and Express.js.
- Store player scores using MongoDB for persistent tracking.
- Add user authentication to maintain individual high scores.

- Additional Features:- Different difficulty levels with more emojis.
- Time-based challenges for extra excitement.
- Sound effects and animations for an immersive experience.

Enjoy playing and improving your memory skills with Emoji Game!
