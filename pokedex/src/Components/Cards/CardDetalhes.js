import React from "react";
import styled from "styled-components";
import BotaoVoltar from "../Botoes/BotaoVoltar";
import BotaoAdicionar from "../Botoes/BotaoAdicionar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import GlobalStateContext from "../../Context/GlobalStateContext";
import { useContext } from "react";
import { Card } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`

const Header = styled.header`
  display: flex;
  height: 100px;
  padding: 10px;
  margin-bottom: 10px;
  align-items: center;
  border: solid 1px black;
  justify-content: space-between;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Type = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  width: 400px;
  height: 100px;
  border: 1px solid black;
  margin: 10px;
`;

const Paragrafo = styled.p`
  margin: 7px;
  font-family: cursive;
  font-size: 20px;
`;

const CardDetalhes = () => {
  const { states, setters } = useContext(GlobalStateContext);
  const [pokemon, setPokemon] = useState({});

  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((error) => {
        console.log("Deu erro!!!", error.response);
      });
  }, []);

  const pokemonStats =
    pokemon &&
    pokemon.stats?.map((s) => {
      return (
        <Typography key={s.id} variant="body2" color="text.secondary">
          <Paragrafo>{s.stat.name}: {s.base_stat}</Paragrafo>
        </Typography>
      );
    });

  const pokemonTypes =
    pokemon &&
    pokemon.types?.map((tipos) => {
      return (
        <Typography key={tipos.id} variant="body2" color="text.secondary">
          <Paragrafo>{tipos.type.name}</Paragrafo>
        </Typography>
      );
    });

  const pokemonMoves =
    pokemon &&
    pokemon.moves?.slice(0, 5).map((move) => {
      return (
        <Typography key={move.id} variant="body2" color="text.secondary">
          <Paragrafo>{move.move.name}</Paragrafo>
        </Typography>
      );
    });

  const addRemovePokemon = (pokemon) => {
    const index = states.pokedex.findIndex((pokemonPokedex) => {
      return pokemon.name === pokemonPokedex.name;
    });
    if (index === -1) {
      const novaPokedex = [...states.pokedex, pokemon];
      setters.setPokedex(novaPokedex);
      alert("to na pokedex!!!");
    } else {
      const novaPokedex = states.pokedex.filter((poke) => {
        return poke.name !== pokemon.name;
      });
      setters.setPokedex(novaPokedex);
      alert("to na home!!!");
    }
  };

  return (
    <Div>
      <Header>
        <BotaoVoltar />
        <h1>{pokemon.name}</h1>
        <BotaoAdicionar
          adicionarPokemon={addRemovePokemon}
          pokemon={pokemon}
          nome={"Adicionar/Remover da Pokedex"}
        />
      </Header>
      <Main>
        <div>
          <Card style={{ maxWidth: 200, marginBottom: 13, marginTop: 10, background: ' #BCF2CB' }}>
            <CardMedia
              component="img"
              height="200"
              image={pokemon.sprites?.front_default}
              alt="frente"
            />
          </Card>
          <Card style={{ maxWidth: 200, background: ' #BCF2CB' }}>
            <CardMedia
              component="img"
              height="200"
              image={pokemon.sprites?.back_default}
              alt="verso"
            />
          </Card>
        </div>
        <div style={{marginLeft: 10}}>
          <Card style={{ width: 400, height: 413, marginBottom: 13, marginTop: 10, background: ' #BCF2CB' }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center', marginTop: 20, marginBottom: 40, fontSize: 30, color: 'darkblue' }}>
                Stats
              </Typography>
              {pokemonStats}
            </CardContent>
          </Card>
        </div>
        <div style={{marginLeft: 10}}>
        <Card style={{ width: 420, height: 100, marginBottom: 13, marginTop: 10, background: ' #BCF2CB' }}>
            <CardContent style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Typography gutterBottom variant="h5" component="div" style={{ display: 'flex', textAlign: 'center', alignItems: 'center', margin: 0, color: 'darkblue'}}>
                Type
              </Typography>
              {pokemonTypes}
            </CardContent>
          </Card>
        
          <Card style={{ width: 420, height: 300, marginBottom: 13, marginTop: 10, background: ' #BCF2CB' }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center', marginTop: 10, marginBottom: 20, fontSize: 25, color: 'darkblue' }}>
                Principais ataques
              </Typography>
              {pokemonMoves}
            </CardContent>
          </Card>
        </div>
      </Main>
    </Div>
  );
};

export default CardDetalhes;
