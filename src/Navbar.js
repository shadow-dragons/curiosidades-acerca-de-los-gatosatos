import React from 'react';
import './Navbar.css';


function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li className="nav-item">
                    <a href="/" className="nav-link">Inicio</a>
                </li>
                <li className="nav-item">
                    <a href="/mycuriosity." className="nav-link">Mis curiosidades</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
