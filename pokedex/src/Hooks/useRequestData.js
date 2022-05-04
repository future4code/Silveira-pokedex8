import React, {useEffect, useState} from 'react';
import axios from 'axios';

const useRequestData = (url) => {
    const [lista, setLista] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(undefined);

    const pegaDados = async () => {
        setIsLoading(true);
        
       try {
        const res = await axios.get(url)
            setLista(res.data.results);
            setIsLoading(false);

        } catch (error) {
           console.log(error);
           setIsLoading(false);
           setError(error);
       }
    };

    useEffect(() => {
        pegaDados();
    }, []);

    useEffect(() => {
        const listaPokemons = [];

        lista &&
        lista.forEach( async (pokemon) => {
                try {
                    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                    listaPokemons.push(res.data);

                        if(listaPokemons.length === 20) {
                        setPokemons(listaPokemons)
                    }  
                } catch (error) {
                    console.log(error.response)
                }
        })
    }, [])

    return [lista, pokemons, isLoading, error];
};

export default useRequestData;