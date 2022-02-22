import React from 'react';
import { Container } from './Styles/Container.style';
import {Styledhed,Images} from '../Components/Styles/Home.style'

const Home=()=>{
    return(
        <>
       <Container width="100%">
        <Container width='100%'>
          <Styledhed width='500px'>
          <h1>Hi, I am John,<br/>Creative Technologist</h1>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet<br/>
          sint. Velit officia consequat duis enim velit mollit. Exercitation veniam<br/>
         consequat sunt nostrud amet.</p>
         <br/>
         <button className='btn'  style={{background:'orange',Color:'black',padding:'10px',border:'none'}}>Download Resume</button>
         </Styledhed>
          <Images src='https://crowdfavorite.com/wp-content/uploads/2020/04/web-design-integration-twitter.jpg' alt='sd'/>
          
          
         

        </Container>
       </Container>

        </>
    )
}
export default Home;