import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JoinSession = () => {
  const [sessionId, setSessionId] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleJoinSession = () => {
    if (sessionId === '12345') {
      // Correct session ID, navigate to genre selection
      navigate('/genreSelection');
    } else {
      // Incorrect session ID, show error message
      setError('Wrong Session Id');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-8">Join a Session</h2>
      
      <input 
        type="text"
        value={sessionId}
        onChange={(e) => setSessionId(e.target.value)}
        placeholder="Enter Session Id"
        className="px-4 py-2 border rounded-lg mb-4"
      />

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <button 
        onClick={handleJoinSession}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg">
        Join Session
      </button>
    </div>
  );
};

export default JoinSession;
