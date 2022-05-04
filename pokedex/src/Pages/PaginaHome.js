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
  return (
    <Div>
      <Header>
        <BotaoIrParaPokedex />
        <h1>Lista de Pokémons</h1>
      </Header>
      <main>
        <CardPokemons/>
      </main>
    </Div>
  );
};

export default PaginaHome;