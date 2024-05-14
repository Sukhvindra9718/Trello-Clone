import React from 'react';
import '../styles/NotFound.css'; // Import CSS file for styling

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404 Not Found</h1>
        <p>Oops! The page you're looking for does not exist.</p>
        <p>Please check the URL and try again.</p>
        <button onClick={() => window.history.back()}>Go Back</button>
      </div>
    </div>
  );
}

export default NotFound;
