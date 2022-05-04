import React from 'react'
import styled from 'styled-components'
import { useContext } from 'react'
import GlobalStateContext from '../../Context/GlobalStateContext'
import BotaoAdicionar from '../Botoes/BotaoAdicionar'
import BotaoDetalhes from '../Botoes/BotaoDetalhes'


const Card = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width:300px;
    height: 350px;
    margin: 10px;
    padding: 10px;
    justify-content: space-between;
    text-align: center;
  `
  const FotoPoke = styled.img`
  width: 150px;
  height: 150px;
  margin: auto;
  `

const CardPokemons = () => {
  const { states, setters } = useContext(GlobalStateContext);


  const adicionarPokemon = (pokemon) => {
    const index = states.pokedex.findIndex((pokemonPokedex) => {
      return (
        pokemon.name === pokemonPokedex.name
      )
    })
    if (index === -1) {
      const novaPokedex = [...states.pokedex, pokemon];
      setters.setPokedex(novaPokedex);
    }
  };

  return (
    <> 
      {states.pokemons &&
          states.pokemons.map((pokemon) => {
            return (
              <Card key={pokemon.name}>
                <p> {pokemon.name} </p>
                <FotoPoke
                  src={pokemon.sprites.other.dream_world.front_default}
                  alt={"PokeFoto"}
                />
                <p> {pokemon.height} </p>
                <div>
                  <BotaoAdicionar
                    adicionarPokemon={adicionarPokemon}
                    pokemon={pokemon}
                  />
                  <BotaoDetalhes />
                </div>
              </Card>
            );
          })}
    </>
  )
}

export default CardPokemons