import React from 'react';
import Navbar from './Navbar'; // Asegúrate de que la ruta sea correcta
import Home from './Home';     // Asegúrate de que la ruta sea correcta
import Curiosity from './Curiosity';
import './App.css';            // Si tienes estilos globales para tu aplicación

function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <Curiosity/>
            
        </div>
    );
}

export default App;
