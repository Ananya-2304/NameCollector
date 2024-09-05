// src/ErrorPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ErrorPage.css';

function ErrorPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="error-container">
      <h1>Error</h1>
      <p>User data not found. Please enter your name again.</p>
      <button onClick={handleGoHome}>Go to Home Page</button>
    </div>
  );
}

export default ErrorPage;
