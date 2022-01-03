function Home({data, handleNext}){
    return (
        <div className="grid px-6 py-6 h-[93%]">
            <main>
                <div className="flex flex-col">
                    <h3 className="text-gray-600 text-lg">Hello, I am</h3>
                    <h1 className="text-gray-800 text-xl mb-6">{data.name}</h1>
                </div>
                <img src={data.profile} alt='profile' className='w-48 h-48 mx-auto mb-6'/>           
                <p className="text-gray-700 text-base">{data.text}</p>
            </main>
            <button 
                className='mr-2 ml-auto mb-2 mt-auto text-white bg-red-500 hover:bg-red-700 w-28 h-9 rounded-full'
                onClick={handleNext}> 
                know more
            </button>
        </div>
    )
}

export default Home;