import React from 'react';
import './MatchModal.css';

const MatchModal = ({ movie, closeModal }) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <h2 className="text-2xl font-bold mb-4">You Matched with:</h2>
        <p className="text-lg font-semibold">{movie.name}</p>
        <p>{movie.description}</p>
        <p className="mt-2 text-sm">Director: {movie.director}</p>
        <p className="text-sm">Release Date: {movie.releaseDate}</p>
        <p className="text-sm">Duration: {movie.duration} mins</p>
        <p className="text-sm">Genre: {movie.genre}</p>

        <button className="modal-button" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default MatchModal;
