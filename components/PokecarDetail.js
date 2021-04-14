const PokeCard = ({name, img, paddedIndex, index}) =>{
    return(
      <div className="rounded box-content mx-auto bg-gray-100 mb-4  shadow-lg" style={{width: '175px'}}>
        
          <img className="w-full mx-auto" src={img} style={{width:'250px'}} alt="pokemon" />

    </div>
    )

}


export default PokeCard;