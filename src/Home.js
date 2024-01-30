import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <h1>Bienvenido a Curiosidades Acerca de los Gatos</h1>
            <p>Explora increíbles hechos y curiosidades sobre los gatos y comparte tus propias experiencias felinas.</p>
            <button className="btn" onClick={() => window.location.href='/nueva-curiosidad'}>Nueva Curiosidad</button>
        </div>
    );
}

export default Home;
