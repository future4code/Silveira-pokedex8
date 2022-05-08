import React from 'react'
import pokebolaBotao from '../../Assets/pokebolaBotao.png'

const BotaoAdicionar = (props) => {
  return (
    <button onClick={() => props.adicionarPokemon(props.pokemon)}>
      {props.nome}
    </button>
  )
}

export default BotaoAdicionar;