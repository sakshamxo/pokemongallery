import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'


const App = () => {
  const [pokemon, setpokemon] = useState(null)
  const GetPokemon = async () =>{
    try {
      const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon/')
      setpokemon(data.results)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    GetPokemon();
  }, [])
  
  return (
    <>
    <div className='container d-flex flex-wrap p-5 mt-5'  >
      {pokemon ?.map((pokemons , index)=>(<div key={index} className='w-25 border border-1 p-3'>
<p>{pokemons.name}</p>
      </div>
      ))}
  
    </div>
    </>
  )
}

export default App