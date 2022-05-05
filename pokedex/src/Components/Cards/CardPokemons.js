import React from 'react'
import styled from 'styled-components'
import { useContext } from 'react'
import GlobalStateContext from '../../Context/GlobalStateContext'
import BotaoAdicionar from '../Botoes/BotaoAdicionar'
import BotaoDetalhes from '../Botoes/BotaoDetalhes'


const Card = styled.div`
    display: flex;
    background-color: red;
    flex-direction: column;
    border: 1px solid black;
    width:150px;
    height: 150px;
    margin: 10px;
    padding: 10px;
    justify-content: space-between;
    text-align: center;

    :hover {
      transform: scale(1.1);
    }
  `
  const ImagemPoke = styled.img`
    max-width: 150px;
    max-height: 150px;
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
      //logica para sumir com o card depois que ele é adicionado na pokedex
      document.getElementById(pokemon.name).style.display = 'none';
      alert("Tô na pokédex!!!")
    }
  };

  return (
    <> 
      {states.pokemons &&
          states.pokemons.map((pokemon) => {
            return (
              <Card id={pokemon.name} key={pokemon.name}>
                <p> {pokemon.name} </p>
                <ImagemPoke
                  src={pokemon.sprites.other.dream_world.front_default}
                  alt={"PokeFoto"}
                />
                <ContainerBotoes>
                  <BotaoAdicionar
                    adicionarPokemon={adicionarPokemon}
                    pokemon={pokemon}
                  />
                  <BotaoDetalhes url={pokemon.name} />
                </ContainerBotoes>
              </Card>
            );
          })}
    </>
  )
}

export default CardPokemons