# CricketBD

CricketBD is a web-based application that allows users to create their Dream 11 cricket team by selecting players from a pool. Users can add and remove players while managing a coin balance for selecting players.

# live link : https://cricketbd.netlify.app/ 

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- **Player Selection:** Users can view available players and add up to 6 players to their team.
- **Coin Management:** Users can claim free coins and spend them to add players to their team.
- **Responsive Design:** The app is designed to work on both desktop and mobile devices.
- **Alerts and Notifications:** Alerts notify users of important actions, like adding or removing players and checking for sufficient coins.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/CricketBD.git
    cd CricketBD
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the application:**
    ```bash
    npm start
    ```

4. **Build the application:**
    To create an optimized production build:
    ```bash
    npm run build
    ```

## Usage

1. Launch the app using `npm start`.
2. On the home page, click the **Claim Free Credit** button to receive an initial coin balance.
3. Navigate between **Available** and **Selected** sections to view and manage your team players.
4. Select players by clicking the **Choose Player** button under Available players.
5. Manage your team by removing players from the Selected section.

## Project Structure

```plaintext
CricketBD
├── public
│   ├── index.html
│   └── players.json         # Sample data for players
├── src
│   ├── assets               # Images for the application
│   ├── components
│   │   ├── AllPlayer.js     # Component for displaying available players
│   │   └── SelectedPlayers.js # Component for displaying selected players
│   ├── App.js               # Main app component
│   ├── App.css              # Global styles
│   └── index.js             # Entry point
└── README.md

