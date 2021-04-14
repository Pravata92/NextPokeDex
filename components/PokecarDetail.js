const PokeCard = ({name, img, paddedIndex, index}) =>{
    return(
        <div className="rounded box-content mx-auto border-2 bg-gray-100 border-black mb-4 overflow-hidden shadow-lg" style={{width: '100px'}}>
        
          <img className="w-full mx-auto" src={img} style={{width:'250px'}} alt="pokemon" />
        
      <div className="px-6 py-4 bg-yellow-200 flex-row text-center">
        <div className="font-bold text-xl mb-2 capitalize">
            {name}
        </div>
          <p className="text-gray-700 text-base">#{paddedIndex}</p>
      </div>
    </div>
    )

}


export default PokeCard;