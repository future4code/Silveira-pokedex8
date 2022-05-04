import React  from 'react'
import { useNavigate } from 'react-router-dom'

const BotaoDetalhes = (props) => {
  const navigate = useNavigate()

  const irParaDetalhes = (url)=>{
    navigate(`/detalhes/${url}`)
  }

  return (
    <button onClick={()=>irParaDetalhes(props.url)}>Detalhes</button>
  )
}

export default BotaoDetalhes