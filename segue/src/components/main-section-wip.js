import React, { useState, useRef, useEffect} from 'react'
import './main-section.css';

//JS Variable
let randomPokemonIndex = Math.floor(Math.random()*150).toString();
let GETurl = "https://pokeapi.co/api/v2/pokemon/" + randomPokemonIndex;
let randomPokemonImage;
let imageURL;
let saved = JSON.parse(window.localStorage.getItem("formInput"))
let currentIndex = 0;

function fetchData() {
    fetch(GETurl)
      .then((response) => response.json())
      .then((json) => {
        randomPokemonImage = json["sprites"]["other"]["official-artwork"]["front_default"];
      })
  }

fetchData();

function MainSectionWip() {
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
      const intervalId = setInterval(() => {
          setCurrentImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Math.floor(Math.random()*150).toString()}.png`);
      }, 5000)
      
      return () => clearInterval(intervalId);
  }, [])

  return (
      <div>
          <img src={currentImage} />
      </div>
  )
}

export default MainSectionWip;