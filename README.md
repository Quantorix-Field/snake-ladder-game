# 🎲 Snake and Ladder Game

A fun, interactive web-based Snake and Ladder game for two players!

## 🎮 Features

✨ **Interactive Gameplay**
- 10×10 game board (100 squares)
- Two-player turn-based gameplay
- Dice rolling mechanism (1-6)
- Automatic snake and ladder detection

🐍 **Game Elements**
- **Snakes**: Move down when you land on a snake's head
- **Ladders**: Move up when you land at the base of a ladder
- **Win Condition**: First player to reach square 100 wins!

⚡ **Game Mechanics**
- Players take turns rolling the dice
- Roll a 6 to get an extra turn
- Position updates in real-time
- Visual indicators for player positions
- Game status display

## 🚀 How to Play

1. Open `index.html` in your web browser
2. **Player 1** (Red) and **Player 2** (Blue) take turns
3. Click "Roll Dice" to move your piece
4. Move forward by the number shown on the dice
5. If you land on a ladder, climb up! 🪜
6. If you land on a snake, slide down! 🐍
7. First player to reach square 100 wins! 🎉

## 📋 Game Board Layout

- **100 Squares** arranged in a 10×10 grid
- **6 Snakes** positioned throughout the board
- **8 Ladders** positioned throughout the board
- **Players start at Square 0**

### 🐍 Snakes Positions
| Head | Tail |
|------|------|
| 17   | 4    |
| 54   | 31   |
| 62   | 18   |
| 87   | 36   |
| 93   | 73   |
| 99   | 79   |

### 🪜 Ladders Positions
| Bottom | Top |
|--------|-----|
| 3      | 22  |
| 5      | 14  |
| 9      | 31  |
| 20     | 38  |
| 32     | 42  |
| 51     | 67  |
| 72     | 91  |
| 78     | 98  |

## 📁 File Structure

```
├── index.html      # Main HTML structure and game interface
├── styles.css      # Game styling and responsive layout
├── script.js       # Game logic and mechanics
└── README.md       # This file
```

## 🎨 Beautiful UI Features

- 🌈 Beautiful gradient backgrounds
- 📱 Mobile-friendly responsive design
- ✨ Smooth animations and transitions
- 🔄 Easy reset button to start a new game
- 💬 Real-time game status messages
- 🎯 Visual player indicators on the board

## 📲 How to Use

1. Clone or download the repository
2. Open `index.html` in any modern web browser
3. Start playing!

No installation or dependencies required - just pure HTML, CSS, and JavaScript!

## 🌐 Browser Compatibility

Works perfectly on all modern browsers:
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge

## 📖 Game Rules

1. **Turn System**: Players alternate turns rolling the dice
2. **Movement**: Move forward by the number rolled (1-6)
3. **Ladders**: Landing on a ladder automatically moves you up to the ladder's top
4. **Snakes**: Landing on a snake automatically moves you down to the snake's tail
5. **Bonus Roll**: Rolling a 6 gives you an extra turn!
6. **Winning**: Be the first to reach exactly square 100
7. **Overshoot**: If you exceed 100, the move is capped at 100

## 🎯 Strategy Tips

- Try to land on ladders to advance quickly
- Avoid snakes by calculating your moves carefully
- Use your dice rolls strategically to avoid snake positions
- Work with ladders to reach the finish line faster

## 🔧 Customization

You can easily customize:
- Snake positions by editing the `snakes` object in `script.js`
- Ladder positions by editing the `ladders` object in `script.js`
- Colors and styling by modifying `styles.css`
- Board size by adjusting the grid in CSS

## 🎉 Have Fun!

Enjoy playing the Snake and Ladder Game! Challenge your friends and have a great time! 🎲
