import { useState, useEffect } from 'react';
import { fetchPokemon } from '../utils/api';

const IndexPage = () => {
    const [pokemon, setPokemon] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchPokemon('bulbasaur');
                setPokemon(data);
            } catch (error) {
                setError('Failed to fetch Pokemon data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprite} alt={pokemon.name} />
            <ul>
                {pokemon.types.map((type: any, index: number) => (
                    <li key={index}>{type.type.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default IndexPage;
