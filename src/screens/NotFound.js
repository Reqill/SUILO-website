import React from 'react';
import image from '../images/pagenotfound.svg'

export default function NotFound() {
    return (
        <div className="ntfound-container">
            <div className="img-container">
                <img src={image} />
                <p>Ups... Strona której szukasz nie istnieje.</p>
            </div>

        </div>

    );
}