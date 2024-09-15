import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SwipeableCard from '../components/SwipeableCard';
import MatchModal from '../components/MatchModal';
import moviesData from '../data/movies.json';

const Movies = () => {
  const location = useLocation();
  const { selectedGenres } = location.state || {};

  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [rightSwipes, setRightSwipes] = useState(0);
  const [movies, setMovies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [matchedMovie, setMatchedMovie] = useState(null);
  const [isModalActive, setIsModalActive] = useState(false); // Track if the modal is active

  useEffect(() => {
    if (selectedGenres && selectedGenres.length > 0) {
      // Filter movies based on the selected genres
      const filteredMovies = moviesData.movies.filter(movie =>
        selectedGenres.includes(movie.genre)
      );
      setMovies(filteredMovies);
    }
  }, [selectedGenres]);

  const handleSwipe = (direction, movie) => {
    if (isModalActive) return; // Prevent any action if modal is active

    if (direction === 'right') {
      setRightSwipes((prevCount) => prevCount + 1);
      if (rightSwipes + 1 === 3) {  // Show modal after 3 right swipes
        setMatchedMovie(movie);
        setShowModal(true);
        setIsModalActive(true);  // Block further swiping until modal is closed
        return; // Do not proceed to the next movie
      }
    }

    // Move to the next movie after swipe, only if modal is not active
    setCurrentMovieIndex((prevIndex) => (prevIndex + 1));
  };

  const closeModal = () => {
    setShowModal(false);
    setRightSwipes(0);  // Reset right swipes after showing modal
    setIsModalActive(false);  // Allow swiping again
  };

  if (!selectedGenres) {
    return <p>Error: No genres selected. Please go back and select genres.</p>;
  }

  if (movies.length === 0) return <p>Loading...</p>;

  return (
    <div className="movies-container">
      {movies.length > 0 && currentMovieIndex < movies.length && (
        <SwipeableCard
          key={movies[currentMovieIndex].id}
          movie={movies[currentMovieIndex]}
          onSwipe={(dir) => handleSwipe(dir, movies[currentMovieIndex])}
        />
      )}

      {showModal && matchedMovie && (
        <MatchModal movie={matchedMovie} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Movies;
