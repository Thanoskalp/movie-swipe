import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to Movie Swipe</h1>
      
      <div className="space-x-4">
        <button 
          onClick={() => navigate('/join-session')}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg">
          Join a Session
        </button>

        <button 
          onClick={() => navigate('/create-session')}
          className="px-6 py-3 bg-green-500 text-white rounded-lg">
          Create a Session
        </button>
      </div>
    </div>
  );
};

export default Home;