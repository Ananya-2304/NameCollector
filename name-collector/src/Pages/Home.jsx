// src/HomePage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './HomePage.css';

function HomePage() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name.trim() === '') {
      setError('Name is required.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/save-name', { name });
      localStorage.setItem('userName', name); // Store name in localStorage
      window.location.href = '/buttons';
    } catch (err) {
      setError('Error saving name.');
    }
  };

  return (
    <div className="home-container">
      <h1>Welcome to Name Collector</h1>
      <p>Please enter your name to proceed.</p>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="input-field"
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default HomePage;
