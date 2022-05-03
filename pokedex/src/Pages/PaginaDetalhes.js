import React from 'react'
import styled from 'styled-components'
import BotaoVoltar from '../Components/Botoes/BotaoVoltar'

const Header =styled.div`
    display: flex;
    height: 100px;
    padding: 10px;
    margin-bottom: 10px;
    align-items: center;
    border: solid 1px black;
    justify-content: space-between;

`
const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`

const Main = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const Imagem = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    margin: 10px;
    border: 1px solid black;
`

const Status = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 412px;
    border: 1px solid black;
    margin: 10px;

`

const Type = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 100px;
    border: 1px solid black;
    margin: 10px;
`

const Moves = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 300px;
    border: 1px solid black;
    margin: 10px;
`

const PaginaDetalhes = () => {

    return (
        <Div>
            <Header>
                <BotaoVoltar/>
                <h1>Nome do Pokémon</h1>
                <p>.</p>
            </Header>
            <Main>
                <div>
                    <Imagem>Imagem Frontal</Imagem>
                    <Imagem>Imagem de Costas</Imagem>
                </div>
                <Status>
                    Status
                </Status>
                <div>
                    <Type>Type</Type>
                    <Moves>Moves</Moves>
                </div>
            </Main>
        </Div> 
    )
}

export default PaginaDetalhes;