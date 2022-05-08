import React from 'react'
import pokebolaBotao from '../../Assets/pokebolaBotao.png'

const BotaoAdicionar = (props) => {
  return (
    <button onClick={() => props.adicionarPokemon(props.pokemon)}>
      Capturar
      <img src={pokebolaBotao}/>
    </button>
  )
}

export default BotaoAdicionar;