import React from 'react';
import GlobalState from './Context/GlobalState';
import Rotas from './Routes/router';

function App() {


  return (
    <div>
      <GlobalState>
        <Rotas/>
      </GlobalState>
    </div>
  );
}

export default App;
