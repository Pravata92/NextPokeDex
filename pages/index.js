import Layout from '../components/Layout'
import Pokecard from "../components/Pokecard"
import {useState} from 'react'
import tachyons from 'tachyons'




const Home = ({pokemon}) => {

    const [pokes, setPoke] = useState(pokemon)
    const filteredPokemon = (e) => {
        const mapPokemon = pokemon.filter(poke => poke.name.includes(e.target.value.toLowerCase()))
        setPoke(mapPokemon)
    }
    return(
        <>
        
        <Layout title = "Pokedex Juan Pravata">
            <h1 className = "text-1xl m-5 font-bold text-white text-center">
                Pokédex
            </h1>
        <div className="w-full h-1/3">
            <div className="container w-3/5 mx-auto py-3.5">
                <input onChange={filteredPokemon} className="w-full h-16 px-8 rounded mb-8 focus:outline-none focus:shadow-outline text-xl shadow-lg" type="text" placeholder="Search..."/>
            </div>
        </div>
        <div  className="mb-6 xs:h-96 xl:h-full" style={{width: "100%", maxHeight:"58vh", overflow:"scroll", overflowX:"hidden"}}>
            <div style={{width: "100%", height:"100%", overflow:"auto"}}>
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
            </div>
        </div>
        </Layout>
        
        </>
    )
}

Home.getInitialProps = async (query) => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=251")
    const {results} = await res.json()
    const pokemon = results.map((result, index) => {
        const paddedIndex = ("00" + (index +1)).slice(-3)
        const id = result.url.slice(34)
        const finalid = id.substring(0, id.length - 1);
        const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`
        return {
            ...result,
            paddedIndex,
            img,
            finalid
        }
    }) 
    return {
        pokemon,
    }
}

export default Home
