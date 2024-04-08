import axios from 'axios';

export const fetchPokemon = async (pokemon: string) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        return {
            name: response.data.name,
            types: response.data.types,
            sprite: response.data.sprites.front_default,
        };
    } catch (error) {
        throw new Error('Failed to fetch Pokemon data');
    }
};
