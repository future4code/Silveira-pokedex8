import React from 'react'
import { useNavigate } from 'react-router-dom'


const BotaoVoltar = () => {
  const navigate = useNavigate()

  const goBack = ()=>{
    navigate(-1)
  }
  return (
    <button onClick={ () => goBack() }>Voltar</button>
  )
}

export default BotaoVoltar