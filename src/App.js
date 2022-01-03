import Navbar from './component/Navbar';
import Home from './component/Home';
import Content from './component/Content';
import { useState } from 'react'

const data = require('./content.json');

data.home.profile  = require('./assets/avatar.png');
data.techstack.img = [
  require('./assets/react_icon.png'),
  require('./assets/tailwind.png'),
  require('./assets/node_icon.png')
];

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
      case 0 : return(<Home    data={data.home}       handleNext={handleNav[1]} />)
      case 1 : return(<Content data={data.motivasi}   handleNext={handleNav[2]} />)
      case 2 : return(<Content data={data.ekspetasi}  handleNext={handleNav[3]} />)
      case 3 : return(<Content data={data.techstack}  handleNext={handleNav[0]} />)
      default: return null
    }
  }

  return (
    <div className='h-screen'>
      <Navbar activePage={page} handleNav={handleNav} />
      <Page />
    </div>
  );
}

export default App;
