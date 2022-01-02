function Content({title, text}){
    return(
        <div className="grid min-h-[93%] px-6 py-6">
            <main>
                <h2 className="text-gray-900 text-xl mb-4">{title}</h2>
                <p className="text-gray-700">{text}</p>
            </main>
            <button className="mr-2 ml-auto mb-2 mt-auto text-white bg-red-600 hover:bg-red-700 w-16 h-9 rounded-full">
                next
            </button>
        </div>
    )
}
export default Content;