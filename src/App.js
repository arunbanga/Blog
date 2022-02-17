import {Container} from './Components/Styles/Container.style'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {ThemeProvider} from 'styled-components'
const theme={
  mobile:'768px',
}
const App =()=>{

  return (
    
    <>
    <ThemeProvider theme={theme}>
    <Header/>
    <Container>
    
     
    </Container>
    <Footer/>
    </ThemeProvider>
    </>
  );
}

export default App;
