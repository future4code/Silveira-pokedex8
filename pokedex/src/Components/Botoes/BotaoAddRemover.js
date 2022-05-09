import React from 'react'
import styled from 'styled-components'

const BotaoAddRemo =  styled.button`
    border: none;
    border-radius: 8px; 
    background-color: rgb(255, 203, 5);
    color: rgb(7, 107, 177);
    margin-right: 30px;
    font-size: 16px;
    font-family: 'Fredoka One', cursive;
    padding: 10px;
    cursor: pointer;

    @media(max-width: 670px) {
    margin: 10px 0 0 0;
    align-self: flex-start;
    }
` 

const BotaoAddRemover = (props) => {
  return (
    <BotaoAddRemo onClick={() => props.adicionarPokemon(props.pokemon)}>
      {props.nome}
    </BotaoAddRemo>
  )
}

export default BotaoAddRemover;