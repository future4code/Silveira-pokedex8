import React from 'react'
import styled from 'styled-components'
import { useContext } from 'react'
import GlobalStateContext from '../../Context/GlobalStateContext'
import BotaoAdicionar from '../Botoes/BotaoAdicionar'
import BotaoDetalhes from '../Botoes/BotaoDetalhes'


const Card = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    box-shadow: 2px 4px 8px grey;
    width: 240px;
    height: 280px;
    margin: 10px;
    padding: 10px;
    justify-content: space-between;
    text-align: center;

    @media(max-width: 670px) {
      width: 140px;
      height: 190px;
      margin-top: 30px;
}

    img {
      max-width: 75%;
      max-height: 75%;
      margin: auto;
    }

    h2 {
      font-family: 'Fredoka One', cursive;
      color: rgb(10 40 95);

      @media(max-width: 670px) {
      font-size: 18px;
}
    }

    :hover {
      transform: scale(1.1);

      div {
        display: flex;
        justify-content: space-around;
        margin-top: 15px;
        max-width: 100%;
      }
    }
  `

  const ContainerBotoes = styled.div`
  display: none;

  @media(max-width: 670px) {
  display:  flex;
    justify-content: space-around;
    margin-top: 15px;
  }

  button {
    border-radius: 8px;
    border: none;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;

    @media(max-width: 670px) {
    font-size: 10px;
    padding: 2px;
    margin-bottom: 5px;
  }
  }

  img {
    margin-left: 5px;

    @media(max-width: 670px) {
    width: 18px;
    height: 24px;
  }
  }
  `

  const ContainetTipo = styled.section`
  display: flex;
  justify-content: flex-start;

  span {
    font-size: 12px;
    border: 1px solid grey;
    border-radius: 10px;
    margin-top: 10px;
    padding: 4px;

    
  @media(max-width: 670px) {
      font-size: 10px;
}
  }
  `
  const FundoPoke = styled.div` 
  background-color: rgba(255, 203, 5, 0.4);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin: auto;

  @media(max-width: 670px) {
      width: 85px;
      height: 85px;
}
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
      alert
      (`${pokemon.name} capturado com sucesso!`)
    }
  };

  return (
    <> 
      {states.pokemons &&
          states.pokemons.map((pokemon) => {
            return (
              <Card id={pokemon.name} key={pokemon.name}>
                <h2> {pokemon.name} </h2>

                <ContainetTipo>
                {pokemon.types.map((type) => {
                  return <span> {type.type.name} </span>
                  })} 
                </ContainetTipo>

                <FundoPoke>           
                <img
                  src={pokemon.sprites.other.dream_world.front_default}
                  alt={"PokeFoto"}
                />
                </FundoPoke>
                <ContainerBotoes>
                  <BotaoAdicionar
                    adicionarPokemon={adicionarPokemon}
                    pokemon={pokemon}
                    nome={"Adicionar"}
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