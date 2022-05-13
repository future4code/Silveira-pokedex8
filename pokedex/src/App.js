import React from 'react';
import GlobalState from './Context/GlobalState';
import Rotas from './Routes/router';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

const EstiloGobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}
`

function App() {
  return (
    <>
      <EstiloGobal />
      <div>
        <GlobalState>
          <Rotas />
        </GlobalState>
      </div>
    </>
  );
}

export default App;
