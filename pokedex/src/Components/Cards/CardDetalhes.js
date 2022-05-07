import React from "react";
import styled from "styled-components";
import BotaoVoltar from "../Botoes/BotaoVoltar";
import BotaoAdicionar from "../Botoes/BotaoAdicionar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import GlobalStateContext from "../../Context/GlobalStateContext";
import { useContext } from "react";

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

const Imagem = styled.img`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  margin: 10px;
  border: 1px solid black;
`;

const Status = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  align-items: center;

  width: 400px;
  height: 412px;
  border: 1px solid black;
  margin: 10px;
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

const Moves = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 300px;
  border: 1px solid black;
  margin: 10px;
`;

const Paragrafo = styled.p`
  margin: 7px;
  font-family: cursive;
  font-size: 20px;
`;

const Stats = styled.div`
  text-align: initial;
`;

const StatsH1 = styled.h1`
  margin-top: 0;
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
        <div key={s.id}>
          <Paragrafo>
            {s.stat.name}: {s.base_stat}
          </Paragrafo>
        </div>
      );
    });

  const pokemonTypes =
    pokemon &&
    pokemon.types?.map((tipos) => {
      return (
        <div key={tipos.id}>
          <Paragrafo>{tipos.type.name}</Paragrafo>
        </div>
      );
    });

  const pokemonMoves =
    pokemon &&
    pokemon.moves?.slice(0, 5).map((move) => {
      return (
        <div key={move.id}>
          <Paragrafo>{move.move.name}</Paragrafo>
        </div>
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
    <div>
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
          <Imagem src={pokemon.sprites?.front_default} alt="frente"></Imagem>
          <Imagem src={pokemon.sprites?.back_default} alt="verso"></Imagem>
        </div>
        <Status>
          <StatsH1>Stats</StatsH1>
          <Stats>{pokemonStats}</Stats>
        </Status>
        <div>
          <Type>
            <h2>Type</h2>
            <div>{pokemonTypes}</div>
          </Type>
          <Moves>
            <h2>Principais ataques</h2>
            {pokemonMoves}
          </Moves>
        </div>
      </Main>
    </div>
  );
};

export default CardDetalhes;
