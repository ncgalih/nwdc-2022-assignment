
function Home({profile, name, desc}){
    return (
        <div className="flex flex-col px-6 pt-6 h-fit">
            <div className="flex flex-col">
                <h3 className="text-gray-600 text-lg">Hello, I am</h3>
                <h1 className="text-gray-800 text-xl mb-6">{name}</h1>
            </div>
            <img src={profile} className='w-48 h-48 mx-auto mb-6'/>           
            <p className="text-gray-700 text-base">{desc}</p>

            <button className='mr-0 ml-auto mb-0 mt-10 text-white bg-red-500 w-28 h-9 rounded-full'> 
                know more
            </button>
        </div>
    )
}

export default Home;