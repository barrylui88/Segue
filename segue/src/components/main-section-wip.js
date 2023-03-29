import React from "react";
import './main-section.css';

//JS Variable
let randomPokemonIndex = Math.floor(Math.random()*200).toString();
let GETurl = "https://pokeapi.co/api/v2/pokemon/" + randomPokemonIndex;
let randomPokemonImage;
let imageURL;

function fetchData() {
    fetch(GETurl)
      .then((response) => response.json())
      .then((json) => {
        randomPokemonImage = json["sprites"]["other"]["official-artwork"]["front_default"];
      })
  }

fetchData();
  
function MainSectionWip() {
  if (!randomPokemonImage) {
    imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomPokemonIndex}.png`
    return (
      <img 
      src={imageURL}
      />
    )
  } else {
  return (
    <img 
    src={randomPokemonImage}
    />
  )
  }
}

export default MainSectionWip;