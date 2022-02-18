import {Container} from './Components/Styles/Container.style'
import About from './Components/About'

import {ThemeProvider} from 'styled-components'
const theme={
  mobile:'800px',
  
}



const App =()=>{

  return (
    
    <>
    <ThemeProvider theme={theme}>
    <About/>
    <Container>
    
     
    </Container>
    
    </ThemeProvider>
    </>
  );
}

export default App;
