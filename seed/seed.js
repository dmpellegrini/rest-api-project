import fetch from 'node-fetch'

// Storing the PokéAPI base url to a constant 
const url = 'https://pokeapi.co/api/v2/'

// Fetches data from the PokéAPI for first 151 Pokemon
fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
  .then(response => response.json()) 
  .then(jsonResponse => {
    console.log(jsonResponse)
  })
  .catch(error => {
      console.error("Pokemon not retrieved", error)
  })
