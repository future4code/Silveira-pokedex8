import React from 'react'
import styled from 'styled-components'
import { useContext } from 'react'
import GlobalStateContext from '../../Context/GlobalStateContext'
import BotaoRemover from '../Botoes/BotaoRemover'
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

const CardPokedex = () => {

  
    const { states, setters } = useContext(GlobalStateContext);


    const removerPokemon = (name) => {
        const novaPokedex = states.pokedex.filter((poke)=>{
            return(
                poke.name !== name
            )
        })
        setters.setPokedex(novaPokedex)
    }

  return (
    <> 
      {states.pokedex &&
          states.pokedex.map((pokemon) => {
            return (
              <Card key={pokemon.name}>
                <p> {pokemon.name} </p>
                <FotoPoke
                  src={pokemon.sprites.other.dream_world.front_default}
                  alt={"PokeFoto"}
                />
                <p> {pokemon.height} </p>
                <div>
                  <BotaoRemover
                    removerPokemon={removerPokemon}
                    name={pokemon.name}
                  />
                  <BotaoDetalhes url={pokemon.name}/>
                </div>
              </Card>
            );
          })}
    </>
  )
}

export default CardPokedex