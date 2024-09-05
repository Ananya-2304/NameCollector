// src/ButtonsPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ButtonsPage.css';

const buttonLabels = ['button-1', 'button-2', 'button-3', 'button-4', 'button-5'];

function ButtonsPage() {
  const [showDialog, setShowDialog] = useState(false);
  const [currentLabel, setCurrentLabel] = useState('');
  const navigate = useNavigate();

  const handleClick = async (label) => {
    const userName = localStorage.getItem('userName');

    if (!userName) {
      navigate('/error'); // Redirect to error page if user data is not found
      return;
    }

    try {
      await axios.post('http://localhost:5000/save-button', { label }, {
        headers: { 'User-Name': userName }
      });
      setCurrentLabel(label);
      setShowDialog(true); // Show confirmation dialog
    } catch (err) {
      console.error('Error saving button data.');
      alert('Error saving button data.');
    }
  };

  const handleDialogResponse = (continueSelection) => {
    if (continueSelection) {
      setShowDialog(false);
    } else {
      // Delete user data and redirect to home page
      localStorage.removeItem('userName');
      navigate('/');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userName'); // Remove user name from localStorage
    navigate('/'); // Redirect to home page
  };

  return (
    <div className="buttons-container">
      <h1>Choose a Button</h1>
      <div className="buttons-grid">
        {buttonLabels.map((label) => (
          <button key={label} onClick={() => handleClick(label)} className="button-item">
            {label}
          </button>
        ))}
      </div>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>

      {/* Confirmation Dialog */}
      {showDialog && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <p>Button Saved. Do you want to continue selecting buttons?</p>
            <div className="dialog-buttons">
              <button onClick={() => handleDialogResponse(true)} className="dialog-button">Yes</button>
              <button onClick={() => handleDialogResponse(false)} className="dialog-button">No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ButtonsPage;
