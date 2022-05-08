import React from 'react';
import styled from 'styled-components'
import CardDetalhes from '../Components/Cards/CardDetalhes';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const PaginaDetalhes = () => {
  return (
    <Div>
      <CardDetalhes />
    </Div>
  );
};

export default PaginaDetalhes;