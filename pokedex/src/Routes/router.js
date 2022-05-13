import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import PaginaDetalhes from '../Pages/PaginaDetalhes';
import PaginaHome from '../Pages/PaginaHome';
import PaginaPokedex from '../Pages/PaginaPokedex';

const Rotas = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<PaginaHome />} />
                <Route path="pokedex" element={<PaginaPokedex />} />
                <Route path="detalhes/:id" element={<PaginaDetalhes />} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;