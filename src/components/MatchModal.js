import React from 'react';

const MatchModal = ({ movie, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-1/3">
        <h2 className="text-2xl font-bold mb-4">You Matched with:</h2>
        <p className="text-lg font-semibold">{movie.name}</p>
        <p>{movie.description}</p>
        <p className="mt-2 text-sm">Director: {movie.director}</p>
        <p className="text-sm">Release Date: {movie.releaseDate}</p>
        <p className="text-sm">Duration: {movie.duration} mins</p>
        <p className="text-sm">Genre: {movie.genre}</p>

        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MatchModal;
