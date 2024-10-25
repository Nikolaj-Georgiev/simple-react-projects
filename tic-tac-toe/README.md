# Tic-Tac-Toe

## Description

A classic Tic-Tac-Toe game implemented with React and TypeScript, showcasing essential front-end development skills, including component-based architecture, state management, and basic AI for solo play against the computer.

## Features

- Interactive gameplay between two players or solo play against the computer
- Displays current game status and winner
- Option to reset the game and start a new match
- Basic animations for a smooth user experience
- **Solo vs Computer Mode** with simple AI for a moderate challenge

## Technologies Used

- **React** – For building the user interface
- **TypeScript** – For type-safe JavaScript
- **CSS/SCSS** – For styling and layout
- **Vite** – For fast development setup and bundling

## Project Architecture

- **Public Assets**: Images and static assets like background patterns and game logo.
- **API**: Contains the logic for the basic AI in the "Solo vs Computer" mode.
- **Components**: All the UI components such as GameBoard, GameModeModal, and GameOver.
- **Helpers**: Utility functions and configuration files for the game logic and setup.
- **Types**: TypeScript types used across the project to ensure type safety.

The main structure focuses on the game components, AI logic, and utilities that help in handling the game’s flow and functionality.

## Implementation Highlights

- **State Management**: Uses React’s `useState` hook to manage game board and player turns.
- **Win Detection**: Checks for winning combinations after each move.
- **Game Modes**: Allows switching between Player vs Player and Solo vs Computer modes.
- **Basic AI**: Computer moves are determined by a simple algorithm for moderate gameplay challenge.
- **Responsive Design**: The layout is optimized for various screen sizes.

### Installation

1. **Clone the repository**:

```bash
git clone https://github.com/Nikolaj-Georgiev/simple-react-projects.git
```

2. **Navigate into the project subfolder**:

```bash
cd tic-tac-toe
```

3. **Install dependencies**:

```bash
npm install
```

4. **Run the development server**:

```bash
npm run dev
```

5. **Open http://localhost:5173 in your browser**

### Deployment

**The project is deployed and can be accessed at:**
[tic-tac-toe](https://tic-tac-toe-v2-nikolaj-georgiev.netlify.app/)

### License

**This project is MIT licensed**
