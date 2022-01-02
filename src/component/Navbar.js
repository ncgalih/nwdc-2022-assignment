function Navbar({brand}){
    return(
        <nav className="flex bg-white px-6 shadow justify-between h-[7%]">
            <p className="text-red-700 my-auto">{brand}</p>
            <button className="space-y-1">
                <span className="w-4 h-0.5 bg-gray-600 block"></span>
                <span className="w-4 h-0.5 bg-gray-600 block"></span>
                <span className="w-4 h-0.5 bg-gray-600 block"></span>
            </button>
        </nav>
    )
}

export default Navbar;