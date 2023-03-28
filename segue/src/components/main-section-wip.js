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
        randomPokemonImage = json["sprites"]["front_default"];
      });
  }
  
  fetchData();

function MainSectionWip () {
    return (
    <img 
    src={randomPokemonImage}
    />
    )
}

export default MainSectionWip;