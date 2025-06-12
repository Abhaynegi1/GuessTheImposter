# Guess The Imposter
Live at : https://guesstheimposter-frontend.onrender.com

> *Inspired by "Full Squad Gaming" videos - where trust is optional and suspicion is everything.*

**Guess the imposter 3 of us know the word, one doesn't** - A multiplayer deception game built with the MERN stack and WebSocket technology.

## 🎮 Game Overview

Guess The Imposter is a social deduction game where players must identify the imposter among them. In each round, most players receive the same question/topic, while one unlucky player (the imposter) gets a completely different question. After everyone submits their answers, the real game begins - discussion, accusation, and deduction to find who doesn't belong.

## 🎯 How It Works

1. **Room Creation**: One player creates a room and gets a unique room ID
2. **Joining**: Other players (2-8 total) join using the unique room ID
3. **Game Start**: The host initiates the game when everyone is ready
4. **Question Distribution**: All players except one receive the same question/topic
5. **The Imposter**: One random player gets a different question entirely
6. **Answer Phase**: Everyone submits their answers without knowing who has what question
7. **Discussion Phase**: Players discuss answers and try to identify inconsistencies
8. **Voting Phase**: Players vote to eliminate who they think is the imposter
9. **Victory Conditions**:
   - **Majority wins** if they correctly identify the imposter
   - **Imposter wins** if they avoid detection or if innocent players are eliminated

## 🛠️ Tech Stack

- **Frontend**: React.js with modern hooks and context API
- **Backend**: Node.js with Express.js
- **Real-time Communication**: Socket.io for WebSocket connections
- **Data Storage**: In-memory storage for instant gameplay (no database required)
- **Styling**: CSS3 with responsive design principles

## 🚀 Installation Guide

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/guess-the-imposter.git
   cd guess-the-imposter
   ```

2. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Start the backend server**
   ```bash
   npm run dev
   ```

### Frontend Setup

1. **Navigate to client directory**
   ```bash
   cd ../client
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Start the React development server**
   ```bash
   npm start
   ```

## 🎲 Game Features

- **Real-time Multiplayer**: Up to 8 players can join simultaneously
- **Dynamic Question System**: Curated questions that create perfect imposter scenarios
- **Voting System**: Democratic elimination process with real-time vote counting
- **Room Management**: Create private rooms or join public games
- **Responsive Design**: Play seamlessly on desktop, tablet, or mobile devices
- **Instant Gameplay**: No registration required - jump straight into the action
- **Temporary Sessions**: All game data is stored in-memory for privacy and speed

