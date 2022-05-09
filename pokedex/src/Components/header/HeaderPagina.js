import React from 'react';
import styled from 'styled-components'
import BotaoIrParaPokedex from '../Botoes/BotaoIrParaPokedex';
import LogoPokemon from '../../Assets/Pokemon-logo.png'

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

const HeaderPaginas = () => {
    return (
        <Header>
        <BotaoIrParaPokedex />
        <img src={LogoPokemon}/>
      </Header>
    )
}

export default HeaderPaginas;