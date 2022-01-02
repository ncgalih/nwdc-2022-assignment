import Navbar from './component/Navbar';
import Home from './component/Home';
import Content from './component/Content';
import { useState } from 'react'

const data = {
  home: {
    name: "Nc Galih",
    profile: require('./assets/avatar.png'),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  motivasi: {
    title: "Motivasi",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  ekspetasi: {
    title: "Ekspektasi",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
}

function App() {
  const [page, setPage] = useState(0);
  const handleNav = [
    () => {setPage(0)},
    () => {setPage(1)},
    () => {setPage(2)},
    () => {setPage(3)},
  ]
  const Page = () => {
    switch(page){
      case 0 : return(<Home data={data.home}  handleNext={handleNav[1]} />)
      case 1 : return(<Content data={data.motivasi} handleNext={handleNav[2]} />)
      case 2 : return(<Content data={data.ekspetasi} handleNext={handleNav[0]} />)
    }
  }

  return (
    <div className='h-screen'>
      <Navbar brand="NcGalih" activePage={page} handleNav={handleNav} />
      <Page />
    </div>
  );
}

export default App;
