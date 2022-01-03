function Content({data, handleNext}){
    const Icon = () => {
        if(data.img){
            return (<div className="mt-6 flex flex-col md:flex-row">
                    {data.img.map(img => <img src={img} alt="techstack" className="h-32 w-fit mx-auto md:mx-3 sm:h-36" />)}
                    </div>)
        } else return null
    }
    return(
        <div className="grid min-h-[93%] px-6 py-6">
            <main>
                <h2 className="text-gray-900 text-xl mb-4">{data.title}</h2>
                {data.text.map(text => <p className="text-gray-700 mb-2">{text}</p>)}
                <Icon />
            </main>
            <button 
                className="mr-2 ml-auto mb-2 mt-auto text-white bg-red-600 hover:bg-red-700 w-16 h-9 rounded-full"
                onClick={handleNext}>
                next
            </button>
        </div>
    )
}
export default Content;