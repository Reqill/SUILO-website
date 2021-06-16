import React from 'react';
import '../styles/App.css';

export default function NavBox({ text, color }) {

    return (
        <div className="nav-element">
            <button className="nav-button">
                <p className="nav-index" style={color}>{text}</p>
            </button>
        </div>
    );
}