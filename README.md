# Movie Swipe

Movie Swipe is a React application that help users pick movies to watch with their partner after a mutual selection of movie genres.

## Features

- **Genre Selection**: Choose your favorite genres from a list.
- **Movie Swipe**: Swipe right to indicate interest or left to pass. After three right swipes, a modal will show with the matched movie.
- **Matching Modal**: View details of the matched movie in a modal dialog.

## Technologies Used

- React
- Tailwind CSS
- JSON for data storage
- React Router for navigation
- React Tinder Card


## Project Structure

- **`src/`**: Contains the source code for the application.
  - **`components/`**: Contains reusable React components.
    - `SwipeableCard.js`: Component for displaying a movie card with swipe functionality.
    - `MatchModal.js`: Modal component displayed when a match is found.
    - `GenreModal.js`: Modal component for showing matching genres.
    - `GenreCheckbox.js`: Reusable checkbox component for genre selection.
  - **`data/`**: Contains static JSON files.
    - `genres.json`: List of available genres.
    - `movies.json`: List of movies.
  - **`pages/`**: Contains page components.
    - `GenreSelection.js`: Page for selecting genres.
    - `Movies.js`: Page for displaying and swiping through movies.
    - `CeateSession`: Page for the user to create session and get their session id.
    - `JoinSession`: Page where user adds their partner's session id and join together.
    - `WaitingPage`: Page that person who created the session are being redirected until their parted has joined.
  - **`App.js`**: Main application component that sets up routing and renders pages.
  - **`index.js`**: Entry point for the React application.
- **`public/`**: Contains static assets served by the application (e.g., `index.html`).

## Installation

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
2. **Install Dependencies**:
    ```bash
    npm install
3. **Run Locally**:
    ```bash
    npm start
##
