import Layout from '../components/Layout'
import Pokecard from "../components/Pokecard"
import Search from "../components/Search"


const Home = ({pokemon}) => {
    return (
        <>
        
        <Layout title = "Next.js Pokedex">
        <Search/>
            <h1 className = "text-4xl mb-8 text-center">
                Pokedex
            </h1>
                <div className="grid grid-cols-4  ">
              {pokemon.map((poke,index) => {
                  return(
                   <Pokecard 
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

Home.getInitialProps = async (context) => {
    
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    const {results, previous, next} = await res.json()
    const pokemon = results.map((result, index) => {
        const paddedIndex = ("00" + (index +1)).slice(-3)
        const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`
        return {
            ...result,
            paddedIndex,
            img
        }
    }) 
    return {
        pokemon
    }
}

export default Home
