import React from 'react';
import Navbar from '../navabar/navbar';
import './defaultView.css'; // Include any necessary CSS

function DefaultView({ children }) {
    return (
        <div className="default-view">
            <div className="content-container">
                {children}
            </div>
            <Navbar />
        </div>
    );
}

export default DefaultView;
