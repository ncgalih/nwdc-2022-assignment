import { useState, useEffect } from 'react';
import { ReactComponent as DarkIcon } from '../assets/dark_icon.svg';

function DarkMode () {
    const [dark, setDark] = useState(false);
    useEffect(() => {
        const theme = document.querySelector('html').classList;
        dark
        ? theme.add('dark') 
        : theme.remove('dark')
    }, [dark])
    return (
        <button className='p-1 group hover:bg-red-500 rounded-full' onClick={()=>setDark(!dark)}>
            <DarkIcon className="h-4 w-4 fill-gray-600 dark:fill-gray-400 group-hover:fill-white"  />
        </button>
    )
}

export default DarkMode;