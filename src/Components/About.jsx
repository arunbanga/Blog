import React from 'react';
import {StyleAbout,Nav,Images,} from './Styles/About.style';
import {Container} from './Styles/Container.style';
import {Flex} from '../Components/Styles/Flex.style';


const About=()=>{
    return(
        <>
        <StyleAbout>
        <Container>
            <Nav>
              
               <h3 style={{padding:'10px'}}>Blogs</h3> 
                <h3 style={{padding:'10px',color:'orange'}}>Work</h3>
                <h3 style={{padding:'10px'}}>Contact</h3>
            </Nav>
                <Flex>
                <div>
                 <h2>Designing Dashboards with <span style={{padding:'10px'}}><br/>usability in mind</span></h2>
                 <p style={{fontSize:'20px',paddingBottom:'5px'}}><span style={{background:'orange',color:'white',borderRadius:'40px',padding:'2px',marginRight:'5px',}}>2020 </span> Dashboard, User Experience Design.</p>
                 <p>Amet minim mollit non deserunt ullamco est sit aligua dolor do amet sint.Velit official<br/>
                 consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
               
                </div>
               
                </Flex>
                <Images src='https://xd.adobe.com/ideas/wp-content/uploads/2019/10/Creating-Interactions-An-Overview-of-UI-Header-1257x550.jpg' alt='sd'/>
                <Flex>
                <div>
                <h1>Heading 1 </h1>
                <h2>Heading 2</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit official<br/>
               consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
                </Flex>
                
                <Images src='https://f5-studio.com/wp-content/uploads/2018/07/ui-in-blog-e1577968131857.jpg' alt='dd'/>
                <Images src='https://lvivity.com/wp-content/uploads/2019/02/ui-testing.jpg' alt='ds'/>
               
                <Flex>
         
         <p>Copyright ©2020 All rights reserved</p>
        
         </Flex>
        </Container>
        
        </StyleAbout>
        </>
    )
}
export default About;