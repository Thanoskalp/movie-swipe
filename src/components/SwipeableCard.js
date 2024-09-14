import React from 'react';
import './SwipeableCard.css'; // Import the CSS file

const SwipeableCard = ({ movie, onSwipeLeft, onSwipeRight }) => {
  // Use the path relative to the public directory
  const backgroundImageUrl = `/images/${movie.id}.png`;

  return (
    <div
      className="swipeable-card"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`, // Correct template literal syntax
      }}
    >
      <div className="swipeable-card-overlay"></div>

      {/* Movie information */}
      <div className="swipeable-card-content">
        <div className="swipeable-card-info-background">
          <h2 className="swipeable-card-title">{movie.name}</h2>
          <div className="swipeable-card-separator"></div>
          <p className="swipeable-card-description">{movie.description}</p>
          <div className="swipeable-card-separator"></div>
          <div className="swipeable-card-meta">
            <p>Director: {movie.movieDirector}</p>
            <p>Genre: {movie.genre}</p>
            <p>Release Date: {movie.releaseDate}</p>
            <p>Duration: {movie.duration} minutes</p>
          </div>
        </div>
      </div>

      {/* Swipe buttons */}
      <div className="swipeable-card-buttons">
        <button onClick={onSwipeLeft} className="swipeable-card-button-left">
          Swipe Left
        </button>
        <button onClick={onSwipeRight} className="swipeable-card-button-right">
          Swipe Right
        </button>
      </div>
    </div>
  );
};

export default SwipeableCard;
