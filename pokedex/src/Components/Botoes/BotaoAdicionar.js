import React from 'react'

const BotaoAdicionar = (props) => {
  return (
    <button onClick={() => props.adicionarPokemon(props.pokemon)}>
      {props.nome}
    </button>
  )
}

export default BotaoAdicionar;