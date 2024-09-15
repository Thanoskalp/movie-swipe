import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import genresData from '../data/genres.json';
import GenreModal from '../components/GenreModal';

const GenreSelection = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [error, setError] = useState('');
  const [matchingGenres, setMatchingGenres] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const genres = genresData.genres;

  const handleCheckboxChange = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const handleSubmit = () => {
    const selectedCount = selectedGenres.length;

    if (selectedCount === 0) {
      setError('Please select at least one genre.');
      return;
    }

    if (selectedCount === 1) {
      setError('No matching genres. Please select again or try something new.');
      setMatchingGenres([]);
    } else {
      const matched = selectedGenres.slice(0, selectedCount - 1);
      setMatchingGenres(matched);
      setIsModalOpen(true); 
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/movies', { state: { selectedGenres } }); // Pass selectedGenres as state
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-8">Select Your Favorite Genres</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="mb-8">
        {genres.map((genre) => (
          <div key={genre} className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                value={genre}
                onChange={() => handleCheckboxChange(genre)}
                className="mr-2"
              />
              {genre}
            </label>
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="px-6 py-3 bg-green-500 text-white rounded-lg"
      >
        Submit
      </button>

      {/* Use the GenreModal component */}
      {isModalOpen && (
        <GenreModal
          matchingGenres={matchingGenres}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default GenreSelection;