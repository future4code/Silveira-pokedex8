import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@material-ui/core/Button';

const BotaoVoltar = () => {
  const navigate = useNavigate()

  const goBack = ()=>{
    navigate(-1)
  }
  return (
    <Button variant="contained" color="secondary" onClick={ () => goBack() }>Voltar</Button>
  )
}

export default BotaoVoltar