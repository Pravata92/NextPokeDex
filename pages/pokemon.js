import {useEffect} from 'react'
import Layout from '../components/Layout'
import Link from "next/link"
import PokeCardDetail from '../components/PokecardDetail'
import tachyons from 'tachyons'

export default function Detail({pokemon, id}){
    let Id = id
    useEffect(() =>{
        return pokemon
    }, [Id])


    return <Layout title={pokemon.name }>
        <>
            <div className="arrow-container">
                <Link href={`/pokemon?id=${parseInt(Id) > 1 ? parseInt(Id) - 1 : 251}`}>
                   <a>
                       <i className="fas fa-angle-double-left"></i>
                   </a>
               </Link>
               <Link href={`/pokemon?id=${parseInt(Id) < 251 ? parseInt(Id) + 1 : 1}`}>
                   <a>
                       <i className="fas fa-angle-double-right"></i>
                   </a>
               </Link>
            </div>
            <div className="rounded-lg mx-auto mt-10 bg-gray-200 span-1 shadow-lg xs:w-full sm:w-2/6 md:w-72 lg:w-3/6 xl:w-2/5" >
                <div className="text-center mx-auto">
                    <h1 className="text-2xl mb-1 font-bold text-center capitalize">{pokemon.name}</h1>
                    <h2 className="font-bold mb-3">{ "# " + pokemon.paddedIndex}</h2>
                </div>
                <div className="box-content p-1.5  md:box-content lg:inline-flex">
                    <PokeCardDetail
                    img = {pokemon.img}
                    weight = {pokemon.weight / 10}
                    height = {pokemon.height * 10}
                    types = {pokemon.types}
                    abilities = {pokemon.abilities}
                    />
                </div>
            </div>

            <div className="mt-10 text-center grow">
            <Link href="/">
                <a className="mx-auto"><span className=" text-2xl mx-auto text-white underline grow">Home</span></a>
            </Link>
            </div>
        </>
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

