import Layout from '../components/Layout'
import Pokecard from "../components/Pokecard"
import {useState} from 'react'




const Home = ({pokemon}) => {

    const [pokes, setPoke] = useState(pokemon)
    const filteredPokemon = (e) => {
        const mapPokemon = pokemon.filter(poke => poke.name.includes(e.target.value.toLowerCase()))
        setPoke(mapPokemon)
    }
    return (
        <>
        
        <Layout title = "Next.js Pokedex">
        <div className="bg-indigo-dark h-50 p-8">
            <div className="container mx-auto py-8">
                <input onChange={filteredPokemon} className="w-full h-16 px-8 rounded mb-8 focus:outline-none focus:shadow-outline text-xl shadow-lg" type="text" placeholder="Search..."/>
            </div>
      </div>
            <h1 className = "text-4xl mb-8 text-center">
                Pokedex
            </h1>
                <div className="grid grid-cols-4 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
              {pokes.map((poke,index) => {
                  return(
                   <Pokecard 
                   id ={parseInt(poke.finalid)}
                   key = {index}
                   index = {index}
                   name = {poke.name}
                   img = {poke.img}
                   paddedIndex = {poke.paddedIndex}
                   />
                  )
              })}
              </div>
        </Layout>
        
        </>
    )
}

Home.getInitialProps = async (query) => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    const {results} = await res.json()
    const pokemon = results.map((result, index) => {
        const paddedIndex = ("00" + (index +1)).slice(-3)
        const number = result.url.slice(34)
        const id = number.substring(0, number.length - 1);
        console.log(finalid)
        const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`
        return {
            ...result,
            paddedIndex,
            img,
            id
        }
    }) 
    return {
        pokemon,
    }
}

export default Home
