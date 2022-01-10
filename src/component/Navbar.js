import {useState} from 'react';
import DarkMode from './DarkMode';

function Navbar({activePage, handleNav}){
    const [isOpen, setOpen] = useState(false);
    const handleMenu = () => {setOpen(!isOpen)}
    const Navlink = ({title, isActive, onClick}) => {
        return(
            <p  onClick={onClick} 
                className={`hover:text-red-500 ${isActive? "text-red-600":"text-gray-600"}`}>
                {title}
            </p>)
    }
    const NavGroup = () => {
        return(<>
            <Navlink title='Home'       isActive={activePage===0} onClick={handleNav[0]}/>
            <Navlink title='Motivasi'   isActive={activePage===1} onClick={handleNav[1]}/>
            <Navlink title='Ekspektasi' isActive={activePage===2} onClick={handleNav[2]}/>
            <Navlink title='TechStack'  isActive={activePage===3} onClick={handleNav[3]}/>
            </>)
    }
    const MenuBtn = () => {
        return (
            <button className="space-y-1 sm:hidden" onClick={handleMenu}>
                <span className="w-4 h-0.5 bg-gray-600 block"></span>
                <span className="w-4 h-0.5 bg-gray-600 block"></span>
                <span className="w-4 h-0.5 bg-gray-600 block"></span>
            </button>   )}

    return(
        <>
        <nav className="flex bg-white px-6 shadow justify-between h-[7%]">
            <p className="text-red-700 my-auto" onClick={handleNav[0]}>NcGalih</p>
            <div className='hidden sm:flex flex-row my-auto space-x-4'><NavGroup /></div>
            <div className='space-x-3 my-auto'>
            <DarkMode />       
            <MenuBtn />
            </div>
        </nav>
        
        <div className={isOpen? "" : "hidden"}>
        <div className="absolute grid bg-white w-full">
            <div className="grid grid-col mt-4 mb-6 space-y-3 text-center">
                <NavGroup />
            </div>
            <div className="mb-8 mt-auto flex justify-center">
                <button className="text-gray-500 mx-auto rounded-full h-8 w-8 mt-auto"
                        onClick={handleMenu}>X</button>
            </div>
        </div>
        </div>
        </>
    )
}

export default Navbar;