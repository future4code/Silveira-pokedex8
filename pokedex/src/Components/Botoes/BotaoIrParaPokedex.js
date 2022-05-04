import React from 'react'
import { useNavigate } from 'react-router-dom'

const BotaoIrParaPokedex = () => {
  const navigate = useNavigate()

  const irParaPokedex = () =>{
    navigate("/pokedex")
  }
  return (
    <button onClick={irParaPokedex}>Ver minha Pokedéx</button>
  )
}

export default BotaoIrParaPokedex

