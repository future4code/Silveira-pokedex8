import React from 'react';
import styled from 'styled-components'
import BotaoIrParaPokedex from '../Components/Botoes/BotaoIrParaPokedex';
import CardPokemons from '../Components/Cards/CardPokemons';
import LogoPokemon from '../Assets/Pokemon-logo.png'

const Header =styled.div`
    display: flex;
    height: 100px;
    padding: 10px;
    align-items: center;
    background-color: rgb(10 40 95);
    justify-content: space-between;

    img{
      max-width: 100%;
      max-height: 100%;
      margin-right: 30px;

      @media(max-width: 670px) {
      margin: 35px 0 0 0;
      padding: 15px;
}
    }

    @media(max-width: 670px) {
      flex-direction: column-reverse;
      justify-content: center;
    }
`
const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`
const PaginaPokemons = styled.main`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-row-gap: 15px;
justify-items: center;
margin: 30px 0 30px 0;

@media(max-width: 670px) {
    grid-template-columns: repeat(2, 1fr) ;
}
`

const PaginaHome = () => {
  return (
    <Div>
      <Header>
        <BotaoIrParaPokedex />
        <img src={LogoPokemon}/>
      </Header>
      <PaginaPokemons>
        <CardPokemons/>
      </PaginaPokemons>
    </Div>
  );
};

export default PaginaHome;