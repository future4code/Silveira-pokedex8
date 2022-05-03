import React from 'react';
import CardPokemons from '../Components/Cards/CardPokemons';
import styled from 'styled-components'
import BotaoVoltar from '../Components/Botoes/BotaoVoltar';
import BotaoRemover from '../Components/Botoes/BotaoRemover'
import BotaoDetalhes from '../Components/Botoes/BotaoDetalhes';

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

    return(
        <Div>
            <Header>
                <BotaoVoltar/>
                <h1>Pokedéx</h1>
                <p>.</p>
            </Header>
            <main>
                <Card>
                    <p>Pokemon</p>
                    <div>
                        <BotaoRemover/>
                        <BotaoDetalhes/>

                    </div>
                </Card>
            </main>
        </Div>
    )
}

export default PaginaPokedex;