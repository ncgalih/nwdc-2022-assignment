import { Fade, Slide } from "react-awesome-reveal";

function Home({data, handleNext}){
    return (
        <div className="grid px-6 py-6 h-[93%]">
            <main className="flex flex-col md:flex-row md:space-x-16 my-auto md:px-12 lg:px-16">
                <img src={data.profile.src} alt={data.profile.alt} className='w-48 h-48 md:w-60 md:h-60 mx-auto'/>
                <div className="mt-8 md:my-auto">           
                    <div className="flex flex-col">
                        <Slide><h3 className="text-gray-600 text-lg">Hello, I am</h3></Slide>
                        <Fade><h1 className="text-gray-800 text-xl mb-6">{data.name}</h1></Fade>
                    </div>
                    <Fade delay={700}><p className="text-gray-700 text-base">{data.text}</p></Fade>
                </div> 
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