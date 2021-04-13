const Header = () =>{
    return (
        <nav className=" flex bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="">
              <div className="container mx-auto py-8">
                <div className="">
                  <a href="#" className="bg-gray-900 mx-auto text-white px-3 py-2 rounded-md text-sm font-medium">Next.js PokeDex by Juan Pravata</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Header