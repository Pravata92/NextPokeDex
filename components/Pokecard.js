import Link from 'next/link'

const PokeCard = ({name, img, paddedIndex, id}) =>{
    return(
        <div className="rounded box-content mx-auto border-2 bg-gray-100 border-black mb-4 overflow-hidden shadow-lg" style={{width: '250px'}}>
        <Link href={`/pokemon?id=${id }`}>
          <img className="w-full mx-auto" src={img} style={{width:'250px', cursor: "pointer"}} alt="Mountain" />
        </Link>
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