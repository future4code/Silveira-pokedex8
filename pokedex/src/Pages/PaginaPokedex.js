import React from 'react';
import styled from 'styled-components'
import BotaoVoltar from '../Components/Botoes/BotaoVoltar';
import BotaoRemover from '../Components/Botoes/BotaoRemover'
import BotaoDetalhes from '../Components/Botoes/BotaoDetalhes';
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
    const [pokedex, setPokedex] = useState()

    const listaPokemons = pokedex.map((poke)=>{
        return (
            <Card>
                <p>{poke.name}</p>
                <div>
                    <BotaoRemover removerPokemon={()=>removerPokemon({poke})}/>
                    <BotaoDetalhes url={poke.url} />
                </div>
            </Card>
        )
    }) 

    const removerPokemon = (url) => {
        const novaPokedex = pokedex.filter((poke)=>{
            return(
                poke.url !== url
            )
        })
        setPokedex(novaPokedex)
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