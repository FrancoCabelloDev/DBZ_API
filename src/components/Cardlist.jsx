import { useState, useEffect } from 'react';

function Cardlist() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dragonball-api.com/api/characters')
            .then(response => response.json())
            .then(data => {
                // La API devuelve un objeto con propiedad 'items'
                setCharacters(data.items || []);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p>Cargando personajes...</p>
            </div>
        );
    }
    console.log(characters);
    return (
        <div className="container mt-5">
            <div className="row">
                {characters.map((character, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img 
                                src={character.image} 
                                className="card-img-top" 
                                alt={character.name}
                                style={{height: '100%', objectFit: 'cover', width: '100%'}}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{character.name}</h5>
                                <p className="card-text">
                                    <small className="text-muted">Raza: {character.race}</small><br/>
                                    <small className="text-muted">Ki: {character.ki}</small><br/>
                                    <small className="text-muted">Género: {character.gender}</small>
                                </p>
                                <p className="card-text">{character.description?.substring(0, 100)}...</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cardlist;