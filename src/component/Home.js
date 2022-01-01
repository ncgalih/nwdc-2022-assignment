import Avatar from '../assets/avatar.png'

function Home(){
    return (
        <div className="flex flex-col px-6 pt-6 h-fit">
            <div className="flex flex-col">
                <h3 className="text-gray-600 text-lg">Hello, I am</h3>
                <h1 className="text-gray-800 text-xl mb-6">Nc Galih</h1>
            </div>
            <img src={Avatar} className='w-48 h-48 mx-auto mb-6'/>
            <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className='mr-0 ml-auto mb-0 mt-10 text-white bg-red-500 w-28 h-9 rounded-full'> 
                know more
            </button>
        </div>
    )
}

export default Home;