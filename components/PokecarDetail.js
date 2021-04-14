const PokeCard = ({name, img, paddedIndex, index}) =>{
    return(
        <div className="rounded box-content mx-auto bg-gray-100 mb-4 overflow-hidden shadow-lg" style={{width: '150px'}}>
        
          <img className="w-full mx-auto" src={img} style={{width:'250px'}} alt="pokemon" />
        
      <div className="px-6 py-4 bg-gray-400 flex-row text-center">
        <div className="font-bold text-xl mb-2 capitalize">
            {name}
        </div>
          <p className="text-black-700 font-bold text-base">#{paddedIndex}</p>
      </div>
    </div>
    )

}


export default PokeCard;