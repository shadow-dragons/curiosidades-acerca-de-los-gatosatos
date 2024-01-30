import React, { useState, useEffect } from 'react';
import './Curiosity.css';

function Curiosity() {
    const [fact, setFact] = useState('');
    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        fetchFact();
    }, []);

    const fetchFact = async () => {
        try {
            const response = await fetch('https://catfact.ninja/fact');
            const data = await response.json();
            setFact(data.fact);
            setImageSrc(`https://cataas.com/cat/says/${data.fact.split(' ')[0]}`);
        } catch (error) {
            console.error("Error fetching cat fact:", error);
        }
    };

    const saveFact = () => {
        localStorage.setItem('savedCatFact', fact);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(fact);
    };

    return (
        
        <div className="curiosity-container">
            
            <div className='caja'>
        {fact && <p>esa curiosidad {fact}</p>}
        {imageSrc && <div className="image-container"><img src={imageSrc} alt="Cat" /></div>}
        <div className="buttons-container">
            <button onClick={saveFact}>Guardar</button>
            <button onClick={copyToClipboard}>Portapapeles</button>
        </div>
    </div>
    <div className='caja'>
        {fact && <p>esa curiosidad {fact}</p>}
        {imageSrc && <div className="image-container"><img src={imageSrc} alt="Cat" /></div>}
        <div className="buttons-container">
            <button onClick={saveFact}>Guardar</button>
            <button onClick={copyToClipboard}>Portapapeles</button>
        </div>
    </div>
    <div className='caja'>
        {fact && <p>esa curiosidad {fact}</p>}
        {imageSrc && <div className="image-container"><img src={imageSrc} alt="Cat" /></div>}
        <div className="buttons-container">
            <button onClick={saveFact}>Guardar</button>
            <button onClick={copyToClipboard}>Portapapeles</button>
        </div>
    </div>
        </div>
    );
}

export default Curiosity;
