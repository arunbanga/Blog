import React from 'react';
import {StyleBlog,Images} from '../Components/Styles/Blog.style'
import { Container } from './Styles/Container.style';
import styled from 'styled-components';
import { deviceMax,device } from "../utils/device.js";

const Blog = () => {
    return (
        <>
            <StyleBlog>
                <Container width="100%">
                    
                    {/* <Flex> */}
                <Container width="100%" display="flex" flexDirection="column" alignItems="center">
              <BlogInfo>
              <h2>Designing Dashboards with <span style={{ padding: '10px' }}><br />usability in mind</span></h2>
               <p style={{ fontSize: '20px', paddingBottom: '5px' }}><span style={{ background: 'orange', color: 'white', borderRadius: '40px', padding: '2px', marginRight: '5px', }}>2020 </span> Dashboard, User Experience Design.</p>
              <p>Amet minim mollit non deserunt ullamco est sit aligua dolor do amet sint.Velit official<br />
              consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
             <Images src='https://xd.adobe.com/ideas/wp-content/uploads/2019/10/Creating-Interactions-An-Overview-of-UI-Header-1257x550.jpg' alt='sd' />
            <h1>Heading 1 </h1>
            <h2>Heading 2</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit official<br/>
           consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
           <Images src='https://f5-studio.com/wp-content/uploads/2018/07/ui-in-blog-e1577968131857.jpg' alt='dd'/>
         <Images src='https://lvivity.com/wp-content/uploads/2019/02/ui-testing.jpg' alt='ds'/>
         <p style={{textAlign:'center'}}>Copyright ©2020 All rights reserved</p> 
            </BlogInfo>
            </Container>
         </Container>
         
            </StyleBlog>
        </>
    )
}

const BlogInfo = styled.div`
  width:500px;

  @media ${deviceMax.mobileL} {
    width: 80%;
  }
  @media ${device.mobileL} and ${deviceMax.tablet}{
    width: 90%;
  }
 
`
export default Blog;