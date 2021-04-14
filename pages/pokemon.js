import {useEffect} from 'react'
import Layout from '../components/Layout'
import Link from "next/link"
import PokeCardDetail from '../components/PokecarDetail'
import tachyons from 'tachyons'

export default function Detail({pokemon, id}){
    let Id = id
    useEffect(() =>{
        return pokemon
    }, [Id])


    return <Layout className="" title={pokemon.name }>
        <div className="arrow-container">
        <Link href={`/pokemon?id=${parseInt(Id) > 1 ? parseInt(Id) - 1 : 151}`}>
        <a>
        <i className="fas fa-angle-double-left"></i>
        </a>
        </Link>
        <Link href={`/pokemon?id=${parseInt(Id) < 151 ? parseInt(Id) + 1 : 1}`}>
        <a>
        <i className="fas fa-angle-double-right"></i>
        </a>
        </Link>
        </div>
        <div className="">
        <div className=" rounded-lg mx-auto mt-10 bg-gray-200 p-4 shadow-lg xs:w-full sm:w-2/6 md:w-72 lg:w-3/6 xl:w-2/5" >
            <div className="text-center mx-auto">
                <h1 className="text-2xl mb-1 font-bold text-center capitalize">{pokemon.name}</h1>
                <h2 className="font-bold mb-3">{ "# " + pokemon.paddedIndex}</h2>
            </div>
            <div className="box-content  md:box-content lg:inline-flex">
                <PokeCardDetail
                img = {pokemon.img}
                paddedIndex = {pokemon.paddedIndex}
                />
                <div className="inline-flex">
                    <div className="pr-2 pl-0 ms:pr-2 pl-0 md:pr-20 pl-5 lg:pr-20 pl-5">
                        <h2 className="font-bold mr-2">Weight:</h2>
                            <p>{pokemon.weight}</p>
                        <h2 className="font-bold mr-2">Height:</h2>
                            <p>{pokemon.height}</p>      
                    </div>
                    <div className="mr-5">
                        <h2 className="font-bold mr-2">Types:</h2>
                        {pokemon.types.map((type, index) => {
                            return <p key={index}>{type.type.name}</p>
                        })}
                        <h2 className="font-bold mr-2">Abilities:</h2>
                        {pokemon.abilities.map((ab, index) => {
                            return <p key={index}>{ab.ability.name}</p>
                        })}
                    </div>
                </div>
            </div>
        </div>
        </div>
        
        <p className="mt-10 text-center">
        <Link href="/">
            <a className=""><p className=" text-2xl mx-auto text-white underline grow">Home</p></a>
        </Link>
        </p>

    </Layout>
        
    
}

export async function getServerSideProps({query}){
    try{
        const id = query.id
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const pokemon = await res.json()
        const paddedIndex = ("00" + (id)).slice(-3)
        const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`
        pokemon.img = img
        pokemon.paddedIndex = paddedIndex

        return {
            props: {pokemon, id}
        };
    }catch{
        console.log("error")
    }

  
}

