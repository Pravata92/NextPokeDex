import tachyons from 'tachyons'
import Link from 'next/link'
const Header = () =>{
    return (
        <nav className=" flex bg-gray-900 shadow-2xl ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
              <div className="container mx-auto w-auto py-8">
                <div className="inline-flex"> 
                <Link href="/">
                <img  className="p-5 grow shadow-2xl" src="/pokeball-2.png" width={"90px"}/>
                </Link>
                </div>
              </div>
          </div>
        </div>
      </nav>
    )
}

export default Header