import React from 'react';
import styled from 'styled-components'
import BotaoIrParaPokedex from '../Components/Botoes/BotaoIrParaPokedex';
import BotaoAdicionar from '../Components/Botoes/BotaoAdicionar';
import BotaoDetalhes from '../Components/Botoes/BotaoDetalhes';
import useRequestData from '../Hooks/useRequestData';


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
/*   <Card>
                    <p>Pokemon</p>
                    <div>
                        <BotaoAdicionar/>
                        <BotaoDetalhes/>
                    </div>
                </Card>*/

const PaginaHome = () => {
    const [lista, pokemons, isLoading, error]= useRequestData(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`);

    const cardPokemon = pokemons && pokemons.map((pokemon) => {
        console.log("pokemons:", pokemon)
        return (
            
            <Card key={pokemon.name}>
                <p> {pokemon.name} </p>
                <p> {pokemon.height} </p>
                <img src={pokemon.sprites.front_default}></img>
            </Card>
        )
    })

    return(
        <Div>
            <Header>
                <BotaoIrParaPokedex/>
                <h1>Lista de Pokémons</h1>
                <p>.</p>
            </Header>
            
              {cardPokemon}
              
        </Div>
    )
}

export default PaginaHome;