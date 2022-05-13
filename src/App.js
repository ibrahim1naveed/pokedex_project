import { useState, useEffect } from "react";
import PokemonThumbnail from "./component/PokemonThumbnail";



function App() {

  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    console.log("This is data", data)
    console.log("This is data.NEXT", data.next)

    setLoadMore(data.next) /** This automatically sets up load more to be data.next */

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()


        console.log(data)
        setAllPokemons(currentList => [...currentList, data])
       
        }
      )
    }
    createPokemonObject(data.results)
    
  }

  useEffect(() => {
    getAllPokemons()
  }, [])  
  

  return (
    <div className="app-container">
      <h1>Pokemon Evolution</h1>
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.map((pokemonStats, index) => 
          <PokemonThumbnail
          key={index}
          id={pokemonStats.id}
          name={pokemonStats.name}
          image={pokemonStats.sprites.other.dream_world.front_default}
          type={pokemonStats.types[0].type.name}
          ></PokemonThumbnail>
          )}
        
        </div>
        <button className="load-more" onClick={ () => getAllPokemons() }>Load More</button>
      </div>
      
    </div>
  );
}

export default App;
