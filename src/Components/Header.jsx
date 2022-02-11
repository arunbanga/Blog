import React from 'react';
import {StyleHeader,Nav,} from './Styles/Header.style';
import {Container} from './Styles/Container.style';
import {Flex} from '../Components/Styles/Flex.style'
const Header=()=>{
    return(
        <>
        <StyleHeader>
        <Container>
            <Nav>
               <h3 style={{padding:'10px'}}>Blogs</h3> 
                <h3 style={{padding:'10px',color:'orange'}}>Work</h3>
                <h3 style={{padding:'10px'}}>Contact</h3>
            </Nav>
                <Flex>
                <div>
                 <h2>Designing Dashboards with <span style={{display:'block'}}>usability in mind</span></h2>
                </div>
                </Flex>
        </Container>
        
        </StyleHeader>
        </>
    )
}
export default Header;