const fetchPokemon  = () => {
  const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

for (let i = 1; i <= 150; i += 1) {
  fetch(getPokemonUrl(i)).then(response => response.json())
}
// está linha de baixo será retirada 
  fetch(url)
  .then(response => response.json())
  .then(pokemon => {
    console.log(pokemon)
  })
}

fetchPokemon()