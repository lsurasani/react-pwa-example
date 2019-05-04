import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
    const [stateSrc, setStateSrc] = useState('')

    useEffect(() => {
        async function fetchCats() {
            const response = await fetch('https://api.thecatapi.com/v1/images/search')
            const json = await response.json()
            setStateSrc(json[0].url)
        }

        fetchCats()
    }, [])

    return (
        <div className="App">
            <div className="img-container">
                <img
                    width={250}
                    alt="cat pics"
                    src={stateSrc}
                />
            </div>
        </div>
    );
}

export default App;
