import React from 'react';

const WaitingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-8">Waiting for your partner...</h2>
      <p className="text-lg">Your session ID is: <span className="font-bold">12345</span></p>
      <p className="mt-4">Share this code with your partner to join the session.</p>
    </div>
  );
};

export default WaitingPage;
