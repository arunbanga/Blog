
import About from './Components/About'
import Blog from './Components/Blog'
import {Routes,Route} from 'react-router-dom';
import Work from './Components/Work'
import Home from './Components/Home'
const App =()=>{

  return (
    
    <>
    <Blog/>
    
    <Routes>
     <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/work' element={<Work/>}/>

    </Routes>
    
    
    
    </>
  );
}

export default App;
