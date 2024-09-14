import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateSession = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically redirect to the waiting page with session ID
    navigate('/waiting');
  }, [navigate]);

  return null; // No need to render anything since we auto-redirect.
};

export default CreateSession;
