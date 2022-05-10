import React from 'react'
import './Pokedex.css'
import { useContext } from 'react'
import GlobalStateContext from '../../Context/GlobalStateContext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Pokedex = () => {

  const { states, setters } = useContext(GlobalStateContext);
  const [numeroArray, setNumeroArray] = useState(0)

  const avançar = () => {
    if(numeroArray !== states.pokedex.length - 1){
      setNumeroArray( numeroArray + 1 )
    }
  }

  const voltar = () => {
    if(numeroArray > 0)
    setNumeroArray ( numeroArray - 1 )
  }

  const navigate = useNavigate()

  const irParaDetalhes = (url)=>{
    navigate(`/detalhes/${url}`)
  }

  
  const removerPokemon = (name) => {
      const novaPokedex = states.pokedex.filter((poke)=>{
          return(
              poke.name !== name
          )
      })
      setters.setPokedex(novaPokedex)
  }

  

  console.log(states.pokedex[numeroArray])

  return ( 
          <div id="pokedex">
          <div id="left">
          <div id="logo"></div>
          <div id="bg_curve1_left"></div>
          <div id="bg_curve2_left"></div>
          <div id="curve1_left">
            <div id="buttonGlass">
              <div id="reflect"> </div>
            </div>
            <div id="miniButtonGlass1"></div>
            <div id="miniButtonGlass2"></div>
            <div id="miniButtonGlass3"></div>
          </div>
          <div id="curve2_left">
            <div id="junction">
              <div id="junction1"></div>
              <div id="junction2"></div>
            </div>
          </div>
          <div id="screen">
            <div id="topPicture">
              <div id="buttontopPicture1"></div>
              <div id="buttontopPicture2"></div>
            </div>
            <div id="picture">
              <img src={states.pokedex[numeroArray].sprites.other.dream_world.front_default}/>
            </div>
            <button id="buttonbottomPicture" onClick={()=>removerPokemon(states.pokedex[numeroArray].name)}><h5>x</h5></button>
            <div id="speakers">
              <div className="sp"></div>
              <div className="sp"></div>
              <div className="sp"></div>
              <div className="sp"></div>
            </div>
          </div>
          <button id="bigbluebutton" onClick={()=>irParaDetalhes(states.pokedex[numeroArray].name)}><h5>Detalhes</h5></button>
          <div id="barbutton1"></div>
          <div id="barbutton2"></div>
          <div id="cross">
            <div id="leftcross" onClick={voltar}>
              <div id="leftT"></div>
            </div>
            <div id="topcross"onClick={avançar}>
              <div id="upT"></div>
            </div>
            <div id="rightcross" onClick={avançar}>
              <div id="rightT"></div>
            </div>
            <div id="midcross">
              <div id="midCircle"></div>
            </div>
            <div id="botcross" onClick={voltar}>
              <div id="downT"></div>
            </div>
          </div>
        </div>
      </div>
)
}

export default Pokedex