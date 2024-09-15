import React from 'react';
import './GenreModal.css';

const GenreModal = ({ matchingGenres, closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3 className="modal-title">Matching Genres</h3>

        {matchingGenres.length > 0 ? (
          <ul className="modal-list">
            {matchingGenres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        ) : (
          <p className="modal-error">No matching genres. Please select again.</p>
        )}

        <button onClick={closeModal} className="modal-button">
          Continue
        </button>
      </div>
    </div>
  );
};

export default GenreModal;