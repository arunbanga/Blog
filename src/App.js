
import Blog from './Components/Blog'
import Menu from './Components/Menu'
import {Routes,Route} from 'react-router-dom';
import Work from './Components/Work'
import Home from './Components/Home'
const App =()=>{

  return (
    
    <>
    <Menu/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<Blog/>}/>
      <Route path='/work' element={<Work/>}/>

    </Routes>
    
    
    
    </>
  );
}

export default App;
