import React from 'react';
import styled from 'styled-components'
import BotaoIrParaPokedex from '../Components/Botoes/BotaoIrParaPokedex';
import BotaoAdicionar from '../Components/Botoes/BotaoAdicionar';
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


const PaginaHome = () => {

    return(
        <Div>
            <Header>
                <BotaoIrParaPokedex/>
                <h1>Lista de Pokémons</h1>
                <p>.</p>
            </Header>
            <main>
                <Card>
                    <p>Pokemon</p>
                    <div>
                        <BotaoAdicionar/>
                        <BotaoDetalhes/>
                    </div>
                </Card>
            </main>
        </Div>
    )
}

export default PaginaHome;