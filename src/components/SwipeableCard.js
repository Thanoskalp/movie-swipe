import React from 'react';

const SwipeableCard = ({ movie, onSwipeLeft, onSwipeRight }) => {
  return (
    <div className="flex justify-center items-center h-96">
      <div className="relative w-80 h-full bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-2">{movie.name}</h2>
        <p className="text-sm mb-4">{movie.description}</p>
        <p className="text-sm font-light">Director: {movie.director}</p>
        <p className="text-sm font-light">Release Date: {movie.releaseDate}</p>
        <p className="text-sm font-light">Duration: {movie.duration} mins</p>
        <p className="text-sm font-light">Genre: {movie.genre}</p>

        <div className="absolute bottom-0 left-0 w-full flex justify-between p-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
            onClick={onSwipeLeft}
          >
            Swipe Left
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
            onClick={onSwipeRight}
          >
            Swipe Right
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwipeableCard;
