import React from 'react';
import styled from 'styled-components'
import BotaoIrParaPokedex from '../Components/Botoes/BotaoIrParaPokedex';
import CardPokemons from '../Components/Cards/CardPokemons';


const Header =styled.div`
    display: flex;
    height: 100px;
    padding: 10px;
    margin: 0;
    align-items: center;
    border: solid 1px black;
    justify-content: space-between;

`
const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`


const PaginaHome = () => {
    const [lista, pokemons, isLoading, error]= useRequestData(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`);

    return(
        <Div>
            <Header>
                <BotaoIrParaPokedex/>
                <h1>Lista de Pokémons</h1>
            </Header>
            <main>
              {pokemons && pokemons.map((pokemon) => {
                console.log(pokemon)
                return (
                    <Card key={pokemon.name}>
                    <p> {pokemon.name} </p>
                    <p> {pokemon.weight} </p>
                    <p> {pokemon.height} </p>
                </Card>
                )
            })}
            </main>
        </Div>
    )
}

export default PaginaHome;