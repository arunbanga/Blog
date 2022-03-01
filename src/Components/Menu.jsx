import React from 'react';
import {Container} from './Styles/Container.style';
import {Nav} from './Styles/Blog.style';

const Menu =()=>{
    return(
        <>
        
        <Container width='100%'> 
         <Nav>
                      <h3 style={{ padding: '10px' }}><a style={{color:'black',textDecoration:'none'}} href='/about'>Blogs</a></h3>
                       <h3 style={{ padding: '10px', color: 'orange' }}><a style={{color:'black',textDecoration:'none'}} href='/work'>Work</a></h3>
                       <h3 style={{ padding: '10px' }}>Contact</h3>
                       
                   </Nav>
         
         
        </Container>
        
        </>
    )
}
export default Menu;