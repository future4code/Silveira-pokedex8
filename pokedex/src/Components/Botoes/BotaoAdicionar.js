import React from 'react'

const BotaoAdicionar = (props) => {
  return (
    <button onClick={() => props.adicionarPokemon(props.pokemon)}>
      adicionar
    </button>
  )
}

export default BotaoAdicionar;