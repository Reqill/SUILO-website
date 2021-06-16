import '../styles/App.css'

export default function Footer({ bottom }) {

    return (
        <div className='footer-container' style={{ position: bottom ? "relative" : "fixed", bottom: bottom ? null : "0" }}>
            <div className='footer-text'>
                <p>All rights reserved © 2021 Mikołaj Mrózek </p>
            </div>
        </div>
    );
}