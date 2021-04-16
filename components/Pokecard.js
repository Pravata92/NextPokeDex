import Link from 'next/link'

const PokeCard = ({name, img, paddedIndex, id}) =>{
    return(
      <div className="rounded-lg grow shadow-5 box-content mx-auto bg-gray-100  mb-10  shadow-lg max-w-screen-md" >
        <Link href={`/pokemon?id=${id }`}>
          <img className="flex-wrap mx-auto" src={img} style={{width:'250px', cursor: "pointer"}} alt="Pokemon" />
        </Link>
        <div className="px-6 py-4 bg-gray-800 flex-row text-center">
          <div className="font-bold text-white text-xl mb-2 capitalize">
              {name}
          </div>
          <p className="text-white font text-base">#{paddedIndex}</p>
      </div>
    </div>
    )
  }


export default PokeCard;