import React from 'react'
import '../styles/Unauthorized.css';
function Unauthorized() {
    return (
        <div className="unauthorized-container">
            <div className="unauthorized-content">
                <h1>Unauthorized</h1>
                <p>You do not have permission to access this page.</p>
                <a href="/">Go Back Home</a>
            </div>
        </div>
    )
}

export default Unauthorized