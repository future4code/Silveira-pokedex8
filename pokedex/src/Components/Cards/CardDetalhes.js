import React from "react";
import styled from "styled-components";
import BotaoVoltar from "../Botoes/BotaoVoltar";
import BotaoAddRemover from "../Botoes/BotaoAddRemover";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import GlobalStateContext from "../../Context/GlobalStateContext";
import { useContext } from "react";
import { Card } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';


const Header = styled.div`
    display: flex;
    height: 100px;
    padding: 10px;
    align-items: center;
    background-color: rgb(10 40 95);
    justify-content: space-between;

    img{
      max-width: 100%;
      max-height: 100%;
      margin-right: 30px;

      @media(max-width: 670px) {
      margin: 35px 0 0 0;
      padding: 15px;
}
    }

    @media(max-width: 670px) {
      flex-direction: column-reverse;
      justify-content: center;
    }
`

const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
`

const Main = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 30px 100px;

  @media(max-width: 1300px) {
    margin: 30px 0px;
  }
`;

const Paragrafo = styled.p`
  margin: 7px;
  font-family: cursive;
  font-size: 20px;
  text-transform: capitalize;
`;

const NomePoke = styled.h1 `
  color: rgb(255, 203, 5);
  text-transform: capitalize;
`

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
      alert(`${pokemon.name} capturado com sucesso!`);
    } else {
      const novaPokedex = states.pokedex.filter((poke) => {
        return poke.name !== pokemon.name;
      });
      setters.setPokedex(novaPokedex);
      alert(`${pokemon.name} deletado da pokedex com sucesso!`);
    }
  };

  return (
    <Div>
      <Header>
        <BotaoVoltar />
        <NomePoke>{pokemon.name}</NomePoke>
        <BotaoAddRemover
          adicionarPokemon={addRemovePokemon}
          pokemon={pokemon}
          nome={"Adicionar/Remover"}
        />
      </Header>
      <Main>
        <div>
          <Card style={{ maxWidth: 200, marginBottom: 13, marginTop: 10, background: 'rgba(255, 203, 5, 0.4)', borderRadius: '50%' }}>
          <CardMedia
              style={{ maxWidth: '50%', margin: 'auto', objectFit: 'fill'}}
              component="img"
              height="200"
              image={pokemon.sprites?.other.dream_world.front_default}
              alt="verso"
            />
          </Card>
          <Card style={{ maxWidth: 200, background: 'rgba(255, 203, 5, 0.4)', borderRadius: '50%' }}>
          <CardMedia
              component="img"
              height="200"
              image={pokemon.sprites?.front_default}
              alt="frente"
            />
          </Card>
        </div>
        <div style={{ marginLeft: 10 }}>
          <Card style={{ width: 350, height: 413, marginBottom: 13, marginTop: 10, background: 'rgba(255, 203, 5, 0.4)' }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center', marginTop: 20, marginBottom: 40, fontSize: 30, color: 'darkblue' }}>
                Stats
              </Typography>
              {pokemonStats}
            </CardContent>
          </Card>
        </div>
        <div style={{ marginLeft: 10 }}>
          <Card style={{ width: 370, height: 100, display: 'flex', textAlign: 'center', marginBottom: 13, marginTop: 10, background: 'rgba(255, 203, 5, 0.4)' }}>
            <CardContent style={{ display: 'flex', alignItems: 'center', paddingBotton: 16 }}>
              <Typography gutterBottom variant="h5" component="div" style={{ display: 'flex', margin: 7, color: 'darkblue', paddingRight: 50 }}>
                Type
              </Typography>
              {pokemonTypes}
            </CardContent>
          </Card>

          <Card style={{ width: 370, height: 300, marginBottom: 13, marginTop: 10, background: 'rgba(255, 203, 5, 0.4)' }}>
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
