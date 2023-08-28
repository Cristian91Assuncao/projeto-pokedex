import React from 'react'
import Header from '../../Components/Header/Header';
import { miniImages, stats, detailsAll, bigImage } from '../PokemonDetailPage/pokemonDetailStyle';
import { styled } from 'styled-components';

function PokemonDetailPage({ pokelist, pokedex, removeFromPokedex }) {

const PokemonDetailStyle = styled.div`
margin-left: 100px;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
height: 30vw;
`

const MiniImages = styled.div`
    border: black solid 1px;
    display: grid;
`
const Stats = styled.p`
    border: black solid 1px;
`
const DetailsAll = styled.div`
    border: black solid 1px;
`
const BigImage = styled.p`
    border: black solid 1px;
`
//   const navigate = useNavigate()

    return (
        <>
            <Header />
            <h1>Detalhes</h1>
        <PokemonDetailStyle>
            <MiniImages>
            <p>front</p>
            <p>back</p>
            </MiniImages>
            <Stats>base stats</Stats>
            <DetailsAll>
            <p>id</p>
            <p>name</p>
            <p>types</p>
            <p>moves</p>
            </DetailsAll>
            <BigImage>image</BigImage>
            {/* <button onClick={()=>goToPokemonsListPage(navigate)} >Todos os Pokémons</button>
            <button onClick={()=>goToPokedexPage(navigate)} >Pokédex</button> */}
        </PokemonDetailStyle>
        </>
    );
}

export default PokemonDetailPage;