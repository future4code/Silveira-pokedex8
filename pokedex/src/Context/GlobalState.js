import React, {useState, useEffect} from 'react'
import useRequestData from '../Hooks/useRequestData'
import GlobalStateContext from './GlobalStateContext'
import axios from 'axios'

const GlobalState = (props) => {
    const [pokeLista, error] = useRequestData([], `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`)
    const [pokemons, setPokemons] = useState([]);
    const [pokedex, setPokedex] = useState([]);

    const listaPokemons = [];
    
    const pegaDetalhesPokemons = () => {
        pokeLista &&
          pokeLista.forEach(async (pokemon) => {
            try {
              const res = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
              );
              listaPokemons.push(res.data);

              if (listaPokemons.length === 20) {
                setPokemons(listaPokemons);
              }
            } catch (error) {
              console.log(error.response);
            }
          });
    }
    useEffect(() => {
       pegaDetalhesPokemons()
        }, [pokeLista])

    const states = {pokemons, pokedex}
    const setters = {setPokemons, setPokedex}
    
    return (
        <GlobalStateContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )

}
export default GlobalState