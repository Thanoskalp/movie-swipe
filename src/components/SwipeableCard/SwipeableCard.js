import React from 'react';
import TinderCard from 'react-tinder-card';
import './SwipeableCard.css';

const SwipeableCard = ({ movie, onSwipe }) => {
  return (
    <TinderCard
      className="swipeable-card"
      onSwipe={(dir) => onSwipe(dir)}
      preventSwipe={['up', 'down']}
    >
      <div
        className="swipeable-card-content"
        style={{ backgroundImage: `url(/images/${movie.id}.png)` }}
      >
        <div className="swipeable-card-info-background">
          <div className="swipeable-card-info">
            <h2 className="swipeable-card-title">{movie.name}</h2>
            <div className="swipeable-card-separator" />
            <p className="swipeable-card-description">{movie.description}</p>
            <div className="swipeable-card-separator" />
            <div className="swipeable-card-meta">
              <p>Director: {movie.director}</p>
              <p>Genre: {movie.genre}</p>
              <p>Release Date: {movie.releaseDate}</p>
              <p>Duration: {movie.duration} minutes</p>
            </div>
          </div>
        </div>
      </div>
    </TinderCard>
  );
};

export default SwipeableCard;
