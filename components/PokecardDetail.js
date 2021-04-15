import colors from "../utilities/colors"
const PokeCardDetail = ({img, weight, height, types, abilities}) =>{
    return(
        <>
    <div className="rounded box-content mx-auto bg-gray-100 mb-4  shadow-lg" style={{width: '175px'}}>
          <img className="w-full mx-auto" src={img} style={{width:'250px'}} alt="pokemon" />
    </div>
    <div className="inline-flex">
                    <div className="pr-2  ms:pr-2  md:pr-20 pl-5 lg:pr-20 ">
                        <h2 className="font-bold mr-2 pb-2">Weight:</h2>
                            <span>{weight} Kg.</span>
                        <h2 className="font-bold mr-2 pb-2 pt-1">Height:</h2>
                            <span>{height} Cm.</span>      
                    </div>
                    <div className="mr-5">
                        <h2 className="font-bold mr-2 pb-1">Types:</h2>
                        {types.map((type, index) => {
                            return (
                            <div key={index}>
                            <p className="px-2 mb-1 rounded-lg" style={{backgroundColor: colors[type.type.name]}}  key={index}>{`•${type.type.name}`}<br/></p>
                            </div>
                            )        
                        })}
                        <h2 className="font-bold mr-2 pb-1 pt-1">Abilities:</h2>
                        {abilities.map((ab, index) => {
                            return <p className="pb-1" key={index}>{`•${ab.ability.name}`}</p>
                        })}
                    </div>
                </div>
    </>
    )

}


export default PokeCardDetail;