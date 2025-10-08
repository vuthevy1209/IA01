# Tic Tac Toe - React Assignment

A Tic Tac Toe game built with React, implementing all required features for the Advanced Web Development course assignment.

## Student Information

- **Name:** Vũ Thế Vỹ
- **Student ID:** 22120451
- **Self-Assessment Score:** 10/10
- **Live Demo:** [https://vuthevy1209.github.io/IA01/](https://vuthevy1209.github.io/IA01/)

## Implemented Features

### Feature 1: Current Move Display (1.8 points)
- Display "You are at move #..." instead of a button for the current move
- Highlighted in red with bold font for better visibility

### Feature 2: Board with Loops (1.8 points)
- Rewrite Board component using 2 nested loops to create squares
- No hardcoding of individual squares
- More concise and maintainable code

### Feature 3: Sort Toggle (1.8 points)
- Toggle button to switch between Ascending and Descending order
- Display arrow icons for better user experience
- Clean styling with smooth transitions

### Feature 4: Highlight Winning Squares and Draw Message (1.8 points)
- Highlight the three winning squares with green color when someone wins
- Pulse animation on highlighted squares
- Display "Draw! No one wins." message when the game ends in a draw

### Feature 5: Display Move Location (1.8 points)
- Display location in (row, col) format in move history list
- Location calculated from index (0,0 is top-left corner)
- Format: "Go to move #X (row, col)"

## How to Run the Project

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
```

## Deployment (1 point)

### Deploy to GitHub Pages

1. **Install gh-pages**:
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json**:
```json
{
  "homepage": "https://[username].github.io/[repo-name]",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. **Deploy**:
```bash
npm run deploy
```

## Technologies Used

- React 18.2.0
- React Scripts 5.0.1
- CSS3 with animations
- GitHub Pages for deployment

## Project Structure

```
src/
  ├── components/
  │   ├── Square.js        # Square component
  │   ├── Board.js         # Board component with game logic
  │   ├── GameStatus.js    # Game status display
  │   ├── MoveHistory.js   # Move history list
  │   └── GameControls.js  # Control buttons
  ├── hooks/
  │   └── useGameState.js  # Custom hook for game state management
  ├── utils/
  │   └── gameLogic.js     # Game logic utilities
  ├── App.js               # Main game component
  ├── App.css              # Styling
  ├── index.js             # Entry point
  └── index.css            # Global styles
```

## Scoring Summary

- Feature 1 (Current move display): 1.8 points
- Feature 2 (Board with loops): 1.8 points
- Feature 3 (Sort toggle): 1.8 points
- Feature 4 (Highlight winning squares + draw): 1.8 points
- Feature 5 (Display location): 1.8 points
- Deployment: 1 point

**Total: 10 points**

## Additional Features

- "Play Again" button with animation
- Victory notification with gradient background and celebration animation
- Code refactored into reusable components and custom hooks (Clean Code)
- Responsive design for mobile devices
