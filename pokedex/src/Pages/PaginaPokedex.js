import React from 'react';
import styled from 'styled-components';
import BotaoVoltar from '../Components/Botoes/BotaoVoltar';
import Pokedex from '../Components/Pokedex/Pokedex';

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


const Main = styled.div`
    margin: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
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
            <Main>
                <Pokedex/>
            </Main>
        </Div>
    )
}

export default PaginaPokedex;