import React from 'react'
import styled from 'styled-components'
import BotaoVoltar from '../Components/Botoes/BotaoVoltar'
import axios from 'axios'
import { useEffect } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import useRequestData from '../Hooks/useRequestData';

const Header =styled.div`
    display: flex;
    height: 100px;
    padding: 10px;
    margin-bottom: 10px;
    align-items: center;
    border: solid 1px black;
    justify-content: space-between;

`
const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`

const Main = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const Imagem = styled.img`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    margin: 10px;
    border: 1px solid black;
`

const Status = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 412px;
    border: 1px solid black;
    margin: 10px;

`

const Type = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 100px;
    border: 1px solid black;
    margin: 10px;
`

const Moves = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 300px;
    border: 1px solid black;
    margin: 10px;
`

export const PaginaDetalhes = () => {
    // const [pokemon, setPokemon] = useState({})
    const [pokemons] = useRequestData( `https://pokeapi.co/api/v2/pokemon/pikachu`)
    console.log("Pokemon", pokemons)
// const params = useParams();
//       useEffect(() => {
//         axios
//           .get(
//             `https://pokeapi.co/api/v2/pokemon/${params.id}`,
//           )
//           .then((response) => {
//             console.log("Pokemon", response.data.sprites.front_default)
//             setPokemon(response.data)
//           })
//           .catch((error) => {
//             console.log('Deu erro!!!', error.response)
//           });
//       }, []);

      const pokemonDetaill = pokemons.name && pokemons.abilities.map((pokemonDetail) => {
        console.log("Pokemon", pokemonDetail)
        return (
          <div key={pokemonDetail.id}>
            <p> abilities:{pokemonDetail.ability.name}</p>
            {/* <img src {pokemon.detail.sprites.front_default}/> */}
            
          </div>
        );
      })
      // const pokemonStats = pokemon && pokemon.stats.map((pokemon) => {
      //   return (
      //     <div key = {pokemon.stats}
      //   );

      // })

    return (

      <Div>
      <Header>
          <BotaoVoltar/>
          <h1>Nome do Pokémon</h1>
          <p>{pokemons.name}</p>
      </Header>
      <Main>
          <div>
              {/* <Imagem src={pokemon.sprites.front_default} alt="frente"></Imagem>
              <Imagem src={pokemon.sprites.back_default} alt="verso"></Imagem> */}
          </div>
          <Status>
              Status
              {pokemonDetaill}
          </Status>
          <div>
              <Type>Type</Type>
              <Moves>Moves</Moves>
          </div>
      </Main>
  </Div> 

        // <div>
        //    <h1>Página detalhes</h1> 

        //     Nome: {pokemon.name}

        //     <img src={pokemon.sprites.front_default} alt="frente"/>
        //     <img src={pokemon.sprites.back_default} alt="verso"/>
        //     {pokemon.stats.base_stat.name}
        //     {pokemon.stats.base.name.attack}
        //     {pokemon.stats.base.name.defense}
        //     {pokemon.stats.base.name.special-attack} não deixa incluir o tracinho
        //     {pokemon.stats.base.name.special-defense}
        //     {pokemon.stats.base.name.speed}

        //     {pokemonDetail}

        //    <button onClick={goBack}>Voltar</button>

        // </div>    
     
    );

}