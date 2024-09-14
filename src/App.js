import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateSession from './pages/CreateSession';
import JoinSession from './pages/JoinSession';
import WaitingPage from './pages/WaitingPage';
import GenreSelection from './pages/GenreSelection';
import Movies from './pages/Movies';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />
          
          {/* Create Session -> Waiting Page */}
          <Route path="/create-session" element={<CreateSession />} />
          <Route path="/waiting" element={<WaitingPage />} />
          
          {/* Join Session -> Genre Selection */}
          <Route path="/join-session" element={<JoinSession />} />
          <Route path="/genreSelection" element={<GenreSelection />} />

          {/* Movie Swipping */}
          <Route path="/movies" element={<Movies />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;