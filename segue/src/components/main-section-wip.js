import React from "react";
import './main-section.css';

//JS Variable
let randomPokemonIndex = Math.floor(Math.random()*1008).toString();
let GETurl = "https://pokeapi.co/api/v2/pokemon/" + randomPokemonIndex;
let randomPokemonImage;

function fetchData() {
    fetch(GETurl)
      .then((response) => response.json())
      .then((json) => {
        randomPokemonImage = json["sprites"]["other"]["official-artwork"]["front_default"];
        console.log(randomPokemonImage);
      })
  }

fetchData();
  
function MainSectionWip() {
  return (
    <img 
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    />
  )
}

export default MainSectionWip;