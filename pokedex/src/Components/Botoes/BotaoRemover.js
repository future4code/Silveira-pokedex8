import React from 'react'

const BotaoRemover = (props) => {
  return (
    <button onClick={()=>props.removerPokemon(props.name)}>Remover</button>
  )
}

export default BotaoRemover