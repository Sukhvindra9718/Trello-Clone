import React from 'react'
import "../styles/ServerError.css";

function ServerError() {
    return (
        <div className="error-container">
            <div className="error-content">
                <h1>500 Server Error</h1>
                <p>Oops! Something went wrong on the server.</p>
                <p>Please try again later.</p>
                <button onClick={() => window.location.reload()}>Reload Page</button>
            </div>
        </div>
    )
}

export default ServerError