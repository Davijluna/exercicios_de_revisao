const fetchPokemon  = () => {
  const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

  const pokemonPromises = []

  for (let i = 1; i <= 150; i += 1) {
    pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()))
    
  }

  Promise.all(pokemonPromises)
  .then(pokemosns => {
    console.log(pokemosns)

    const lisPokemons = pokemosns.reduce((accumulator, pokemon) => {
      accumulator += `<li>${pokemon.name}</li>`
      return accumulator
    }, '')
    // console.log(lisPokemons)
  })
}

fetchPokemon()