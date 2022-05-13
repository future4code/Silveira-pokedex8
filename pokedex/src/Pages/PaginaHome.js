import React from 'react';
import styled from 'styled-components'
import CardPokemons from '../Components/Cards/CardPokemons';
import HeaderPaginas from '../Components/header/HeaderPagina';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`
const PaginaPokemons = styled.main`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-row-gap: 15px;
justify-items: center;
margin: 30px 0 30px 0;

@media(max-width: 670px) {
    grid-template-columns: repeat(2, 1fr) ;
}
`

const PaginaHome = () => {
  return (
    <Div>
      <HeaderPaginas/>
      <PaginaPokemons>
        <CardPokemons/>
      </PaginaPokemons>
    </Div>
  );
};

export default PaginaHome;