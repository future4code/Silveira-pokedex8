import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const BotaoHeader =  styled.button`
border: none;
border-radius: 8px; 
background-color: rgb(255, 203, 5);
color: rgb(7, 107, 177);
margin-left: 30px;
font-size: 16px;
font-family: 'Fredoka One', cursive;
padding: 10px;
cursor: pointer;

@media(max-width: 670px) {
  margin: 10px 0 0 0;
  align-self: flex-start;
}

` 

const BotaoIrParaPokedex = () => {
  const navigate = useNavigate()

  const irParaPokedex = () =>{
    navigate("/pokedex")
  }
  return (
    <BotaoHeader onClick={irParaPokedex}>Ver minha Pokédex</BotaoHeader>
  )
}

export default BotaoIrParaPokedex

