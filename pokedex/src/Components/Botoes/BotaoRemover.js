import React from 'react'
import styled from 'styled-components'



const BotaoRemover = (props) => {
  return (
    <button onClick={()=>props.removerPokemon(props.name)}>Remover</button>
  )
}

export default BotaoRemover