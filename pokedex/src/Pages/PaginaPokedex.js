import React from 'react';
import styled from 'styled-components';
import BotaoVoltar from '../Components/Botoes/BotaoVoltar';
import Pokedex from '../Components/Pokedex/Pokedex';

const Header =styled.div`
    display: flex;
    height: 100px;
    padding: 10px;
    align-items: center;
    background-color: rgb(10 40 95);
    justify-content: space-between;
    color: rgb(255, 203, 5);
    padding-right: 40px;


`
const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`


const Main = styled.div`
    margin: 10px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    text-align: center;


`

const P = styled.div`
    margin-top: 30px;
`


const PaginaPokedex = () => {

    return(
        <Div>
            <Header>
                <BotaoVoltar/>
                <h1>Pokedéx</h1>
            </Header>
            <Main>
                <Pokedex/>
                <P>Referência: <a href="https://codepen.io/Bidji/pen/MYdPwo">Bidji</a></P>
            </Main>
        </Div>
    )
}

export default PaginaPokedex;