import React from 'react';
import styled from 'styled-components'
import BotaoVoltar from '../Components/Botoes/BotaoVoltar';
import BotaoRemover from '../Components/Botoes/BotaoRemover'
import BotaoDetalhes from '../Components/Botoes/BotaoDetalhes';
import useRequestData from '../Hooks/useRequestData';
import { useState } from 'react';

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


const PaginaPokedex = () => {
    const [lista, pokemons, isLoading, error]= useRequestData(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`);


    const listaPokemons = pokemons && pokemons.map((poke)=>{
        return (
            <Card key={poke.url}>
                <p>{poke.name}</p>
                <div>
                    <BotaoRemover removerPokemon={()=>removerPokemon(poke.url)}/>
                    <BotaoDetalhes url={poke.url} />
                </div>
            </Card>
        )
    }) 

    const removerPokemon = (name) => {
        const novaPokedex = listaPokemons.filter((poke)=>{
            return(
                poke.name !== name
            )
        })

    }

    return(
        <Div>
            <Header>
                <BotaoVoltar/>
                <h1>Pokedéx</h1>
                <p>.</p>
            </Header>
            <main>
                {listaPokemons}
            </main>
        </Div>
    )
}

export default PaginaPokedex;